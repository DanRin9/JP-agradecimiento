/* ============================================================================
   ESTRATEGIA: render de /estrategia-tactical.
   Tres accesos: la estrategia en vivo (Telegram), la bitácora de operaciones y el
   canal de Pre-Mercado.
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

    const bitPend = estaPendiente(e.bitacora);
    if (bitPend) pendientes.push('estrategia.bitacora');

    const premercadoPend = estaPendiente(e.canalPremercado);
    if (premercadoPend) pendientes.push('estrategia.canalPremercado');

    const vivoPend = estaPendiente(e.enVivo);
    if (vivoPend) pendientes.push('estrategia.enVivo');

    const definiciones = [
      // Protagonista: ocupa todo el ancho del grid arriba de los otros dos.
      {
        clases: 'btn--telegram btn--en-vivo',
        icono: ICONOS.telegram,
        texto: 'Estrategia en vivo aquí',
        href: e.enVivo,
        pendiente: vivoPend,
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
