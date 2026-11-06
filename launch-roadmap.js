'use strict';

const weeksOnBoard = 16;
const daysPerWeek = 5;
const engineeringTimeFactor = 0.7;

const launchStreams = [
  {
    id: 'vibe', label: 'Вайб-код', caption: 'Витрина + покупка у билетного оператора',
    stages: [
      {id:'v-scope', name:'Задачи и сценарии', days:5, owner:'Продакт · дизайнер', work:'Определить аудиторию Москвы, стартовый набор событий и сценарии выбора, оплаты и возврата. Подготовить тестовый каталог.', result:'Согласованы сценарий и критерии теста с пользователями.'},
      {id:'v-demo', name:'Мобильный прототип', days:10, owner:'Продакт · разработчик с LLM', work:'Собрать витрину, карточку, выбор мест, имитацию оплаты и аналитику кликов. Хранить только тестовые данные.', result:'Кликабельный прототип готов к тестам на телефоне.'},
      {id:'v-test', name:'Тесты на телефонах', days:5, owner:'Продакт · дизайнер', work:'Проверить ключевые задачи на 5–8 пользователях. Замерить успешность сценария и точки отказа, устранить критические проблемы.', result:'Решение по интерфейсу и готовность продолжить переговоры к концу 4-й недели.'},
      {id:'v-vendor', name:'Оформление у партнера', days:10, owner:'BD · оператор · ИБ и юристы', work:'Выбрать доступный WebView или виджет, подтвердить каталог, атрибуцию и порядок возвратов. Оператор принимает оплату, выдает чек и билет. Банк согласует обработку данных и порядок передачи обращений в поддержку.', result:'Есть договор, тестовый заказ и подтвержденные статусы. Без них этап продлевается.'},
      {id:'v-pilot', name:'Ограниченный пилот', days:10, owner:'Продакт · аналитик · поддержка', work:'Открыть партнерскую витрину на ограниченную аудиторию. Измерить переходы, продажи из отчета оператора, обращения и атрибуцию.', result:'Решение о проверке спроса или переходе к разработке собственного оформления заказа.'},
    ],
  },
  {
    id: 'team', label: 'Команда разработки', caption: 'Витрина и оформление заказа в контуре банка',
    stages: [
      {id:'t-rfp', name:'Спрос и отбор вендора', days:10, owner:'Продакт · аналитик · BD', work:'Измерить спрос в Москве, отправить единый запрос Ticketscloud, KASSIR.RU и МТС Live / Ticketland. Сопоставить каталог, права и экономику.', result:'Один поставщик выбран для технического пилота.'},
      {id:'t-contract', name:'Договор и песочница', days:15, owner:'BD · юристы · ИБ · платежи', work:'Согласовать роли, ставку, данные, чек, расчеты и SLA. Пройти в песочнице заказ, истечение брони и возврат.', result:'Подписан пилотный договор, готовы доступы, согласован платежный контур.'},
      {id:'t-catalog', name:'Каталог и резерв', days:15, engineering:true, owner:'Бэкенд · мобильная разработка · QA', work:'Разработать импорт событий, актуализацию остатков и резерв мест. Применить LLM для черновиков адаптеров и тестов. Проверить код и контракты API.', result:'Витрина показывает доступные сеансы, бронь имеет срок действия и корректно снимается.'},
      {id:'t-checkout', name:'Оплата и билеты', days:20, engineering:true, owner:'Бэкенд · мобильная разработка · платежи · QA', work:'Собрать оформление заказа, вебхуки, билет, возврат и сверку. Использовать LLM для тестовых сценариев и черновиков кода. Проверить повторные запросы, сбои и оплату без выданного билета.', result:'Сквозные тесты и проверки отказоустойчивости пройдены.'},
      {id:'t-beta', name:'Бета и эксплуатация', days:10, owner:'QA · ИБ · поддержка · финансы', work:'Запустить на сотрудниках и проверить политику возвратов, массовую отмену, сверку и дежурные контакты.', result:'Тестовая смена поддержки прошла, расхождения закрываются к T+1.'},
      {id:'t-pilot', name:'Пилот и решение', days:10, owner:'Продакт · CRM · аналитик · финансы', work:'Открыть 5% подходящей аудитории, затем до 25% при соблюдении порогов. Оставить 10% контрольной группы. Отдельно измерять эффект кешбэка.', result:'Цели теста: ≥99,5% оплаченных заказов с билетом за 2 мин, положительный вклад после привлечения и переменных затрат. 8% конверсии - цель оптимистичного пилота.'},
    ],
  },
];

