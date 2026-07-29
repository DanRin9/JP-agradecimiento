# JP Tactical Trading — cómo construir con este sistema

Marca de educación financiera y trading (Juan Pablo Vieira, Bogotá). Todo en
**español**, todo **dark-first**. Copy en segunda persona.

## 1. Envolvé todo en `<Tema>`

**Obligatorio.** `<Tema>` trae el fondo negro, el color de texto y la Raleway. Sin
él el sistema falla de forma traicionera: los botones rellenos (dorado, verde, azul)
siguen viéndose bien y los outline y todo el texto gris quedan ilegibles sobre
blanco.

```jsx
<Tema>{/* todo lo demás */}</Tema>
```

Para un render estático (captura, mockup) usá `<Tema estatico>`: apaga las
animaciones de entrada, que de otro modo dejan piezas a medio aparecer.

## 2. No escribas CSS de marca — usá los tokens

El diseño vive en `styles.css`. Para tu propio layout usá los custom properties, no
valores literales:

`--negro` `--superficie` `--superficie-2` `--borde` · `--texto` `--texto-2` ·
`--amarillo` `--amarillo-grad` `--amarillo-linea` `--glow` ·
`--whatsapp` `--whatsapp-vivo` `--telegram` · `--radio` (12px) `--ancho` (480px)

```jsx
<div style={{ background: 'var(--superficie)', borderRadius: 'var(--radio)' }}>
```

No inventes clases nuevas: el CSS es un archivo cerrado del sitio y una clase que no
existe no pinta nada.

## 3. El color dice a dónde lleva el botón

`<Boton variante>` no es una escala de énfasis, es el canal de destino:
`hotmart` (dorado, el CTA) · `wa-grupo` · `wa-soporte` · `telegram` · `sistema` ·
`zoom` · `exness` · `neutro`.

**Un solo `hotmart` por página.** Es el único con glow; si dos elementos brillan,
ninguno gana. Y **un solo `<Destacado>` por titular** — con dos, el titular se
vuelve un cartel.

## 4. Elegí el armazón según la página

- **Landing** (viene del checkout, se lee en el celular): `<Envoltorio>` — columna
  de 480px — con `<Hero>` y `<ListaAccesos>` de botones apilados.
- **Página de links** (viene de un link compartido, se abre en pantalla):
  `<PaginaLinks variante="selector|estrategia|video">` con `<HeroLinks>` y
  `<GridAccesos>` de dos columnas. Acá los botones van con `tarjeta`.

## 5. Dónde está la verdad

Antes de estilar, leé los archivos reales: `_ds/<carpeta>/styles.css` y lo que
importa, más `guidelines/guias/` — `marca.md` (reglas de logo), `color.md`
(paleta y contraste), `tipografia.md` (escala), `movimiento.md`. Cada componente
trae su `.prompt.md`.

## Ejemplo

```jsx
<Tema>
  <PaginaLinks
    variante="estrategia"
    encabezado={<Encabezado />}
    pie={<PieLinks />}
  >
    <HeroLinks
      badge="Estrategia Tactical"
      titulo={<>Así opera el <Destacado partible>mejor trader de Colombia</Destacado> según la BVC</>}
      subtitulo="El portafolio y la bitácora, movimiento a movimiento."
    />
    <Divisor brillo />
    <GridAccesos etiqueta="Accesos">
      <Boton tarjeta variante="hotmart" icono={<Icono nombre="bitacora" />} href="#" orden={0}>
        Abre la Bitácora
      </Boton>
      <Boton tarjeta variante="zoom" icono={<Icono nombre="video" />} href="#" orden={1}>
        Entra al portafolio en vivo
      </Boton>
    </GridAccesos>
  </PaginaLinks>
</Tema>
```

Íconos disponibles: `whatsapp` `telegram` `hotmart` `calendario` `video` `bitacora`
`documento`. Para un acceso pendiente: `deshabilitado` + `etiquetaPendiente="Próximamente"`.
