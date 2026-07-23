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
     Los cuatro botones de esa página. A diferencia del resto, acá los links ya son
     reales, así que los botones salen activos (salvo los que siguen marcados TODO).
     -------------------------------------------------------------------------- */
  estrategia: {
    zoom: 'https://www.youtube.com',   // TODO: reemplazar por el link real de Zoom del portafolio en vivo
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
      { titulo: 'Introducción: El Sistema Circulatorio', youtubeId: 'Q64biFwECPY' },
      { titulo: 'Macroeconomía del Trading', youtubeId: '2xFYgbf_vmc' },
      { titulo: 'Psicología de los Ciclos y Supervivencia', youtubeId: 'XpYsRLAGMBU' },
      { titulo: 'Introducción a los Mercados Financieros', youtubeId: 'ASjhS7tM6a4' },
    ],
  },

  /* --------------------------------------------------------------------------
     SESIÓN DE ONBOARDING
     El botón genera un archivo .ics (calendario universal) con estos datos.
     -------------------------------------------------------------------------- */
  onboarding: {
    titulo: 'Sesión de Onboarding, Tactical Trading',
    descripcion: 'Sesión de bienvenida y onboarding de tu membresía de Tactical Trading con el equipo.',
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
