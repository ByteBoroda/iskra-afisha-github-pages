const categories = [
  {id: 'all', name: 'Все события', icon: 'grid'},
  {id: 'music', name: 'Концерты', label: 'Концерт', icon: 'music'},
  {id: 'theatre', name: 'Театр', label: 'Театр', icon: 'theatre'},
  {id: 'art', name: 'Выставки', label: 'Выставка', icon: 'art'},
  {id: 'comedy', name: 'Стендап', label: 'Стендап', icon: 'mic'},
  {id: 'sport', name: 'Спорт', label: 'Спорт', icon: 'sport'},
  {id: 'family', name: 'Детям', label: 'Детям', icon: 'star'},
];

const events = [
  {
    id: 'big-club-show', name: 'Zivert · Big Club Show', category: 'music', age: 16,
    image: 'music.webp', hero: 'hero.webp', theme: '#2b0e1e',
    venue: 'МТС Live Холл', address: 'шоссе Энтузиастов, 5, стр. 2',
    times: ['2026-11-13T20:00'], base: 3500, layout: 'zones', front: 'Сцена',
    tiers: [['Танцпол', 'Входной билет без закреплённого места', 0], ['Фан-зона', 'Зона ближе к сцене', 1500], ['VIP-зона', 'Отдельная зона с обзором сцены', 3500]],
    description: 'Zivert, LYRIQ, «Крыли» и «Очки и Кольца» встретятся на одной сцене. Большой клубный концерт для тех, кто хочет услышать знакомые поп-хиты вживую.',
    source: 'https://msk-live-hall.mts.ru/bigclubshow',
  },
  {
    id: 'vals-boston', name: 'Вальс-бостон', category: 'theatre', age: 16,
    image: 'theatre.webp', theme: '#471217',
    venue: 'Театр Эстрады', address: 'Берсеневская набережная, 20/2',
    times: ['2026-11-07T13:00', '2026-11-07T18:00', '2026-11-08T13:00', '2026-11-08T18:00', '2026-11-14T18:00'], base: 1800,
    layout: 'seats', front: 'Сцена', section: 'Партер',
    description: 'Мюзикл на песни Александра Розенбаума. Знакомые мелодии становятся частью истории о городе, любви и выборе.',
    source: 'https://teatr-estrada.ru/afishac',
  },
  {
    id: 'big-standup', name: 'БИГ СТЕНДАП', category: 'comedy', age: 18,
    image: 'comedy.webp', theme: '#0d2c31',
    venue: 'Стендап-клуб на Трубной', address: 'Рождественский бульвар, 10/7, стр. 1',
    times: ['2026-11-08T19:00'], base: 1200, layout: 'zones', front: 'Сцена',
    tiers: [['Стол в зале', 'Посадка за общим столом', 0], ['Стол у сцены', 'Посадка в первых рядах', 500]],
    description: 'Вечер стендапа в камерном клубе на Рождественском бульваре. Несколько комиков выступают за один концерт, у каждого свой взгляд на обычную жизнь.',
    source: 'https://concert.ru/kontserty/big-stand-up/08-11-2026-19-00/',
  },
  {
    id: 'borisov-musatov', name: 'Виктор Борисов-Мусатов. Гармония образа', category: 'art',
    image: 'art.webp', theme: '#23285d',
    venue: 'Третьяковская галерея', address: 'Кадашёвская набережная, 12',
    times: ['2026-11-07', '2026-11-08'], base: 700, layout: 'admission',
    tiers: [['Входной билет', 'Посещение выставки в часы работы', 0]],
    description: 'Выставка посвящена Виктору Борисову-Мусатову. В его живописи портреты и пейзажи напоминают воспоминания: приглушённые цвета, старые усадьбы и фигуры, будто замершие на прогулке.',
    source: 'https://tretyakov.ru/',
  },
  {
    id: 'martin', name: 'Мартин', category: 'music', age: 12,
    image: 'hero.webp', theme: '#2b0e1e',
    venue: 'VK Stadium', address: 'Ленинградский проспект, 80, корп. 17',
    times: ['2026-11-07T20:00'], base: 2900, layout: 'zones', front: 'Сцена',
    tiers: [['Танцпол', 'Входной билет без закреплённого места', 0], ['Фан-зона', 'Зона ближе к сцене', 1500]],
    description: 'Сольный концерт Мартина. В программе прозвучат песни, с которых началась его история, и более свежие релизы.',
    source: 'https://vk-stadium.ru/martin',
  },
  {
    id: 'aladdin', name: 'Волшебная лампа Аладдина', category: 'family', age: 6,
    image: 'family.webp', theme: '#261b46',
    venue: 'Театр кукол им. Образцова', address: 'Садовая-Самотёчная улица, 3',
    times: ['2026-11-08T11:00', '2026-11-08T14:00'], base: 600,
    layout: 'seats', front: 'Сцена', section: 'Партер',
    description: 'Кукольный спектакль по сказке из «Тысячи и одной ночи». Аладдин, хитрый волшебник и джинн из лампы встречаются на сцене театра Образцова.',
    source: 'https://msk.burocultura.ru/events/volshebnaya-lampa-aladdina-6',
  },
  {
    id: 'spartak-admiral', name: 'Спартак — Адмирал', category: 'sport', age: 6,
    image: 'sport.webp', theme: '#26303b',
    venue: 'ДС «Мегаспорт»', address: 'Ходынский бульвар, 3',
    times: ['2026-11-14T16:30'], base: 1000,
    layout: 'seats', front: 'Лёд', section: 'Сектор А',
    description: 'Домашний матч московского «Спартака» против владивостокского «Адмирала» в регулярном чемпионате КХЛ.',
    source: 'https://spartak.ru/matches/902258/',
  },
  {
    id: 'ivan-lubennikov', name: 'Русский художник Иван Лубенников', category: 'art',
    image: 'art.webp', theme: '#23285d',
    venue: 'Третьяковская галерея', address: 'Кадашёвская набережная, 12',
    times: ['2026-11-13', '2026-11-14', '2026-11-15'], base: 700, layout: 'admission',
    tiers: [['Входной билет', 'Посещение выставки в часы работы', 0]],
    description: 'Выставка Ивана Лубенникова, живописца и художника-монументалиста. Она знакомит с его работами и рассказывает о связи его живописи с городской архитектурой.',
    source: 'https://www.tretyakovgallery.ru/tickets/exhibitions/',
  },
];

const editorial = ['big-club-show', 'vals-boston', 'spartak-admiral'];
const weekend = ['vals-boston', 'big-standup', 'borisov-musatov', 'aladdin'];
const coming = ['big-club-show', 'spartak-admiral', 'ivan-lubennikov'];
const periods = [
  {id: 'all', name: 'Все даты'},
  {id: 'weekend', name: '7–8 ноября', from: '2026-11-07', to: '2026-11-08'},
  {id: 'next', name: '13–15 ноября', from: '2026-11-13', to: '2026-11-15'},
];
