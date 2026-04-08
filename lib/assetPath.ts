// Prefixes a public asset path with the Next.js basePath when needed.
// Use for inline style backgroundImage: url(...) and other non-<Image> uses.
const basePath = process.env.NODE_ENV === 'production' ? '/WEBSITEWIP' : '';

export function asset(path: string): string {
  if (!path.startsWith('/')) return path;
  return `${basePath}${path}`;
}
