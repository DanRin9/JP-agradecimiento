/* ============================================================================
   CONFIG: único archivo que hay que tocar para actualizar la landing.
   Todo lo variable vive acá. No hay links sueltos en el HTML.

   PENDIENTES: buscá "TODO" abajo. Hay 2.
   ============================================================================ */

const CONFIG = {

  /* --------------------------------------------------------------------------
     ZONA DE MIEMBROS (HOTMART)
     El botón principal de la página.

     >>> PARA ACTIVARLO CUANDO CIERRE LA NEGOCIACIÓN CON HOTMART: <<<
     Cambiá `enabled` a true. El link ya está.
     -------------------------------------------------------------------------- */
  hotmart: {
    enabled: true,
    url: 'https://hotmart.com/es/club/tactical-investors',
    labelSoon: 'Próximamente',
  },

  /* --------------------------------------------------------------------------
     CANALES COMPARTIDOS (iguales para Básica y Premium)
     -------------------------------------------------------------------------- */
  shared: {
    whatsappCS: '573245942816',
  },

  /* --------------------------------------------------------------------------
     ESTRATEGIA TACTICAL (/estrategia-tactical)
     Los tres botones de esa página. A diferencia del resto, acá los links ya son
     reales, así que los botones salen activos (salvo los que siguen marcados TODO).
     -------------------------------------------------------------------------- */
  estrategia: {
    bitacora: 'https://bitacora.ttrading.shop',
    canalPremercado: 'https://whatsapp.com/channel/0029VaNf7Pq23n3Xfc3Rpt3D',
    enVivo: 'https://t.me/TacticalJP_bot',

    // Secciones de Zoom bajo los botones. Cada sesión sale como
    // fila con su botón. `hasta` (ISO con hora Colombia) la oculta sola cuando
    // ya pasó; sin `hasta` se queda siempre.
    recuento: {
      titulo: 'Recuento semanal de estrategia',
      sesiones: [
        {
          cuando: 'Miércoles 14 de octubre',
          hora: '11:00 a. m.',
          link: 'https://us06web.zoom.us/j/88257240638?pwd=Ue6axcYcVhkMVbOqiSsLvWJLaay6zs.1',
          hasta: '2026-10-14T13:00:00-05:00',
        },
        {
          cuando: 'Todos los lunes, desde el 19 de octubre',
          hora: '8:00 a. m.',
          link: 'https://us06web.zoom.us/j/84882620322?pwd=YbXQwcaKBsJllbObR2cZuOzRmr0DbO.1',
        },
      ],
    },

    // Mismo formato que `recuento`, sale como segunda sección de Zoom.
    operacionVivo: {
      titulo: 'Operación en Vivo y Especulación',
      sesiones: [
        {
          cuando: 'Todos los jueves',
          hora: '8:00 a. m.',
          link: 'https://us06web.zoom.us/j/81011036363?pwd=NOiR0CAiqsgzNxbPFhjQBeGH2qN2hb.1',
        },
      ],
    },
  },

  /* --------------------------------------------------------------------------
     DE CERO A TACTICAL INVESTOR (/video-intro-tactical)
     Programa premium separado de la membresía. Página pública solo con el link,
     sin gate. Los videos están subidos a YouTube como "no listados": nadie los
     encuentra buscando, solo con el link del embed.
     -------------------------------------------------------------------------- */
  videoIntro: {
    badge: 'Programa Premium',
    titulo: 'De Cero a Tactical Investor',
    subtitulo: 'Los métodos de Juan Pablo Vieira, paso a paso.',
    pdfTexto: 'Descarga la introducción del programa',
    pdfUrl: '/assets/de-cero-a-tactical-introduccion-2026.pdf',
    modulos: [
      { titulo: 'Introducción: El Sistema Circulatorio del Mercado', youtubeId: 'Q64biFwECPY' },
      { titulo: 'Macroeconomía del Trading', youtubeId: '2xFYgbf_vmc' },
      { titulo: 'Psicología de los Ciclos y Supervivencia', youtubeId: 'XpYsRLAGMBU' },
      { titulo: 'Introducción a los Mercados Financieros', youtubeId: 'ASjhS7tM6a4' },
    ],
  },

  /* --------------------------------------------------------------------------
     GRABACIONES 2026 (/grabaciones-2026)
     Archivo de las 12 sesiones en vivo del programa "De Cero a Tactical
     Investor" (4 semanas x 3 sesiones), más el array `categorias` (sesiones
     de apoyo, operación en vivo del mercado, etc: no ligadas a ninguna
     semana, mismo shape que `semana.grabaciones`).
     Cada `youtubeId: null` es una sesión todavía sin grabar/subir: se muestra
     como "Próximamente" en vez de ocultarse, para que el alumno vea que
     faltan y cuántas.
     -------------------------------------------------------------------------- */
  grabaciones: {
    semanas: [
      {
        numero: 1,
        tema: 'Fundamentos y contexto',
        disponible: true,
        grabaciones: [
          {
            titulo: null,   // se arma solo como "Sesión 1 - Semana 1" (ver grabaciones.js)
            fecha: '18 de agosto',
            youtubeId: 'xyrlx0iFmaw',
            descripcion: '',
          },
          {
            titulo: null,
            fecha: '19 de agosto',
            youtubeId: 'lOsZZCEWouU',
            descripcion: '',
          },
          {
            titulo: null,
            fecha: '20 de agosto',
            youtubeId: 'NHBOA2R2o6o',
            descripcion: '',
          },
        ],
      },
      {
        numero: 2,
        tema: 'El corazón técnico',
        disponible: true,
        grabaciones: [
          {
            titulo: null,
            fecha: '25 de agosto',
            youtubeId: 'Vwq7YYCpl_Q',
            descripcion: '',
          },
          {
            titulo: null,
            fecha: '26 de agosto',
            youtubeId: 'xQrAGFqqRkU',
            descripcion: '',
          },
          {
            titulo: null,
            fecha: '27 de agosto',
            youtubeId: 'GLrX7c9WHTA',
            descripcion: '',
          },
        ],
      },
      {
        numero: 3,
        tema: 'Construir y ejecutar',
        disponible: true,
        grabaciones: [
          {
            titulo: null,
            fecha: '1 de septiembre',
            youtubeId: '1X7JJNpUm6s',
            descripcion: '',
          },
          {
            titulo: null,
            fecha: '2 de septiembre',
            youtubeId: 'EOrOMs32rrE',
            descripcion: '',
          },
          {
            titulo: null,
            fecha: '3 de septiembre',
            youtubeId: '6kO9znO18eI',
            descripcion: '',
          },
        ],
      },
      {
        numero: 4,
        tema: 'Operar en vivo y cierre',
        disponible: true,
        grabaciones: [
          {
            titulo: null,
            fecha: '8 de septiembre',
            youtubeId: '2RqYwA8J3Ho',
            descripcion: '',
          },
          {
            titulo: null,
            fecha: '9 de septiembre',
            youtubeId: '46Dn7I6y3u8',
            descripcion: '',
          },
          {
            titulo: null,
            fecha: '10 de septiembre',
            youtubeId: 'FfQmB_NmjDA',
            descripcion: '',
          },
        ],
      },
    ],

    // Categorías de sesiones que no pertenecen a una semana puntual del
    // programa (apoyo, operación en vivo del mercado, etc). Mismo shape que
    // semana.grabaciones. Cada una es una tarjeta más en la vista principal,
    // al mismo nivel que Semana 1-4, y su detalle reusa el layout de dos
    // columnas. `clave` arma el hash de su URL (#<clave>); `etiqueta` es el
    // texto fijo de la tarjeta y del detalle; `tema` es el subtítulo.
    categorias: [
      {
        clave: 'extra',
        etiqueta: 'Sesiones extra',
        tema: 'Ayuda e introducción a conceptos',
        grabaciones: [
          {
            titulo: 'Sesión extra de apoyo',
            fecha: null,
            youtubeId: 'xcnv3aU1P24',
            descripcion: 'Un tutorial completo de configuración de tu cuenta en Exness, más un repaso de conceptos financieros clave y las dudas más comunes del programa, resuelto por el equipo técnico de JP.',
          },
          {
            titulo: null,
            fecha: null,
            youtubeId: 'o6gmJaXZJXA',
            descripcion: '',
          },
          {
            titulo: null,
            fecha: null,
            youtubeId: 'SkkhNj9--0s',
            descripcion: '',
          },
          {
            titulo: 'Sesión de Interactive Brokers',
            fecha: '16 de septiembre',
            youtubeId: 'sundFljaggU',
            descripcion: '',
          },
          {
            titulo: 'Office Hours con Esteban',
            fecha: '23 de septiembre',
            youtubeId: 'uxcmJtPb4Q8',
            descripcion: '',
          },
          {
            titulo: 'Sesión extraordinaria de nivelación con Felipe y Juan Pablo',
            fecha: null,
            youtubeId: 'Te5M9MKfGOw',
            descripcion: '',
          },
        ],
      },
      {
        clave: 'operacion-vivo',
        etiqueta: 'Sesiones de Operación en Vivo',
        tema: 'Operación de la estrategia en tiempo real',
        grabaciones: [
          {
            titulo: null,
            fecha: '11 de septiembre, 7:00 a. m.',
            youtubeId: 'sYg31YPAOIk',
            descripcion: '',
          },
          {
            titulo: null,
            fecha: null,
            youtubeId: '4s8Ztnb--FQ',
            descripcion: '',
          },
          {
            titulo: null,
            fecha: '24 de septiembre',
            youtubeId: 'A94Rqg4fC5k',
            descripcion: '',
          },
          {
            titulo: null,
            fecha: '25 de septiembre',
            youtubeId: '4zUoSrIQCjo',
            descripcion: '',
          },
          {
            titulo: null,
            fecha: '1 de octubre',
            youtubeId: 'Pyak50nSdl4',
            descripcion: '',
          },
          {
            titulo: null,
            fecha: '2 de octubre',
            youtubeId: 'AfLAjgXqO2s',
            descripcion: '',
          },
          {
            titulo: null,
            fecha: '8 de octubre',
            youtubeId: 'zzKCadiVBlA',
            descripcion: '',
          },
          {
            titulo: null,
            fecha: '9 de octubre',
            youtubeId: '7qapt1jwWYA',
            descripcion: '',
          },
        ],
      },
    ],
  },

  /* --------------------------------------------------------------------------
     RECUENTOS SEMANALES (/recuentos-semanales)
     Solo las grabaciones del Recuento de Estrategia Semanal (martes con Juan
     Pablo). Agregar cada recuento nuevo al FINAL del array: la página los
     muestra del más nuevo al más viejo. `titulo: null` → "Recuento de estrategia".
     -------------------------------------------------------------------------- */
  recuentos: {
    grabaciones: [
      { titulo: null, fecha: '22 de septiembre', youtubeId: 'uzqbjn3jN5Y', descripcion: '' },
      { titulo: null, fecha: '29 de septiembre', youtubeId: 'FKsdZS1DWqA', descripcion: '' },
      { titulo: null, fecha: '6 de octubre', youtubeId: 'T6MAS0Tt8Lw', descripcion: '' },
      { titulo: null, fecha: '14 de octubre', youtubeId: 'ilmRXO0wQjs', descripcion: '' },
    ],
  },

  /* --------------------------------------------------------------------------
     GRABACIONES DEL MES EXTRA (/grabaciones-extra)
     Misma página y mismo grabaciones.js que /grabaciones-2026 (la página elige
     esta fuente con data-grabaciones en el <body>). Sin semanas: solo las tres
     categorías. Desde el 14 de octubre de 2026 los recuentos, la operación en
     vivo y las office hours nuevas van AQUÍ, al final de cada array.
     -------------------------------------------------------------------------- */
  grabacionesExtra: {
    hero: {
      titulo: 'Grabaciones del <em>mes extra</em>',
      subtitulo: 'Recuentos, operación en vivo y office hours, del 14 de octubre al 12 de noviembre.',
    },
    textoVolver: '← Todas las grabaciones',
    semanas: [],
    categorias: [
      {
        clave: 'recuentos',
        etiqueta: 'Recuentos de Estrategia',
        tema: 'El repaso semanal de Juan Pablo',
        grabaciones: [
          {
            titulo: null,
            fecha: '14 de octubre',
            youtubeId: 'ilmRXO0wQjs',
            descripcion: '',
          },
        ],
      },
      {
        clave: 'operacion-vivo',
        etiqueta: 'Operación en Vivo',
        tema: 'Operación de la estrategia en tiempo real',
        grabaciones: [
          {
            titulo: null,
            fecha: '15 de octubre',
            youtubeId: 't7Pz51HJim0',
            descripcion: '',
          },
        ],
      },
      {
        clave: 'office-hours',
        etiqueta: 'Office Hours',
        tema: 'Preguntas y acompañamiento con Felipe y Esteban',
        grabaciones: [],
      },
    ],
  },

  /* --------------------------------------------------------------------------
     MES EXTRA (/mes-extra, antes /mes-de-acompanamiento)
     Hub del mes extra (14 oct al 12 nov de 2026): qué sesiones en vivo hay,
     cuándo son y por dónde entrar, el botón a /grabaciones-extra, el contacto
     de asesoría tributaria y el acceso a la membresía. La clave sigue siendo
     `mesAcompanamiento` por compatibilidad con acompanamiento.js. Un link en
     '' sale como "Disponible pronto" (TT.estaPendiente).
     -------------------------------------------------------------------------- */
  mesAcompanamiento: {
    // >>> ACTUALIZAR ACÁ cuando lleguen los links <<<
    links: {
      operacionVivo: 'https://us06web.zoom.us/j/81011036363?pwd=NOiR0CAiqsgzNxbPFhjQBeGH2qN2hb.1',
      recuentoSemanal: 'https://us06web.zoom.us/j/84882620322?pwd=YbXQwcaKBsJllbObR2cZuOzRmr0DbO.1',
      recuentoMiercoles14: 'https://us06web.zoom.us/j/88257240638?pwd=Ue6axcYcVhkMVbOqiSsLvWJLaay6zs.1',
      officeHoursFelipe: 'https://us06web.zoom.us/j/87596208918?pwd=ie8mWilTCsl05LTyK4TQfsZ4XSOtmN.1',
      officeHoursEsteban: 'https://us06web.zoom.us/j/84301272282?pwd=r6gKwcjvNhcO5ibGtRsc7YmnLFZVva.1',
      membresia: 'https://pay.hotmart.com/S106746711K?off=2a9f79ae',
      andresCorreo: 'Contacto@duranwealth.com',   // dirección pelada, sin "mailto:"
      andresInstagram: 'https://instagram.com/duranwealth',
      andresWhatsapp: '573142903494',             // solo dígitos con indicativo, ej. 573001234567
    },

    bloques: {
      operacionVivo: {
        titulo: 'Operación en Vivo',
        con: 'Juan Pablo',
        tipo: 'recurrente',
        descripcion: 'Ver a Juan Pablo operar en vivo: trading y activos en tiempo real.',
        diasTexto: 'Todos los jueves',
        horaInicio: '08:00',
        horaFin: '09:00',
        duracionMinutos: 60,
        fechas: ['2026-10-15', '2026-10-22', '2026-10-29', '2026-11-05', '2026-11-12'],
        linkKey: 'operacionVivo',
      },
      recuentoSemanal: {
        titulo: 'Recuento de Estrategia Semanal',
        con: 'Juan Pablo',
        tipo: 'recurrente',
        descripcion: 'Juan Pablo analiza su estrategia sobre ciertos activos de su portafolio (no la totalidad) y responde preguntas.',
        diasTexto: 'Todos los lunes',
        horaInicio: '08:00',
        horaFin: null,              // no se especificó, se muestra solo la hora de inicio
        duracionMinutos: 60,        // asumido para el .ics: confirmar
        fechas: ['2026-10-19', '2026-10-26', '2026-11-02', '2026-11-09'],
        notaDestacada: 'La semana del 12 de octubre el recuento es el miércoles 14 a las 11:00 a. m. (hora Colombia).',
        linkKey: 'recuentoSemanal',
      },
      officeHours: {
        titulo: 'Office Hours',
        tipo: 'recurrente-doble',
        descripcion: 'Sesiones de preguntas, apoyo y acompañamiento con el equipo técnico.',
        subBloques: [
          {
            clave: 'felipe',
            con: 'Felipe',
            diaTexto: 'Lunes',
            horaInicio: '18:00',
            horaFin: '19:00',
            duracionMinutos: 60,
            fechas: ['2026-10-19', '2026-10-26', '2026-11-02', '2026-11-09'],
            linkKey: 'officeHoursFelipe',
          },
          {
            clave: 'esteban',
            con: 'Esteban',
            diaTexto: 'Miércoles',
            horaInicio: '16:00',
            horaFin: '17:00',
            duracionMinutos: 60,
            fechas: ['2026-10-14', '2026-10-21', '2026-10-28', '2026-11-04', '2026-11-11'],
            linkKey: 'officeHoursEsteban',
          },
        ],
      },
      // Excepción de la semana del 12 de octubre: el recuento cae miércoles.
      // Sale como "sesión única" y desaparece sola cuando ya terminó.
      recuentoMiercoles14: {
        titulo: 'Recuento de Estrategia, semana del 12 de octubre',
        con: 'Juan Pablo',
        tipo: 'unica',
        fecha: '2026-10-14',
        horaInicio: '11:00',
        horaFin: null,
        duracionMinutos: 60,
        descripcion: 'Esta semana el recuento se mueve al miércoles. Desde el 19 de octubre vuelve a ser los lunes a las 8:00 a. m.',
        linkKey: 'recuentoMiercoles14',
      },
    },

    // Mini sección con el botón a /grabaciones-extra.
    grabaciones: {
      titulo: 'Grabaciones extra',
      descripcion: 'Aquí quedan las grabaciones de los recuentos, la operación en vivo y las office hours del mes extra.',
      textoBoton: 'Ver grabaciones extra',
      href: '/grabaciones-extra',
    },

    asesoriaTributaria: {
      titulo: 'Asesoría Tributaria con Andrés',
      descripcion: 'No es una sesión programada: es contacto directo para casos tributarios puntuales.',
      notaMencion: 'Al escribirle, menciona que vas de parte de Juan Pablo.',
      contactos: [
        { tipo: 'correo', linkKey: 'andresCorreo', etiqueta: 'Escribir por correo' },
        { tipo: 'instagram', linkKey: 'andresInstagram', etiqueta: 'Escribir por Instagram' },
        { tipo: 'whatsapp', linkKey: 'andresWhatsapp', etiqueta: 'Escribir por WhatsApp' },
      ],
    },

    membresia: {
      titulo: 'Acceso a la Membresía por un Mes',
      descripcion: 'Tu acceso a la membresía premium queda incluido durante todo el mes extra.',
      textoBoton: 'Obtén tu mes gratis de membresía',
      notaPago: 'Vas a ver una pasarela de pago que te pide los datos de tu tarjeta: es normal, así se activa tu período de prueba de 30 días.',
      notaPagoDestacada: 'No se hace ningún cobro durante esos 30 días. El primer cobro de la membresía se hace hasta el día 31.',
    },
  },

  /* --------------------------------------------------------------------------
     SESIÓN DE ONBOARDING
     El botón lleva directo a este link de registro de Zoom.
     -------------------------------------------------------------------------- */
  onboarding: {
    titulo: 'Sesión de Onboarding, Tactical Trading',
    descripcion: 'Sesión de bienvenida y onboarding de tu membresía de Tactical Trading con el equipo.',
    registroUrl: 'https://us06web.zoom.us/meeting/register/lUi4uR6sQ6KOlTVmP6gnvg',
    zoomLink: 'https://us06web.zoom.us/j/83942944549?pwd=ikYh0CRObhc9dst3u98ycw3ahzpZRg.1',

    // Fecha de la PRIMERA sesión, en formato YYYY-MM-DD. Tiene que caer viernes.
    // A partir de acá el evento se repite todos los viernes automáticamente.
    primeraSesion: '2026-07-17',       // TODO: confirmar la fecha real de arranque
    horaInicio: '19:00',               // hora Colombia (24h)
    duracionMinutos: 60,
    recordatorioMinutos: 30,           // aviso previo que se agenda junto al evento
  },

  /* --------------------------------------------------------------------------
     TIERS
     Cada clave corresponde al `data-tier` del <body> de cada página.
     -------------------------------------------------------------------------- */
  tiers: {
    basica: {
      badge: 'Membresía Básica',
      whatsappGrupo: 'https://chat.whatsapp.com/DvA3GBU0qzvAryd0CZEJAR?s=cl&p=i&ilr=4',
      telegram: 'https://t.me/+IPDeHZUDFzMxMTFh',
    },
    premium: {
      badge: 'Membresía Premium',
      whatsappGrupo: 'https://chat.whatsapp.com/FpLc71qGE9p26d7Wbw1FPy?s=cl&p=i&ilr=4',
      telegram: 'https://t.me/+kFpsUGJY2y9jZmYx',
    },
  },

  /* --------------------------------------------------------------------------
     COPY
     -------------------------------------------------------------------------- */
  copy: {
    titulo: '¡Bienvenido a Tactical Trading!',
    subtitulo: 'Ahora eres parte de la comunidad de trading más exclusiva de Colombia.',
    parrafo: 'Estás acompañado por el trader reconocido por la Bolsa de Valores de Colombia, y desde hoy tienes acceso a todo lo que tu membresía incluye.',
    botones: {
      grupo: 'Únete al grupo de WhatsApp de tu membresía',
      soporte: '¿Dudas? Escríbenos: Soporte y Customer Success',
      hotmart: 'Ingresa a tu Zona de Miembros',
      telegram: 'Únete al Canal de Telegram: Señales y Estrategia',
      agenda: 'Agenda tu sesión de Onboarding',
    },
  },

  /* --------------------------------------------------------------------------
     FOOTER
     Para agregar un reconocimiento: dejá el .webp en /assets y sumá una línea acá.
     `alto` es la altura de render en px: se ajusta a ojo, no matemáticamente,
     porque un wordmark ancho y un medallón cuadrado no pesan igual a la misma altura.
     Los logos se muestran en escala de grises al 55% para que la fila lea pareja.
     -------------------------------------------------------------------------- */
  reconocimientos: [
    { src: '/assets/rec-bvc.webp',              alt: 'Bolsa de Valores de Colombia', alto: 40 },
    { src: '/assets/rec-rankia.webp',           alt: 'Rankia Awards 2024',           alto: 44 },
    { src: '/assets/rec-banrep.webp',           alt: 'Banco de la República',        alto: 44 },
    { src: '/assets/rec-bolsa-millonaria.webp', alt: 'Bolsa Millonaria',             alto: 38 },
    // Más bajo que el resto a propósito: es un wordmark ancho y a igual altura
    // pesa mucho más que los medallones, dominando a los premios reales.
    { src: '/assets/rec-exness-team-pro.webp',  alt: 'Exness Team Pro',              alto: 19 },
  ],

  footer: {
    tagline: 'Juan Pablo Vieira, Mejor trader del país según la BVC',
    sitio: { texto: 'ttrading.co', url: 'https://www.ttrading.co' },
    legal: 'Tactical Assets S.A.S.',
  },
};
