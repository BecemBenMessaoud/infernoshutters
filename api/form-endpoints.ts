export const FORM_ENDPOINTS = {
  quote: 'https://formspree.io/f/mwvgqbbk',
  contact: 'https://formspree.io/f/mrenljww',
  dealer: 'https://formspree.io/f/xwvgqyjj',
  'site-assessment': 'https://formspree.io/f/xdaqdbrk',
  'custom-assessment': 'https://formspree.io/f/maqrbvrq',
  'service-call': 'https://formspree.io/f/mzdnvolv',
  wholesale: 'https://formspree.io/f/mgogzdjp',
  reservation: 'https://formspree.io/f/xwvgqrqe',
  newsletter: 'https://formspree.io/f/xzdnvonv',
} as const

export type ProtectedFormType = keyof typeof FORM_ENDPOINTS

export function isProtectedFormType(value: unknown): value is ProtectedFormType {
  return typeof value === 'string' && value in FORM_ENDPOINTS
}
