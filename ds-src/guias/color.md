# Color

## Paleta corporativa

Tres colores, y sólo tres. Todo lo demás es superficie o color de canal.

| Color | Manual | Token | Valor |
|---|---|---|---|
| Negro | Pantone Black (C:0 M:0 Y:0 K:100) | `--negro` | `#0A0A0A` |
| Amarillo | **Pantone 7548 C** | `--amarillo` | `#FFC600` |
| Blanco | White | `--texto` | `#F5F5F5` |

El amarillo del código está muestreado del Pantone 7548 C y de los logos
oficiales. Reemplazó a un `#E8B923` anterior que era más apagado y además no
coincidía ni con el checkout de Hotmart ni con la web.

> ⚠️ El manual imprime el CMYK del 7548 C como `C:100 M:100 Y:100 K:41`, que daría
> negro, no amarillo. Es un error de tipeo del manual. **No propagarlo.** La muestra
> impresa en esa misma página es amarilla y es la que vale.

## Superficies

Escalonadas, no arbitrarias. Cada una tiene un trabajo.

| Token | Valor | Para qué |
|---|---|---|
| `--negro` | `#0A0A0A` | Fondo de página |
| `--superficie` | `#151515` | Botones neutros, tarjetas, avisos |
| `--superficie-2` | `#1A1A1A` | Hover de superficie |
| `--borde` | `#262626` | Bordes y separaciones |
| `--texto` | `#F5F5F5` | Texto principal |
| `--texto-2` | `#9A9A9A` | Texto secundario — gris **cálido**, no azulado |

## Derivados del amarillo

| Token | Valor | Para qué |
|---|---|---|
| `--amarillo-grad` | `linear-gradient(135deg, #FFD84A, #F0B400)` | Relleno del CTA principal y de la tarjeta Premium |
| `--amarillo-linea` | `rgba(255,198,0,.26)` | Bordes de badge, divisores, borde del aviso sin JS |
| `--glow` | `0 8px 30px rgba(255,198,0,.24)` | **El único glow del sistema** |

**El glow está reservado al CTA principal.** Uno por página. Si dos elementos
brillan, ninguno de los dos gana.

## Colores de canal

No son colores de marca: son las marcas de terceros a las que lleva cada botón. El
color dice a dónde va el link.

| Token | Valor | Canal |
|---|---|---|
| `--whatsapp` | `#25D366` | Verde oficial de WhatsApp (ancla del outline) |
| `--whatsapp-vivo` | `#2BE873` | Tinte más brillante, para el relleno |
| `--telegram` | `#2AABEE` | Azul oficial de Telegram |
| — | `#2D8CFF` / `#6BB0FF` | Azul Zoom (borde / texto) |

## Contraste

Las decisiones de contraste del sistema ya están tomadas y verificadas. No
revisitarlas sin medir:

- Sobre los rellenos claros (amarillo, verde, azul) el texto va **oscuro**, no
  blanco: blanco sobre `#2AABEE` no llega a AA.
- El azul de marca de Zoom `#2D8CFF` no llega a AA sobre `--superficie`; por eso el
  texto usa `#6BB0FF`.
- El pie de la tarjeta Premium va a `opacity: .8` y no `.72` como el resto: a `.62`
  caía a 3.91:1 contra el extremo oscuro del degradé y no llegaba a AA.
- El chip "Próximamente" tiene dos versiones —clara y oscura— porque sobre los
  rellenos brillantes la clara desaparece.
- La flecha del botón hereda `currentColor`: un gris fijo sobre los rellenos
  brillantes quedaba en ~1.7:1.
