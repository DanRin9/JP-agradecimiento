/**
 * La marca. `lockup` es el logotipo completo (isotipo + nombre tipográfico) en un
 * solo archivo; `isotipo` son sólo las velas japonesas que forman el monograma JP.
 *
 * El manual prohíbe deformarlo, recolorearlo, degradarlo, quitarle elementos o
 * meterle otros adentro del área corporativa: por eso el componente expone `alto`
 * y no ancho y alto por separado — el ancho sale solo y la proporción no se toca.
 * El dorado del sistema es un token de UI para botones y acentos; sobre el logo
 * nunca se aplica.
 */
import { LOGO_ISOTIPO, LOGO_LOCKUP } from './assets';

export interface LogoProps {
  /** `lockup` (isotipo + nombre) o `isotipo` (sólo el monograma). */
  variante?: 'lockup' | 'isotipo';
  /** Alto de render en px. El ancho se calcula solo para no deformar la marca. */
  alto?: number;
  /** Texto alternativo. Vacío cuando el logo es decorativo y ya hay marca al lado. */
  alt?: string;
  /** Clase del contexto: `header__logo` en el encabezado, `footer__logo` en el pie. */
  className?: string;
}

/** El logotipo de JP Tactical Trading. */
export function Logo({ variante = 'lockup', alto = 40, alt = 'Tactical Trading', className }: LogoProps) {
  const src = variante === 'lockup' ? LOGO_LOCKUP : LOGO_ISOTIPO;
  return <img className={className} src={src} alt={alt} style={{ height: alto, width: 'auto' }} />;
}
