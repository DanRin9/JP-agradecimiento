/* ============================================================================
   SOPORTE: render de /soporte. Una tarjeta por categoría de problema, cada una
   con sus botones de WhatsApp. Todo sale de CONFIG.soporte.
   ============================================================================ */
(function () {
  'use strict';

  const { ICONOS, estaPendiente, crearBoton, waLink, pintarReconocimientos, seguirCursor } = window.TT;

  function el(tag, clase, texto) {
    const nodo = document.createElement(tag);
    if (clase) nodo.className = clase;
    if (texto !== undefined) nodo.textContent = texto;
    return nodo;
  }

  function crearBotonContacto(contacto, indice) {
    const pendiente = estaPendiente(contacto.numero);
    const btn = crearBoton({
      clases: 'btn--wa-grupo btn--links soporte-btn',
      icono: ICONOS.whatsapp,
      texto: 'Escribir a ' + contacto.nombre,
      href: pendiente ? '' : waLink(contacto.numero),
      pendiente: pendiente,
      etiquetaPendiente: 'Disponible pronto',
    });
    btn.style.setProperty('--orden', indice);
    btn.querySelector('.btn__texto').appendChild(el('span', 'soporte-btn__numero', contacto.mostrar));
    seguirCursor(btn);
    return btn;
  }

  function crearTarjeta(categoria, indice) {
    const card = el('section', 'soporte-card');
    card.appendChild(el('span', 'soporte-card__con', categoria.con));
    card.appendChild(el('h2', 'soporte-card__titulo', categoria.titulo));
    card.appendChild(el('p', 'soporte-card__descripcion', categoria.descripcion));

    const acciones = el('div', 'soporte-card__acciones');
    categoria.contactos.forEach(function (contacto) {
      acciones.appendChild(crearBotonContacto(contacto, indice));
    });
    card.appendChild(acciones);
    return card;
  }

  function render() {
    const cfg = window.CONFIG || CONFIG;
    const cont = document.getElementById('soporte');
    cont.innerHTML = '';
    cfg.soporte.categorias.forEach(function (categoria, i) {
      cont.appendChild(crearTarjeta(categoria, i));
    });
    pintarReconocimientos(cfg, document.getElementById('reconocimientos'));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();