const launchGanttState = {filter: 'all', baseline: false, task: 'v-demo'};

function launchSchedule(stream, baseline = false) {
  let end = 0;
  return stream.stages.map(stage => {
    const start = end;
    const duration = stage.engineering && !baseline ? stage.days * engineeringTimeFactor : stage.days;
    end += duration;
    return {...stage, start, end, duration};
  });
}

const scheduledWeeks = (stream, baseline) => launchSchedule(stream, baseline).at(-1).end / daysPerWeek;

function ganttStreams() {
  return launchStreams.filter(stream => launchGanttState.filter === 'all' || stream.id === launchGanttState.filter);
}

function ganttTiming(stage) {
  const firstWeek = Math.floor(stage.start / daysPerWeek) + 1;
  const lastWeek = Math.ceil(stage.end / daysPerWeek);
  return firstWeek === lastWeek ? `Неделя ${firstWeek}` : `Недели ${firstWeek}–${lastWeek}`;
}

function launchGanttRows() {
  const totalDays = weeksOnBoard * daysPerWeek;
  return `<div class="gantt-row gantt-head"><span class="gantt-label">Этап</span><div class="gantt-scale" aria-label="Недели">${Array.from({length:weeksOnBoard},(_,i)=>`<span>${i+1}</span>`).join('')}</div></div>
    ${ganttStreams().map(stream => {
      const schedule = launchSchedule(stream, launchGanttState.baseline);
      return `<section class="gantt-stream" data-stream="${stream.id}" aria-label="${stream.label}">
        <div class="gantt-row gantt-stream-head"><h3 class="gantt-label">${stream.label}</h3><span>${launchNum(scheduledWeeks(stream, launchGanttState.baseline))} нед. · ${stream.caption}</span></div>
        ${schedule.map(stage => `<div class="gantt-row">
          <span class="gantt-label">${stage.name}</span>
          <div class="gantt-track">
            <button type="button" class="gantt-bar" data-gantt-task="${stage.id}" aria-pressed="${launchGanttState.task === stage.id}" aria-label="${stage.name}, ${ganttTiming(stage)}" style="--start:${stage.start/totalDays*100}%;--duration:${stage.duration/totalDays*100}%">${launchNum(stage.duration/daysPerWeek)} нед.</button>
          </div>
        </div>`).join('')}
      </section>`;
    }).join('')}`;
}

function launchGanttDetail() {
  const stream = launchStreams.find(item => item.stages.some(stage => stage.id === launchGanttState.task));
  const schedule = launchSchedule(stream, launchGanttState.baseline);
  const index = schedule.findIndex(stage => stage.id === launchGanttState.task);
  const stage = schedule[index];
  return `<div><span class="launch-kicker">${stream.label} · ${ganttTiming(stage)}</span><h3>${stage.name}</h3></div>
    <dl class="gantt-task-meta"><div><dt>Ответственные</dt><dd>${stage.owner}</dd></div><div><dt>Длительность</dt><dd>${launchNum(stage.duration/daysPerWeek)} нед.${stage.engineering && !launchGanttState.baseline ? ` · вместо ${stage.days/daysPerWeek} нед.` : ''}</dd></div><div><dt>Зависит от</dt><dd>${index ? schedule[index-1].name : 'Старт проекта'}</dd></div></dl>
    <p>${stage.work}</p><p class="launch-gate"><b>Результат этапа.</b> ${stage.result}</p><button type="button" class="text-link gantt-back" data-gantt-back>К доске Ганта</button>`;
}

