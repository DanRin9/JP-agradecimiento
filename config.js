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
    exness: 'EXNESS_LIVE_URL',         // TODO: reemplazar cuando exista el live recurrente en Exness
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
        ],
      },
    ],
  },

  /* --------------------------------------------------------------------------
     MES DE ACOMPAÑAMIENTO (/mes-de-acompanamiento)
     Hub para el público general del programa: qué sesiones en vivo hay, cuándo
     son y por dónde entrar, más el contacto de asesoría tributaria y el acceso
     a la membresía incluido ese mes. Ningún link existe todavía: `links` es el
     ÚNICO objeto que hay que tocar cuando lleguen. Mientras un valor siga en
     '', la tarjeta/botón correspondiente sale como "Disponible pronto" y se
     activa sola al llenarlo (mismo mecanismo de TT.estaPendiente que el resto
     del sitio: '' cuenta como pendiente).
     -------------------------------------------------------------------------- */
  mesAcompanamiento: {
    // >>> ACTUALIZAR ACÁ cuando lleguen los links <<<
    links: {
      operacionVivo: 'https://us06web.zoom.us/j/89901146503?pwd=rXRHf8kd1IwqfWTIV8k7OHOaEk2jeD.1',
      recuentoSemanal: 'https://www.youtube.com/@JPTacticalTrading',
      officeHoursFelipe: 'https://meet.google.com/tfn-trsu-pvs?authuser=1&hs=122',
      officeHoursEsteban: 'https://meet.google.com/nyn-czmi-ttw?authuser=1&hs=122',
      ordenesIB: 'https://us06web.zoom.us/j/83891369495?pwd=sZqHllwrvale2sCN1I3hdblwUMHVey.1',
      membresia: 'https://pay.hotmart.com/S106746711K?off=2a9f79ae',
      andresCorreo: '',           // dirección pelada, sin "mailto:"
      andresInstagram: '',
      andresWhatsapp: '',         // solo dígitos con indicativo, ej. 573001234567
    },

    bloques: {
      operacionVivo: {
        titulo: 'Operación en Vivo',
        con: 'Juan Pablo',
        tipo: 'recurrente',
        descripcion: 'Ver a Juan Pablo operar en vivo: trading y activos en tiempo real.',
        diasTexto: 'Jueves y viernes',
        horaInicio: '08:00',
        horaFin: '09:00',
        duracionMinutos: 60,
        fechas: [
          '2026-09-17', '2026-09-18',
          '2026-09-24', '2026-09-25',
          '2026-10-01', '2026-10-02',
          '2026-10-08', '2026-10-09',
        ],
        notaDestacada: 'La primera sesión (jueves 17) abre con el paso a paso para crear tu cuenta en el nuevo bróker BitGet.',
        linkKey: 'operacionVivo',
      },
      recuentoSemanal: {
        titulo: 'Recuento de Estrategia Semanal',
        con: 'Juan Pablo',
        tipo: 'recurrente',
        descripcion: 'Juan Pablo analiza su estrategia sobre ciertos activos de su portafolio (no la totalidad) y responde preguntas.',
        diasTexto: 'Todos los martes',
        horaInicio: '11:00',
        horaFin: null,              // no se especificó, se muestra solo la hora de inicio
        duracionMinutos: 60,        // asumido para el .ics, igual que el resto del mes: confirmar
        fechas: ['2026-09-15', '2026-09-22', '2026-09-29', '2026-10-06'],
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
            fechas: ['2026-09-14', '2026-09-21', '2026-09-28', '2026-10-05'],
            linkKey: 'officeHoursFelipe',
          },
          {
            clave: 'esteban',
            con: 'Esteban',
            diaTexto: 'Miércoles',
            horaInicio: '16:00',
            horaFin: '17:00',
            duracionMinutos: 60,
            fechas: ['2026-09-16', '2026-09-23', '2026-09-30', '2026-10-07'],
            linkKey: 'officeHoursEsteban',
          },
        ],
      },
      ordenesIB: {
        titulo: 'Tipos de Órdenes en Interactive Brokers',
        con: 'Esteban y Felipe',
        tipo: 'unica',
        fecha: '2026-09-16',
        horaInicio: '08:00',
        horaFin: null,
        duracionMinutos: 60,        // no se especificó, asumido igual que el resto: confirmar
        descripcion: 'Es cómo poner órdenes y cuáles son los tipos de órdenes en IB.',
        linkKey: 'ordenesIB',
      },
    },

    asesoriaTributaria: {
      titulo: 'Asesoría Tributaria con Andrés',
      descripcion: 'No es una sesión programada: es contacto directo para casos tributarios puntuales.',
      notaMencion: 'Al escribirle, mencioná que vas de parte de Juan Pablo.',
      contactos: [
        { tipo: 'correo', linkKey: 'andresCorreo', etiqueta: 'Escribir por correo' },
        { tipo: 'instagram', linkKey: 'andresInstagram', etiqueta: 'Escribir por Instagram' },
        { tipo: 'whatsapp', linkKey: 'andresWhatsapp', etiqueta: 'Escribir por WhatsApp' },
      ],
    },

    membresia: {
      titulo: 'Acceso a la Membresía por un Mes',
      descripcion: 'Tu acceso a la membresía premium queda incluido durante todo el mes de acompañamiento.',
      textoBoton: 'Obtén tu mes gratis de membresía',
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
