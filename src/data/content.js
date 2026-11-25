// =============================================================================
// Textos, precios y datos de Buceo Japón.
// Los valores entre [CORCHETES] son pendientes de rellenar.
// =============================================================================

export const site = {
  name: 'Buceo Japón',
  nameJp: '日本の海へ',
  tagline: 'Explora el azul profundo del archipiélago nipón, con guía en español.',
  bookingUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLSel5PNVc8NtL9TXhOoj79PWuz8TpgW3r1cYzdw5K382cqPkUg/viewform',
  instagram: 'https://www.instagram.com/buceojapon/',
  instagramHandle: '@buceojapon',
  facebook: 'https://www.facebook.com/groups/1439553140897037',
  year: 2026,
};

/** Menú principal. `path` es relativo a la raíz del sitio. */
export const nav = [
  { path: 'quien-soy/', label: '¿Quién soy?', jp: '自己紹介' },
  {
    path: 'puntos-buceo/',
    label: 'Puntos de buceo',
    jp: '潜水地',
    submenu: [
      { path: 'puntos-buceo/atami/', label: 'Atami', jp: '熱海' },
      { path: 'puntos-buceo/izu-oceanic-park/', label: 'Izu Oceanic Park', jp: '海公' },
      { path: 'puntos-buceo/yawatano/', label: 'Yawatano', jp: '八幡野' },
      { path: 'puntos-buceo/osezaki/', label: 'Osezaki', jp: '大瀬崎' },
      { path: 'puntos-buceo/kawana/', label: 'Kawana', jp: '川奈' },
    ],
  },
  {
    path: 'japon/',
    label: 'Más sobre Japón',
    jp: '日本の海',
    submenu: [
      { path: 'kuroshio/', label: 'Corriente Kuroshio', jp: '黒潮' },
      { path: 'japon/pais-de-islas/', label: 'Un país de islas', jp: '島国' },
      { path: 'japon/norte-y-sur/', label: 'Del norte al sur', jp: '北から南へ' },
      { path: 'japon/las-estaciones/', label: 'Las estaciones bajo el agua', jp: '四季' },
      { path: 'japon/mares-templados/', label: 'Un mar templado y volcánico', jp: '火山の海' },
    ],
  },
  {
    path: 'informacion-practica/',
    label: 'Información práctica',
    jp: '実用情報',
    submenu: [
      { path: 'informacion-practica/como-llegar/', label: 'Cómo llegar', jp: '行き方' },
      { path: 'informacion-practica/dia-de-buceo/', label: 'Cómo es un día de buceo', jp: 'ダイビングの一日' },
      { path: 'informacion-practica/seguros/', label: 'Seguros en Japón', jp: '保険' },
      { path: 'informacion-practica/documentacion/', label: 'Qué papeles necesito para bucear', jp: '必要書類' },
    ],
  },
  { path: 'tarifas/', label: 'Tarifas', jp: '料金' },
];

export const footerColumns = [

  {
    title: 'Síguenos',
    links: [
      { href: site.instagram, label: 'Instagramm' },
      { href: site.facebook, label: 'Grupo de Facebook' },
    ],
  },
];

export const stats = [
  { value: 'SSI', label: 'instructor oficial freelance', jpValue: 'SSI', jpLabel: 'Instructor oficial' },
  { value: '5 puntos', label: 'en Izu y Numazu', jpValue: '伊豆', jpLabel: 'Múltiples puntos de buceo' },
  { value: '1–4 pax', label: 'grupos pequeños', jpValue: '少人数', jpLabel: 'Grupos de 1 a 4 personas' },
];

