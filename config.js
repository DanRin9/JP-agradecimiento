/* ============================================================================
   CONFIG — único archivo que hay que tocar para actualizar la landing.
   Todo lo variable vive acá. No hay links sueltos en el HTML.

   PENDIENTES: buscá "TODO" abajo. Hay 5.
   ============================================================================ */

const CONFIG = {

  /* --------------------------------------------------------------------------
     ZONA DE MIEMBROS (HOTMART)
     El botón principal de la página.

     >>> PARA ACTIVARLO CUANDO CIERRE LA NEGOCIACIÓN CON HOTMART: <<<
     1. Pegá el link real en `url`
     2. Cambiá `enabled` a true
     Eso es todo. No hay que tocar ningún otro archivo.
     -------------------------------------------------------------------------- */
  hotmart: {
    enabled: false,
    url: 'HOTMART_MEMBERS_AREA_URL',   // TODO: reemplazar por el link real
    labelSoon: 'Próximamente',
  },

  /* --------------------------------------------------------------------------
     CANALES COMPARTIDOS (iguales para Básica y Premium)
     -------------------------------------------------------------------------- */
  shared: {
    // Formato wa.me: solo dígitos, con indicativo, sin "+" y sin espacios.
    // Ej: +57 312 388 4238  ->  573123884238
    whatsappCS: '57XXXXXXXXXX',        // TODO: reemplazar por el WhatsApp de Customer Success
  },

  /* --------------------------------------------------------------------------
     SESIÓN DE ONBOARDING
     El botón genera un archivo .ics (calendario universal) con estos datos.
     -------------------------------------------------------------------------- */
  onboarding: {
    titulo: 'Sesión de Onboarding — Tactical Trading',
    descripcion: 'Sesión de bienvenida y onboarding de tu membresía de Tactical Trading con el equipo.',
    zoomLink: 'ZOOM_LINK_ONBOARDING',  // TODO: reemplazar por el link de Zoom fijo

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
      // TODO: link de invitación al grupo de WhatsApp de Básica (https://chat.whatsapp.com/...)
      whatsappGrupo: 'WHATSAPP_GRUPO_BASICA_URL',
      // TODO: canal de Telegram de Básica.
      // OJO: el inventario de ttrading.co dice que algunos tiers usan Telegram y otros
      // WhatsApp. Si Básica NO tiene Telegram, poné null y el botón desaparece solo.
      telegram: 'TELEGRAM_BASICA_URL',
    },
    premium: {
      badge: 'Membresía Premium',
      whatsappGrupo: 'WHATSAPP_GRUPO_PREMIUM_URL',  // TODO
      telegram: 'TELEGRAM_PREMIUM_URL',             // TODO
    },
  },

  /* --------------------------------------------------------------------------
     COPY
     -------------------------------------------------------------------------- */
  copy: {
    titulo: '¡Bienvenido a Tactical Trading!',
    subtitulo: 'Ahora eres parte de la comunidad de trading más exclusiva de Colombia.',
    parrafo: 'Estás acompañado por el trader reconocido por la Bolsa de Valores de Colombia — y desde hoy tienes acceso a todo lo que tu membresía incluye.',
    botones: {
      grupo: 'Únete al grupo de WhatsApp de tu membresía',
      soporte: '¿Dudas? Escríbenos — Soporte y Customer Success',
      hotmart: 'Ingresa a tu Zona de Miembros',
      telegram: 'Únete al Canal de Telegram — Señales y Estrategia',
      agenda: 'Agenda tu sesión de Onboarding',
    },
  },

  /* --------------------------------------------------------------------------
     FOOTER
     Para agregar un reconocimiento: dejá el .webp en /assets y sumá una línea acá.
     `alto` es la altura de render en px — se ajusta a ojo, no matemáticamente,
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
    tagline: 'Juan Pablo Vieira — Mejor trader del país según la BVC',
    sitio: { texto: 'ttrading.co', url: 'https://www.ttrading.co' },
    legal: 'Tactical Assets S.A.S.',
  },
};
