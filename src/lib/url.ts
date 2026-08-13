// Prefix an internal path with the configured base, so links keep working
// both at theidel.com/ and at studdavid.github.io/personal-website/.
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return base + path;
}
