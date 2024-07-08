export function formatLink(src: string) {
  return `https://queer.kz${src.replace('https://queer.kz', '').replace(/\/$/, '')}`
}