export const about = {
  name: 'Israel',
  surname: 'Medrano',
  short: [
    'Maestro de primaria convertido en instructor. Empecé a bucear en 2017, me formé con TossaSub en la Costa Brava, trabajé en Koh Lipe (Tailandia) y en 2025 me mudé a Japón con el equipo en la maleta.',
    'Hoy trabajo como guía adherido a The Wind Drops, en Atami, donde imparto desde el Open Water hasta profundo o traje seco.',
  ],
  quote: 'Me apasiona estar bajo el agua y mostrar el buceo en Japón.',
  quoteShort: 'Me apasiona estar bajo el agua.',
  quoteLong: 'Simplemente me apasiona estar bajo el agua y mostrar el buceo en Japón, lleno de vida y con especies interesantes que a muchos les sorprende encontrar aquí',
  story: [
    'Empecé el Open Water en 2017 sin estar muy convencido de que el buceo fuera para mí. Pero entré al agua y todo me pareció increíble: la calma, el silencio, la ingravidez, la vida marina. Supe enseguida que sería importante en mi vida.',
    'Durante los años siguientes compaginé mi trabajo de maestro de primaria con mi formación de buceo. Trabajé con TossaSub, en Tossa de Mar, donde avancé hasta convertirme en instructor. Después dejé la escuela y trabajé allí un par de temporadas más.',
    'Mis años como maestro me ayudan a transmitir mi pasión y mi amor por el mar. Y, según algunos de mis alumnos, no se me da nada mal.',
    'En el invierno de 2023 quise ampliar fronteras y busqué trabajo en el sudeste asiático. Gracias a unos grandes amigos, encontré enseguida un puesto con Pura Vida, en la isla de Koh Lipe, Tailandia. Allí trabajé tres meses, hasta que me reclamaron los exámenes de mis nuevos estudios.',
    'En 2025 me mudé a Japón. Lo primero que metí en la maleta fue todo mi equipo de buceo y, desde la primera semana, empecé a recorrer los puntos de este maravilloso país. Te aseguro que hay cientos.',
    'Ya llevo más de 1.200 inmersiones en entornos muy distintos, desde arrecifes tropicales hasta costas volcánicas. Siempre con el mismo objetivo: disfrutar del mar y compartir su respeto y fascinación.',
    'Ahora trabajo como guía freelance en Izu, y estoy afiliado a The Wind Drops, un centro de buceo de Atami.',
    'Me gusta transmitir la paz y el bienestar del océano. Por eso buceo sin prisas: prefiero disfrutar de una buena sensación bajo el agua a ver muchas cosas o hacer grandes rutas.'
  ],
  philosophy:
    'De los arrecifes tropicales a las costas volcánicas, el objetivo es disfrutar del mar y compartir ese respeto y fascinación.',
  miniStats: [
    { value: 'Experiencia', label: 'más de 1200 inmersiones' },
    { value: 'SSI', label: 'Instructor oficial' },
    { value: 'Centro asociado', label: 'Inscrito en el centro The Wind Drops' },
  ],
  photos: ['Foto: Tossa de Mar, España', 'Foto: Tailandia', 'Foto: Kerama, Okinawa'],
};

export const timeline = [
  { year: '2017', title: 'Primer Open Water', text: 'No estaba muy convencido… hasta que la calma, el silencio y la ingravidez me atraparon.' },
  { year: '2018', title: 'Staff con TossaSub', text: 'Compaginé la escuela y mi formación en Tossa de Mar hasta convertirme en instructor.' },
  { year: '2023', title: 'Koh Lipe, Tailandia', text: 'Una temporada trabajando con Pura Vida en el sudeste asiático.' },
  { year: '2025', title: 'Rumbo a Japón', text: 'Lo primero en la maleta: el equipo de buceo. Desde la primera semana, explorando Japón.' },
  { year: 'Hoy', title: 'Guía en Izu', text: 'Guía freelance en muchos puntos de la península de Izu.' },
];

