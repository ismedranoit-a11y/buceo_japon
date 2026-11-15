/** Construye una ruta interna respetando el `base` configurado en Astro. */
export function url(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const page = path.replace(/^\/+/, '');
  return `${base}/${page}`;
}

/** true si el enlace es externo (abre en pestaña nueva). */
export const isExternal = (href: string) => /^https?:\/\//.test(href);
