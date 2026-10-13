/* ============================================================================
   ESTRATEGIA: render de /estrategia-tactical.
   Tres accesos: la estrategia en vivo (Telegram), la bitácora de operaciones y el
   canal de Pre-Mercado. Debajo, los links de Zoom del recuento semanal y
   de la operación en vivo.
   ============================================================================ */
(function () {
  'use strict';

  const { ICONOS, estaPendiente, crearBoton, pintarReconocimientos, seguirCursor } = window.TT;

  // Una sección de filas de Zoom (recuento, operación en vivo). Las que tienen
  // `hasta` y ya pasaron no se pintan; si no queda ninguna, la sección se oculta.
  function pintarBloqueZoom(recuento, cont) {
    if (!cont) return;
    cont.innerHTML = '';
    const ahora = Date.now();
    const sesiones = ((recuento && recuento.sesiones) || []).filter(function (s) {
      return s.link && !estaPendiente(s.link) && (!s.hasta || Date.parse(s.hasta) > ahora);
    });
    cont.hidden = !sesiones.length;
    if (!sesiones.length) return;

    const titulo = document.createElement('h2');
    titulo.className = 'recuento-zoom__titulo';
    titulo.textContent = recuento.titulo;
    cont.appendChild(titulo);

    sesiones.forEach(function (s) {
      const fila = document.createElement('div');
      fila.className = 'recuento-zoom__fila';

      const texto = document.createElement('div');
      texto.className = 'recuento-zoom__texto';
      const cuando = document.createElement('span');
      cuando.className = 'recuento-zoom__cuando';
      cuando.textContent = s.cuando;
      const hora = document.createElement('span');
      hora.className = 'recuento-zoom__hora';
      hora.textContent = s.hora + ' (hora Colombia)';
      texto.appendChild(cuando);
      texto.appendChild(hora);
      fila.appendChild(texto);

      const btn = crearBoton({
        clases: 'btn--sistema recuento-zoom__btn',
        icono: ICONOS.video,
        texto: 'Unirse por Zoom',
        href: s.link,
      });
      fila.appendChild(btn);

      cont.appendChild(fila);
    });
  }

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

    pintarBloqueZoom(e.recuento, document.getElementById('recuento'));
    pintarBloqueZoom(e.operacionVivo, document.getElementById('operacion-vivo'));
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
