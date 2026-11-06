'use strict';

const benchmarkInputs = [
  {key: 'users', name: 'Привлеченные пользователи', unit: 'чел.', step: 1, cell: 'B4', value: 100000},
  {key: 'cpc', name: 'Стоимость привлечения (CPC)', unit: '₽', step: 0.01, cell: 'D4', value: 11.74},
  {key: 'check', name: 'Средний чек заказа', unit: '₽', step: 1, cell: 'E4', value: 4876},
  {key: 'fee', name: 'Комиссия сервиса', unit: '%', step: 0.1, cell: 'F4', value: 8},
  {key: 'frequency', name: 'Транзакций на покупателя', unit: 'шт.', step: 0.01, cell: 'G4', value: 1.13},
  {key: 'conversion', name: 'Конверсия в первую покупку', unit: '%', step: 0.01, cell: 'J4', value: 2.26},
];

const pilotInputs = [
  {key: 'acquiring', name: 'Эквайринг от оборота', unit: '%', step: 0.1, value: 1.2},
  {key: 'cashback', name: 'Кешбэк за счет банка', unit: '%', step: 0.1, value: 2},
  {key: 'support', name: 'Операционные расходы на заказ', unit: '₽', step: 1, value: 15},
  {key: 'fixed', name: 'Фиксированные расходы за период', unit: '₽', step: 1, value: 3300000},
];

const defaultsFor = fields => Object.fromEntries(fields.map(field => [field.key, field.value]));
const rangeMaximum = field => field.value * 2;
const launchPresets = {
  base: {label: 'Базовый сценарий', assumptions: defaultsFor(benchmarkInputs)},
  pilot: {label: 'Пилот · 90 дней', assumptions: {users: 100000, cpc: 5, check: 2500, fee: 9, frequency: 1.3, conversion: 8}},
  stress: {label: 'Стресс · 90 дней', assumptions: {users: 100000, cpc: 7, check: 2000, fee: 7, frequency: 1.1, conversion: 5}},
};

const divide = (numerator, denominator) => denominator === 0 ? null : numerator / denominator;

function countWholeTransactions({users, conversion, frequency}) {
  // Use decimal digits so binary floating point cannot drop a whole transaction.
  let product = 1n;
  let decimals = 2; // Conversion is entered as a percentage.
  for (const factor of [users, conversion, frequency]) {
    const [mantissa, exponent = '0'] = String(factor).split('e');
    const [whole, fraction = ''] = mantissa.split('.');
    product *= BigInt(whole + fraction);
    decimals += fraction.length - Number(exponent);
  }
  const scale = 10n ** BigInt(Math.abs(decimals));
  return Number(decimals < 0 ? product * scale : product / scale);
}

function calculateLaunchUnit(inputs) {
  const conversion = inputs.conversion / 100;
  const fee = inputs.fee / 100;
  const buyers = inputs.users * conversion;
  const transactions = countWholeTransactions(inputs);
  const gmv = transactions * inputs.check;
  const revenue = gmv * fee;
  const arppu = divide(revenue, buyers);
  const expectedArppu = inputs.check * fee * inputs.frequency;
  const ac = inputs.users * inputs.cpc;
  const contribution = revenue - ac;
  return {
    buyers, transactions, gmv, arppu, revenue, ac, contribution,
    arpu: divide(revenue, inputs.users),
    cac: divide(ac, buyers),
    romi: divide(contribution, ac),
    breakEvenConversion: divide(inputs.cpc, expectedArppu),
  };
}

function calculateLaunchPilot(unit, inputs, costs) {
  const acquiring = unit.gmv * costs.acquiring / 100;
  const cashback = unit.gmv * costs.cashback / 100;
  const support = unit.transactions * costs.support;
  const variable = acquiring + cashback + support;
  const contribution = unit.contribution - variable;
  const perUser = divide(contribution, inputs.users);
  return {
    acquiring, cashback, support, variable, contribution,
    result: contribution - costs.fixed,
    breakEvenUsers: perUser > 0 ? Math.ceil(costs.fixed / perUser) : null,
    breakEvenFee: divide(unit.ac + variable + costs.fixed, unit.gmv),
  };
}
