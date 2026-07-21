/* ============================================================================
   LINKS — render de /links-comunidad/basica y /links-comunidad/premium.
   Hub de canales de la comunidad. No es una landing de compra: no lleva Hotmart.

   El tier sale del data-tier del <body>, igual que en las landings (app.js).
   Las dos páginas son el mismo diseño: lo único que cambia son los links.
   ============================================================================ */
(function () {
  'use strict';

  const { ICONOS, estaPendiente, crearBoton, waLink, descargarICS,
          pintarReconocimientos, seguirCursor } = window.TT;

  function render() {
    const cfg = window.CONFIG || CONFIG;
    const clave = document.body.dataset.tier;
    const tier = cfg.tiers[clave];

    if (!tier) {
      console.error('[links] data-tier inválido en <body>:', clave);
      return;
    }

    const pendientes = [];

    document.getElementById('badge').textContent = tier.badge;

    const cont = document.getElementById('botones');
    cont.innerHTML = '';

    // El copy va acá y no en CONFIG.copy.botones: ese bloque es de las landings,
    // donde los textos hablan de "tu membresía". Acá nadie compró todavía.
    const definiciones = [];

    // 1. WhatsApp — grupo del tier
    const grupoPend = estaPendiente(tier.whatsappGrupo);
    if (grupoPend) pendientes.push('whatsappGrupo de ' + clave);
    definiciones.push({
      clases: 'btn--wa-grupo',
      icono: ICONOS.whatsapp,
      texto: 'Únete al grupo de WhatsApp',
      href: tier.whatsappGrupo,
      pendiente: grupoPend,
      etiquetaPendiente: cfg.hotmart.labelSoon,
    });

    // 2. Telegram — si el tier no tiene canal (telegram: null), el botón no se dibuja
    if (tier.telegram !== null && tier.telegram !== undefined) {
      const tgPend = estaPendiente(tier.telegram);
      if (tgPend) pendientes.push('telegram de ' + clave);
      definiciones.push({
        clases: 'btn--telegram',
        icono: ICONOS.telegram,
        texto: 'Canal de Telegram — Señales y Estrategia',
        href: tier.telegram,
        pendiente: tgPend,
        etiquetaPendiente: cfg.hotmart.labelSoon,
      });
    }

    // 3. Onboarding — descarga el .ics generado desde config
    const zoomPend = estaPendiente(cfg.onboarding.zoomLink);
    if (zoomPend) pendientes.push('zoomLink');
    definiciones.push({
      clases: 'btn--sistema',
      icono: ICONOS.video,
      texto: 'Agenda tu sesión de Onboarding',
      pendiente: zoomPend,
      etiquetaPendiente: cfg.hotmart.labelSoon,
      onClick: function () { descargarICS(cfg); },
    });

    // 4. WhatsApp — soporte. Último a propósito: es el canal de menor peso.
    const csPend = estaPendiente(cfg.shared.whatsappCS);
    if (csPend) pendientes.push('whatsappCS');
    definiciones.push({
      clases: 'btn--wa-soporte',
      icono: ICONOS.whatsapp,
      texto: '¿Dudas? Escríbenos — Soporte',
      href: csPend ? '' : waLink(cfg.shared.whatsappCS),
      pendiente: csPend,
      etiquetaPendiente: cfg.hotmart.labelSoon,
    });

    definiciones.forEach(function (def, i) {
      const btn = crearBoton(def);
      btn.classList.add('btn--links');
      btn.style.setProperty('--orden', i);   // escalona la animación de entrada
      seguirCursor(btn);
      cont.appendChild(btn);
    });

    pintarReconocimientos(cfg, document.getElementById('reconocimientos'));

    if (pendientes.length) {
      console.warn(
        '[links] Hay ' + pendientes.length + ' dato(s) sin completar en config.js. ' +
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
