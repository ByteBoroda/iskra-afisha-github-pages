'use strict';

const launchTabs = [
  ['obzor', 'Обзор'],
  ['vendory', 'Вендоры'],
  ['roadmap', 'Роадмап'],
  ['economy', 'Unit экономика'],
];

const launchLinks = {
  tbank: 'https://www.tbank.ru/gorod/',
  marketOrder: 'https://www.rma.ru/news/2025-06-19-za-chetyre-dnya-iyunskih-prazdnikov-rossiyane-potratili-na-bilety-na-contserty-350-millionov-rubley/',
  mobileConversion: 'https://www.culturehive.co.uk/wp-content/uploads/2024/11/Benchmarking-Report-2024_DIGITAL-1.pdf#page=63',
  marketCpc: 'https://rdk.digital/case/pomogli-prodat-1700-biletov-za-mesjats-sold-aut-v-ritme-dzhaza-dlja-kontserta?industry=culture&service=context_ads',
  marketVisits: 'https://www.m24.ru/news/01112025/843565',
  tcOffer: 'https://ticketscloud.com/static/docs/t-bank_customer_rule.pdf',
  tcApi: 'https://doc.ticketscloud.org/ru/latest/index.html',
  tcContact: 'https://ticketscloud.com/about-us',
  tcContract: 'https://ticketscloud.com/documents',
  kassirOffer: 'https://nabchelny.kassir.ru/pages/oferta-tinkoff',
  kassirContact: 'https://msk.kassir.ru/contacts',
  mtsMedia: 'https://www.ticketland.ru/files/mediakit2025.pdf#page=12',
  mtsAffiliate: 'https://affiliates.ticketland.ru/',
  mtsContact: 'https://www.ticketland.ru/landing/partnership/',
  alfaOffer: 'https://alfabank.servicecdn.ru/site-upload/6a/ce/1007/alfa_afisha_pyatnitca.pdf',
  alfaProduct: 'https://alfabank.ru/retail/afisha/',
  sberOffer: 'https://www.afisha.ru/article/pravila-akcii-keshbek-15-na-afishe-so-sberpraym/',
  vtbNews: 'https://bankinform.ru/news/142804',
  yandexWidget: 'https://yandex.ru/support/afisha-partners/ru/sell-my-site/not-my-tickets/widget',
  afishaWidget: 'https://www.afisha.ru/article/advertising/',
  theatre: 'https://www.teatr-estrada.ru/contacts',
  hall: 'https://www.msk-live-hall.mts.ru/contacts',
  acqApi: 'https://developer.tbank.ru/eacq/api',
  tax: 'https://www.nalog.gov.ru/rn64/news/activities_fts/16514564/',
  returns: 'https://www.consultant.ru/document/cons_doc_LAW_1870/d55b86da3738c083ec198a9f9a700bf326007607/',
  privacy: 'https://mintrud.gov.ru/docs/laws/130',
};

const launchSource = (key, label) => `<a class="launch-source" href="${launchLinks[key]}" target="_blank" rel="noopener noreferrer">${label} ${icon('external')}</a>`;
const launchSources = items => `<div class="launch-sources">${items.map(([key, label]) => launchSource(key, label)).join('')}</div>`;
const launchHeading = (title, text = '') => `<header class="launch-section-head"><h2>${title}</h2>${text ? `<p>${text}</p>` : ''}</header>`;
const launchLink = (id, text) => `<a class="text-link" href="#/zapusk/${id}">${text} ${icon('arrow')}</a>`;

