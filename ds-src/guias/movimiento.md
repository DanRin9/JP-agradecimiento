# Movimiento

El sistema se mueve poco y siempre por una razón. El brief original prohíbe
explícitamente el aspecto "IA genérica", y en movimiento eso se traduce en una
regla concreta: **nada que se repita rápido y para siempre.**

## Lo que se mueve

| Pieza | Qué hace | Ciclo |
|---|---|---|
| Halo de fondo (`.links-fondo`) | Respira: opacidad y escala | 9s, infinito |
| Entrada de hero y accesos | Sube 14px y aparece | 0.6s, **una vez**, escalonado por `--orden` |
| Brillo del divisor | Un destello lo recorre | 1.5s, **una vez**, al cargar |
| Brillo de la tarjeta Premium | Un destello la recorre | 5.5s con pausa larga, infinito |
| Luz que sigue al cursor | Radial que sigue el puntero | Sólo en hover, sólo con puntero |
| Hover de botón | `translateY(-1px)`, o `-3px` en tarjeta | 0.15–0.2s |
| Glow de hover | Se enciende en el color del canal | 0.25s |

El shimmer de la tarjeta Premium tiene un ciclo largo **con pausa** a propósito: un
shimmer rápido y continuo se vuelve ruido de fondo. Así destella cada tanto y el ojo
vuelve.

## Lo que no se mueve

Todo lo demás. En particular: no hay transiciones de página, ni parallax, ni
elementos que entren al hacer scroll, ni contadores animados.

## Accesibilidad

El sistema respeta `prefers-reduced-motion: reduce` apagando **toda** animación y
transición. No es un degradado parcial: se apaga todo, incluido el hover.

`<Tema estatico>` aplica exactamente esa misma regla a mano. Usalo en cualquier
render instantáneo —una captura, un mockup, una tarjeta de galería—: varias piezas
entran con `animation-fill-mode: backwards`, así que sin esto aparecen a medio
camino o directamente invisibles.

## Área táctil

Mínimo **48px** en todo lo tocable. Los botones de landing arrancan en 56px, el CTA
principal en 78px y las tarjetas de tier en 118px.

En pantallas táctiles la luz que sigue al cursor se desactiva (`@media (hover: none)`):
sin cursor se quedaría pegada donde tocaste.
