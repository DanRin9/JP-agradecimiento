import { Boton, Icono, type NombreIcono } from '@jptt/tactical-ds';

const TODOS: NombreIcono[] = [
  'whatsapp',
  'telegram',
  'hotmart',
  'calendario',
  'video',
  'bitacora',
  'documento',
];

/** Los siete íconos del sistema a 28px, heredando el color del texto. */
export const Todos = () => (
  <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap', alignItems: 'center' }}>
    {TODOS.map((n) => (
      <div key={n} style={{ display: 'grid', justifyItems: 'center', gap: 8, width: 84 }}>
        <Icono nombre={n} style={{ width: 28, height: 28 }} />
        <span style={{ fontSize: 11, color: 'var(--texto-2)' }}>{n}</span>
      </div>
    ))}
  </div>
);

/**
 * En contexto, que es donde viven de verdad: dentro de un botón toman el color de
 * su canal. El de Telegram es el caso a mirar — el CSS le clava `#05283A` y le
 * gana al `currentColor` del componente.
 */
export const EnBotones = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
    <Boton variante="wa-grupo" icono={<Icono nombre="whatsapp" />} href="#">
      Grupo de WhatsApp
    </Boton>
    <Boton variante="telegram" icono={<Icono nombre="telegram" />} href="#">
      Canal de Telegram
    </Boton>
    <Boton variante="hotmart" icono={<Icono nombre="hotmart" />} href="#">
      Zona de Miembros
    </Boton>
  </div>
);

/** El color se hereda: mismo ícono, tres colores del sistema. */
export const HeredaColor = () => (
  <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
    <Icono nombre="bitacora" style={{ width: 32, height: 32, color: 'var(--amarillo)' }} />
    <Icono nombre="bitacora" style={{ width: 32, height: 32, color: 'var(--whatsapp)' }} />
    <Icono nombre="bitacora" style={{ width: 32, height: 32, color: 'var(--texto-2)' }} />
  </div>
);