/** Puntos de buceo, en el orden de la página «Puntos de buceo». */
export const diveSites = [
  {
    slug: 'kawana',
    name: 'Kawana',
    kanji: '川奈',
    zone: 'Izu',
    type: 'Costa · Macro',
    typeJp: 'Costa',
    highlight: 'Macro',
    summary: 'Nudibranquios, peces rana y gambas sobre arena negra. Ideal para fotógrafos y todos los niveles.',
    summaryJp: 'Nudibranquios, peces rana y gambas sobre arena volcánica negra.',
    description:
      'Un punto costero accesible y muy versátil, perfecto para buceos tranquilos. Famoso por su biodiversidad macro: nudibranquios, peces rana y gambas sobre fondos volcánicos de arena negra y pequeñas paredes.',
    highlights: [
      {
        title: 'Acceso cómodo desde el puerto',
        text: 'La entrada y salida a la playa están acondicionadas con rampas, barandillas y escaleras para facilitar el acceso a pie.',
      },
      {
        title: 'Acceso estacional en barco a Ubacoral',
        text: 'Durante el verano se habilita el acceso en barco a Ubacoral, una zona de coral y relieve submarino.',
      },
      {
        title: 'Tortugas marinas residentes',
        text: 'Kawana es uno de los puntos del este de Izu donde es posible encontrar tortugas verdes residentes, a menudo alimentándose en zonas poco profundas.',
      },
      {
        title: 'Buceo relajado y fotografía macro',
        text: 'El fondo combina arena y bloques rocosos (gorota), con corriente generalmente suave. Es un entorno ideal para buscar peces rana, nudibranquios y caballitos de mar sin prisa.',
      },
    ],
    chips: ['Todos los niveles', 'Fotografía macro'],
    photo: 'Foto: tiburón cornudo',
    photoSrc: '/images/puntos-buceo/kawana.webp',
    meetingTime: 'Itō o estación de Kawana',
    meetingPoint: '8:00 en la estación de Itō o 8:30 en la estación de Kawana',
    depth: '10 - 25 metros',
    levelRecommended: 'Open Water Diver (OWD)',
    species: [
      { name: 'Morena', photo: '/images/especies/morena.jpg', probability: 70 },
      { name: 'Pez roca', photo: '/images/especies/pez roca.jpg', probability: 60 },
      { name: 'Raya guitarra', photo: '/images/especies/raya guitarra.jpg', probability: 30 },
    ],
  },
  {
    slug: 'atami',
    name: 'Atami',
    kanji: '熱海',
    zone: 'Izu',
    type: 'Barco',
    typeJp: 'Barco',
    highlight: 'Corales blandos',
    summary: 'Roca volcánica tapizada de corales blandos blancos, en un pueblo costero muy bien comunicado.',
    summaryJp: 'Roca volcánica cubierta de corales blandos blancos.',
    description:
      'Una inmersión en barco entre formaciones volcánicas y paredes cubiertas de coral blando, a pocos minutos del puerto de Atami.',
    highlights: [
      {
        title: 'Salida en barco a 5 minutos del puerto',
        text: 'Logística rápida y muy cómoda. En apenas 5 minutos de navegación desde el puerto de Atami estás sobre el punto de inmersión.',
      },
      {
        title: 'Topografía volcánica y paredes verticales',
        text: 'Grandes bloques de roca volcánica, cortados y pasadizos submarinos con mucha vida marina.',
      },
      {
        title: 'Paredes tapizadas de coral blando',
        text: 'Gran densidad de corales blandos y abanicos de mar en tonos blancos, rosas, amarillos y morados contrastando con la roca oscura.',
      },
      {
        title: 'Un paisaje ideal para la fotografía submarina',
        text: 'El contraste entre la roca volcánica oscura y los abanicos de coral ofrece escenas llamativas para fotografiar, tanto en gran angular como buscando pequeños detalles entre los relieves.',
      },
    ],
    chips: ['Salida en barco', 'Corales blandos'],
    photo: 'Foto: fondo con corales blancos',
    photoSrc: '/images/puntos-buceo/atami.webp',
    meetingTime: '8:30 ',
    meetingPoint: 'Estación de Atami',
    depth: '15 - 30 metros',
    levelRecommended: 'Advanced Open Water Diver (AOWD)',
    species: [
      { name: 'Escórpora', photo: '/images/especies/escorpora.jpg', probability: 70 },
      {
        name: 'Tiburón cornudo japonés',
        photo: '/images/especies/tiburon cornudo.webp',
        probability: 25,
      },
      { name: 'Nudibranquio naranja', photo: '/images/especies/nudi naranja.jpg', probability: 40 },
    ],
  },
  {
    slug: 'izu-oceanic-park',
    name: 'Izu Oceanic Park',
    kanji: 'IOP',
    zone: 'Izu',
    type: 'Playa',
    typeJp: 'Playa',
    highlight: 'Tortugas',
    featured: true,
    summary:
      'La meca del buceo en la península de Izu. Bloques de lava,  estaciones de limpieza y tortugas, con vida que cambia en cada estación.',
    summaryJp: 'Bloques de lava, cañones, tortugas y estaciones de limpieza.',
    description:
      'La meca del buceo en la península de Izu. Infraestructura impecable, grandes bloques de lava y  estaciones de limpieza, tortugas y una vida que cambia con cada estación.',
    highlights: [
      {
        title: 'Entorno natural bajo la costa de Jogasaki',
        text: 'El punto está dentro de un parque natural, al pie de los característicos acantilados volcánicos de la costa de Jogasaki.',
      },
      {
        title: 'El buzón submarino más profundo de Japón',
        text: 'A 20 metros de profundidad hay un buzón operativo donde se pueden depositar postales impermeables.',
      },
      {
        title: 'Topografía de roca magmática negra',
        text: 'Los fondos están dominados por bloques de lava y formaciones de basalto negro, resultado de la erupción del monte Ōmuro hace unos 4.000 años.',
      },
      {
        title: 'Instalaciones cómodas y completas',
        text: 'El centro cuenta con piscinas de agua caliente para entrar con el traje al salir del mar, duchas exteriores y facilidades para enjuagar el equipo.',
      },
    ],
    chips: ['Infraestructura top', 'Tortugas'],
    photo: 'Foto: atún cazando',
    photoSrc: '/images/puntos-buceo/izu-oceanic-park.webp',
    meetingTime: '8:00 en Itō o 8:30 en la estación de Jōgasaki - Kaigan',
    meetingPoint: 'Itō o estación de Jōgasaki - Kaigan ',
    depth: '10 - 40 metros',
    species: [
      {
        name: 'Pez león',
        photo: '/images/especies/pez leon.jpg',
        probability: 70,
      },
      {
        name: 'Morena dragón',
        photo: '/images/especies/morena dragon.jpg',
        probability: 60,
      },
      {
        name: 'Pez caja',
        photo: '/images/especies/pez caja.jpg',
        probability: 75,
      },
      {
        name: 'Gamba fantasma',
        photo: '/images/especies/gamba fantasma .jpg',
        probability: 60,
      },
      {
        name: 'Nudibranquio azul',
        photo: '/images/especies/nudi azul.jpg',
        probability: 40,
      },
      { name: 'Pez rana', probability: 40 },
    ],
  },
  {
    slug: 'yawatano',
    name: 'Yawatano',
    kanji: '八幡野',
    zone: 'Izu',
    type: 'Playa o barco',
    typeJp: 'Playa · barco',
    highlight: 'Rayas',
    summary: 'Aguas protegidas, arena blanca y arrecife rocoso: rayas y mucha vida local, con calma.',
    summaryJp: 'Aguas protegidas, arena blanca y rayas sobre el arrecife.',
    description:
      'Aguas generalmente protegidas y acceso fácil. La arena blanca contrasta con el arrecife rocoso: hábitat perfecto para rayas y una gran comunidad de peces locales.',
    chips: ['Aguas protegidas', 'Rayas'],
    photo: 'Foto: pez caja',
    photoSrc: '/images/puntos-buceo/yawatano.webp',
    meetingTime: '8:00 en Itō o 8:30 en la estación de Izu-Kōgen',
    meetingPoint: 'Itō o estación de Izu-Kōgen',
    levelRecommended: 'Open Water Diver (OWD)',
    depth: '10 - 20 metros',
    species: [
      {
        name: 'Gamba de coral',
        photo: '/images/especies/gambas de coral.jpg',
        probability: 60,
      },
      {
        name: 'Gamba Periclimenes',
        photo: '/images/especies/gamba periclimedes.jpg',
        probability: 50,
      },
      { name: 'Pez payaso', photo: '/images/especies/pez payaso.jpg', probability: 60 },
    ],
  },
  {
    slug: 'osezaki',
    name: 'Osezaki',
    kanji: '大瀬崎',
    zone: 'Numazu',
    type: 'Bahía',
    typeJp: 'Bahía de Suruga',
    highlight: 'A los pies del Fuji',
    summary: 'A los pies del Fuji, en la bahía de Suruga. Aguas de piscina y especies de profundidad.',
    summaryJp: 'A los pies del Fuji, con especies de profundidad.',
    description:
      'A los pies del Monte Fuji, en la bahía de Suruga. Aguas calmadas como una piscina natural y especies de aguas profundas que suben a la superficie. Un destino de culto.',
    highlights: [
      {
        title: 'Entrada fácil desde una playa de arena',
        text: 'El acceso desde la orilla es cómodo y progresivo, ideal para inmersiones tranquilas y comprobaciones de equipo.',
      },
      {
        title: 'Una bahía muy protegida',
        text: 'La geografía de Osezaki resguarda la zona del viento y las olas, por lo que a menudo permite bucear cuando las condiciones cancelan salidas en otros puntos de Izu. La actividad siempre depende de las condiciones del día y de las indicaciones locales.',
      },
      {
        title: 'Buceo junto al santuario Ose-jinja',
        text: 'La zona rodea el cabo de Osezaki y el histórico santuario Ose-jinja. Desde la superficie, en días despejados, se puede disfrutar de las vistas al monte Fuji.',
      },
      {
        title: 'Gran diversidad de vida marina',
        text: 'Sus fondos ofrecen oportunidades para la fotografía macro, con peces rana, nudibranquios y caballitos de mar, además de especies cuya presencia cambia según la temporada.',
      },
    ],
    chips: ['Vistas al Fuji', 'Especies de profundidad'],
    photo: 'Foto: nudibranquio',
    photoSrc: '/images/puntos-buceo/osezaki.jpg',
    meetingTime: '8:00 ',
    meetingPoint: 'Estación de Numazu',
    levelRecommended: 'Open Water Diver (OWD)',
    depth: '5 - 30 metros',
    species: [
      {
        name: 'Nudibranquios',
        photo: '/images/puntos-buceo/nudiblanco.jpg',
        probability: 60,
      },
      { name: 'Corales blandos', photo: '/images/puntos-buceo/corale.jpg', probability: 60 },
    ],
  },
];

