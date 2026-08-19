/* ============================================================================
   GRABACIONES: render de /grabaciones-2026. SPA mínima de una sola página:
   la vista (lista de semanas vs. detalle de una semana) se decide por
   location.hash (#semana-N), sin router y sin recargar. Dentro de una semana,
   cambiar de sesión activa tampoco recarga: solo re-pinta el bloque del
   reproductor.
   ============================================================================ */
(function () {
  'use strict';

  const { pintarReconocimientos, seguirCursor } = window.TT;

  function esSesionPendiente(sesion) {
    return !sesion || !sesion.youtubeId;
  }

  function embedURL(youtubeId) {
    return 'https://www.youtube.com/embed/' + youtubeId;
  }

  function miniaturaURL(youtubeId) {
    return 'https://i.ytimg.com/vi/' + youtubeId + '/mqdefault.jpg';
  }

  function contarDisponibles(semana) {
    return semana.grabaciones.filter(function (g) { return !esSesionPendiente(g); }).length;
  }

  // Convención fija: si una grabación no trae título propio en config.js, se
  // arma como "Sesión N - Semana M" en vez de dejarlo en blanco.
  function tituloSesion(semana, sesion, indice) {
    return sesion.titulo || ('Sesión ' + (indice + 1) + ' - Semana ' + semana.numero);
  }

  function crearTarjetaSemana(semana) {
    const total = semana.grabaciones.length || 3;
    const disponibles = semana.disponible ? contarDisponibles(semana) : 0;

    const el = document.createElement(semana.disponible ? 'a' : 'button');
    el.className = 'btn btn--links btn--semana';
    el.style.setProperty('--orden', semana.numero - 1);

    if (semana.disponible) {
      el.href = '#semana-' + semana.numero;
    } else {
      el.type = 'button';
      el.disabled = true;
      el.classList.add('esta-deshabilitado');
      el.setAttribute('aria-disabled', 'true');
    }

    const numero = document.createElement('span');
    numero.className = 'semana__numero';
    numero.textContent = 'Semana ' + semana.numero;
    el.appendChild(numero);

    const tema = document.createElement('span');
    tema.className = 'semana__tema';
    tema.textContent = semana.tema;
    el.appendChild(tema);

    const pie = document.createElement('span');
    pie.className = 'semana__pie';
    if (semana.disponible) {
      pie.textContent = disponibles + ' de ' + total + ' grabaciones disponibles';
    } else {
      const chip = document.createElement('span');
      chip.className = 'btn__proximamente';
      chip.textContent = 'Disponible próximamente';
      pie.appendChild(chip);
    }
    el.appendChild(pie);

    if (semana.disponible) seguirCursor(el);
    return el;
  }

  function renderLista(cfg, cont) {
    cont.innerHTML = '';

    const hero = document.createElement('section');
    hero.className = 'links-hero';
    hero.innerHTML =
      '<h1 class="links-titulo">Grabaciones de <em>Tactical Investor</em></h1>' +
      '<p class="links-subtitulo">Las 12 sesiones en vivo del programa, organizadas por semana.</p>';
    cont.appendChild(hero);

    const grid = document.createElement('nav');
    grid.className = 'semanas-grid';
    grid.setAttribute('aria-label', 'Semanas del programa');
    cfg.grabaciones.semanas.forEach(function (semana) {
      grid.appendChild(crearTarjetaSemana(semana));
    });
    cont.appendChild(grid);
  }

  function crearTarjetaSesion(semana, sesion, indice, activa, onSelect) {
    const pendiente = esSesionPendiente(sesion);

    const el = document.createElement('button');
    el.type = 'button';
    el.className = 'sesion-card';
    if (activa) el.classList.add('sesion-card--activa');
    if (pendiente) {
      el.classList.add('esta-deshabilitado');
      el.disabled = true;
      el.setAttribute('aria-disabled', 'true');
    } else {
      el.addEventListener('click', function () { onSelect(indice); });
    }

    const miniatura = document.createElement('span');
    miniatura.className = 'sesion-card__miniatura';
    if (!pendiente) {
      const img = document.createElement('img');
      img.src = miniaturaURL(sesion.youtubeId);
      img.alt = '';
      img.loading = 'lazy';
      img.decoding = 'async';
      miniatura.appendChild(img);
    } else {
      const chip = document.createElement('span');
      chip.className = 'btn__proximamente';
      chip.textContent = 'Próximamente';
      miniatura.appendChild(chip);
    }
    el.appendChild(miniatura);

    const texto = document.createElement('span');
    texto.className = 'sesion-card__texto';

    const numero = document.createElement('span');
    numero.className = 'sesion-card__numero';
    numero.textContent = 'Sesión ' + (indice + 1);
    texto.appendChild(numero);

    const titulo = document.createElement('span');
    titulo.className = 'sesion-card__titulo';
    titulo.textContent = pendiente ? 'Por grabar' : tituloSesion(semana, sesion, indice);
    texto.appendChild(titulo);

    if (!pendiente && sesion.fecha) {
      const fecha = document.createElement('span');
      fecha.className = 'sesion-card__fecha';
      fecha.textContent = sesion.fecha;
      texto.appendChild(fecha);
    }

    el.appendChild(texto);
    return el;
  }

  function renderReproductor(cont, semana, indiceActivo) {
    let bloque = cont.querySelector('.reproductor');
    if (!bloque) {
      bloque = document.createElement('div');
      bloque.className = 'reproductor';
      cont.appendChild(bloque);
    }
    bloque.innerHTML = '';

    const sesion = semana.grabaciones[indiceActivo];
    const pendiente = esSesionPendiente(sesion);

    const embed = document.createElement('div');
    embed.className = 'reproductor__embed';
    if (pendiente) {
      const aviso = document.createElement('p');
      aviso.className = 'reproductor__vacio';
      aviso.textContent = 'Esta sesión todavía no está grabada.';
      embed.appendChild(aviso);
    } else {
      const iframe = document.createElement('iframe');
      iframe.src = embedURL(sesion.youtubeId);
      iframe.title = tituloSesion(semana, sesion, indiceActivo);
      iframe.loading = 'lazy';
      iframe.allowFullscreen = true;
      iframe.setAttribute('allow', 'encrypted-media; picture-in-picture');
      embed.appendChild(iframe);
    }
    bloque.appendChild(embed);

    const info = document.createElement('div');
    info.className = 'reproductor__info';
    const titulo = document.createElement('h2');
    titulo.className = 'reproductor__titulo';
    titulo.textContent = pendiente ? 'Sesión ' + (indiceActivo + 1) + ', por grabar' : tituloSesion(semana, sesion, indiceActivo);
    info.appendChild(titulo);

    if (!pendiente && sesion.fecha) {
      const fecha = document.createElement('p');
      fecha.className = 'reproductor__fecha';
      fecha.textContent = sesion.fecha;
      info.appendChild(fecha);
    }
    if (!pendiente && sesion.descripcion) {
      const desc = document.createElement('p');
      desc.className = 'reproductor__descripcion';
      desc.textContent = sesion.descripcion;
      info.appendChild(desc);
    }
    bloque.appendChild(info);
  }

  function renderSemana(cfg, cont, numero) {
    const semanas = cfg.grabaciones.semanas;
    const semana = semanas.find(function (s) { return s.numero === numero; });

    if (!semana || !semana.disponible) {
      location.hash = '';
      return;
    }

    cont.innerHTML = '';

    const nav = document.createElement('div');
    nav.className = 'semana-nav';

    const volver = document.createElement('a');
    volver.className = 'semana-nav__volver';
    volver.href = '#';
    volver.textContent = '← Todas las semanas';
    nav.appendChild(volver);

    const paginacion = document.createElement('div');
    paginacion.className = 'semana-nav__paginacion';
    [numero - 1, numero + 1].forEach(function (n, i) {
      const destino = semanas.find(function (s) { return s.numero === n; });
      const btn = document.createElement(destino && destino.disponible ? 'a' : 'span');
      btn.className = 'semana-nav__flecha';
      btn.textContent = i === 0 ? '‹ Semana ' + n : 'Semana ' + n + ' ›';
      if (destino && destino.disponible) {
        btn.href = '#semana-' + n;
      } else {
        btn.classList.add('semana-nav__flecha--inactiva');
      }
      if (destino) paginacion.appendChild(btn);
    });
    nav.appendChild(paginacion);
    cont.appendChild(nav);

    const hero = document.createElement('section');
    hero.className = 'links-hero links-hero--semana';
    hero.innerHTML =
      '<h1 class="links-titulo">Semana ' + semana.numero + ': <em>' + semana.tema + '</em></h1>';
    cont.appendChild(hero);

    let indiceActivo = semana.grabaciones.findIndex(function (g) { return !esSesionPendiente(g); });
    if (indiceActivo === -1) indiceActivo = 0;

    const detalle = document.createElement('div');
    detalle.className = 'semana-detalle';
    cont.appendChild(detalle);

    const colVideo = document.createElement('div');
    colVideo.className = 'semana-detalle__video';
    detalle.appendChild(colVideo);

    const colSesiones = document.createElement('div');
    colSesiones.className = 'semana-detalle__sesiones';
    detalle.appendChild(colSesiones);

    renderReproductor(colVideo, semana, indiceActivo);

    function pintarSelector() {
      colSesiones.innerHTML = '';
      semana.grabaciones.forEach(function (sesion, indice) {
        colSesiones.appendChild(
          crearTarjetaSesion(semana, sesion, indice, indice === indiceActivo, function (i) {
            indiceActivo = i;
            renderReproductor(colVideo, semana, indiceActivo);
            pintarSelector();
          })
        );
      });
    }
    pintarSelector();
  }

  function render() {
    const cfg = window.CONFIG || CONFIG;
    const cont = document.getElementById('vista');
    const hash = location.hash.replace('#', '');
    const match = hash.match(/^semana-(\d+)$/);

    if (match) {
      renderSemana(cfg, cont, Number(match[1]));
    } else {
      renderLista(cfg, cont);
    }

    pintarReconocimientos(cfg, document.getElementById('reconocimientos'));
  }

  window.addEventListener('hashchange', render);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();
