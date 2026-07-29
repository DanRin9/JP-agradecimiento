import { BotonTier, GridAccesos } from '@jptt/tactical-ds';

/**
 * El par completo, como aparece en `/links-comunidad`. Siempre van de a dos: la
 * página existe para que alguien elija entre las dos, no para mostrar una.
 */
export const Selector = () => (
  <GridAccesos etiqueta="Elegí tu membresía">
    <BotonTier
      tier="basica"
      nombre="Membresía Básica"
      pie="Ver mis canales"
      href="/links-comunidad/basica"
      orden={0}
    />
    <BotonTier
      tier="premium"
      nombre="Membresía Premium"
      pie="Ver mis canales"
      chip="Premium"
      href="/links-comunidad/premium"
      orden={1}
    />
  </GridAccesos>
);

/** Básica sola: outline sobrio sobre superficie. No es el hermano pobre, es el que no grita. */
export const Basica = () => (
  <BotonTier tier="basica" nombre="Membresía Básica" pie="Ver mis canales" href="/links-comunidad/basica" />
);

/**
 * Premium sola. El dorado del sistema está libre en esta página —acá no existe el
 * botón de Hotmart— así que no le compite a nada.
 */
export const Premium = () => (
  <BotonTier
    tier="premium"
    nombre="Membresía Premium"
    pie="Ver mis canales"
    chip="Premium"
    href="/links-comunidad/premium"
  />
);

/** Sin chip ni pie: sólo el nombre. La tarjeta se centra sola. */
export const SoloNombre = () => (
  <GridAccesos>
    <BotonTier tier="basica" nombre="Membresía Básica" href="/links-comunidad/basica" />
    <BotonTier tier="premium" nombre="Membresía Premium" href="/links-comunidad/premium" />
  </GridAccesos>
);