function launchOverview() {
  return `<section class="launch-hero">
    <div class="launch-hero-copy">
      <span class="launch-hero-tag">Рекомендация по запуску</span>
      <h2>Начать с Москвы и одного билетного оператора</h2>
      <p>Сравнить Ticketscloud, KASSIR.RU и МТС Live / Ticketland. Начать с Ticketscloud: у сервиса есть документация API для распространителей и публичная оферта для приложения Т‑Банка. Перед выбором проверить доступные места, условия сделки и возврат билетов.</p>
      <a class="btn hero-cta" href="#/zapusk/vendory">Сравнить вендоров ${icon('arrow')}</a>
    </div>
    <dl class="launch-hero-stats">
      <div><dt>Вайб-код · партнерский пилот</dt><dd>8 недель · 1,2 млн ₽</dd></div>
      <div><dt>Команда с LLM · пилот в банке</dt><dd>≈14 недель · 9,3 млн ₽</dd></div>
      <div><dt>Первый каталог</dt><dd>Москва · театр и концерты</dd></div>
    </dl>
  </section>
  <div class="launch-grid launch-grid-three">
    <article class="panel launch-card"><span class="launch-kicker">01 / Рынок</span><h2>Кто поставляет билеты</h2><p>По офертам и правилам акций видно, как банки продают билеты через WebView партнера и как собирают каталог из нескольких источников.</p>${launchLink('vendory', 'Открыть исследование')}</article>
    <article class="panel launch-card"><span class="launch-kicker">02 / Реализация</span><h2>Как дойти до пилота</h2><p>Два стрима на доске Ганта, контакты и условия перехода от теста к запуску.</p>${launchLink('roadmap', 'Открыть роадмап')}</article>
    <article class="panel launch-card"><span class="launch-kicker">03 / Экономика</span><h2>Когда пилот окупится</h2><p>Исходная модель из Excel, сценарий пилота на 90 дней и точка безубыточности с учетом операционных затрат.</p>${launchLink('economy', 'Открыть Unit экономику')}</article>
  </div>
  <aside class="launch-callout"><strong>Решение по пилоту</strong><p>В сценарии «Пилот» на 100 тыс. привлеченных посетителей вклад после маркетинга и переменных затрат составляет <b>+852 тыс. ₽</b>. После фиксированных расходов за 90 дней результат составляет <b>−2,448 млн ₽</b>. Полный запуск имеет смысл после проверки конверсии, комиссии и объема доступного трафика.</p></aside>`;
}

const bankExamples = [
  {name: 'Т‑Банк · Город Афиша', status: 'Подтверждены несколько поставщиков', text: 'Ticketscloud указан как сторона оферты покупателя в приложении. У KASSIR.RU есть отдельная оферта для заказов в приложении банка. Медиакит МТС Live / Ticketland указывает «Город Афиша» как канал продажи билетов на отдельные события. Точный список активных поставщиков и доли заказов публично не раскрыты.', sources: [['tcOffer', 'Оферта Ticketscloud'], ['kassirOffer', 'Оферта KASSIR.RU'], ['mtsMedia', 'Медиакит, с. 12']]},
  {name: 'Альфа‑Банк · Альфа‑Афиша', status: 'KASSIR.RU подтвержден на время акции', text: 'В правилах акции декабря 2024 - января 2025 сервис описан как WebView сайта KASSIR.RU внутри банка. Текущая страница подтверждает продукт. Состав всех поставщиков на дату исследования из этой акции вывести нельзя.', sources: [['alfaOffer', 'Правила акции'], ['alfaProduct', 'Страница продукта']]},
  {name: 'Сбер · Для жизни', status: 'Afisha.ru подтвержден как партнер акции', text: 'Правила описывают переход из раздела «Для жизни» в торговую точку Afisha.ru с авторизацией через Сбер ID. Эта акция подтверждает, что банк направлял покупателей на сайт партнера.', sources: [['sberOffer', 'Правила акции, п. 5.2']]},
  {name: 'ВТБ · Афиша', status: 'Вендор не установлен', text: 'В августе 2026 банк запустил витрину в «Живи с ВТБ». Публикация со ссылкой на пресс-службу описывает категории и покупки в онлайн-банке. Билетного поставщика она не называет.', sources: [['vtbNews', 'Сообщение о запуске']]},
];