export const ratesIncluded = [
  'Botellas de aire',
  'Tasas de instalaciones y puerto',
  'Guía en español',
  'Transporte desde el punto de encuentro',
];

/** Tarifas por persona para una persona (1 pax). */
export const rates = [
  {
    slug: 'atami',
    name: 'Atami',
    nameJp: '熱海',
    type: 'Barco',
    meetingPoint: 'The Wind Drops o estación de Atami',
    note: 'Escríbeme para consultar las fechas disponibles.',
    gear: '¥7.000',
    rows: [{ label: '2 inmersiones desde barco', short: '2 en barco', price: '¥23.000' }],
    from: '¥23.000',
    fromLabel: 'Barco · 2 inmersiones',
  },
  {
    slug: 'izu-oceanic-park',
    name: 'Izu Oceanic Park',
    nameJp: '伊豆海洋公園',
    shortName: 'IOP',
    type: 'Playa',
    meetingPoint: 'IOP o estación de Numazu / Atami',
    gear: '¥5.000',
    rows: [{ label: '2 inmersiones desde playa', short: '2 desde playa', price: '¥18.000' }],
    from: '¥18.000',
    fromLabel: '2 inmersiones',
  },
  {
    slug: 'yawatano',
    name: 'Yawatano',
    nameJp: '八幡野',
    type: 'Playa o barco',
    meetingPoint: 'estación de Atami o Numazu',
    gear: '¥8.000',
    rows: [
      { label: '2 inmersiones desde playa', short: '2 desde playa', price: '¥18.000' },
      { label: '1 playa + 1 barco', short: 'Playa+barco', price: '¥24.000' },
    ],
    from: '¥18.000',
    fromLabel: '2 inmersiones',
  },
  {
    slug: 'osezaki',
    name: 'Osezaki',
    nameJp: '大瀬崎',
    type: 'Playa',
    meetingPoint: 'Estación de Numazu',
    gear: '¥8.000',
    rows: [{ label: '2 inmersiones desde playa', short: '2 desde playa', price: '¥18.000' }],
    from: '¥18.000',
    fromLabel: '2 inmersiones',
  },
  {
    slug: 'kawana',
    name: 'Kawana',
    nameJp: '川奈',
    type: 'Playa',
    meetingPoint: '8:00 en la estación de Itō o 8:30 en la estación de Kawana',
    gear: '¥8.000',
    rows: [{ label: '2 inmersiones desde playa', short: '2 desde playa', price: '¥18.000' }],
    from: '¥18.000',
    fromLabel: '2 inmersiones',
  },
];

