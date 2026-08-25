const FORM_ENDPOINTS = {
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

type ProtectedFormType = keyof typeof FORM_ENDPOINTS

function isProtectedFormType(value: unknown): value is ProtectedFormType {
  return typeof value === 'string' && value in FORM_ENDPOINTS
}

type SiteVerifyResponse = {
  success: boolean
  'error-codes'?: string[]
}

type SubmitFormBody = {
  form?: unknown
  payload?: unknown
  recaptchaToken?: unknown
}

async function verifyRecaptcha(token: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY
  if (!secret) {
    return false
  }

  const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      secret,
      response: token,
    }),
  })

  if (!response.ok) {
    return false
  }

  const data = (await response.json()) as SiteVerifyResponse
  return data.success === true
}

function isStringRecord(value: unknown): value is Record<string, string> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return false
  }

  return Object.values(value).every((entry) => typeof entry === 'string')
}

export default async function handler(req: { method?: string; body?: SubmitFormBody }, res: {
  setHeader: (name: string, value: string) => void
  status: (code: number) => { json: (body: unknown) => unknown }
}) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { form, payload, recaptchaToken } = req.body ?? {}

  if (!isProtectedFormType(form)) {
    return res.status(400).json({ error: 'Invalid form type' })
  }

  if (!isStringRecord(payload)) {
    return res.status(400).json({ error: 'Invalid form payload' })
  }

  if (typeof recaptchaToken !== 'string' || !recaptchaToken.trim()) {
    return res.status(400).json({ error: 'Missing reCAPTCHA token' })
  }

  if (!process.env.RECAPTCHA_SECRET_KEY) {
    return res.status(503).json({ error: 'reCAPTCHA is not configured on the server' })
  }

  const isHuman = await verifyRecaptcha(recaptchaToken.trim())
  if (!isHuman) {
    return res.status(400).json({ error: 'reCAPTCHA verification failed. Please try again.' })
  }

  const formspreeResponse = await fetch(FORM_ENDPOINTS[form], {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!formspreeResponse.ok) {
    return res.status(502).json({ error: 'Unable to deliver your submission. Please try again.' })
  }

  return res.status(200).json({ ok: true })
}