const vendorCandidates = [
  {name: 'Ticketscloud', decision: '01 · Основной кандидат', role: 'API для покупки внутри банка', what: 'Открытая документация для распространителей описывает каталог, резерв места, смену статуса заказа, отправку билетов и возвраты.', test: 'Запросить каталог событий в Москве на 60 дней, права на контент, доступ к песочнице, схемы залов, квоты и расчет на этом ассортименте.', sources: [['tcApi', 'Документация API'], ['tcContract', 'Договоры'], ['tcContact', 'Контакты']]},
  {name: 'KASSIR.RU', decision: '02 · Параллельный отбор', role: 'Встроенный WebView или второй каталог', what: 'Есть публичный банковский кейс WebView и оферта для заказов из Т‑Банка. Подходит для проверки быстрого запуска и покрытия массовых событий.', test: 'Запросить два предложения: API и WebView с передачей статусов заказа в банк. Сравнить чистую комиссию и уникальные сеансы с Ticketscloud.', sources: [['alfaOffer', 'Кейс WebView'], ['kassirContact', 'Партнерства в Москве']]},
  {name: 'МТС Live / Ticketland', decision: '03 · Параллельный отбор', role: 'Концерты, театр и региональное расширение', what: 'Есть кейс «Города» и отдельная партнерская программа. Публичное вознаграждение до 10% относится к условиям этой программы.', test: 'Отдельно запросить B2B API или встроенную покупку, права на размещение, комиссию по категориям и выгрузку доступного инвентаря.', sources: [['mtsMedia', 'Банковский кейс'], ['mtsAffiliate', 'Партнерская программа'], ['mtsContact', 'Контакты']]},
  {name: 'Яндекс Афиша', decision: 'Резерв · Встроенный виджет', role: 'Проверка спроса и дополнительное покрытие', what: 'Открыто описан виджет с разделением дохода. Формат и условия под банковскую витрину требуют отдельного согласования.', test: 'Проверить доступность подключения, атрибуцию, возможность вернуть клиента в банк и доступ к статусам заказов.', sources: [['yandexWidget', 'Документация виджета']]},
  {name: 'Afisha.ru', decision: 'Резерв · Партнерская воронка', role: 'Запуск через виджет или переадресацию', what: 'Публично описаны встраиваемый билетный виджет и сценарий партнерства со Сбером.', test: 'Уточнить SLA данных, отчеты по заказам и возвратам, выплаты и ограничения на использование бренда.', sources: [['afishaWidget', 'Билетный виджет'], ['sberOffer', 'Кейс Сбера']]},
];

function launchVendors() {
  return `<section>
    ${launchHeading('Кто поставляет билеты банкам', 'Срез открытых источников на 6 ноября 2026 года. Оферта подтверждает роль партнера в указанном сценарии.')}
    <div class="launch-grid launch-grid-two">
      ${bankExamples.map(bank => `<article class="panel launch-card"><span class="launch-kicker">${bank.status}</span><h3>${bank.name}</h3><p>${bank.text}</p>${launchSources(bank.sources)}</article>`).join('')}
    </div>
  </section>
  <section>
    ${launchHeading('С кем интегрироваться', 'WebView позволяет проверить спрос с покупкой у оператора. API нужен, чтобы оформить заказ в интерфейсе банка.')}
    <div class="launch-vendor-list">
      ${vendorCandidates.map(vendor => `<article class="panel launch-vendor"><div><span class="launch-kicker">${vendor.decision}</span><h3>${vendor.name}</h3><p>${vendor.role}</p></div><div><p><b>Что известно.</b> ${vendor.what}</p><p><b>Что проверяем.</b> ${vendor.test}</p>${launchSources(vendor.sources)}</div></article>`).join('')}
    </div>
  </section>
  <section>
    ${launchHeading('Как выбрать по итогам переговоров', 'Ставки по прямым контрактам и качество доступного инвентаря нужно получить в коммерческих предложениях.')}
    <div class="launch-grid launch-grid-two">
      <article class="panel launch-card"><h3>Единый запрос трем поставщикам</h3><ul class="launch-list"><li>100 приоритетных событий Москвы и список сеансов на 60 дней. Сравниваем реально доступные места, цены, дубли и права на размещение.</li><li>Считаем чистое вознаграждение банка по категориям с учетом скидок, возвратов, эквайринга, минимальных гарантий и разовых платежей.</li><li>Просим тестовый доступ и проверяем пять сценариев: обычный заказ, истечение брони, повторный запрос, отмена события и возврат.</li><li>Фиксируем получателя оплаты, владельца чека и возврата, сверку, время реакции L2, сроки расчетов и требования к данным.</li></ul></article>
      <article class="panel launch-card"><h3>Правило выбора</h3><ul class="launch-list"><li>Обязательны доступ к инвентарю, сквозной резерв и возврат, отчет по заказам и отсутствие эксклюзивности в пилоте.</li><li>После этого взвешиваем маржу после переменных затрат (35%), уникальный доступный каталог (30%), надежность заказа и SLA (25%), срок и стоимость интеграции (10%).</li><li>При близких оценках выбираем того, кто быстрее проходит тестовое резервирование, выпуск билета и возврат.</li><li>9% комиссии в калькуляторе - допущение. При объеме пилота для операционной безубыточности потребуется около 18,4% при прочих равных. Поэтому сравниваем и стоимость масштабирования.</li></ul>${launchLink('economy', 'Проверить ставку в калькуляторе')}</article>
    </div>
  </section>`;
}

