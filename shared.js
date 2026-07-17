/* ============================================================================
   SHARED — lo que usan todas las páginas: íconos, botones y el generador de .ics.
   No hay nada configurable acá. Todo lo variable vive en config.js.
   Se expone en window.TT. Cargar SIEMPRE después de config.js.
   ============================================================================ */
(function () {
  'use strict';

  /* --- Íconos (SVG inline: 4 íconos no justifican una librería) ----------- */
  const ICONOS = {
    whatsapp: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.08-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z"/><path fill="currentColor" d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.25-4.38c0-4.54 3.69-8.23 8.23-8.23a8.23 8.23 0 0 1 .01 16.47Z"/></svg>',

    telegram: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.94 4.5 18.6 20.24c-.25 1.11-.91 1.39-1.84.86l-5.09-3.75-2.46 2.36c-.27.27-.5.5-1.02.5l.36-5.17 9.4-8.5c.41-.36-.09-.56-.64-.2L5.7 12.66.7 11.1c-1.09-.34-1.11-1.09.23-1.61L20.53 2.9c.9-.34 1.7.2 1.41 1.6Z"/></svg>',

    hotmart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M11 3a1 1 0 0 1 0 2H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h5a1 1 0 1 1 0 2H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h5Z"/><path fill="currentColor" d="M15.3 7.3a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.4-1.4L17.58 13H10a1 1 0 1 1 0-2h7.59L15.3 8.7a1 1 0 0 1 0-1.4Z"/></svg>',

    calendario: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h1V3a1 1 0 0 1 1-1ZM4 10v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9H4Zm3 3a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm6 0a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1Zm-6 4a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z"/></svg>',
  };

  /* --- Detección de placeholders sin resolver -----------------------------
     Red de seguridad: mientras un dato siga siendo un TODO, el botón sale
     deshabilitado en vez de mandar a un cliente que acaba de pagar a un link
     roto. Se levanta solo cuando pegás el valor real en config.js.          */
  // Tiene que arrancar con letra: un número de WhatsApp real ('573123884238') es
  // todo dígitos y NO puede confundirse con un placeholder.
  const REGEX_PENDIENTE = /^[A-Z_][A-Z0-9_]*$/;    // ej. TELEGRAM_BASICA_URL
  const REGEX_XS = /X{4,}/;                        // ej. 57XXXXXXXXXX

  function estaPendiente(valor) {
    if (!valor || typeof valor !== 'string') return true;
    return REGEX_PENDIENTE.test(valor.trim()) || REGEX_XS.test(valor);
  }

  /* --- Helpers ------------------------------------------------------------ */
  function crearBoton({ clases, icono, texto, href, onClick, pendiente, etiquetaPendiente }) {
    const esBoton = pendiente || !!onClick;
    const el = document.createElement(esBoton ? 'button' : 'a');

    el.className = 'btn ' + clases;

    if (pendiente) {
      el.classList.add('esta-deshabilitado');
      el.disabled = true;
      el.setAttribute('aria-disabled', 'true');
    } else if (onClick) {
      el.type = 'button';
      el.addEventListener('click', onClick);
    } else {
      el.href = href;
      el.target = '_blank';
      el.rel = 'noopener noreferrer';
    }

    const ico = document.createElement('span');
    ico.className = 'btn__icono';
    ico.innerHTML = icono;
    el.appendChild(ico);

    const txt = document.createElement('span');
    txt.className = 'btn__texto';
    txt.textContent = texto;
    el.appendChild(txt);

    if (pendiente && etiquetaPendiente) {
      const chip = document.createElement('span');
      chip.className = 'btn__proximamente';
      chip.textContent = etiquetaPendiente;
      el.appendChild(chip);
    } else if (!pendiente && !onClick) {
      const flecha = document.createElement('span');
      flecha.className = 'btn__flecha';
      flecha.setAttribute('aria-hidden', 'true');
      flecha.textContent = '↗';
      el.appendChild(flecha);
    }

    return el;
  }

  function waLink(numero) {
    return 'https://wa.me/' + String(numero).replace(/\D/g, '');
  }

  /* ==========================================================================
     GENERADOR DE .ICS
     Evento semanal recurrente los viernes, con el link de Zoom fijo.
     ========================================================================== */

  // RFC 5545: las líneas no pueden pasar de 75 octetos. Se parten con CRLF + espacio.
  function plegar(linea) {
    const bytes = new TextEncoder().encode(linea);
    if (bytes.length <= 75) return linea;
    const partes = [];
    let actual = '';
    let largo = 0;
    for (const char of linea) {                 // itera por code point, no por unidad UTF-16
      const n = new TextEncoder().encode(char).length;
      // 74 deja lugar para el espacio de continuación de la línea siguiente
      if (largo + n > (partes.length === 0 ? 75 : 74)) {
        partes.push(actual);
        actual = '';
        largo = 0;
      }
      actual += char;
      largo += n;
    }
    if (actual) partes.push(actual);
    return partes.join('\r\n ');
  }

  // RFC 5545: hay que escapar \ ; , y los saltos de línea en los campos de texto.
  function escapar(txt) {
    return String(txt)
      .replace(/\\/g, '\\\\')
      .replace(/;/g, '\\;')
      .replace(/,/g, '\\,')
      .replace(/\r?\n/g, '\\n');
  }

  function pad(n) { return String(n).padStart(2, '0'); }

  function sumarMinutos(fechaISO, hora, minutos) {
    const [a, m, d] = fechaISO.split('-').map(Number);
    const [hh, mm] = hora.split(':').map(Number);
    // Fecha "flotante": la construimos en UTC y la leemos en UTC, así el huso del
    // navegador no desplaza la hora. El huso real lo fija el VTIMEZONE del .ics.
    const base = new Date(Date.UTC(a, m - 1, d, hh, mm));
    base.setUTCMinutes(base.getUTCMinutes() + minutos);
    return (
      base.getUTCFullYear() + pad(base.getUTCMonth() + 1) + pad(base.getUTCDate()) +
      'T' + pad(base.getUTCHours()) + pad(base.getUTCMinutes()) + '00'
    );
  }

  function construirICS(cfg) {
    const o = cfg.onboarding;
    const inicio = o.primeraSesion.replace(/-/g, '') + 'T' + o.horaInicio.replace(':', '') + '00';
    const fin = sumarMinutos(o.primeraSesion, o.horaInicio, o.duracionMinutos);
    const ahora = new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    const uid = 'onboarding-' + o.primeraSesion + '@tacticaltrading';

    const desc = o.descripcion + '\n\nZoom: ' + o.zoomLink;

    const lineas = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Tactical Trading//Onboarding//ES',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      // Colombia no tiene horario de verano: un offset fijo -05:00 es correcto y estable.
      'BEGIN:VTIMEZONE',
      'TZID:America/Bogota',
      'BEGIN:STANDARD',
      'DTSTART:19700101T000000',
      'TZOFFSETFROM:-0500',
      'TZOFFSETTO:-0500',
      'TZNAME:-05',
      'END:STANDARD',
      'END:VTIMEZONE',
      'BEGIN:VEVENT',
      'UID:' + uid,
      'DTSTAMP:' + ahora,
      'DTSTART;TZID=America/Bogota:' + inicio,
      'DTEND;TZID=America/Bogota:' + fin,
      'RRULE:FREQ=WEEKLY;BYDAY=FR',
      'SUMMARY:' + escapar(o.titulo),
      'DESCRIPTION:' + escapar(desc),
      'LOCATION:' + escapar(o.zoomLink),
      'URL:' + escapar(o.zoomLink),
      'BEGIN:VALARM',
      'TRIGGER:-PT' + o.recordatorioMinutos + 'M',
      'ACTION:DISPLAY',
      'DESCRIPTION:' + escapar(o.titulo),
      'END:VALARM',
      'END:VEVENT',
      'END:VCALENDAR',
    ];

    return lineas.map(plegar).join('\r\n') + '\r\n';
  }

  function descargarICS(cfg) {
    const blob = new Blob([construirICS(cfg)], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'onboarding-tactical-trading.ics';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  }

  /* --- Footer de reconocimientos (idéntico en todas las páginas) ----------- */
  function pintarReconocimientos(cfg, contenedor) {
    contenedor.innerHTML = '';
    cfg.reconocimientos.forEach(function (r) {
      const img = document.createElement('img');
      img.src = r.src;
      img.alt = r.alt;
      img.loading = 'lazy';
      img.decoding = 'async';
      img.style.setProperty('--alto', r.alto);
      contenedor.appendChild(img);
    });
  }

  window.TT = {
    ICONOS: ICONOS,
    estaPendiente: estaPendiente,
    crearBoton: crearBoton,
    waLink: waLink,
    construirICS: construirICS,
    descargarICS: descargarICS,
    pintarReconocimientos: pintarReconocimientos,
  };
})();
