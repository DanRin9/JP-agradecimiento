import { Reconocimientos, RECONOCIMIENTOS } from '@jptt/tactical-ds';

/**
 * Los cinco oficiales. Van en grayscale al 55%: unifica wordmarks blancos y
 * medallones a color sin aplanarlos a blanco puro, y evita que le compitan al
 * dorado de la marca.
 */
export const Oficiales = () => <Reconocimientos />;

/**
 * Cada logo trae su propia altura, ajustada a ojo. Exness va notablemente más bajo
 * que el resto a propósito: es un wordmark ancho y a igual altura pesaría mucho
 * más que los medallones, dominando a los premios reales.
 */
export const AlturasPropias = () => (
  <div style={{ display: 'grid', gap: 18 }}>
    {RECONOCIMIENTOS.map((r) => (
      <div key={r.alt} style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <div style={{ width: 130 }}>
          <Reconocimientos items={[r]} />
        </div>
        <span style={{ fontSize: 12, color: 'var(--texto-2)' }}>
          {r.alt} — {r.alto}px
        </span>
      </div>
    ))}
  </div>
);

/** Un subconjunto: la fila se recentra sola. */
export const Subconjunto = () => <Reconocimientos items={RECONOCIMIENTOS.slice(0, 3)} />;