function launchRoadmap() {
  return `${launchGantt()}
  <section>
    ${launchHeading('С кем связаться', 'Команда партнерств банка обращается к поставщикам первой. В письме указывает размер доступной аудитории, состав MVP, ссылку на демо и обязательные сценарии. Затем предлагает встречу с коммерческой и технической командами.')}
    <div class="launch-grid launch-grid-two">
      <article class="panel launch-card"><h3>Билетные поставщики</h3><ul class="launch-list"><li><b>Ticketscloud</b> · info@ticketscloud.com. Попросить руководителя дистрибуции и инженера API. ${launchSource('tcContact', 'Контакт')}</li><li><b>KASSIR.RU</b> · cooperation@kassir.ru. Выйти на команду партнерств в Москве и владельца банковских интеграций. ${launchSource('kassirContact', 'Контакт')}</li><li><b>МТС Live / Ticketland</b> · partnership_ticketland@mts.ru. Попросить перевод на B2B-дистрибуцию или партнерские витрины. ${launchSource('mtsContact', 'Контакт')}</li></ul></article>
      <article class="panel launch-card"><h3>Площадки и организаторы</h3><ul class="launch-list"><li><b>Театр Эстрады</b> · teatr-estrady@culture.mos.ru. Через администрацию выйти на кассу и уполномоченного продавца. Запросить подборку регулярных спектаклей, доступные квоты и правила переноса. ${launchSource('theatre', 'Контакт')}</li><li><b>МТС Live Холл Москва</b> · dvutkina@mts.ru. Через коммерческие партнерства выйти на промоутеров 2–3 концертов. Запросить пресейл, квоты и права на материалы. ${launchSource('hall', 'Контакт')}</li><li>На пилоте квоты заводим через выбранного оператора. Прямой договор и отдельный API нужны только там, где есть уникальный объем и измеримая прибавка к марже.</li></ul></article>
    </div>
  </section>
  <section>
    ${launchHeading('Что интегрировать', 'При вайб-коде покупатель переходит с витрины банка к оформлению заказа у оператора. При разработке командой заказ оформляется через сервис банка и адаптер поставщика.') }
    <div class="launch-grid launch-grid-two">
      <article class="panel launch-card"><span class="launch-kicker">01 / Каталог</span><h3>Оператор и организаторы</h3><p>Импортируем события, сеансы, схемы, цены, ограничения и доступные места. Храним ID поставщика и канонический ID события. При втором источнике объединяем дубли по организатору, площадке и времени, а цену и остатки подтверждаем у выбранного поставщика.</p></article>
      <article class="panel launch-card"><span class="launch-kicker">02 / Покупка</span><h3>Резерв и банковский эквайринг</h3><p>В пилоте оператор принимает оплату за билеты по согласованной модели, банк дает интерфейс и подключает действующий эквайринг к терминалу оператора. Порядок авторизации, выпуска и списания фиксируем на тестовом заказе. При сбое снимаем авторизацию или запускаем возврат, если списание уже прошло.</p>${launchSources([['acqApi', 'Референс API эквайринга'], ['tcApi', 'Резерв и статусы Ticketscloud']])}</article>
      <article class="panel launch-card"><span class="launch-kicker">03 / После оплаты</span><h3>Билет, поддержка и возврат</h3><p>Подтверждаем заказ по статусам платежа и выпуска. Оператор формирует билет, банк показывает его в «Моих билетах». Единый ID заказа связывает платеж, билет и сверку. Банк принимает обращения L1, оператор разбирает инвентарь и возвраты L2. Отдельно согласуем повторную доставку и массовую отмену.</p>${launchSources([['returns', 'Правила для театров и музеев']])}</article>
      <article class="panel launch-card"><span class="launch-kicker">04 / Контроль</span><h3>Фискализация, данные и сверка</h3><p>До беты юристы и финансы подтверждают, кто выдает чек продажи и возврата и как заполняются реквизиты агентской схемы. Согласуем роли и основания обработки данных, минимальный набор полей и сроки хранения. Вебхуки проверяем, повторы обрабатываем идемпотентно. Ежедневно сверяем банк, поставщика и расчеты.</p>${launchSources([['tax', 'ФНС о чеках агента'], ['privacy', '152‑ФЗ']])}</article>
    </div>
  </section>
  <section>
    ${launchHeading('Команда и деньги', 'Оценка до первого решения по пилоту. Варианты можно вести параллельно или использовать прототип для проверки спроса перед разработкой.') }
    <div class="launch-grid launch-grid-two">
      <article class="panel launch-card"><span class="launch-kicker">Вайб-код · партнерский пилот</span><h3>1,75 FTE · 1,2 млн ₽</h3><dl class="launch-data-list"><div><dt>Продакт / разработчик с LLM</dt><dd>0,75 / 0,5</dd></div><div><dt>Дизайн и QA / BD и ИБ</dt><dd>0,25 / 0,25</dd></div><div><dt>Люди / инструменты / запуск</dt><dd>0,9 / 0,1 / 0,2 млн ₽</dd></div></dl><p>4 недели до проверенного прототипа, около 8 недель до решения по партнерскому пилоту. Бюджет без медиазакупки. Для реальной оплаты нужен договор с оператором и допуск банка.</p></article>
      <article class="panel launch-card"><span class="launch-kicker">Команда · оформление в банке</span><h3>7,25 FTE · около 9,3 млн ₽</h3><dl class="launch-data-list"><div><dt>Продакт / партнерства</dt><dd>1 / 0,5</dd></div><div><dt>Дизайн / аналитика</dt><dd>0,5 / 0,5</dd></div><div><dt>Бэкенд / мобильная разработка</dt><dd>2 / 1</dd></div><div><dt>QA / поддержка</dt><dd>0,75 / 0,25</dd></div><div><dt>Платежи, ИБ, юристы, финансы</dt><dd>0,75 суммарно</dd></div></dl><p>План без LLM - 9,6 млн ₽. Экономия около 0,42 млн ₽ на 2,1 недели работы трех разработчиков по 270 тыс. ₽ за 4 недели на человека. Добавляем 0,1 млн ₽ на LLM и округляем. В бюджете есть 0,5 млн ₽ на привлечение, этот же расход учтен в AC сценария «Пилот».</p></article>
    </div>
    <aside class="launch-callout"><strong>Что измеряем</strong><p>Главная метрика - оплаченные заказы с выданным билетом в неделю. Отдельно смотрим конверсию в первую покупку, повторы, вклад на посетителя, возвраты и эффект на активность клиентов относительно контрольной группы. Решение о масштабировании принимаем после 90 дней с начала продаж и оценки операционной безубыточности.</p></aside>
    ${launchLink('economy', 'Открыть экономику пилота')}
  </section>`;
}

