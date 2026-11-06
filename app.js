'use strict';

const paths = {
  compass: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z"/>',
  heart: '<path d="M20.8 8.6c0 4.2-8.8 9.4-8.8 9.4S3.2 12.8 3.2 8.6a4.5 4.5 0 0 1 8.8-1.2 4.5 4.5 0 0 1 8.8 1.2Z"/>',
  ticket: '<path d="M4 6h16a1 1 0 0 1 1 1v3a2 2 0 1 0 0 4v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-3a2 2 0 1 0 0-4V7a1 1 0 0 1 1-1Z"/><path d="M14 6v2m0 3v2m0 3v2"/>',
  pin: '<path d="M19 10c0 5-7 10-7 10s-7-5-7-10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2.2"/>',
  search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 4.2 4.2"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1.4"/><rect x="14" y="3" width="7" height="7" rx="1.4"/><rect x="3" y="14" width="7" height="7" rx="1.4"/><rect x="14" y="14" width="7" height="7" rx="1.4"/>',
  music: '<path d="M9 17.5V6l11-2v11.5M9 9l11-2"/><ellipse cx="6" cy="17.5" rx="3" ry="2.4"/><ellipse cx="17" cy="15.5" rx="3" ry="2.4"/>',
  theatre: '<path d="M3.5 5c3 1 6 1 9 0v5.2c0 3-2 5.8-4.5 6.4-2.6-.6-4.5-3.4-4.5-6.4V5Z"/><path d="M14.5 8c2 .2 4 .2 6-.5v5.2c0 3.2-2 6-4.5 6.6-1-.3-2.2-1.1-3-2.3M6.3 9h.1m3.3 0h.1m-3.1 3.3c.8.7 1.7.7 2.5 0m6.2 3.4c.8-.7 1.7-.7 2.5 0m-.3-4h.1"/>',
  art: '<rect x="3.5" y="4" width="17" height="16" rx="2"/><path d="m4 17 5-5 3 3 3-2 5 4"/><circle cx="15.5" cy="8.5" r="1.2"/>',
  mic: '<rect x="9" y="3" width="6" height="12" rx="3"/><path d="M6 11v1a6 6 0 0 0 12 0v-1m-6 7v3m-3 0h6"/>',
  sport: '<circle cx="12" cy="12" r="8.5"/><path d="m12 8 3.7 2.8-1.4 4.3H9.7l-1.4-4.3L12 8Zm0 0V3.7m3.7 7.1 4.2-1.4m-5.6 5.7 2.6 3.7m-7.2-3.7-2.6 3.7m1.2-8-4.2-1.4"/>',
  star: '<path d="m12 3 2.5 5.5 6 .8-4.4 4.2 1.1 6-5.2-2.9-5.2 2.9 1.1-6-4.4-4.2 6-.8L12 3Z"/>',
  spark: '<path d="m12 2 1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2Zm7 12v6m-3-3h6"/>',
  calendar: '<rect x="3.5" y="5" width="17" height="15.5" rx="2"/><path d="M7.5 3v4m9-4v4m-13 3h17m-12 4h2m3 0h2m-7 3h2"/>',
  down: '<path d="m6 9 6 6 6-6"/>',
  left: '<path d="m15 6-6 6 6 6"/>',
  right: '<path d="m9 6 6 6-6 6"/>',
  arrow: '<path d="M4 12h15m-6-6 6 6-6 6"/>',
  back: '<path d="M20 12H5m6-6-6 6 6 6"/>',
  external: '<path d="M13 5h6v6m0-6-9 9m8-1v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
  close: '<path d="m6 6 12 12M18 6 6 18"/>',
  check: '<path d="m5 12 4 4 10-10"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5m0-8h.01"/>',
  card: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18m-14 5h4"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  minus: '<path d="M5 12h14"/>',
  download: '<path d="M12 4v11m-5-5 5 5 5-5M4 16v4h16v-4"/>',
};

const icon = name => `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]}</svg>`;
const $ = (selector, scope = document) => scope.querySelector(selector);
const page = $('#main-content');
const dialog = $('#dialog');
const storageKey = 'iskra-afisha-demo-v1';
const demoEmail = 'demo@example.com';
const esc = value => String(value).replace(/[&<>"']/g, char => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[char]));
const money = value => `${new Intl.NumberFormat('ru-RU').format(value)} ₽`;
const asset = file => `./assets/${file}`;
const eventBy = id => events.find(event => event.id === id);
const categoryBy = id => categories.find(category => category.id === id);
const dateFmt = new Intl.DateTimeFormat('ru-RU', {day: 'numeric', month: 'long', timeZone: 'UTC'});
const weekdayFmt = new Intl.DateTimeFormat('ru-RU', {weekday: 'short', timeZone: 'UTC'});
const dayOf = time => time.slice(0, 10);
const dateValue = time => new Date(`${dayOf(time)}T12:00:00Z`);
const dateName = time => dateFmt.format(dateValue(time));
const timeName = time => time.slice(11) || 'В часы работы';
const dateTime = time => `${dateName(time)} · ${timeName(time)}`;
const routeLink = (...parts) => `#/${parts.join('/')}`;
const countLabel = number => `${number} ${number === 1 ? 'билет' : number < 5 ? 'билета' : 'билетов'}`;
const requestMotion = () => !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function readStorage() {
  try {
    const data = JSON.parse(localStorage.getItem(storageKey) || '{}');
    return {
      favorites: Array.isArray(data.favorites) ? data.favorites.filter(eventBy) : [],
      orders: Array.isArray(data.orders) ? data.orders.filter(order => order && eventBy(order.eventId) && Array.isArray(order.lines)) : [],
    };
  } catch {
    return {favorites: [], orders: []};
  }
}

const data = readStorage();
const state = {
  category: 'all', period: 'all', query: '', slide: 0, catalog: false,
  showings: {}, cart: null, paying: false,
};

function saveStorage() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(data));
    return true;
  } catch {
    return false;
  }
}

