/* ============================================================================
   CONTENIDO EXCLUSIVO: render de /contenido-exclusivo.
   Solo dos accesos: el Zoom de la operación en vivo y el grupo de WhatsApp.
   ============================================================================ */
(function () {
  'use strict';

  const { ICONOS, estaPendiente, crearBoton, pintarFilasZoom, pintarReconocimientos, seguirCursor } = window.TT;

  function render() {
    const cfg = window.CONFIG || CONFIG;
    const c = cfg.contenidoExclusivo;

    const cont = document.getElementById('botones');
    cont.innerHTML = '';

    const zoom = document.createElement('section');
    zoom.className = 'recuento-zoom recuento-zoom--destacado';
    zoom.setAttribute('aria-label', c.operacionVivo.titulo);
    pintarFilasZoom(c.operacionVivo, zoom);
    cont.appendChild(zoom);

    const waPend = estaPendiente(c.whatsapp);
    const wa = crearBoton({
      clases: 'btn--wa-grupo btn--en-vivo',
      icono: ICONOS.whatsapp,
      texto: 'Únete al grupo de WhatsApp',
      href: c.whatsapp,
      pendiente: waPend,
      etiquetaPendiente: cfg.hotmart.labelSoon,
    });
    wa.classList.add('btn--links');
    seguirCursor(wa);
    cont.appendChild(wa);

    pintarReconocimientos(cfg, document.getElementById('reconocimientos'));

    if (waPend) {
      console.warn('[contenido-exclusivo] contenidoExclusivo.whatsapp sin completar en config.js.');
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();
