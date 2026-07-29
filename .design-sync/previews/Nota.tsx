import { Nota } from '@jptt/tactical-ds';

/** La nota real de `/links-comunidad/{basica,premium}`, con su link en amarillo. */
export const ConLink = () => (
  <Nota>
    ¿No es tu membresía? <a href="/links-comunidad">Volvé al selector de tier</a>.
  </Nota>
);

/** Sin link: sólo la aclaración. */
export const SoloTexto = () => (
  <Nota>El ingreso a cada grupo lo aprueba un administrador.</Nota>
);