export const courses = {
  title: 'Cursos SSI',
  text: 'Open Water Diver, buceo profundo, traje seco y más',
  price: '[PRECIOS DE LOS CURSOS]',
};

export const gallery = [
  { label: 'Foto: Tiburón cornudo · Kawana', size: 'big' },
  { label: 'Foto: Atún cazando · IOP' },
  { label: 'Foto: Tortuga · IOP' },
  { label: 'Foto: Nudibranquio · Osezaki' },
  { label: 'Foto: Corales blandos · Atami' },
  { label: 'Foto: Pez caja · Yawatano', size: 'wide' },
  { label: 'Foto: Pez rana · Kawana' },
  { label: 'Foto: Raya · Yawatano' },
];

// Pendiente: copiar los textos reales de la web actual.
export const kuroshio = {
  lead: 'Izu está cerca de Tokio y recibe la influencia de la Kuroshio, una gran corriente cálida del Pacífico. No convierte el mar en un acuario tropical permanente —el océano tiene sus propios planes—, pero sí ayuda a explicar la variedad de vida que encontramos aquí.',
  sections: [
    {
      id: 'que-es',
      title: 'Una corriente con mucho recorrido',
      paragraphs: [
        'La Kuroshio, o «corriente negra», lleva aguas cálidas desde el entorno de Filipinas hacia el norte, bordeando Japón. Es una de las grandes corrientes del Pacífico y su recorrido e intensidad cambian con el tiempo.',
        'En Izu, su influencia se cruza con las condiciones locales y las estaciones. Más que una cinta transportadora de fauna, es una de las piezas que hacen que el mar japonés sea tan cambiante.',
      ],
    },
    {
      id: 'vida',
      title: 'La mezcla se nota bajo el agua',
      paragraphs: [
        'El agua cálida y el movimiento de especies desde latitudes más bajas contribuyen a la diversidad de la zona. En los fondos volcánicos de Izu puedes encontrar peces de arrecife, nudibranquios y corales blandos; qué aparece y cuándo depende del lugar y la temporada.',
        'La corriente no trae un menú fijo de animales —por suerte para ellos—. La temperatura, el estado del mar y otros factores locales también influyen en cada inmersión.',
      ],
      photo: {
        src: '/images/fondos%20atami.webp',
        alt: 'Corales blandos sobre el fondo volcánico de Atami, en la península de Izu',
      },
    },
    {
      id: 'izu',
      title: 'Cuatro puntos, muchos matices',
      paragraphs: [
        'Atami, Izu Oceanic Park y Kawana ofrecen paisajes y tipos de inmersión distintos en la zona influenciada por la Kuroshio. Cada punto tiene su propio carácter y la corriente no se nota igual en todos.',
        'Planificamos según la época, tu experiencia y las condiciones del día. Así disfrutamos de lo que el mar ofrece, sin prometer encuentros con cita previa.',
      ],
    },
  ],
  locations: [
    {
      href: 'puntos-buceo/atami/',
      name: 'Atami',
      label: 'Barco · corales blandos',
      description: 'Roca volcánica y paredes cubiertas de vida.',
      photo: '/images/puntos-buceo/atami.webp',
      alt: 'Formaciones de coral blando en Atami',
    },
    {
      href: 'puntos-buceo/izu-oceanic-park/',
      name: 'Izu Oceanic Park',
      label: 'Costa · paisaje volcánico',
      description: 'Un clásico de Izu, con fondos que cambian según la estación.',
      photo: '/images/puntos-buceo/izu-oceanic-park.webp',
      alt: 'Paisaje submarino de Izu Oceanic Park',
    },
    {
      href: 'puntos-buceo/kawana/',
      name: 'Kawana',
      label: 'Costa · vida macro',
      description: 'Un buen lugar para bajar el ritmo y mirar de cerca.',
      photo: '/images/puntos-buceo/kawana.webp',
      alt: 'Fondo marino del punto de buceo de Kawana',
    },
  ],
};