function launchGantt() {
  return `<section id="launch-gantt">
    ${launchHeading('Роадмап запуска · два стрима', 'Недели отсчитываются от старта каждого стрима. Выберите этап, чтобы увидеть ответственных, предшествующий этап и ожидаемый результат.')}
    <div class="gantt-toolbar">
      <div class="gantt-filters" role="group" aria-label="Стримы роадмапа">
        ${[['all','Оба стрима'], ...launchStreams.map(stream => [stream.id,stream.label])].map(([key,label]) => `<button class="pill" type="button" data-gantt-filter="${key}" aria-pressed="${key === launchGanttState.filter}">${label}</button>`).join('')}
      </div>
      <label class="gantt-baseline" ${launchGanttState.filter === 'team' ? '' : 'hidden'}><input type="checkbox" data-gantt-baseline ${launchGanttState.baseline ? 'checked' : ''}> Показать план команды без LLM</label>
    </div>
    <p class="gantt-hint">Листайте доску влево или вправо. Нажмите на полосу этапа, чтобы открыть детали.</p>
    <div class="gantt-scroll" tabindex="0" role="region" aria-label="Диаграмма Ганта на 16 недель">
      <div id="gantt-grid" class="gantt-grid">${launchGanttRows()}</div>
    </div>
    <article class="panel gantt-detail" id="gantt-detail" aria-live="polite">${launchGanttDetail()}</article>
    <aside class="launch-callout"><strong>Как учтено ускорение на 30%</strong><p>В командном варианте закладываем на инженерные задачи 70% исходной длительности. Каталог и резерв: 3 → 2,1 недели. Оплата и билеты: 4 → 2,8 недели. Договор, отдельный этап беты и пилот идут по исходному плану. Всего получается 13,9 вместо 16 недель. Это плановое допущение.</p></aside>
  </section>`;
}

function redrawGantt() {
  $('#gantt-grid').innerHTML = launchGanttRows();
  $('#gantt-detail').innerHTML = launchGanttDetail();
  const baseline = $('[data-gantt-baseline]');
  baseline.checked = launchGanttState.baseline;
  baseline.closest('label').hidden = launchGanttState.filter !== 'team';
  document.querySelectorAll('[data-gantt-filter]').forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.ganttFilter === launchGanttState.filter));
  });
}

document.addEventListener('click', event => {
  const filter = event.target.closest('[data-gantt-filter]');
  if (filter) {
    launchGanttState.filter = filter.dataset.ganttFilter;
    if (launchGanttState.filter !== 'team') launchGanttState.baseline = false;
    const streams = ganttStreams();
    if (!streams.some(stream => stream.stages.some(stage => stage.id === launchGanttState.task))) {
      launchGanttState.task = streams[0].stages[0].id;
    }
    redrawGantt();
  }
  if (event.target.closest('[data-gantt-back]')) {
    $('.gantt-scroll').scrollIntoView({block:'start',behavior:requestMotion() ? 'smooth' : 'instant'});
    $('.gantt-scroll').focus({preventScroll:true});
  }
  const task = event.target.closest('[data-gantt-task]');
  if (task) {
    launchGanttState.task = task.dataset.ganttTask;
    document.querySelectorAll('[data-gantt-task]').forEach(button => {
      button.setAttribute('aria-pressed', String(button === task));
    });
    const detail = $('#gantt-detail');
    detail.innerHTML = launchGanttDetail();
    if (window.matchMedia('(max-width:760px)').matches) {
      detail.scrollIntoView({block:'start',behavior:requestMotion() ? 'smooth' : 'instant'});
    }
  }
});

document.addEventListener('change', event => {
  if (event.target.matches('[data-gantt-baseline]')) {
    launchGanttState.baseline = event.target.checked;
    redrawGantt();
  }
});