function currentRoute() {
  const [view = 'afisha', id = ''] = location.hash.replace(/^#\/?/, '').split('/');
  return {view, id};
}

function go(view, id) {
  const hash = id ? routeLink(view, id) : routeLink(view);
  if (location.hash !== hash) location.hash = hash;
  else render();
}

function flash(message) {
  const toast = $('#toast');
  clearTimeout(flash.timer);
  toast.textContent = message;
  toast.classList.add('visible');
  flash.timer = setTimeout(() => toast.classList.remove('visible'), 2100);
}

function navItems(active) {
  return [
    ['afisha', 'compass', 'Афиша'],
    ['izbrannoe', 'heart', 'Избранное'],
    ['bilety', 'ticket', 'Мои билеты'],
    ['zapusk', 'grid', 'Запуск'],
  ].map(([view, symbol, name]) => `<a class="nav-item" href="${routeLink(view)}" ${view === active ? 'aria-current="page"' : ''}>${icon(symbol)}<span>${name}</span>${view === 'bilety' && data.orders.length ? `<span class="nav-count">${data.orders.length}</span>` : ''}</a>`).join('');
}

function renderChrome(view) {
  const active = ['izbrannoe', 'zapusk'].includes(view) ? view : ['bilety', 'bilet', 'gotovo'].includes(view) ? 'bilety' : 'afisha';
  $('#topbar').innerHTML = `<div class="wrap topbar-inner">
    <a class="brand" href="#/afisha" aria-label="Искра Банк - афиша"><img src="${asset('iskra.svg')}" alt=""><b>Искра <small>Банк</small></b></a>
    <nav class="desktop-nav" aria-label="Основная навигация">${navItems(active)}</nav>
    <span class="location">${icon('pin')} Москва</span>
  </div>`;
  $('#bottom-nav').innerHTML = navItems(active);
  $('#footer').innerHTML = `<span class="footer-name"><img src="${asset('iskra.svg')}" alt=""> Искра Банк · Афиша</span>
    <span>Демо · События ноября 2026 · Оплата и билеты для теста</span>`;
}

function favoriteButton(event) {
  const liked = data.favorites.includes(event.id);
  return `<button class="fav" type="button" data-favorite="${event.id}" aria-label="${liked ? 'Убрать из избранного' : 'В избранное'}: ${esc(event.name)}" aria-pressed="${liked}">${icon('heart')}</button>`;
}

function changeFavorite(id) {
  const event = eventBy(id);
  if (!event) return;
  const old = data.favorites.includes(id);
  data.favorites = old ? data.favorites.filter(item => item !== id) : [...data.favorites, id];
  saveStorage();
  document.querySelectorAll(`[data-favorite="${id}"]`).forEach(button => {
    button.setAttribute('aria-pressed', String(!old));
    button.setAttribute('aria-label', `${old ? 'В избранное' : 'Убрать из избранного'}: ${event.name}`);
  });
  if (currentRoute().view === 'izbrannoe') {
    const remaining = data.favorites.map(eventBy);
    $('#favorites-content').innerHTML = remaining.length ? cards(remaining) : favoritesEmpty();
    ($('#favorites-content button') || $('#favorites-content a'))?.focus();
  }
  flash(old ? 'Убрали из избранного' : 'Добавили в избранное');
}

function card(event) {
  const times = event.times.filter(inPeriod);
  const time = times[0] || event.times[0];
  const sameDay = times.filter(value => dayOf(value) === dayOf(time));
  const shortDate = time.length > 10 && sameDay.length === 1 ? dateTime(time) : dateName(time);
  return `<article class="event-card">
    <a class="card-hit" href="${routeLink('sobytie', event.id)}" aria-label="Подробнее о событии: ${esc(event.name)}"></a>
    <div class="card-art" style="background-color:${event.theme}">
      <img src="${asset(event.image)}" alt="" loading="lazy" decoding="async">
      <span class="card-tag">${categoryBy(event.category).label}</span>
    </div>
    ${favoriteButton(event)}
    <div class="card-body">
      <span class="card-date">${shortDate}</span>
      <h3>${esc(event.name)}</h3>
      <p class="card-venue">${esc(event.venue)}</p>
      <p class="card-price">от ${money(event.base)}</p>
    </div>
  </article>`;
}

const cards = items => `<div class="card-grid">${items.map(card).join('')}</div>`;
const section = (title, subtitle, items, action = '') => `<section class="section">
  <header class="section-head"><div><h2>${title}</h2><p>${subtitle}</p></div>${action}</header>
  ${cards(items)}
</section>`;

function empty(symbol, title, description, action = '') {
  return `<div class="empty"><span class="empty-icon">${icon(symbol)}</span><h3>${title}</h3><p>${description}</p>${action}</div>`;
}

function hero() {
  const slides = editorial.map((id, index) => {
    const event = eventBy(id);
    return `<article class="hero-slide" aria-label="${index + 1} из ${editorial.length}">
      <div class="hero-stage" aria-hidden="true"><img src="${asset(event.hero || event.image)}" alt="" ${index === 0 ? 'fetchpriority="high"' : 'loading="lazy"'}></div>
      <div class="hero-content">
        <div class="hero-label">${icon('spark')} Выбор редакции</div>
        <h2>${esc(event.name)}</h2>
        <p>${dateTime(event.times[0])} · ${esc(event.venue)}</p>
        <a class="btn hero-cta" href="${routeLink('sobytie', event.id)}" aria-label="О событии: ${esc(event.name)}">О событии ${icon('arrow')}</a>
      </div>
    </article>`;
  });
  return `<div class="hero-track" id="hero-track">${slides.join('')}</div>
    <div class="hero-pagination" role="group" aria-label="События в подборке">
      ${editorial.map((id, index) => `<button type="button" class="hero-dot" data-slide="${index}" aria-label="Событие ${index + 1}: ${esc(eventBy(id).name)}" aria-pressed="${state.slide === index}"></button>`).join('')}
    </div>`;
}

function scrollFeatured(index, behavior = 'instant') {
  const track = $('#hero-track');
  if (track?.clientWidth) track.scrollTo({left: track.clientWidth * index, behavior});
}

page.addEventListener('scroll', event => {
  const track = event.target;
  if (track.id !== 'hero-track' || !track.clientWidth) return;
  const active = Math.min(editorial.length - 1, Math.max(0, Math.round(track.scrollLeft / track.clientWidth)));
  if (active === state.slide) return;
  state.slide = active;
  $('#hero').querySelectorAll('[data-slide]').forEach(dot => {
    dot.setAttribute('aria-pressed', String(Number(dot.dataset.slide) === active));
  });
}, {capture: true, passive: true});

function inPeriod(time) {
  const period = periods.find(item => item.id === state.period);
  const day = dayOf(time);
  return !period.from || (day >= period.from && day <= period.to);
}

function hasCatalogFilters() {
  return state.category !== 'all' || state.period !== 'all' || !!state.query.trim() || state.catalog;
}

function catalogContent() {
  const query = state.query.trim().toLocaleLowerCase('ru-RU');
  if (!hasCatalogFilters()) {
    return section('На выходных', '7–8 ноября', weekend.map(eventBy),
      `<button class="text-link" type="button" data-collection="weekend">Все на выходных ${icon('arrow')}</button>`)
      + section('Скоро в городе', '13–15 ноября', coming.map(eventBy),
        `<button class="text-link" type="button" data-collection="all">Вся афиша ${icon('arrow')}</button>`)
      + `<aside class="collection-banner"><div><span class="banner-icon">${icon('star')}</span><div><h3>Выходные всей семьей</h3><p>Детские спектакли в Москве</p></div></div><button class="text-link" type="button" data-collection="family">Смотреть подборку ${icon('arrow')}</button></aside>`;
  }
  const results = events.filter(event => (state.category === 'all' || event.category === state.category)
      && event.times.some(inPeriod)
      && `${event.name} ${event.venue} ${categoryBy(event.category).name}`.toLocaleLowerCase('ru-RU').includes(query))
    .sort((a, b) => a.times.find(inPeriod).localeCompare(b.times.find(inPeriod)));
  const heading = query ? 'Результаты поиска' : state.category === 'all' && state.period === 'weekend' ? 'На выходных' : categoryBy(state.category).name;
  return `<section class="section results">
    <header class="section-head"><div><h2>${heading}</h2><p class="results-note">Событий: ${results.length}</p></div><button class="text-link" type="button" data-reset>Сбросить фильтры</button></header>
    ${results.length ? cards(results) : empty('search', 'Ничего не нашли', 'Попробуйте другое название, площадку или период.')}
  </section>`;
}

function updateCatalog() {
  const el = $('#catalog-content');
  if (!el) return;
  el.innerHTML = catalogContent();
  el.closest('.catalog-view').classList.toggle('catalog-filtered', hasCatalogFilters());
  scrollFeatured(state.slide);
  $('#search-clear').hidden = !state.query;
  document.querySelectorAll('[data-category]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.category === state.category)));
  const date = $('#date-filter');
  date.setAttribute('aria-pressed', String(state.period !== 'all'));
  const dateLabel = state.period === 'all' ? 'Даты' : periods.find(item => item.id === state.period).name;
  $('.date-range', date).textContent = dateLabel;
  date.setAttribute('aria-label', `Выбрать даты: ${dateLabel}`);
}

function renderHome() {
  return `<div class="enter catalog-view${hasCatalogFilters() ? ' catalog-filtered' : ''}">
    <section class="intro">
      <div><span class="eyebrow">${icon('spark')} Искра Город</span><h1>Афиша</h1><p>Куда сходить в Москве</p></div>
      <form class="search" id="search" role="search" autocomplete="off">
        ${icon('search')}<input type="search" aria-label="Поиск событий" placeholder="Событие или площадка" value="${esc(state.query)}">
        <button id="search-clear" class="search-clear" type="button" data-clear aria-label="Очистить поиск" ${state.query ? '' : 'hidden'}>${icon('close')}</button>
      </form>
    </section>
    <section id="hero" class="hero" aria-label="Выбор редакции">${hero()}</section>
    <div class="filters">
      <div class="categories" role="group" aria-label="Категории">
        ${categories.map(item => `<button class="pill" type="button" data-category="${item.id}" aria-pressed="${state.category === item.id}">${icon(item.icon)} ${item.name}</button>`).join('')}
      </div>
      <button class="date-filter" id="date-filter" type="button" data-date aria-label="Выбрать даты" aria-pressed="${state.period !== 'all'}">${icon('calendar')} <span class="date-range">${state.period === 'all' ? 'Даты' : periods.find(item => item.id === state.period).name}</span><span class="date-compact">Даты</span> ${icon('down')}</button>
    </div>
    <div id="catalog-content">${catalogContent()}</div>
  </div>`;
}

const back = (label, href) => `<a class="back" href="${href}">${icon('back')} ${label}</a>`;
const actionLink = (label, href, style = 'primary') => `<a class="btn btn-${style}" href="${href}">${label}</a>`;

function renderEvent(event) {
  const category = categoryBy(event.category);
  const first = state.showings[event.id] || event.times.find(inPeriod) || event.times[0];
  state.showings[event.id] = first;
  const mapUrl = `https://yandex.ru/maps/?text=${encodeURIComponent(`Москва, ${event.address}`)}`;
  return `<div class="enter">
    ${back('Афиша', routeLink('afisha'))}
    <section class="event-cover" style="background-color:${event.theme}">
      <img src="${asset(event.hero || event.image)}" alt="">
      ${favoriteButton(event)}
      <div class="event-cover-content">
        <span class="hero-label">${icon(category.icon)} ${category.label}${event.age == null ? '' : ` · ${event.age}+`}</span>
        <h1>${esc(event.name)}</h1>
        <p id="cover-time">${dateTime(first)} · ${esc(event.venue)}</p>
      </div>
    </section>
    <div class="detail-grid">
      <div class="stack">
        <section class="panel"><h2>О событии</h2><p>${esc(event.description)}</p>
          <a class="text-link" href="${esc(event.source)}" target="_blank" rel="noopener">Источник расписания ${icon('external')}</a>
        </section>
        <section class="panel"><h2>Площадка</h2><p><strong>${esc(event.venue)}</strong><br>Москва, ${esc(event.address)}</p>
          <a class="text-link" href="${mapUrl}" target="_blank" rel="noopener">Открыть на карте ${icon('external')}</a>
        </section>
      </div>
      <section class="panel sticky-panel">
        <h2>${event.times.length === 1 ? 'Дата и время' : 'Выберите сеанс'}</h2>
        <div class="showings" role="group" aria-label="Сеансы">
          ${event.times.map(time => `<button type="button" class="showing" data-showing="${time}" aria-pressed="${first === time}">${weekdayFmt.format(dateValue(time))} · ${dateName(time)}<b>${timeName(time)}</b></button>`).join('')}
        </div>
        <button class="btn btn-primary btn-block" type="button" data-book="${event.id}">${event.layout === 'seats' ? 'Выбрать места' : 'Выбрать билеты'} · от ${money(event.base)}</button>
        <p class="detail-note">Демо-цена за один билет</p>
      </section>
    </div>
  </div>`;
}

function favoritesEmpty() {
  return empty('heart', 'В избранном пока пусто', 'Нажмите на сердечко в карточке, чтобы сохранить событие.', actionLink('Смотреть афишу', routeLink('afisha')));
}

function renderFavorites() {
  const favorites = data.favorites.map(eventBy);
  return `<div class="enter"><header class="page-title"><span class="eyebrow">${icon('heart')} Личная подборка</span><h1>Избранное</h1><p>События, которые вы отметили</p></header>
    <div id="favorites-content">${favorites.length ? cards(favorites) : favoritesEmpty()}</div></div>`;
}

function startCart(event) {
  const time = state.showings[event.id];
  if (state.cart?.eventId !== event.id || state.cart.time !== time) {
    state.cart = {eventId: event.id, time, seats: [], tier: 0, quantity: 1};
  }
  go('mesta', event.id);
}

const premiumPrice = event => Math.round(event.base * 1.5 / 100) * 100;
const seatCode = (row, seat) => `${row}-${seat}`;

function heldSeats(event, time) {
  return new Set(data.orders
    .filter(order => order.eventId === event.id && order.time === time)
    .flatMap(order => order.lines.map(line => line.code)));
}

function cartLines(event, cart) {
  if (event.layout === 'seats') return [...cart.seats].sort((a, b) => a.row - b.row || a.seat - b.seat).map(({row, seat}) => ({
    code: seatCode(row, seat), name: `${event.section} · Ряд ${row}, место ${seat}`,
    quantity: 1, price: row <= 2 ? premiumPrice(event) : event.base,
  }));
  const [name, , extra] = event.tiers[cart.tier];
  return [{name, quantity: cart.quantity, price: event.base + extra}];
}

const totalPrice = lines => lines.reduce((sum, line) => sum + line.quantity * line.price, 0);
const quantityOf = lines => lines.reduce((sum, line) => sum + line.quantity, 0);

function lineItems(lines) {
  return lines.length ? `<ul class="summary-list">${lines.map(line => `<li><span>${esc(line.name)}${line.quantity > 1 ? ` × ${line.quantity}` : ''}</span><strong>${money(line.price * line.quantity)}</strong></li>`).join('')}</ul>` : '<p>Выберите места на схеме</p>';
}

function seatPicker(event, cart) {
  const occupied = heldSeats(event, cart.time);
  const layout = Array.from({length: 6}, (_, rowIndex) => {
    const row = rowIndex + 1;
    const buttons = Array.from({length: 10}, (_, seatIndex) => {
      const seat = seatIndex + 1;
      const disabled = occupied.has(seatCode(row, seat)) || (row * 3 + seat * 7) % 13 < 2;
      const active = cart.seats.some(item => item.row === row && item.seat === seat);
      const price = row <= 2 ? premiumPrice(event) : event.base;
      return `<button type="button" class="seat ${row <= 2 ? 'premium' : ''}" data-seat="${seatCode(row, seat)}" aria-label="Ряд ${row}, место ${seat}${disabled ? ', занято' : `, ${money(price)}`}" aria-pressed="${active}" ${disabled ? 'disabled' : ''}>${seat}</button>`;
    }).join('');
    return `<div class="seat-row" role="group" aria-label="Ряд ${row}"><span class="row-label" aria-hidden="true">${row}</span>${buttons}</div>`;
  }).join('');
  return `<h2>${event.layout === 'seats' && event.category === 'sport' ? 'Сектор А' : 'Схема зала'}</h2><p>Можно выбрать до 6 мест.</p>
    <p class="seat-hint">Листайте схему влево или вправо, чтобы увидеть все места.</p>
    <div class="stage">${event.front}</div>
    <div class="seat-scroll" role="region" aria-label="Схема зала" tabindex="0">
      <div class="seats" aria-label="Места в зале">${layout}</div>
    </div>
    <div class="legend" aria-label="Обозначения"><span><i></i>${money(event.base)}</span><span><i class="purple"></i>${money(premiumPrice(event))}</span><span><i class="chosen"></i>Выбрано</span><span><i class="taken"></i>Занято</span></div>`;
}

function tierPicker(event, cart) {
  const admission = event.layout === 'admission';
  return `<h2>${admission ? 'Тип билета' : 'Зона и тип билета'}</h2>
    <div class="tiers" role="group" aria-label="Тип билета">
      ${event.tiers.map(([name, subtitle, extra], index) => `<label class="tier"><input type="radio" name="tier" value="${index}" ${index === cart.tier ? 'checked' : ''}><span><strong>${esc(name)}</strong><small>${esc(subtitle)}</small></span><strong>${money(event.base + extra)}</strong></label>`).join('')}
    </div>
    <div class="quantity"><span>Количество билетов</span><div class="counter">
      <button type="button" data-quantity="-1" aria-label="Уменьшить количество" ${cart.quantity <= 1 ? 'disabled' : ''}>${icon('minus')}</button>
      <output id="quantity" aria-live="polite">${cart.quantity}</output>
      <button type="button" data-quantity="1" aria-label="Увеличить количество" ${cart.quantity >= 6 ? 'disabled' : ''}>${icon('plus')}</button>
    </div></div>`;
}

function selectionSummary(event, cart) {
  const lines = cartLines(event, cart);
  const label = lines.length ? `Продолжить · ${money(totalPrice(lines))}` : 'Продолжить';
  return `<h2>Ваш заказ</h2>
    ${lineItems(lines)}
    <div class="total-line"><span>Итого</span><strong>${money(totalPrice(lines))}</strong></div>
    <div class="purchase-actions">
      <button class="btn btn-primary btn-block" type="button" data-checkout ${lines.length ? '' : 'disabled'}>${label} ${icon('arrow')}</button>
    </div>`;
}

function stepper(step) {
  return `<div class="steps"><span>${step === 1 ? '<strong>1. Билеты</strong>' : '1. Билеты'}</span>${icon('right')}<span>${step === 2 ? '<strong>2. Оплата</strong>' : '2. Оплата'}</span></div>`;
}

function renderSeats(event, cart) {
  return `<div class="flow-wrap enter">
    ${back('К событию', routeLink('sobytie', event.id))}
    ${stepper(1)}
    <header class="page-title"><h1>${event.layout === 'seats' ? 'Выберите места' : 'Выберите билеты'}</h1><p>${esc(event.name)} · ${dateTime(cart.time)}</p></header>
    <div class="flow-grid">
      <section class="panel">${event.layout === 'seats' ? seatPicker(event, cart) : tierPicker(event, cart)}
        <p class="detail-note">${event.layout === 'seats' ? 'Демонстрационная схема зала' : 'Демонстрационные варианты билетов'}</p>
      </section>
      <section class="panel sticky-panel" id="selection-summary" aria-live="polite">${selectionSummary(event, cart)}</section>
    </div>
  </div>`;
}

function orderPreview(event, time, quantity) {
  return `<div class="order-preview"><img src="${asset(event.image)}" alt=""><div><h3>${esc(event.name)}</h3><p>${dateTime(time)} · ${countLabel(quantity)}</p></div></div>`;
}

function renderCheckout(event, cart) {
  const lines = cartLines(event, cart);
  const total = totalPrice(lines);
  return `<div class="flow-wrap enter">
    ${back('К выбору билетов', routeLink('mesta', event.id))}
    ${stepper(2)}
    <header class="page-title"><h1>Оплата заказа</h1><p>Проверьте билеты и подтвердите покупку</p></header>
    <div class="flow-grid">
      <div class="stack">
        <section class="panel">${orderPreview(event, cart.time, quantityOf(lines))}${lineItems(lines)}</section>
        <section class="panel">
          <h2>Способ оплаты</h2>
          <div class="method"><span class="demo-card">${icon('card')}</span><span><strong>Карта Искра Банка</strong><small>Демо-карта · •••• 2048</small></span>${icon('check')}</div>
          <p>Почта для билетов <strong>${demoEmail}</strong></p>
        </section>
      </div>
      <section class="panel sticky-panel">
        <h2>К оплате</h2>
        <div class="total-line"><span>Итого</span><strong>${money(total)}</strong></div>
        <div class="purchase-actions">
          <button class="btn btn-primary btn-block" type="button" data-pay ${state.paying ? 'disabled aria-busy="true"' : ''}>${state.paying ? '<span class="spinner" aria-hidden="true"></span> Подтверждаем оплату' : `Оплатить ${money(total)}`}</button>
        </div>
        <div class="demo-note">${icon('info')}<span>В демо деньги не списываются, письма не отправляются.</span></div>
      </section>
    </div>
  </div>`;
}

function renderConfirmation(order) {
  const event = eventBy(order.eventId);
  return `<section class="panel confirmation enter">
    <div class="success-icon">${icon('check')}</div>
    <h1>Оплата прошла успешно</h1>
    <p>Демо-билет сохранен в разделе «Мои билеты».</p>
    ${orderPreview(event, order.time, quantityOf(order.lines))}
    <div class="actions">
      ${actionLink('Мои билеты', routeLink('bilety'))}
      ${actionLink('Вернуться в афишу', routeLink('afisha'), 'neutral')}
    </div>
    <p class="detail-note">Демо-покупка · ${esc(order.id)}</p>
  </section>`;
}

function renderTickets() {
  const orders = data.orders;
  return `<div class="enter">
    <header class="page-title"><span class="eyebrow">${icon('ticket')} Покупки</span><h1>Мои билеты</h1><p>Заказы, оформленные в этом браузере</p></header>
    ${orders.length ? `<div class="ticket-list">${orders.map(order => `<article class="ticket-card">${orderPreview(eventBy(order.eventId), order.time, quantityOf(order.lines))}
      ${actionLink('Открыть', routeLink('bilet', order.id), 'soft')}</article>`).join('')}</div>`
      : empty('ticket', 'Здесь будут ваши билеты', 'После покупки заказ появится в этом разделе.', actionLink('Выбрать событие', routeLink('afisha')))}
  </div>`;
}

function renderTicket(order) {
  const event = eventBy(order.eventId);
  return `<div class="flow-wrap ticket-detail enter">
    ${back('Мои билеты', routeLink('bilety'))}
    <article class="panel ticket-stub">
      <header class="ticket-banner"><img src="${asset(event.hero || event.image)}" alt=""><span class="eyebrow">${icon('ticket')} Демо-билет · ${esc(order.id)}</span><h1>${esc(event.name)}</h1></header>
      <div class="ticket-body"><h2>${dateTime(order.time)}</h2><p>${esc(event.venue)} · ${esc(event.address)}</p>
        ${lineItems(order.lines)}
        <div class="total-line"><span>Оплачено в демо</span><strong>${money(totalPrice(order.lines))}</strong></div>
        <div class="actions"><button type="button" class="btn btn-primary" data-download="${esc(order.id)}">${icon('download')} Скачать демо-билет</button>
          ${actionLink('О событии', routeLink('sobytie', event.id), 'neutral')}</div>
      </div>
    </article>
  </div>`;
}

function downloadTicket(order) {
  const event = eventBy(order.eventId);
  const html = `<!doctype html><html lang="ru"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Демо-билет ${esc(order.id)}</title>
    <style>body{margin:30px auto;padding:0 20px;max-width:620px;font:16px/1.5 system-ui;color:#221b20}header{border-radius:14px;background:#bb1230;color:#fff;padding:20px}h1{line-height:1.12}main{padding:12px;border:1px solid #ebdbe1;border-radius:14px;margin-top:12px}li{margin-block:5px}</style>
    <header><strong>Искра Банк · Демо-билет ${esc(order.id)}</strong><h1>${esc(event.name)}</h1></header>
    <main><p>${dateTime(order.time)}</p><p>${esc(event.venue)} · ${esc(event.address)}</p>${lineItems(order.lines)}
    <p>Итого ${money(totalPrice(order.lines))}</p><p>Демонстрационный билет. Для входа на событие понадобится билет организатора.</p></main></html>`;
  const url = URL.createObjectURL(new Blob([html], {type: 'text/html;charset=utf-8'}));
  const link = document.createElement('a');
  link.href = url;
  link.download = `iskra-${order.id}.html`;
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function openDates() {
  dialog.innerHTML = `<form id="date-form">
    <header class="dialog-head"><h2 id="date-title">Выберите даты</h2><button type="button" class="dialog-close" data-dialog-close aria-label="Закрыть">${icon('close')}</button></header>
    <div class="dialog-options">${periods.map(period => `<label><input type="radio" name="period" value="${period.id}" ${state.period === period.id ? 'checked' : ''}>${period.name}</label>`).join('')}</div>
    <button type="submit" class="btn btn-primary btn-block">Показать события</button>
  </form>`;
  dialog.setAttribute('aria-labelledby', 'date-title');
  dialog.showModal();
}

function render(focus = true) {
  if (dialog.open) dialog.close();
  let {view, id} = currentRoute();
  const event = eventBy(id);
  const order = data.orders.find(item => item.id === id);
  if (!view) view = 'afisha';
  if (['mesta', 'oplata'].includes(view) && event && (state.cart?.eventId !== id || (view === 'oplata' && !cartLines(event, state.cart).length))) {
    view = 'sobytie';
    history.replaceState(null, '', routeLink(view, id));
  }
  const views = {
    afisha: ['Афиша', renderHome],
    sobytie: event && [event.name, () => renderEvent(event)],
    mesta: event && ['Выбор билетов', () => renderSeats(event, state.cart)],
    oplata: event && ['Оплата заказа', () => renderCheckout(event, state.cart)],
    gotovo: order && ['Оплата прошла успешно', () => renderConfirmation(order)],
    bilety: ['Мои билеты', renderTickets],
    bilet: order && ['Билет', () => renderTicket(order)],
    izbrannoe: ['Избранное', renderFavorites],
    zapusk: ['Запуск афиши', () => renderLaunch(id)],
  };
  const selected = Object.hasOwn(views, view) && views[view];
  const [title, template] = selected || ['Страница не найдена', () => empty('compass', 'Страница не найдена', 'Откройте афишу, чтобы выбрать событие.', actionLink('Вернуться в афишу', routeLink('afisha')))];
  document.title = `${title} - Искра Банк`;
  renderChrome(view);
  document.body.classList.toggle('booking-flow', !!selected && ['mesta', 'oplata'].includes(view));
  page.innerHTML = template();
  if (view === 'afisha') scrollFeatured(state.slide);
  if (view === 'zapusk') updateLaunchCalculator();
  window.scrollTo({top: 0, behavior: 'instant'});
  if (focus) page.focus({preventScroll: true});
}

function changeSeat(button, event, cart) {
  const [row, seat] = button.dataset.seat.split('-').map(Number);
  const index = cart.seats.findIndex(item => item.row === row && item.seat === seat);
  if (index >= 0) cart.seats.splice(index, 1);
  else if (cart.seats.length < 6) cart.seats.push({row, seat});
  else return flash('Можно выбрать до 6 мест');
  button.setAttribute('aria-pressed', String(index < 0));
  $('#selection-summary').innerHTML = selectionSummary(event, cart);
}

function changeQuantity(step, event, cart) {
  cart.quantity = Math.max(1, Math.min(6, cart.quantity + step));
  $('#quantity').textContent = cart.quantity;
  $('[data-quantity="-1"]').disabled = cart.quantity <= 1;
  $('[data-quantity="1"]').disabled = cart.quantity >= 6;
  $('#selection-summary').innerHTML = selectionSummary(event, cart);
}

function pay(event, cart, button) {
  if (state.paying || !cart || cart.eventId !== event.id) return;
  const lines = cartLines(event, cart);
  if (!lines.length) return;
  state.paying = true;
  button.disabled = true;
  button.setAttribute('aria-busy', 'true');
  button.innerHTML = '<span class="spinner" aria-hidden="true"></span> Подтверждаем оплату';
  setTimeout(() => {
    const recentOrders = readStorage().orders;
    data.orders = [...new Map([...data.orders, ...recentOrders].map(order => [order.id, order])).values()];
    const taken = heldSeats(event, cart.time);
    state.paying = false;
    if (event.layout === 'seats' && lines.some(line => taken.has(line.code))) {
      cart.seats = cart.seats.filter(seat => !taken.has(seatCode(seat.row, seat.seat)));
      if (currentRoute().view === 'oplata' && currentRoute().id === event.id) go('mesta', event.id);
      flash('Эти места уже заняты. Выберите другие.');
      return;
    }
    const id = `IK-${crypto.randomUUID().slice(0, 8).toUpperCase()}`;
    data.orders.unshift({id, eventId: event.id, time: cart.time, lines});
    const persisted = saveStorage();
    if (state.cart === cart) state.cart = null;
    const route = currentRoute();
    if (route.view === 'oplata' && route.id === event.id) {
      history.replaceState(null, '', routeLink('gotovo', id));
      render();
    } else {
      renderChrome(route.view);
    }
    if (!persisted) flash('Скачайте билет, пока страница открыта');
  }, 560);
}

function scrollResults() {
  $('#catalog-content').scrollIntoView({behavior: requestMotion() ? 'smooth' : 'auto', block: 'start'});
}

document.addEventListener('click', click => {
  const target = click.target.closest('button, a.skip');
  if (!target || target.disabled) return;
  const attrs = target.dataset;
  const {id} = currentRoute();
  const event = eventBy(id);
  const cart = state.cart;
  if (target.matches('.skip')) {
    click.preventDefault();
    page.focus();
    return;
  }
  if (attrs.favorite) changeFavorite(attrs.favorite);
  if ('slide' in attrs) scrollFeatured(Number(attrs.slide), requestMotion() ? 'smooth' : 'instant');
  if (attrs.category) {
    state.category = attrs.category;
    state.catalog = attrs.category !== 'all';
    updateCatalog();
  }
  if (attrs.collection) {
    state.category = attrs.collection === 'family' ? 'family' : 'all';
    state.period = attrs.collection === 'weekend' || attrs.collection === 'family' ? 'weekend' : 'all';
    state.query = '';
    $('#search input').value = '';
    state.catalog = true;
    updateCatalog();
    scrollResults();
  }
  if ('reset' in attrs) {
    Object.assign(state, {category: 'all', period: 'all', query: '', catalog: false});
    $('#search input').value = '';
    updateCatalog();
    $('[data-category="all"]').focus({preventScroll: true});
  }
  if ('clear' in attrs) {
    const input = $('#search input');
    input.value = '';
    state.query = '';
    updateCatalog();
    input.focus();
  }
  if ('date' in attrs) openDates();
  if ('dialogClose' in attrs) dialog.close();
  if (attrs.showing && event) {
    state.showings[event.id] = attrs.showing;
    document.querySelectorAll('[data-showing]').forEach(button => button.setAttribute('aria-pressed', String(button === target)));
    $('#cover-time').textContent = `${dateTime(attrs.showing)} · ${event.venue}`;
  }
  if (attrs.book && event) startCart(event);
  if (attrs.seat && event && cart) changeSeat(target, event, cart);
  if (attrs.quantity && event && cart) changeQuantity(Number(attrs.quantity), event, cart);
  if ('checkout' in attrs && event && cart && cartLines(event, cart).length) go('oplata', event.id);
  if ('pay' in attrs && event) pay(event, cart, target);
  if (attrs.download) {
    const order = data.orders.find(item => item.id === attrs.download);
    if (order) downloadTicket(order);
  }
});

document.addEventListener('input', change => {
  if (change.target.matches('#search input')) {
    state.query = change.target.value;
    updateCatalog();
  }
});

document.addEventListener('change', change => {
  if (change.target.matches('input[name="tier"]') && state.cart) {
    state.cart.tier = Number(change.target.value);
    $('#selection-summary').innerHTML = selectionSummary(eventBy(state.cart.eventId), state.cart);
  }
});

document.addEventListener('submit', submit => {
  if (submit.target.id === 'search') {
    submit.preventDefault();
    scrollResults();
  }
  if (submit.target.id === 'date-form') {
    submit.preventDefault();
    state.period = new FormData(submit.target).get('period');
    dialog.close();
    updateCatalog();
    if (state.period !== 'all') scrollResults();
  }
});

dialog.addEventListener('click', click => {
  if (click.target === dialog) dialog.close();
});
window.addEventListener('hashchange', () => render());
render(false);
