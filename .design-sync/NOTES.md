# NOTES — design-sync de JP Tactical Trading

## Qué es este repo, para el converter

No es una librería de componentes: es un sitio estático de HTML/CSS/JS vanilla.
El design system real son `styles.css` y `links.css`, que ya traen tokens en
`:root`, un vocabulario BEM coherente y decisiones de contraste documentadas en
los comentarios.

Para que el converter tenga con qué trabajar se agregó **`ds-src/`**: un paquete
React que NO reimplementa nada — cada componente aplica las clases reales y el CSS
del sitio viaja sin una sola modificación (`build-css.mjs` concatena
`styles.css` + `links.css` en `dist/tactical.css`, en el mismo orden en que los
cargan las páginas).

- `npm --prefix ds-src run build` genera assets, tipos y CSS. Es `cfg.buildCmd`.
- `ds-src/src/assets.ts` es **generado** (`gen-assets.mjs`) y está gitignoreado:
  mete los logos y los 5 reconocimientos como data URIs. Van inline porque un
  diseño hecho con este DS no sirve `/assets/` desde ningún lado — una ruta
  absoluta ahí es una imagen rota. Son ~48 KB en total.

## Dos arreglos globales que costaron una iteración cada uno

**1. Las tarjetas de preview renderizan sobre blanco.** La plantilla de
`lib/emit.mjs` fija `body{background:#fff}` y ese archivo no se puede forkear
(define el contrato con la self-check de la app). Este DS es dark-first, así que
sobre blanco los botones outline y todo el texto gris quedaban ilegibles —y de
forma traicionera, porque los rellenos (dorado, verde, azul) seguían viéndose
bien.

Se resolvió con **`<Tema>`**, un wrapper raíz que reproduce el `body` del sitio
(fondo, color, Raleway, interlineado) con los mismos tokens y sin agregar ninguna
clase que no exista. Va en `cfg.provider`. No es un parche para el preview: un
diseño hecho con este DS tampoco es el `body` de ttrading.co, así que el agente
también lo necesita.

**2. Las animaciones de entrada dejaban tarjetas invisibles.** `.btn--links`,
`.video-modulo` y los elementos del hero entran con
`animation: aparecer … backwards` y un delay escalonado por `--orden`. Con
`backwards`, antes de que arranque el delay el elemento está en `opacity: 0`, así
que en una captura instantánea las tarjetas con `--orden` alto salían a medio
aparecer o directamente en blanco.

`package-capture.mjs` no expone `reducedMotion` y no es forkeable. Se resolvió con
**`<Tema estatico>`**, que aplica la misma regla que el sitio ya tiene bajo
`prefers-reduced-motion`. Va en `cfg.provider.props`. Consecuencia esperada: las
tarjetas de la galería muestran el estado de reposo — no se ve la entrada
escalonada, ni el shimmer de la tarjeta Premium, ni el halo respirando. Es lo
correcto para un screenshot; el movimiento queda documentado en el `.prompt.md` de
cada pieza y en `conventions.md`.

## Manual de identidad vs. código

El manual (`../Assets/Manual identidad JP TACTICAL TRADING.pdf`, 20 páginas, por
Alvin Studio Gráfico) se usó como guía, **no como fuente de verdad única**:
decisión explícita de Daniel. Donde difiere del código, manda el código y la
diferencia queda documentada en `guidelines/`.

- ✅ Amarillo: `#FFC600` = Pantone 7548 C. Coinciden.
- ✅ Raleway: el manual la designa como tipografía complementaria para WEB.
- ⚠️ El manual imprime el CMYK del 7548 C como `C:100 M:100 Y:100 K:41`, que daría
  negro. Es un typo del manual. **No propagar.**
- ℹ️ Futura Condensed PT Italic es la tipografía de slogan del manual y sólo vive
  dentro del lockup, que viaja como imagen. No hay `@font-face` de Futura y no
  hace falta ninguno.