const launchCalcState = {preset: 'base', inputs: {...launchPresets.base.assumptions}, costs: defaultsFor(pilotInputs)};

const launchNumber = new Intl.NumberFormat('ru-RU', {maximumFractionDigits: 2});
const launchNum = value => Number.isFinite(value) ? launchNumber.format(value) : '-';
const launchRub = value => Number.isFinite(value) ? `${launchNum(value)} ₽` : '-';
const launchPct = value => Number.isFinite(value * 100) && value != null ? `${launchNum(value * 100)}%` : '-';

function launchControl(field, group) {
  const value = launchCalcState[group][field.key];
  const max = rangeMaximum(field);
  const id = `launch-${field.key}`;
  return `<div class="launch-control">
    <label for="${id}">${field.name}${field.cell ? `<small>${field.cell}</small>` : ''}</label>
    <div class="launch-control-fields">
      <input type="range" data-calc-group="${group}" data-calc-key="${field.key}" aria-label="${field.name}, ползунок" min="0" max="${max}" step="${field.step}" value="${Math.min(value,max)}">
      <span class="launch-number"><input id="${id}" type="number" data-calc-group="${group}" data-calc-key="${field.key}" min="0" step="any" value="${value}" inputmode="decimal"><span>${field.unit}</span></span>
    </div>
    <div class="launch-range-caption"><span>0–${launchNum(max)} ${field.unit}</span><span data-calc-outside="${field.key}" ${value > max ? '' : 'hidden'}>Введено вне диапазона ползунка</span></div>
  </div>`;
}

