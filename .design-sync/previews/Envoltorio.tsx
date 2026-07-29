import {
  Boton,
  Divisor,
  Encabezado,
  Envoltorio,
  Hero,
  Icono,
  ListaAccesos,
} from '@jptt/tactical-ds';

/**
 * La landing de `/premium` completa dentro del envoltorio: 480px centrados, que es
 * el ancho de lectura en el celular justo después de pagar.
 */
export const LandingCompleta = () => (
  <Envoltorio>
    <Encabezado />
    <Hero
      badge="Membresía Premium"
      titulo="¡Bienvenido a Tactical Trading!"
      subtitulo="Ahora eres parte de la comunidad de trading más exclusiva de Colombia."
      parrafo={
        <>
          Estás acompañado por el trader reconocido por la{' '}
          <strong>Bolsa de Valores de Colombia</strong>.
        </>
      }
    />
    <Divisor />
    <ListaAccesos etiqueta="Accesos de tu membresía">
      <Boton variante="wa-grupo" icono={<Icono nombre="whatsapp" />} href="#">
        Únete al grupo de WhatsApp de tu membresía
      </Boton>
      <Boton variante="hotmart" icono={<Icono nombre="hotmart" />} href="#">
        Ingresa a tu Zona de Miembros
      </Boton>
      <Boton variante="telegram" icono={<Icono nombre="telegram" />} href="#">
        Únete al Canal de Telegram
      </Boton>
    </ListaAccesos>
  </Envoltorio>
);

/** El envoltorio solo, con su ancho máximo marcado. */
export const AnchoMaximo = () => (
  <Envoltorio>
    <div
      style={{
        border: '1px dashed var(--amarillo-linea)',
        borderRadius: 'var(--radio)',
        padding: 24,
        textAlign: 'center',
        color: 'var(--texto-2)',
        fontSize: 14,
      }}
    >
      480px — el ancho de todas las landings
    </div>
  </Envoltorio>
);