- ⚠️ Reducción mínima: el manual fija 1,5 cm de ancho. El lockup del header va a
  40px de alto (~42px de ancho), por debajo de esa medida si se la lee como
  píxeles a 96 dpi. Es una especificación pensada para impresión y el logo se lee
  bien en pantalla, pero quedó anotado en `guidelines/`.
- ℹ️ Los verdes de WhatsApp, el azul de Telegram y el azul de Zoom NO son colores
  de marca: son colores de canal de terceros. La paleta corporativa es sólo
  negro / amarillo / blanco.

## Sobre los íconos

En `shared.js` sólo `whatsapp` y `hotmart` traen `fill="currentColor"` en sus
paths; el resto dependía de reglas de página (`.pagina-estrategia .btn--hotmart
.btn__icono svg { fill: currentColor }`). Fuera de esa página el ícono caía a
negro. El componente `<Icono>` pone `fill="currentColor"` en el `<svg>`, que
cualquier regla CSS del sistema sigue pisando (por ejemplo `.btn--telegram` lo
clava en `#05283A`), así que dentro de un botón se ve idéntico al sitio y suelto
hereda el color del texto en vez de desaparecer.

## Cambio hecho al CSS de producción

El sync encontró un bug real: `.sin-js` no tenía regla para `<a>`, así que el link
del `<noscript>` caía al azul por defecto del navegador (`#0000EE`) sobre la
superficie oscura — ilegible. Pasaba en las 4 páginas con `<noscript>`.

Con el OK de Daniel se agregó a `styles.css`:

```css
.sin-js a { color: var(--amarillo); text-decoration: underline; }
```

Es el mismo idiom que `.links-nota a` ya usaba. **Este cambio está en el CSS
desplegado, no sólo en el design system** — si se re-despliega el sitio, va incluido.

## Overrides de presentación

`validate` marcó dos `[GRID_OVERFLOW]` y se aplicaron los remedios que él mismo
prescribe (están en `cfg.overrides`):

- `HeroLinks` → `cardMode: column`. Los titulares son anchos por diseño y el grid
  multicolumna los recortaba.
- `PaginaLinks` → `cardMode: single`, `primaryStory: Estrategia`. `.links-fondo` es
  `position: fixed`, así que se escapa de cualquier celda de grid. Ningún layout de
  grilla puede presentarlo.

## Warns de render conocidos

- `tokens: 1 missing` — es esperado: `--mx` / `--my` (luz que sigue al cursor) y
  `--alto` / `--orden` los setea JS o un `style` inline, no una hoja de estilos.

## Entorno

- El repo vive en el Desktop del Mac, que está sincronizado: aparecieron
  directorios vacíos duplicados (`components 3`, `_screenshots 3`) dentro de
  `ds-bundle/`. Son inofensivos, no matchean los globs del plan, y se borran con
  `rmdir`. Si reaparecen, ignorarlos.
- Playwright + chromium se instalaron en esta corrida
  (`~/Library/Caches/ms-playwright`, headless shell 151). Un re-sync los reusa.

## Riesgos de re-sync

- **`ds-src/` es código nuevo, no del sitio.** Si alguien toca `styles.css` o
  `links.css` y agrega clases, los componentes NO se enteran solos: hay que
  agregar la prop o el componente a mano. El CSS sí se re-copia siempre.
- **`gen-assets.mjs` lee rutas fijas** (`assets/logo-lockup.webp`, los cinco
  `rec-*.webp`, `exness-logo.png`). Si se renombra o agrega un reconocimiento en
  `config.js`, hay que reflejarlo en la lista `RECONOCIMIENTOS` del script.
- **`cfg.provider` depende de que `Tema` siga exportado.** Si se lo renombra, todos
  los previews renderizan sobre blanco otra vez y el fallo es silencioso: las
  tarjetas no quedan vacías, quedan feas.
- **Los estados de hover no se verifican.** Todo el sistema tiene hover (glow por
  canal, luz que sigue al cursor, `translateY`) y nada de eso entra en una captura
  estática. Nunca se validó máquina-a-máquina.
- `README.md` del bundle se regenera en cada build: no editarlo a mano, editar
  `.design-sync/conventions.md`.