const launchBenchmarks = [
  {key: 'check', type: 'Рынок РФ · заказ', detail: 'Средний чек заказа на Яндекс Афише за 12–15 июня 2025 года. Срез праздничного спроса.', source: ['marketOrder', 'Яндекс Афиша через RMA']},
  {key: 'conversion', type: 'Международный прокси', detail: 'Мобильная конверсия сайтов культурных организаций в покупку билета. В модели используем как приближение конверсии первого визита в заказ.', source: ['mobileConversion', 'Digital Benchmarking Report 2024']},
  {key: 'cpc', type: 'Российский кейс · прокси', detail: 'Цена клика в РСЯ в кейсе концерта Игоря Бутмана, 2023. Для оценки принимаем один оплаченный клик за одного привлеченного пользователя.', source: ['marketCpc', 'Кейс Darvin Digital']},
  {key: 'fee', type: 'Допущение по сделке', detail: '8% - рабочая ставка для модели. МТС Live / Ticketland публично указывают до 10% по партнерской программе. Фактическая доля банка зависит от договора.', source: ['mtsAffiliate', 'Условия партнерской программы']},
  {key: 'frequency', type: 'Прокси частоты · 90 дней', detail: '4,6 посещения в год × 90 ÷ 365 ≈ 1,13. Опрос АЦ ВЦИОМ / ГИТИС о посещениях театров и кино служит ориентиром для оценки частоты заказов.', source: ['marketVisits', 'Результаты опроса АЦ ВЦИОМ / ГИТИС']},
  {key: 'users', type: 'Масштаб модели', detail: 'Иллюстративная 90-дневная когорта для сравнения сценариев. Реальный объем зависит от доступной аудитории банка и охвата размещения.'},
];

function launchBenchmarkNotes() {
  return `<details class="panel launch-details">
    <summary>Откуда взяты цифры базового сценария</summary>
    <div class="launch-grid launch-grid-two launch-benchmarks">
      ${launchBenchmarks.map(row => {
        const field = benchmarkInputs.find(input => input.key === row.key);
        return `<article class="launch-benchmark"><span class="launch-kicker">${row.type}</span><h3>${field.name} · ${launchNum(field.value)} ${field.unit}</h3><p>${row.detail}</p>${row.source ? launchSource(...row.source) : ''}</article>`;
      }).join('')}
    </div>
  </details>`;
}

const launchResult = (key, title, className = '') => `<div class="${className}"><dt>${title}</dt><dd data-calc-value="${key}">-</dd></div>`;
const launchFormulaRows = [
  ['C4', 'Покупатели', 'UA × C1'],
  ['K4', 'ARPPU', 'Комиссионный доход ÷ покупатели'],
  ['L4', 'ARPU', 'Комиссионный доход ÷ UA'],
  ['M4', 'CAC', 'UA × CPC ÷ покупатели'],
  ['N4', 'AC', 'UA × CPC'],
  ['H4', 'Результат когорты', 'Комиссионный доход − AC'],
  ['I4', 'ROMI', 'Результат когорты ÷ AC, в процентах'],
];