export const japanTopics = [
  {
    slug: 'pais-de-islas',
    label: 'Un país de islas',
    kanji: '島国',
    title: 'Japón, un país de islas',
    lead: 'Un archipiélago enorme significa costas, corrientes y paisajes submarinos distintos. El buceo no se limita a un único tipo de destino tropical.',
    sections: [
      {
        title: 'Miles de costas por explorar',
        paragraphs: [
          'Japón se extiende a lo largo de un archipiélago con mares y climas diversos. Esa geografía ofrece desde bahías resguardadas hasta costas abiertas, islas pequeñas y arrecifes.',
          'Cada zona tiene su carácter. La experiencia depende de la región, la estación, las condiciones del mar y el tipo de inmersión.',
        ],
      },
      {
        title: 'Una forma distinta de viajar',
        paragraphs: [
          'Puedes combinar inmersiones con pueblos costeros, trenes, aguas termales, gastronomía y cultura local. El viaje de buceo también se vive fuera del agua.',
        ],
      },
    ],
  },
  {
    slug: 'norte-y-sur',
    label: 'Del norte al sur',
    kanji: '北から南へ',
    title: 'Del norte al sur: muchos mares en un archipiélago',
    lead: 'La latitud y las corrientes hacen que Japón reúna ambientes marinos muy diferentes. No hay una sola temporada ni un único paisaje submarino para todo el país.',
    sections: [
      {
        title: 'Regiones con personalidad propia',
        paragraphs: [
          'En el norte pueden encontrarse aguas más frías y ecosistemas de clima templado o subártico. En el sur hay zonas subtropicales con arrecifes y especies propias de aguas cálidas.',
          'Entre ambos extremos existe una gran variedad de costas. Izu, donde se centra esta web, ofrece inmersiones de clima templado influenciadas por corrientes oceánicas.',
        ],
      },
      {
        title: 'Elegir la zona adecuada',
        paragraphs: [
          'La mejor zona depende de lo que quieras ver, cuándo viajes y tu experiencia. Antes de reservar conviene comprobar temperatura, visibilidad, corrientes y logística local para las fechas concretas.',
        ],
      },
    ],
  },
  {
    slug: 'las-estaciones',
    label: 'Las estaciones bajo el agua',
    kanji: '四季',
    title: 'Las estaciones también se bucean',
    lead: 'En Japón, el mar cambia a lo largo del año. La temperatura, la visibilidad y las especies pueden variar según la región y las condiciones de cada temporada.',
    sections: [
      {
        title: 'Un paisaje que cambia',
        paragraphs: [
          'En las costas templadas, las estaciones pueden transformar el agua y la vida que encuentras: desde periodos de agua más fría hasta meses más cálidos, con cambios en la actividad y presencia de especies.',
          'No existe un calendario único para todo Japón. La corriente, el tiempo y la ubicación influyen, así que las condiciones de Izu no son necesariamente las mismas que las de Okinawa o Hokkaido.',
        ],
      },
      {
        title: 'Planificar con información local',
        paragraphs: [
          'La época ideal depende de tus prioridades: comodidad térmica, visibilidad, encuentros concretos o disponibilidad de salidas. Consulta las condiciones locales y el equipo recomendado antes de viajar.',
        ],
      },
    ],
  },
  {
    slug: 'mares-templados',
    label: 'Un mar templado y volcánico',
    kanji: '火山の海',
    title: 'Un mar templado, volcánico y lleno de contrastes',
    lead: 'En Izu, el relieve volcánico, las costas rocosas y la vida de aguas templadas ofrecen una experiencia diferente a la imagen habitual del buceo tropical.',
    sections: [
      {
        title: 'Relieve bajo el agua',
        paragraphs: [
          'En distintos puntos de Izu puedes encontrar fondos rocosos, formaciones de lava, paredes, arena oscura y zonas de costa o barco. El paisaje cambia de un punto a otro.',
          'La topografía y las condiciones hacen que cada inmersión requiera adaptar el plan al lugar, al grupo y al estado del mar.',
        ],
      },
      {
        title: 'Más que arrecifes tropicales',
        paragraphs: [
          'El buceo en Japón no es una versión mejor o peor de Filipinas, Tailandia o Maldivas: ofrece otros paisajes y encuentros. En zonas templadas como Izu destacan la vida macro, las especies locales y los cambios estacionales.',
          'Si buscas agua cálida todo el año y grandes arrecifes tropicales, otros destinos pueden encajar mejor. Si te atraen los mares templados, la variedad y explorar un entorno distinto, Japón puede sorprenderte.',
        ],
      },
    ],
  },
];

