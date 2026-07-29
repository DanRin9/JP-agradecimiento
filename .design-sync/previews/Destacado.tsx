import { Destacado } from '@jptt/tactical-ds';

/**
 * El resalte dorado dentro de un titular. Una sola vez por titular: si se doran
 * más palabras el titular pierde jerarquía y se vuelve un cartel.
 */
export const EnTitular = () => (
  <h1 className="links-titulo" style={{ margin: '0 auto' }}>
    Así opera el <Destacado partible>mejor trader de Colombia</Destacado> según la BVC
  </h1>
);

/**
 * Sin partir vs. partible. Por defecto el resalte no se corta entre líneas, que es
 * lo correcto para dos palabras; con `partible` se permite, necesario cuando el
 * resalte es largo y en mobile se saldría de la pantalla.
 */
export const Partible = () => (
  <div style={{ display: 'grid', gap: 24, maxWidth: 340 }}>
    <h1 className="links-titulo" style={{ margin: 0 }}>
      ¿Cuál es tu <Destacado>tier</Destacado>?
    </h1>
    <h1 className="links-titulo" style={{ margin: 0 }}>
      La comunidad <Destacado partible>más exclusiva de Colombia</Destacado>
    </h1>
  </div>
);