function launchEconomy() {
  return `<section id="launch-calculator">
    ${launchHeading('Unit экономика', 'Меняйте параметры ползунками или вводите свои числа. Показатели обновляются сразу.')}
    <div class="launch-presets" role="group" aria-label="Сценарии">
      ${Object.entries(launchPresets).map(([id, preset]) => `<button class="pill" type="button" data-calc-preset="${id}" aria-pressed="${id === launchCalcState.preset}">${preset.label}</button>`).join('')}
      <button type="button" class="text-link launch-reset" data-calc-reset>Сбросить</button>
    </div>
    <p class="launch-calc-context">Базовый сценарий использует отраслевые ориентиры и допущения на 90 дней. Ползунки охватывают от 0 до 200% базового значения. Вручную можно ввести число выше диапазона ползунка.</p>
    <p class="launch-calc-warning" id="launch-calc-warning" role="status" hidden>Введенная доля выше 100%. Калькулятор показывает результат, но такой сценарий неприменим на практике.</p>
    <dl class="launch-kpis">${launchResult('contribution', 'Доход минус маркетинг · H4', 'launch-kpi launch-kpi-main')}${launchResult('romi', 'ROMI · I4', 'launch-kpi')}${launchResult('pilotResult', 'Операционный результат пилота', 'launch-kpi launch-kpi-pilot')}</dl>
    <div class="launch-calc-grid">
      <section class="panel launch-calc-controls"><h3>Параметры когорты</h3>${benchmarkInputs.map(field => launchControl(field, 'inputs')).join('')}</section>
      <section class="panel launch-calc-output"><span class="launch-kicker">Модель на основе Excel</span><h3>Экономика когорты</h3>
        <dl class="launch-data-list launch-result-list">
          ${launchResult('buyers', 'Покупатели · C4')}
          ${launchResult('transactions', 'Транзакции')}
          ${launchResult('gmv', 'Оборот · GMV')}
          ${launchResult('revenue', 'Комиссионный доход')}
          ${launchResult('ac', 'Бюджет привлечения · AC')}
          ${launchResult('arppu', 'ARPPU')}
          ${launchResult('arpu', 'ARPU')}
          ${launchResult('cac', 'CAC')}
          ${launchResult('breakEvenConversion', 'Конверсия для окупаемости привлечения')}
        </dl>
        <div class="launch-chart" aria-label="Доход и стоимость привлечения">
          <div><span>Доход</span><div class="launch-bar-track"><span class="launch-bar launch-bar-revenue" data-calc-bar="revenue"></span></div></div>
          <div><span>Привлечение</span><div class="launch-bar-track"><span class="launch-bar launch-bar-ac" data-calc-bar="ac"></span></div></div>
        </div>
      </section>
    </div>
    <details class="panel launch-details" id="launch-pilot-costs" ${['pilot', 'stress'].includes(launchCalcState.preset) ? 'open' : ''}>
      <summary>Расходы пилота и операционная безубыточность</summary>
      <p>Расширение модели, отдельное от формул Excel. Оборот - сумма заказов. Для пилота число заказов и средний чек оцениваются с поправкой на возвраты. Операционные расходы на заказ включают обработку обращений и возвратов. Эквайринг и кешбэк начисляются на оборот. Фиксированные расходы по умолчанию - 1,1 млн ₽ в месяц × 3. Налоги и разовые инвестиции в запуск в операционный результат не входят.</p>
      <div class="launch-calc-grid launch-calc-extension">
        <div>${pilotInputs.map(field => launchControl(field, 'costs')).join('')}</div>
        <dl class="launch-data-list launch-result-list">
          ${launchResult('acquiring', 'Эквайринг')}
          ${launchResult('cashback', 'Кешбэк банка')}
          ${launchResult('support', 'Обслуживание заказов')}
          ${launchResult('pilotContribution', 'Вклад после маркетинга и переменных затрат')}
          ${launchResult('pilotResult', 'Результат после фиксированных затрат', 'launch-result-emphasis')}
          ${launchResult('breakEvenUsers', 'Пользователи для безубыточности')}
          ${launchResult('breakEvenFee', 'Комиссия для безубыточности')}
        </dl>
      </div>
      <p class="launch-note">Точки безубыточности рассчитаны при прочих равных. Знак «-» означает, что показатель нельзя рассчитать или рост трафика при этих параметрах не обеспечит окупаемость.</p>
    </details>
    ${launchBenchmarkNotes()}
    <details class="panel launch-details">
      <summary>Формулы и сверка с Excel</summary>
      <p>Транзакции считаются как число покупателей × транзакции на покупателя, с округлением вниз. Из целого числа транзакций рассчитываются оборот, комиссионный доход и расходы на обслуживание. Конверсия для окупаемости привлечения остается оценкой по средней частоте заказов.</p>
      <p>H4 в файле подписана «EBITDA». По формуле это комиссионный доход минус маркетинг. Калькулятор показывает этот результат отдельной строкой. Процентные поля переводятся в доли перед расчетом.</p>
      <dl class="launch-data-list launch-formulas">${launchFormulaRows.map(([cell, label, formula]) => `<div><dt><code>${cell}</code> ${label}</dt><dd>${formula}</dd></div>`).join('')}</dl>
      <p>На исходных параметрах Excel контрольные значения: 5 000 покупателей, ARPPU 225 ₽, ARPU 11,25 ₽, CAC 600 ₽, AC 3 000 000 ₽, результат −1 875 000 ₽, ROMI −62,5%.</p>
    </details>
  </section>`;
}

