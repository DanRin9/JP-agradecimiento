/* ============================================================================
   ESTRATEGIA — render de /estrategia-tactical.
   Dos accesos: la sesión en vivo (Zoom) y la bitácora de operaciones.
   ============================================================================ */
(function () {
  'use strict';

  const { ICONOS, estaPendiente, crearBoton, pintarReconocimientos, seguirCursor } = window.TT;

  function render() {
    const cfg = window.CONFIG || CONFIG;
    const e = cfg.estrategia;
    const pendientes = [];

    const cont = document.getElementById('botones');
    cont.innerHTML = '';

    const zoomPend = estaPendiente(e.zoom);
    if (zoomPend) pendientes.push('estrategia.zoom');

    const bitPend = estaPendiente(e.bitacora);
    if (bitPend) pendientes.push('estrategia.bitacora');

    const premercadoPend = estaPendiente(e.canalPremercado);
    if (premercadoPend) pendientes.push('estrategia.canalPremercado');

    const exnessPend = estaPendiente(e.exness);
    if (exnessPend) pendientes.push('estrategia.exness');

    const definiciones = [
      {
        clases: 'btn--zoom',
        icono: ICONOS.video,
        texto: 'Entra al portafolio en vivo',
        href: e.zoom,
        pendiente: zoomPend,
        etiquetaPendiente: cfg.hotmart.labelSoon,
      },
      // Dorado: es el estilo de CTA principal del sistema y acá no hay Hotmart,
      // así que no compite con nada. La bitácora es lo que la página vende.
      {
        clases: 'btn--hotmart',
        icono: ICONOS.bitacora,
        texto: 'Abre la Bitácora',
        href: e.bitacora,
        pendiente: bitPend,
        etiquetaPendiente: cfg.hotmart.labelSoon,
      },
      {
        clases: 'btn--wa-soporte',
        icono: ICONOS.whatsapp,
        texto: 'Canal de Pre-Mercado',
        href: e.canalPremercado,
        pendiente: premercadoPend,
        etiquetaPendiente: cfg.hotmart.labelSoon,
      },
      // Todavía no hay live: sale deshabilitado por estaPendiente() hasta que
      // se pegue el link real, igual que cualquier otro botón sin completar.
      {
        clases: 'btn--sistema btn--exness',
        icono: '<img src="/assets/exness-logo.png" alt="Exness" loading="lazy">',
        texto: '',
        href: e.exness,
        pendiente: exnessPend,
        etiquetaPendiente: cfg.hotmart.labelSoon,
      },
    ];

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
        '[estrategia] Hay ' + pendientes.length + ' dato(s) sin completar en config.js. ' +
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
