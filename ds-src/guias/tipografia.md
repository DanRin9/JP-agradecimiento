# Tipografía

## Las dos familias del manual

| Rol | Familia | Dónde vive |
|---|---|---|
| **Slogan** | Futura Condensed PT Italic | Sólo dentro del lockup |
| **Complementaria (WEB / editorial / POP)** | **Raleway** | Todo el sistema |

El manual designa Raleway explícitamente para web. Es la única familia que el
sistema carga.

**Futura Condensed PT Italic no se usa en pantalla y no hace falta ninguna
`@font-face` para ella**: el nombre tipográfico "TACTICAL TRADING" viaja rasterizado
dentro del archivo del lockup. Si alguna vez hiciera falta componer un slogan nuevo
en Futura, hay que licenciarla — no está en el repo.

## Raleway, como se carga

Fuente **variable**, un solo archivo para todo el rango de pesos, subsetteada a
ASCII + acentos y puntuación del español. Pesa 36 KB.

```
@font-face {
  font-family: 'Raleway';
  font-weight: 400 800;   /* variable: un archivo, todo el rango */
  font-display: swap;
  src: url('raleway.woff2') format('woff2');
}
```

El rango de pesos es `400–800`. **No pedir 900**: no existe en el archivo y el
navegador lo simula engordando el trazo, que es exactamente el aspecto que la marca
evita.

## Escala

| Uso | Tamaño | Peso | Tratamiento |
|---|---|---|---|
| Titular de landing | `clamp(28px, 7.8vw, 38px)` | 800 | Mayúsculas, `letter-spacing: -.02em` |
| Titular de links | `clamp(28px, 3.4vw, 44px)` | 800 | Mayúsculas, `-.025em`, máx. 24ch |
| Titular de estrategia | `clamp(30px, 4.2vw, 56px)` | 800 | Mayúsculas, máx. 18ch |
| Nombre de tier | 19px | 800 | — |
| Título de módulo | 17px | 700 | — |
| Subtítulo | 16px | 500 | — |
| Cuerpo / botón | 14.5–15px | 500 | — |
| Párrafo de apoyo | 14.5px | — | `--texto-2`, `text-wrap: pretty` |
| Nota | 13px | — | `--texto-2` |
| Badge | 11px | 600 | Mayúsculas, `letter-spacing: .14em` |
| Título de footer | 10px | 600 | Mayúsculas, `.16em` |
| Chip | 9.5px | 600–700 | Mayúsculas, `.09–.12em` |

Interlineado del cuerpo: **1.6**. De los titulares: **1.08** — van en mayúsculas y
a 1.6 se separarían de más.

## Reglas que no son opcionales

- **Los titulares van en mayúsculas.** Es del sistema, no del contenido: no escribas
  el texto ya en mayúsculas, dejá que `text-transform` lo haga.
- **Tracking negativo en titulares, positivo en microtexto.** Es lo que separa un
  titular de un chip.
- **Un solo resalte dorado por titular** (`<Destacado>`). Con dos, el titular deja
  de tener jerarquía y se vuelve un cartel.
- El titular de links se limita a `24ch`: con menos se estira a cinco líneas y
  empuja el pie fuera de pantalla, que es lo contrario de usar el ancho.