export const practicalTopics = [
  {
    slug: 'como-llegar',
    label: 'Cómo llegar',
    kanji: '行き方',
    title: 'Cómo llegar a Izu',
    lead: 'Izu está muy cerca de Tokio y llegar es fácil: hay trenes JR y también Shinkansen para acercarte a la península. Además de venir a bucear, puedes quedarte varios días y disfrutar con calma de la naturaleza japonesa, sus paisajes y sus pueblos costeros.',
    routes: [
      {
        destination: 'Atami',
        train: 'Shinkansen · Kodama',
        duration: '25–27 min',
        fare: '≈ ¥3.100',
        fareNote: 'Asiento no reservado · solo ida',
        color: 'shu',
        steps: [
          { station: 'Shin-Yokohama', detail: 'Toma el Kodama con parada en Atami.' },
          { station: 'Atami', detail: 'Trayecto directo, sin transbordos.' },
        ],
      },
      {
        destination: 'Atami',
        train: 'JR convencional · Tokaido Line',
        duration: '1 h 40–50 min',
        fare: '≈ ¥1.600',
        fareNote: 'Solo ida · sin Shinkansen',
        color: 'shu',
        steps: [
          { station: 'Shin-Yokohama', detail: 'JR Yokohama Line hasta Higashi-Kanagawa.' },
          { station: 'Yokohama', detail: 'Cambia a la línea Tokaido en dirección a Atami.' },
          { station: 'Atami', detail: 'Baja en Atami; revisa en los paneles el andén y el servicio.' },
        ],
      },
      {
        destination: 'Numazu',
        train: 'Shinkansen · Kodama + JR',
        duration: '45–55 min',
        fare: '≈ ¥3.450–3.640',
        fareNote: 'Solo ida · según cómo compres los billetes',
        color: 'navy',
        steps: [
          { station: 'Shin-Yokohama', detail: 'Toma un Kodama hasta Mishima.' },
          { station: 'Mishima', detail: 'Cambia a la línea JR Tokaido en dirección a Numazu.' },
          { station: 'Numazu', detail: 'Unos minutos más en tren local hasta Numazu.' },
        ],
      },
      {
        destination: 'Numazu',
        train: 'JR convencional · sin Shinkansen',
        duration: '2 h 05–20 min',
        fare: '≈ ¥2.060',
        fareNote: 'Solo ida · tarifa orientativa',
        color: 'navy',
        steps: [
          { station: 'Shin-Yokohama', detail: 'JR Yokohama Line hasta Higashi-Kanagawa.' },
          { station: 'Yokohama', detail: 'Cambia a la línea Tokaido en dirección a Atami.' },
          { station: 'Atami', detail: 'Continúa en la línea Tokaido hacia Numazu; puede ser necesario cambiar de tren.' },
          { station: 'Numazu', detail: 'Baja en Numazu.' },
        ],
      },
    ],
  },
  {
    slug: 'dia-de-buceo',
    label: 'Cómo es un día de buceo',
    kanji: 'ダイビングの一日',
    title: 'Un día de buceo en Izu',
    lead: 'Quedamos en la estación, nos acercamos al mar y disfrutamos de dos inmersiones sin prisas. Así suele ser una jornada de buceo conmigo.',
    moments: [
      {
        title: 'Nos encontramos en la estación',
        text: 'Quedamos en la estación acordada y, cuando estamos todos, ponemos rumbo juntos al punto de buceo.',
        tag: 'Punto de encuentro',
      },
      {
        title: 'Llegamos y nos preparamos',
        text: 'Te enseño las instalaciones para que sepas dónde cambiarte y dejar tus cosas. Después preparamos y revisamos el equipo con calma.',
        tag: 'Instalaciones y equipo',
      },
      {
        title: 'Briefing y dudas',
        text: 'Antes de entrar al agua repasamos el plan de buceo y lo importante del punto. Este es el momento de preguntar todo lo que necesites.',
        tag: 'Plan de inmersión',
      },
      {
        title: 'Primera inmersión',
        text: '¡Al agua! Seguimos el plan acordado y disfrutamos del fondo a un ritmo cómodo para el grupo.',
        tag: 'Bajo el agua',
      },
      {
        title: 'Pausa en superficie',
        text: 'Descansamos unos 30–40 minutos entre inmersiones. Aprovechamos para recuperar fuerzas y comentar lo que hemos visto.',
        tag: 'Descanso',
      },
      {
        title: 'Segunda inmersión',
        text: 'Volvemos al agua para una segunda inmersión. El plan puede variar según el punto, las condiciones y cómo vaya el día.',
        tag: 'De nuevo al agua',
      },
      {
        title: 'Ducha y vuelta',
        text: 'Al terminar, nos duchamos, nos cambiamos y regresamos juntos a la estación.',
        tag: 'Fin de la jornada',
      },
    ],
    bring: {
      essentials: ['Bañador', 'Toalla', 'Chancletas'],
      personalGear: ['Máscara', 'Ordenador de buceo'],
      note: 'Si tienes material propio, puedes traerlo; la máscara y el ordenador son especialmente útiles si prefieres bucear con los tuyos.',
    },
  },
  {
    slug: 'seguros',
    label: 'Seguros en Japón',
    kanji: '保険',
    title: 'Seguros para bucear en Japón',
    lead: 'Revisa con antelación qué cobertura tienes y qué protección necesitas para bucear durante tu viaje.',
    sections: [
      {
        title: '¿Cómo funciona el seguro de buceo en Japón?',
        paragraphs: [[
          { text: 'Si vienes a bucear a Japón, es importante que sepas que ' },
          { text: 'los centros locales no suelen incluir un seguro médico individual', bold: true },
          { text: ' con tu reserva. Su seguro de empresa cubre su responsabilidad civil, pero ' },
          { text: 'no tus gastos médicos personales, rescates o el uso de cámaras hiperbáricas', bold: true },
          { text: ', que pueden ser muy costosos si no eres residente.' },
        ]],
      },
      {
        title: 'Lo más recomendable: ven asegurado desde casa',
        paragraphs: [[
          { text: 'Para sumergirte con total tranquilidad, lo mejor es que contrates tu propio seguro antes de viajar. Hay opciones para contratar por internet un seguro de buceo de un solo día, y suelen ser bastante económicas.' },
        ]],
        items: [
          { lead: 'Seguro de buceo:',  text: 'Consulta sus coberturas y condiciones para saber si se ajustan a tu viaje.' },
          { lead: 'Sin sorpresas:', text: 'Llegas al centro con todo en regla y listo para disfrutar.' },
          { lead: 'Seguro de ejemplo:',href: 'https://www.segurobuceoaxa.com/', text: 'No tengo ningún acuerdo con Axa pero su página me parece muy fácil e intuitiva. https://www.segurobuceoaxa.com/.' },
        ],
        callout: '¿Tienes dudas sobre qué cobertura necesitas? ¡Escríbenos y te ayudamos!',
      },
    ],
  },
  {
    slug: 'documentacion',
    label: 'Qué papeles necesito para bucear',
    kanji: '必要書類',
    title: 'Qué documentación necesito',
    lead: 'Prepara la información que puede pedir el centro antes de la actividad y confirma los requisitos para tu tipo de inmersión.',
    sections: [
      {
        title: 'Información de buceo',
        paragraphs: ['[Añade aquí qué certificación, registro de inmersiones o información de experiencia se requiere para cada actividad. Confirma los requisitos con el centro.]'],
      },
      {
        title: 'Datos personales y salud',
        paragraphs: ['[Añade aquí qué identificación, formularios o declaración médica se solicitan y qué hacer si una respuesta requiere consulta médica.]'],
      },
    ],
  },
];

export const cta = {
  title: '¿Buceamos juntos?',
  text: 'Cuéntame fechas, nivel y cuántos sois. Te respondo con las salidas disponibles.',
  button: 'Enviar solicitud de reserva',
};
