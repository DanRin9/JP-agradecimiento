/* ============================================================================
   ACOMPAÑAMIENTO: render de /mes-de-acompanamiento. Vista única (sin
   location.hash): hero con la vigencia y la próxima sesión calculadas, resumen
   de la semana, tarjetas de sesión recurrente, franja de office hours, sesión
   única de IB, contacto de Andrés y bloque de membresía. Todo sale de
   CONFIG.mesAcompanamiento; nada se escribe a mano en el marcado.
   ============================================================================ */
(function () {
  'use strict';

  const { ICONOS, estaPendiente, crearBoton, waLink, descargarICSEvento, pintarReconocimientos } = window.TT;

  const DIA_CORTO = ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'];
  const DIA_LARGO = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
  const MES_CORTO = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
  const MES_LARGO = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
                      'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

  /* --- Fechas: mismo idiom UTC-safe que cronograma1.html/shared.js. Partir el
     ISO a mano y construir en UTC, nunca `new Date('2026-09-17')`: ese
     constructor da medianoche UTC y leído con getters locales en Colombia
     (GMT-5) devuelve el día ANTERIOR. -------------------------------------- */
  function partes(iso) {
    const trozos = iso.split('-').map(Number);
    const f = new Date(Date.UTC(trozos[0], trozos[1] - 1, trozos[2]));
    return { anio: trozos[0], mes: trozos[1], dia: trozos[2], diaSemana: f.getUTCDay() };
  }

  function fechaCorta(iso) {
    const p = partes(iso);
    return DIA_CORTO[p.diaSemana] + ' ' + p.dia + ' ' + MES_CORTO[p.mes - 1];
  }

  function fechaLarga(iso) {
    const p = partes(iso);
    return DIA_LARGO[p.diaSemana] + ' ' + p.dia + ' de ' + MES_LARGO[p.mes - 1];
  }

  function pad(n) { return String(n).padStart(2, '0'); }

  // "8:00 a. m." / "6:00 p. m."
  function horaLegible(hhmm) {
    const partesHora = hhmm.split(':').map(Number);
    const hh = partesHora[0];
    const mm = partesHora[1];
    const periodo = hh < 12 ? 'a. m.' : 'p. m.';
    let h12 = hh % 12;
    if (h12 === 0) h12 = 12;
    return h12 + ':' + pad(mm) + ' ' + periodo;
  }

  // Instante real, para comparar contra `new Date()` del cliente. Colombia es
  // UTC-5 fijo (sin horario de verano, mismo supuesto que ya usa el .ics de
  // onboarding en shared.js): sumar 5 horas pasa de hora Colombia a UTC real.
  // Para FORMATEAR una fecha se usa la fecha "flotante" de arriba; esto es
  // solo para decidir "¿ya pasó?" / "¿cuál es la próxima?".
  function fechaHoraUTC(iso, hhmm) {
    const f = iso.split('-').map(Number);
    const h = hhmm.split(':').map(Number);
    return new Date(Date.UTC(f[0], f[1] - 1, f[2], h[0] + 5, h[1]));
  }

  // Una sesión se atenúa recién cuando TERMINÓ, no cuando empezó: así no se
  // atenúa una sesión que está ocurriendo ahora mismo.
  function sesionYaTermino(fecha, horaInicio, duracionMinutos, ahora) {
    const fin = new Date(fechaHoraUTC(fecha, horaInicio).getTime() + duracionMinutos * 60000);
    return fin < ahora;
  }

  /* --- Aplanar todos los bloques en una sola lista de ocurrencias, para
     calcular la próxima sesión global y el resumen semanal. ---------------- */
  function generarOcurrencias(cfg) {
    const b = cfg.mesAcompanamiento.bloques;
    const ocurrencias = [];

    [b.operacionVivo, b.recuentoSemanal].forEach(function (bloque) {
      bloque.fechas.forEach(function (fecha) {
        ocurrencias.push({
          etiqueta: bloque.titulo + ', con ' + bloque.con,
          fecha: fecha,
          horaInicio: bloque.horaInicio,
          duracionMinutos: bloque.duracionMinutos,
        });
      });
    });

    b.officeHours.subBloques.forEach(function (sub) {
      sub.fechas.forEach(function (fecha) {
        ocurrencias.push({
          etiqueta: 'Office Hours con ' + sub.con,
          fecha: fecha,
          horaInicio: sub.horaInicio,
          duracionMinutos: sub.duracionMinutos,
        });
      });
    });

    ocurrencias.push({
      etiqueta: b.ordenesIB.titulo,
      fecha: b.ordenesIB.fecha,
      horaInicio: b.ordenesIB.horaInicio,
      duracionMinutos: b.ordenesIB.duracionMinutos,
    });

    return ocurrencias;
  }

  function calcularProximaGlobal(ocurrencias, ahora) {
    let proxima = null;
    ocurrencias.forEach(function (o) {
      const instante = fechaHoraUTC(o.fecha, o.horaInicio);
      if (instante > ahora && (!proxima || instante < proxima.instante)) {
        proxima = { etiqueta: o.etiqueta, fecha: o.fecha, horaInicio: o.horaInicio, instante: instante };
      }
    });
    return proxima;
  }

  // Estado de cada fecha dentro de una lista ordenada: la primera que todavía
  // no termina se marca "proxima", las que ya terminaron se marcan "pasada".
  function estadosDeFechas(fechas, horaInicio, duracionMinutos, ahora) {
    let yaMarcoProxima = false;
    return fechas.map(function (fecha) {
      const pasada = sesionYaTermino(fecha, horaInicio, duracionMinutos, ahora);
      let estado = 'normal';
      if (pasada) {
        estado = 'pasada';
      } else if (!yaMarcoProxima) {
        estado = 'proxima';
        yaMarcoProxima = true;
      }
      return { fecha: fecha, estado: estado };
    });
  }

  function el(tag, clase, texto) {
    const nodo = document.createElement(tag);
    if (clase) nodo.className = clase;
    if (texto !== undefined) nodo.textContent = texto;
    return nodo;
  }

  function crearListaFechas(fechas, horaInicio, duracionMinutos, ahora) {
    const lista = el('ul', 'acomp-card__fechas');
    estadosDeFechas(fechas, horaInicio, duracionMinutos, ahora).forEach(function (f) {
      const item = document.createElement('li');
      const claseChip = 'acomp-fecha-chip' + (f.estado !== 'normal' ? ' acomp-fecha-chip--' + f.estado : '');
      const chip = el('time', claseChip, fechaCorta(f.fecha));
      chip.setAttribute('datetime', f.fecha);
      item.appendChild(chip);
      lista.appendChild(item);
    });
    return lista;
  }

  function crearHorario(textoDia, horaInicio, horaFin) {
    const p = el('p', 'acomp-card__horario');
    const ico = document.createElement('span');
    ico.innerHTML = ICONOS.calendario;
    p.appendChild(ico);
    const texto = horaFin
      ? textoDia + ', ' + horaLegible(horaInicio) + ' a ' + horaLegible(horaFin)
      : textoDia + ', ' + horaLegible(horaInicio);
    p.appendChild(document.createTextNode(texto));
    return p;
  }

  // recuentoSemanal se ve en un canal de YouTube, no en una videollamada: el
  // botón dice "Ver en vivo" ahí en vez de "Unirme".
  function crearBotonUnirme(cfg, linkKey, texto) {
    const href = cfg.mesAcompanamiento.links[linkKey];
    return crearBoton({
      clases: 'btn--sistema btn--compacto',
      icono: ICONOS.video,
      texto: texto || 'Unirme',
      href: href,
      pendiente: estaPendiente(href),
      etiquetaPendiente: 'Disponible pronto',
    });
  }

  // El botón de calendario nunca se bloquea, aunque el link todavía esté
  // vacío: sirve para separar el horario igual, y reduce preguntas repetidas.
  function crearBotonCalendario(opts) {
    return crearBoton({
      clases: 'btn--compacto',
      icono: ICONOS.calendario,
      texto: 'Agregar al calendario',
      onClick: function () {
        const pendiente = estaPendiente(opts.href);
        descargarICSEvento({
          uidBase: opts.uidBase,
          titulo: opts.titulo,
          descripcion: opts.descripcion + (pendiente ? '\n\nLink: se confirma pronto.' : '\n\nLink: ' + opts.href),
          ubicacion: pendiente ? 'Se confirma pronto' : opts.href,
          fechas: opts.fechas,
          horaInicio: opts.horaInicio,
          duracionMinutos: opts.duracionMinutos,
        }, opts.nombreArchivo);
      },
    });
  }

  /* --- Tarjeta de sesión recurrente (Operación en Vivo, Recuento Semanal) - */
  function crearTarjetaCard(clave, bloque, cfg, ahora) {
    const card = el('div', 'acomp-card acomp-card--' + clave);

    card.appendChild(el('span', 'acomp-card__con', 'Con ' + bloque.con));
    card.appendChild(el('h3', 'acomp-card__titulo', bloque.titulo));
    card.appendChild(crearHorario(bloque.diasTexto, bloque.horaInicio, bloque.horaFin));
    card.appendChild(crearListaFechas(bloque.fechas, bloque.horaInicio, bloque.duracionMinutos, ahora));

    if (bloque.notaDestacada) {
      card.appendChild(el('p', 'acomp-aviso', bloque.notaDestacada));
    }

    const acciones = el('div', 'acomp-card__acciones');
    acciones.appendChild(crearBotonUnirme(cfg, bloque.linkKey, clave === 'recuento' ? 'Ver en vivo' : null));
    acciones.appendChild(crearBotonCalendario({
      uidBase: 'acomp-' + clave,
      titulo: bloque.titulo,
      descripcion: bloque.titulo + ', con ' + bloque.con + '.',
      href: cfg.mesAcompanamiento.links[bloque.linkKey],
      fechas: bloque.fechas,
      horaInicio: bloque.horaInicio,
      duracionMinutos: bloque.duracionMinutos,
      nombreArchivo: clave + '-tactical-trading.ics',
    }));
    card.appendChild(acciones);

    return card;
  }

  /* --- Office Hours: franja con dos filas (Felipe / Esteban) -------------- */
  function crearFilaOfficeHours(sub, cfg, ahora) {
    const fila = el('div', 'acomp-office__fila');

    const info = el('div', 'acomp-office__info');
    info.appendChild(el('strong', 'acomp-office__con', sub.con));
    info.appendChild(crearHorario(sub.diaTexto, sub.horaInicio, sub.horaFin));
    fila.appendChild(info);

    fila.appendChild(crearListaFechas(sub.fechas, sub.horaInicio, sub.duracionMinutos, ahora));

    const acciones = el('div', 'acomp-card__acciones');
    acciones.appendChild(crearBotonUnirme(cfg, sub.linkKey));
    acciones.appendChild(crearBotonCalendario({
      uidBase: 'acomp-office-' + sub.clave,
      titulo: 'Office Hours con ' + sub.con,
      descripcion: 'Office Hours con ' + sub.con + '.',
      href: cfg.mesAcompanamiento.links[sub.linkKey],
      fechas: sub.fechas,
      horaInicio: sub.horaInicio,
      duracionMinutos: sub.duracionMinutos,
      nombreArchivo: 'office-hours-' + sub.clave + '-tactical-trading.ics',
    }));
    fila.appendChild(acciones);

    return fila;
  }

  function crearBloqueOfficeHours(bloque, cfg, ahora) {
    const cont = el('section', 'acomp-office');
    cont.appendChild(el('h3', 'acomp-office__titulo', bloque.titulo));
    bloque.subBloques.forEach(function (sub) {
      cont.appendChild(crearFilaOfficeHours(sub, cfg, ahora));
    });
    return cont;
  }

  /* --- Sesión única: Órdenes IB. Sin lista de fechas (es una sola) y sin
     marcador de "próxima": no aplica a una sesión que no se repite. -------- */
  function crearTarjetaUnica(bloque, cfg) {
    const card = el('section', 'acomp-card--unica');
    card.appendChild(el('span', 'acomp-chip-unica', 'Sesión única'));
    card.appendChild(el('span', 'acomp-card__con', 'Con ' + bloque.con));
    card.appendChild(el('h3', 'acomp-card__titulo', bloque.titulo));
    card.appendChild(crearHorario(fechaLarga(bloque.fecha), bloque.horaInicio, bloque.horaFin));
    card.appendChild(el('p', 'acomp-card__descripcion', bloque.descripcion));

    const acciones = el('div', 'acomp-card__acciones');
    acciones.appendChild(crearBotonUnirme(cfg, bloque.linkKey));
    acciones.appendChild(crearBotonCalendario({
      uidBase: 'acomp-ib',
      titulo: bloque.titulo,
      descripcion: bloque.descripcion,
      href: cfg.mesAcompanamiento.links[bloque.linkKey],
      fechas: [bloque.fecha],
      horaInicio: bloque.horaInicio,
      duracionMinutos: bloque.duracionMinutos,
      nombreArchivo: 'ordenes-ib-tactical-trading.ics',
    }));
    card.appendChild(acciones);

    return card;
  }

  /* --- Andrés: contacto directo, no una sesión ---------------------------- */
  function crearBloqueContacto(bloque, cfg) {
    const cont = el('section', 'acomp-contacto');
    cont.appendChild(el('h2', 'acomp-contacto__titulo', bloque.titulo));
    cont.appendChild(el('p', 'acomp-contacto__descripcion', bloque.descripcion));

    const acciones = el('div', 'acomp-contacto__acciones');
    bloque.contactos.forEach(function (contacto) {
      const valor = cfg.mesAcompanamiento.links[contacto.linkKey];
      const pendiente = estaPendiente(valor);
      let href = '';
      let icono;
      let clases = 'btn--compacto';

      if (contacto.tipo === 'correo') {
        href = pendiente ? '' : 'mailto:' + valor;
        icono = ICONOS.correo;
      } else if (contacto.tipo === 'instagram') {
        href = pendiente ? '' : valor;
        icono = ICONOS.instagram;
      } else if (contacto.tipo === 'whatsapp') {
        href = pendiente ? '' : waLink(valor);
        icono = ICONOS.whatsapp;
        clases += ' btn--wa-soporte';
      }

      acciones.appendChild(crearBoton({
        clases: clases,
        icono: icono,
        texto: contacto.etiqueta,
        href: href,
        pendiente: pendiente,
        etiquetaPendiente: 'Disponible pronto',
      }));
    });
    cont.appendChild(acciones);

    cont.appendChild(el('p', 'acomp-aviso', bloque.notaMencion));

    return cont;
  }

  /* --- Membresía: mayor peso visual de la página -------------------------- */
  function crearBloqueMembresia(bloque, cfg) {
    const cont = el('section', 'acomp-membresia');
    cont.appendChild(el('h2', 'acomp-membresia__titulo', bloque.titulo));
    cont.appendChild(el('p', 'acomp-membresia__descripcion', bloque.descripcion));

    const hotmart = cfg.hotmart;
    let href = cfg.mesAcompanamiento.links.membresia;
    if (!href && hotmart.enabled) href = hotmart.url;
    const pendiente = !hotmart.enabled || estaPendiente(href);

    cont.appendChild(crearBoton({
      clases: 'btn--hotmart',
      icono: ICONOS.hotmart,
      texto: bloque.textoBoton,
      href: href,
      pendiente: pendiente,
      etiquetaPendiente: hotmart.labelSoon,
    }));

    return cont;
  }

  /* --- Cronograma del mes: imagen ya diseñada aparte, descargable --------- */
  function crearBloqueCronograma() {
    const cont = el('section', 'acomp-cronograma');

    const texto = el('div', 'acomp-cronograma__texto');
    texto.appendChild(el('h2', 'acomp-cronograma__titulo', 'Cronograma del mes'));
    texto.appendChild(el('p', 'acomp-cronograma__descripcion',
      'Tu semana tipo y todas las fechas del mes, en una sola imagen.'));

    const boton = document.createElement('a');
    boton.className = 'btn btn--compacto acomp-cronograma__boton';
    boton.href = '/assets/cronograma-mes-acompanamiento.png';
    boton.download = 'cronograma-mes-acompanamiento.png';
    const ico = document.createElement('span');
    ico.className = 'btn__icono';
    ico.innerHTML = ICONOS.descarga;
    boton.appendChild(ico);
    const txt = document.createElement('span');
    txt.className = 'btn__texto';
    txt.textContent = 'Descargar cronograma';
    boton.appendChild(txt);
    texto.appendChild(boton);

    cont.appendChild(texto);

    const miniatura = document.createElement('a');
    miniatura.className = 'acomp-cronograma__miniatura';
    miniatura.href = '/assets/cronograma-mes-acompanamiento.png';
    miniatura.target = '_blank';
    miniatura.rel = 'noopener noreferrer';
    const img = document.createElement('img');
    img.src = '/assets/cronograma-mes-acompanamiento.png';
    img.alt = 'Cronograma del mes de acompañamiento';
    img.loading = 'lazy';
    img.decoding = 'async';
    miniatura.appendChild(img);
    cont.appendChild(miniatura);

    return cont;
  }

  function render() {
    const cfg = window.CONFIG || CONFIG;
    const ma = cfg.mesAcompanamiento;
    const cont = document.getElementById('vista');
    cont.innerHTML = '';

    const ahora = new Date();
    const ocurrencias = generarOcurrencias(cfg);
    const proximaGlobal = calcularProximaGlobal(ocurrencias, ahora);

    /* --- Hero --- */
    const hero = el('section', 'links-hero');
    hero.appendChild(el('span', 'badge', 'Mes de Acompañamiento'));

    const titulo = document.createElement('h1');
    titulo.className = 'links-titulo';
    titulo.innerHTML = 'Tu mes de <em>acompañamiento</em>';
    hero.appendChild(titulo);

    // Vigencia: se calcula sola desde las fechas de config.js, no se escribe a mano.
    const todasLasFechas = ocurrencias.map(function (o) { return o.fecha; }).sort();
    const primeraFecha = todasLasFechas[0];
    const ultimaFecha = todasLasFechas[todasLasFechas.length - 1];
    hero.appendChild(el(
      'p',
      'links-subtitulo',
      'Todo lo que necesitás para acompañar tu operación este mes: cuándo son las sesiones en vivo, ' +
      'por dónde entrar, y cómo resolver dudas puntuales. Va del ' + fechaLarga(primeraFecha) +
      ' al ' + fechaLarga(ultimaFecha) + '.'
    ));

    hero.appendChild(el('p', 'acomp-nota-zona', 'Todos los horarios están en hora Colombia (UTC-5).'));

    if (proximaGlobal) {
      const p = el('p', 'acomp-proxima-global');
      p.appendChild(document.createTextNode('Tu próxima sesión: '));
      const strong = document.createElement('strong');
      strong.textContent = fechaLarga(proximaGlobal.fecha) + ', ' + horaLegible(proximaGlobal.horaInicio) + ', ' + proximaGlobal.etiqueta;
      p.appendChild(strong);
      hero.appendChild(p);
    }

    cont.appendChild(hero);
    cont.appendChild(el('hr', 'divisor divisor--brillo'));

    /* --- Cronograma descargable --- */
    cont.appendChild(crearBloqueCronograma());

    /* --- Sesiones del mes --- */
    cont.appendChild(el('h2', 'acomp-eyebrow', 'Sesiones del mes'));

    const grid = el('div', 'acomp-grid');
    grid.appendChild(crearTarjetaCard('vivo', ma.bloques.operacionVivo, cfg, ahora));
    grid.appendChild(crearTarjetaCard('recuento', ma.bloques.recuentoSemanal, cfg, ahora));
    cont.appendChild(grid);

    cont.appendChild(crearBloqueOfficeHours(ma.bloques.officeHours, cfg, ahora));

    /* --- IB y Andrés: bloques secundarios, lado a lado en desktop --------- */
    const filaSecundaria = el('div', 'acomp-fila-secundaria');
    filaSecundaria.appendChild(crearTarjetaUnica(ma.bloques.ordenesIB, cfg));
    filaSecundaria.appendChild(crearBloqueContacto(ma.asesoriaTributaria, cfg));
    cont.appendChild(filaSecundaria);

    /* --- Membresía --- */
    cont.appendChild(crearBloqueMembresia(ma.membresia, cfg));

    pintarReconocimientos(cfg, document.getElementById('reconocimientos'));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();
