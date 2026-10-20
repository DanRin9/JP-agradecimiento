/* ============================================================================
   ESTRATEGIA: render de /estrategia-tactical.
   Canal de Telegram (protagonista), el recuento semanal destacado (Zoom + link a
   sus grabaciones), la bitácora de operaciones y el canal de Pre-Mercado.
   ============================================================================ */
(function () {
  'use strict';

  const { ICONOS, estaPendiente, crearBoton, pintarFilasZoom, pintarReconocimientos, seguirCursor } = window.TT;

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
      // Protagonista: ocupa todo el ancho del grid, arriba del recuento.
      {
        clases: 'btn--telegram btn--en-vivo',
        icono: ICONOS.telegram,
        texto: 'Canal de señales, especulación, estrategia y reportes',
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

    // Recuento semanal: tarjeta destacada a todo el ancho, justo debajo del
    // canal de Telegram (segundo hijo del grid), antes de Bitácora y Pre-Mercado.
    const recuento = document.createElement('section');
    recuento.className = 'recuento-zoom recuento-zoom--destacado';
    recuento.setAttribute('aria-label', 'Recuento semanal de estrategia');
    pintarFilasZoom(e.recuento, recuento);
    if (e.recuento.grabaciones && !recuento.hidden) {
      const enlace = crearBoton({
        clases: 'btn--compacto recuento-zoom__grabaciones',
        icono: ICONOS.video,
        texto: e.recuento.grabaciones.texto,
        href: e.recuento.grabaciones.href,
      });
      enlace.removeAttribute('target');   // mismo sitio: misma pestaña
      enlace.removeAttribute('rel');
      recuento.appendChild(enlace);
    }
    cont.insertBefore(recuento, cont.children[1] || null);
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
