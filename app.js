/* ============================================================================
   APP — render de las landings de agradecimiento (/basica, /premium).
   Los íconos, los botones y el generador de .ics viven en shared.js (window.TT),
   porque /links-comunidad los reusa. Todo lo variable vive en config.js.
   ============================================================================ */
(function () {
  'use strict';

  const { ICONOS, estaPendiente, crearBoton, waLink, descargarICS, pintarReconocimientos } = window.TT;

  function render() {
    const cfg = window.CONFIG || CONFIG;
    const clave = document.body.dataset.tier;
    const tier = cfg.tiers[clave];

    if (!tier) {
      console.error('[landing] data-tier inválido en <body>:', clave);
      return;
    }

    const pendientes = [];

    /* --- Hero --- */
    document.getElementById('badge').textContent = tier.badge;
    document.getElementById('titulo').textContent = cfg.copy.titulo;
    document.getElementById('subtitulo').textContent = cfg.copy.subtitulo;
    document.getElementById('parrafo').textContent = cfg.copy.parrafo;
    document.title = tier.badge + ' — Tactical Trading';

    /* --- Botones --- */
    const cont = document.getElementById('botones');
    cont.innerHTML = '';
    const c = cfg.copy.botones;

    // 1. WhatsApp — grupo de la membresía
    const grupoPend = estaPendiente(tier.whatsappGrupo);
    if (grupoPend) pendientes.push('whatsappGrupo de ' + clave);
    cont.appendChild(crearBoton({
      clases: 'btn--wa-grupo',
      icono: ICONOS.whatsapp,
      texto: c.grupo,
      href: tier.whatsappGrupo,
      pendiente: grupoPend,
      etiquetaPendiente: cfg.hotmart.labelSoon,
    }));

    // 2. WhatsApp — Customer Success (canal secundario)
    const csPend = estaPendiente(cfg.shared.whatsappCS);
    if (csPend) pendientes.push('whatsappCS');
    cont.appendChild(crearBoton({
      clases: 'btn--wa-soporte',
      icono: ICONOS.whatsapp,
      texto: c.soporte,
      href: csPend ? '' : waLink(cfg.shared.whatsappCS),
      pendiente: csPend,
      etiquetaPendiente: cfg.hotmart.labelSoon,
    }));

    // 3. Zona de Miembros Hotmart — el CTA principal
    const hotPend = !cfg.hotmart.enabled || estaPendiente(cfg.hotmart.url);
    cont.appendChild(crearBoton({
      clases: 'btn--hotmart',
      icono: ICONOS.hotmart,
      texto: c.hotmart,
      href: cfg.hotmart.url,
      pendiente: hotPend,
      etiquetaPendiente: cfg.hotmart.labelSoon,
    }));

    // 4. Telegram — si el tier no tiene canal (telegram: null), el botón no se dibuja
    if (tier.telegram !== null && tier.telegram !== undefined) {
      const tgPend = estaPendiente(tier.telegram);
      if (tgPend) pendientes.push('telegram de ' + clave);
      cont.appendChild(crearBoton({
        clases: 'btn--telegram',
        icono: ICONOS.telegram,
        texto: c.telegram,
        href: tier.telegram,
        pendiente: tgPend,
        etiquetaPendiente: cfg.hotmart.labelSoon,
      }));
    }

    // 5. Onboarding — descarga el .ics generado desde config
    const zoomPend = estaPendiente(cfg.onboarding.zoomLink);
    if (zoomPend) pendientes.push('zoomLink');
    cont.appendChild(crearBoton({
      clases: 'btn--sistema',
      icono: ICONOS.calendario,
      texto: c.agenda,
      pendiente: zoomPend,
      etiquetaPendiente: cfg.hotmart.labelSoon,
      onClick: function () { descargarICS(cfg); },
    }));

    /* --- Footer --- */
    pintarReconocimientos(cfg, document.getElementById('reconocimientos'));

    document.getElementById('footer-tagline').textContent = cfg.footer.tagline;
    const sitio = document.getElementById('footer-sitio');
    sitio.textContent = cfg.footer.sitio.texto;
    sitio.href = cfg.footer.sitio.url;
    document.getElementById('footer-legal').textContent = cfg.footer.legal;

    /* --- Aviso de datos sin completar --- */
    if (pendientes.length) {
      console.warn(
        '[landing] Hay ' + pendientes.length + ' dato(s) sin completar en config.js. ' +
        'Los botones correspondientes salen deshabilitados:\n  · ' + pendientes.join('\n  · ')
      );
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();
