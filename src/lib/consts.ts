export const WHATSAPP = '555500000000'

export function wa(msg: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`
}