function updateLaunchCalculator() {
  const calculator = $('#launch-calculator');
  if (!calculator) return;
  const inputs = launchCalcState.inputs;
  const unit = calculateLaunchUnit(inputs);
  const pilot = calculateLaunchPilot(unit, inputs, launchCalcState.costs);
  const outputs = {
    ...unit, ...pilot, contribution: unit.contribution,
    pilotContribution: pilot.contribution, pilotResult: pilot.result,
  };
  const numberKeys = new Set(['buyers', 'transactions', 'breakEvenUsers']);
  const percentKeys = new Set(['romi', 'breakEvenConversion', 'breakEvenFee']);
  calculator.querySelectorAll('[data-calc-value]').forEach(element => {
    const key = element.dataset.calcValue;
    const value = outputs[key];
    const formatter = numberKeys.has(key) ? launchNum : percentKeys.has(key) ? launchPct : launchRub;
    element.textContent = formatter(value);
    if (['contribution', 'romi', 'pilotResult', 'pilotContribution'].includes(key)) {
      element.dataset.sign = value < 0 ? 'negative' : value > 0 ? 'positive' : 'neutral';
    }
  });
  const max = Math.max(...[unit.revenue, unit.ac].filter(Number.isFinite), 1);
  $('#launch-calc-warning').hidden = ![inputs.fee, inputs.conversion, launchCalcState.costs.acquiring, launchCalcState.costs.cashback].some(value => value > 100);
  calculator.querySelectorAll('[data-calc-bar]').forEach(bar => {
    const value = unit[bar.dataset.calcBar];
    bar.style.width = `${Number.isFinite(value) ? value / max * 100 : 0}%`;
  });
  calculator.querySelectorAll('[data-calc-preset]').forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.calcPreset === launchCalcState.preset));
  });
}

function syncLaunchControl(field, group, editing) {
  const value = launchCalcState[group][field.key];
  const max = rangeMaximum(field);
  document.querySelectorAll(`[data-calc-key="${field.key}"]`).forEach(input => {
    if (input !== editing) input.value = input.type === 'range' ? Math.min(value,max) : value;
  });
  $(`[data-calc-outside="${field.key}"]`).hidden = value <= max;
}

function applyLaunchPreset(preset, resetCosts = false) {
  launchCalcState.preset = preset;
  launchCalcState.inputs = {...launchPresets[preset].assumptions};
  if (resetCosts) launchCalcState.costs = defaultsFor(pilotInputs);
  benchmarkInputs.forEach(field => syncLaunchControl(field, 'inputs'));
  pilotInputs.forEach(field => syncLaunchControl(field, 'costs'));
  $('#launch-pilot-costs').open = preset !== 'base';
  updateLaunchCalculator();
}

document.addEventListener('click', event => {
  const button = event.target.closest('[data-calc-preset], [data-calc-reset]');
  if (!button) return;
  applyLaunchPreset(button.dataset.calcPreset || 'base', 'calcReset' in button.dataset);
});

document.addEventListener('input', event => {
  const input = event.target;
  if (!input.matches('[data-calc-key]') || !Number.isFinite(input.valueAsNumber) || input.valueAsNumber < 0) return;
  const {calcKey, calcGroup} = input.dataset;
  const field = (calcGroup === 'inputs' ? benchmarkInputs : pilotInputs).find(item => item.key === calcKey);
  launchCalcState[calcGroup][calcKey] = input.valueAsNumber;
  if (calcGroup === 'inputs') launchCalcState.preset = '';
  syncLaunchControl(field, calcGroup, input);
  updateLaunchCalculator();
});

document.addEventListener('focusout', event => {
  const input = event.target;
  if (input.matches('input[type="number"][data-calc-key]')) {
    input.value = launchCalcState[input.dataset.calcGroup][input.dataset.calcKey];
  }
});

function renderLaunch(id) {
  const tab = launchTabs.some(([key]) => key === id) ? id : 'obzor';
  const sections = {obzor: launchOverview, vendory: launchVendors, roadmap: launchRoadmap, economy: launchEconomy};
  return `<div class="launch-page enter">
    <header class="launch-intro">
      <span class="eyebrow">${icon('spark')} Искра Город · Продуктовое исследование</span>
      <h1>Запуск банковской афиши</h1>
      <p>Рынок билетных операторов, план пилота и экономика от первого визита до повторной покупки.</p>
    </header>
    <nav class="launch-tabs" aria-label="Разделы исследования">
      ${launchTabs.map(([key, label]) => `<a href="#/zapusk/${key}" ${tab === key ? 'aria-current="page"' : ''}>${label}</a>`).join('')}
    </nav>
    <div class="launch-content">${sections[tab]()}</div>
  </div>`;
}
