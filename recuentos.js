/* ============================================================================
   RECUENTOS: render de /recuentos-semanales. Un reproductor arriba con el
   recuento activo (por defecto el más nuevo) y debajo la grilla de todos los
   recuentos. "Ver grabación" cambia el video del reproductor sin recargar.
   ============================================================================ */
(function () {
  'use strict';

  const { pintarReconocimientos } = window.TT;

  const TITULO_POR_DEFECTO = 'Recuento de estrategia';

  function embedURL(youtubeId) {
    return 'https://www.youtube.com/embed/' + youtubeId;
  }

  function miniaturaURL(youtubeId) {
    return 'https://i.ytimg.com/vi/' + youtubeId + '/mqdefault.jpg';
  }

  function tituloRecuento(recuento) {
    return recuento.titulo || TITULO_POR_DEFECTO;
  }

  function renderReproductor(bloque, recuento, autoplay) {
    bloque.innerHTML = '';

    const embed = document.createElement('div');
    embed.className = 'reproductor__embed';
    const iframe = document.createElement('iframe');
    iframe.src = embedURL(recuento.youtubeId) + (autoplay ? '?autoplay=1' : '');
    iframe.title = tituloRecuento(recuento);
    iframe.allowFullscreen = true;
    iframe.setAttribute('allow', 'autoplay; encrypted-media; picture-in-picture');
    embed.appendChild(iframe);
    bloque.appendChild(embed);

    const info = document.createElement('div');
    info.className = 'reproductor__info';
    const titulo = document.createElement('h2');
    titulo.className = 'reproductor__titulo';
    titulo.textContent = tituloRecuento(recuento);
    info.appendChild(titulo);
    if (recuento.fecha) {
      const fecha = document.createElement('p');
      fecha.className = 'reproductor__fecha';
      fecha.textContent = recuento.fecha;
      info.appendChild(fecha);
    }
    if (recuento.descripcion) {
      const desc = document.createElement('p');
      desc.className = 'reproductor__descripcion';
      desc.textContent = recuento.descripcion;
      info.appendChild(desc);
    }
    bloque.appendChild(info);
  }

  function crearTarjeta(recuento, activa, onVer) {
    const el = document.createElement('article');
    el.className = 'recuento-card';
    if (activa) el.classList.add('recuento-card--activa');

    const miniatura = document.createElement('button');
    miniatura.type = 'button';
    miniatura.className = 'recuento-card__miniatura';
    miniatura.setAttribute('aria-label', 'Ver ' + tituloRecuento(recuento) + (recuento.fecha ? ', ' + recuento.fecha : ''));
    const img = document.createElement('img');
    img.src = miniaturaURL(recuento.youtubeId);
    img.alt = '';
    img.loading = 'lazy';
    img.decoding = 'async';
    miniatura.appendChild(img);
    miniatura.addEventListener('click', onVer);
    el.appendChild(miniatura);

    const titulo = document.createElement('h3');
    titulo.className = 'recuento-card__titulo';
    titulo.textContent = tituloRecuento(recuento);
    el.appendChild(titulo);

    if (recuento.fecha) {
      const fecha = document.createElement('p');
      fecha.className = 'recuento-card__fecha';
      fecha.textContent = recuento.fecha;
      el.appendChild(fecha);
    }

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'recuento-card__btn';
    btn.textContent = activa ? 'Viendo ahora' : 'Ver grabación';
    btn.addEventListener('click', onVer);
    el.appendChild(btn);

    return el;
  }

  function render() {
    const cfg = window.CONFIG || CONFIG;
    const cont = document.getElementById('vista');
    cont.innerHTML = '';

    const hero = document.createElement('section');
    hero.className = 'links-hero';
    hero.innerHTML =
      '<span class="badge">Todos los martes</span>' +
      '<h1 class="links-titulo">Recuentos de <em>estrategia semanal</em></h1>' +
      '<p class="links-subtitulo">Juan Pablo repasa su estrategia sobre activos del portafolio y responde preguntas. Aquí quedan todas las grabaciones.</p>';
    cont.appendChild(hero);

    // Sin youtubeId no hay nada que mostrar; el array se llena al final, así
    // que se invierte para que el más nuevo quede primero.
    const recuentos = ((cfg.recuentos && cfg.recuentos.grabaciones) || [])
      .filter(function (r) { return r && r.youtubeId; })
      .slice()
      .reverse();

    if (!recuentos.length) {
      const vacio = document.createElement('p');
      vacio.className = 'recuentos-vacio';
      vacio.textContent = 'Pronto vas a encontrar aquí las grabaciones de los recuentos.';
      cont.appendChild(vacio);
      pintarReconocimientos(cfg, document.getElementById('reconocimientos'));
      return;
    }

    let indiceActivo = 0;

    const reproductor = document.createElement('div');
    reproductor.className = 'reproductor recuentos-reproductor';
    cont.appendChild(reproductor);

    const subtitulo = document.createElement('h2');
    subtitulo.className = 'recuentos-lista__titulo';
    subtitulo.textContent = 'Todos los recuentos (' + recuentos.length + ')';
    cont.appendChild(subtitulo);

    const grid = document.createElement('div');
    grid.className = 'recuentos-grid';
    cont.appendChild(grid);

    function pintarGrid() {
      grid.innerHTML = '';
      recuentos.forEach(function (recuento, i) {
        grid.appendChild(crearTarjeta(recuento, i === indiceActivo, function () {
          if (i === indiceActivo) {
            reproductor.scrollIntoView({ behavior: 'smooth', block: 'start' });
            return;
          }
          indiceActivo = i;
          renderReproductor(reproductor, recuentos[i], true);
          pintarGrid();
          reproductor.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }));
      });
    }

    renderReproductor(reproductor, recuentos[indiceActivo], false);
    pintarGrid();
    pintarReconocimientos(cfg, document.getElementById('reconocimientos'));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();
