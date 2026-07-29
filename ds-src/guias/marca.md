# La marca

Fuente: manual de imagen corporativa de JP Tactical Trading (Alvin Studio Gráfico),
cruzado contra el CSS que está en producción. Donde manual y código difieren, manda
el código y la diferencia queda anotada acá abajo.

## Anatomía

El logotipo tiene dos partes y se usan juntas salvo excepción explícita:

- **Isotipo** — las velas japonesas que forman el monograma JP.
- **Nombre tipográfico** — "TACTICAL TRADING", compuesto en Futura Condensed PT
  Italic. Viaja dentro del archivo del lockup; no se re-compone nunca a mano.

En código: `<Logo variante="lockup">` (los dos) y `<Logo variante="isotipo">` (sólo
el monograma). El isotipo solo se usa en dos lugares: el favicon y el pie de las
landings, donde el lockup ya apareció arriba.

## Proporciones y espacio

- La marca se construye sobre una grilla de **5x por 5x**, con `1x` como unidad.
- **Área de reserva: 1x por los cuatro lados.** Ningún elemento entra ahí.
- Sobre fondos de color **corporativo** (negro, amarillo, blanco) la marca se
  aplica **sin** área de reserva.
- Sobre fondos no corporativos o fotografía, el área de reserva es obligatoria.

`<Logo>` expone `alto` y no ancho: el ancho sale solo, así la proporción nunca se
altera por accidente.

## Reducción mínima

El manual fija **1,5 cm de ancho**. Es una especificación de impresión.

En pantalla el sitio usa el lockup a **40px de alto (~42px de ancho)**, por debajo
de esa medida si se la traduce literalmente a píxeles. Se verificó visualmente: a
40px el lockup se lee bien; a 24px el nombre tipográfico ya se cierra y deja de ser
legible. **40px es el piso práctico en pantalla; por debajo, usar `variante="isotipo"`
en vez de encoger el lockup.**

## Aplicación por fondo

| Fondo | Versión |
|---|---|
| Negro corporativo (`--negro`) | Blanca |
| Amarillo corporativo (`--amarillo`) | Negra |
| Blanco | Negra |
| Gris 40–90% de negro | Blanca |
| Gris más claro que 40% | Negra |
| Fotografía | Blanca, con área de reserva |

En la web sólo se da el primer caso: todo el sistema es dark-first.

## Usos incorrectos

El manual los enumera y todos siguen vigentes:

- **No deformar** — nunca escalar ancho y alto por separado.
- **No eliminar elementos** — el isotipo va completo, con sus mechas.
- **No aplicar degradado.**
- **No incluir elementos** dentro del área corporativa.
- **No alterar colores** — el isotipo no se pinta de amarillo.

⚠️ **Ojo con el degradado.** El sistema tiene un token de degradé dorado
(`--amarillo-grad`) y lo usa en el CTA principal, en la tarjeta Premium y en el
separador entre módulos de video. Ese degradé es de **UI**: sobre el logo no se
aplica nunca. Son dos cosas distintas que comparten color.
