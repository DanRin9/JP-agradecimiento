/* ============================================================================
   SELECTOR — /links-comunidad
   Los dos botones son estáticos en el HTML (rutas fijas, no salen de config).
   Acá solo va lo que necesita JS: el footer de reconocimientos y la luz del cursor.
   ============================================================================ */
(function () {
  'use strict';

  const { pintarReconocimientos, seguirCursor } = window.TT;

  function render() {
    const cfg = window.CONFIG || CONFIG;
    document.querySelectorAll('.btn--tier').forEach(seguirCursor);
    pintarReconocimientos(cfg, document.getElementById('reconocimientos'));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();
