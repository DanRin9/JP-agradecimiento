/**
 * El pie de las páginas de links: más liviano que el de las landings.
 *
 * Acá no cierra la página, la apoya — por eso no lleva isotipo ni tagline, sólo
 * los reconocimientos y el meta legal.
 */
import { Reconocimientos } from './Reconocimientos';
import type { Reconocimiento } from './assets';

export interface PieLinksProps {
  /** Título de la fila de logos. */
  tituloReconocimientos?: string;
  /** Qué logos mostrar. Por defecto, los cinco oficiales. */
  reconocimientos?: Reconocimiento[];
  /** Texto del link al sitio. */
  sitio?: string;
  /** URL del sitio. */
  sitioUrl?: string;
  /** Razón social. */
  legal?: string;
}

/** Pie de página de las páginas de links. */
export function PieLinks({
  tituloReconocimientos = 'Reconocimientos',
  reconocimientos,
  sitio = 'ttrading.co',
  sitioUrl = 'https://www.ttrading.co',
  legal = 'Tactical Assets S.A.S.',
}: PieLinksProps) {
  return (
    <footer className="links-footer">
      <p className="footer__titulo">{tituloReconocimientos}</p>
      <Reconocimientos items={reconocimientos} />
      <p className="footer__meta">
        <a href={sitioUrl} target="_blank" rel="noopener noreferrer">
          {sitio}
        </a>{' '}
        · <span>{legal}</span>
      </p>
    </footer>
  );
}
