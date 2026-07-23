/* ============================================================================
   VIDEO-INTRO: render de /video-intro-tactical.
   Programa "De Cero a Tactical Investor". A diferencia de estrategia.js, acá no
   hay nada pendiente por completar: el PDF y los 4 videos ya existen, así que no
   se usa estaPendiente().
   ============================================================================ */
(function () {
  'use strict';

  const { ICONOS, crearBoton, pintarReconocimientos, seguirCursor } = window.TT;

  function embedURL(youtubeId) {
    return 'https://www.youtube.com/embed/' + youtubeId;
  }

  function crearModuloVideo(modulo, orden) {
    const art = document.createElement('article');
    art.className = 'video-modulo';
    art.style.setProperty('--orden', orden);

    const titulo = document.createElement('h2');
    titulo.className = 'video-modulo__titulo';
    titulo.textContent = modulo.titulo;
    art.appendChild(titulo);

    const embed = document.createElement('div');
    embed.className = 'video-modulo__embed';
    const iframe = document.createElement('iframe');
    iframe.src = embedURL(modulo.youtubeId);
    iframe.title = modulo.titulo;
    iframe.loading = 'lazy';
    iframe.allowFullscreen = true;
    iframe.setAttribute('allow', 'encrypted-media; picture-in-picture');
    embed.appendChild(iframe);
    art.appendChild(embed);

    return art;
  }

  function render() {
    const cfg = window.CONFIG || CONFIG;
    const v = cfg.videoIntro;

    const cont = document.getElementById('modulos');
    cont.innerHTML = '';

    const botonPdf = crearBoton({
      clases: 'btn--hotmart video-pdf',
      icono: ICONOS.documento,
      texto: v.pdfTexto,
      href: v.pdfUrl,
    });
    botonPdf.classList.add('btn--links');
    botonPdf.setAttribute('download', '');   // fuerza la descarga en vez de abrir el PDF en la pestaña
    botonPdf.style.setProperty('--orden', 0);
    seguirCursor(botonPdf);
    cont.appendChild(botonPdf);

    v.modulos.forEach(function (modulo, i) {
      cont.appendChild(crearModuloVideo(modulo, i + 1));
    });

    pintarReconocimientos(cfg, document.getElementById('reconocimientos'));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();
