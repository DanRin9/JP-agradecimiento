import { Boton, BotonTier, GridAccesos, Icono } from '@jptt/tactical-ds';

/** Con cuatro accesos: el grid 2×2 de `/estrategia-tactical`. */
export const CuatroAccesos = () => (
  <GridAccesos etiqueta="Accesos a la Estrategia Tactical">
    <Boton tarjeta variante="zoom" icono={<Icono nombre="video" />} href="#" orden={0}>
      Entra al portafolio en vivo
    </Boton>
    <Boton tarjeta variante="hotmart" icono={<Icono nombre="bitacora" />} href="#" orden={1}>
      Abre la Bitácora
    </Boton>
    <Boton tarjeta variante="wa-soporte" icono={<Icono nombre="whatsapp" />} href="#" orden={2}>
      Canal de Pre-Mercado
    </Boton>
    <Boton tarjeta variante="telegram" icono={<Icono nombre="telegram" />} href="#" orden={3}>
      Canal de Telegram
    </Boton>
  </GridAccesos>
);

/** Con dos: el selector de tier. Cada uno se queda con media pantalla. */
export const DosTarjetas = () => (
  <GridAccesos etiqueta="Elegí tu membresía">
    <BotonTier tier="basica" nombre="Membresía Básica" pie="Ver mis canales" href="#" orden={0} />
    <BotonTier
      tier="premium"
      nombre="Membresía Premium"
      pie="Ver mis canales"
      chip="Premium"
      href="#"
      orden={1}
    />
  </GridAccesos>
);
