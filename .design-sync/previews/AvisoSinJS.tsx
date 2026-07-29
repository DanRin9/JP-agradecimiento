import { AvisoSinJS } from '@jptt/tactical-ds';

/** El aviso real de las landings: da una salida concreta, no un error genérico. */
export const Landing = () => (
  <AvisoSinJS>
    Necesitás activar JavaScript para ver tus accesos. Si no podés, escribinos por WhatsApp desde{' '}
    <a href="https://www.ttrading.co">ttrading.co</a> y te los pasamos.
  </AvisoSinJS>
);

/** La variante de la página del programa premium. */
export const Programa = () => (
  <AvisoSinJS>
    Necesitás activar JavaScript para ver el contenido del programa. Si no podés, escribinos por
    WhatsApp desde <a href="https://www.ttrading.co">ttrading.co</a> y te lo pasamos.
  </AvisoSinJS>
);
