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

const FORMS_WITHOUT_RECAPTCHA: ProtectedFormType[] = ['newsletter']

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

type HubSpotSyncResult = { ok: true; skipped?: boolean } | { ok: false; error: string }

function hubspotToken(): string | undefined {
  return process.env.HUBSPOT_PRIVATE_APP_TOKEN?.trim()
}

async function hubspotApi(path: string, init: RequestInit): Promise<Response | null> {
  const token = hubspotToken()
  if (!token) {
    return null
  }

  return fetch(`https://api.hubapi.com${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      ...(init.headers ?? {}),
    },
  })
}

function splitName(fullName?: string): { firstname?: string; lastname?: string } {
  if (!fullName?.trim()) {
    return {}
  }

  const parts = fullName.trim().split(/\s+/)
  if (parts.length === 1) {
    return { firstname: parts[0] }
  }

  return { firstname: parts[0], lastname: parts.slice(1).join(' ') }
}

function buildContactProperties(
  form: ProtectedFormType,
  payload: Record<string, string>,
): Record<string, string> {
  const { firstname, lastname } = splitName(payload.name)
  const properties: Record<string, string> = {}

  const email = payload.email?.trim().toLowerCase()
  if (email) {
    properties.email = email
  }
  if (firstname) {
    properties.firstname = firstname
  }
  if (lastname) {
    properties.lastname = lastname
  }
  if (payload.phone?.trim()) {
    properties.phone = payload.phone.trim()
  }
  if (payload.company?.trim()) {
    properties.company = payload.company.trim()
  }

  const zip = payload.zip?.trim() || payload.zipCode?.trim()
  if (zip) {
    properties.zip = zip
  }
  if (payload.city?.trim()) {
    properties.city = payload.city.trim()
  }
  if (payload.state?.trim()) {
    properties.state = payload.state.trim()
  }
  if (payload.country?.trim()) {
    properties.country = payload.country.trim()
  }

  return properties
}

function formatNoteBody(form: ProtectedFormType, payload: Record<string, string>): string {
  const lines = [
    `Inferno Shutters website — ${form} form submission`,
    `Submitted: ${new Date().toISOString()}`,
    '',
  ]

  for (const [key, value] of Object.entries(payload)) {
    if (value.trim()) {
      lines.push(`${key}: ${value}`)
    }
  }

  return lines.join('\n')
}

async function findContactIdByEmail(email: string): Promise<string | null> {
  const response = await hubspotApi('/crm/v3/objects/contacts/search', {
    method: 'POST',
    body: JSON.stringify({
      filterGroups: [
        {
          filters: [{ propertyName: 'email', operator: 'EQ', value: email }],
        },
      ],
      properties: ['email'],
      limit: 1,
    }),
  })

  if (!response?.ok) {
    return null
  }

  const data = (await response.json()) as { results?: Array<{ id: string }> }
  return data.results?.[0]?.id ?? null
}

async function upsertHubSpotContact(properties: Record<string, string>): Promise<string | null> {
  const email = properties.email
  if (!email) {
    return null
  }

  const existingId = await findContactIdByEmail(email)
  if (existingId) {
    const patch = await hubspotApi(`/crm/v3/objects/contacts/${existingId}`, {
      method: 'PATCH',
      body: JSON.stringify({ properties }),
    })
    return patch?.ok ? existingId : null
  }

  const create = await hubspotApi('/crm/v3/objects/contacts', {
    method: 'POST',
    body: JSON.stringify({ properties }),
  })

  if (!create?.ok) {
    return null
  }

  const created = (await create.json()) as { id: string }
  return created.id
}

async function attachHubSpotNote(contactId: string, body: string): Promise<boolean> {
  const response = await hubspotApi('/crm/v3/objects/notes', {
    method: 'POST',
    body: JSON.stringify({
      properties: {
        hs_timestamp: Date.now().toString(),
        hs_note_body: body,
      },
      associations: [
        {
          to: { id: contactId },
          types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 202 }],
        },
      ],
    }),
  })

  return response?.ok === true
}

async function syncLeadToHubSpot(
  form: ProtectedFormType,
  payload: Record<string, string>,
): Promise<HubSpotSyncResult> {
  if (!hubspotToken()) {
    return { ok: true, skipped: true }
  }

  const email = payload.email?.trim().toLowerCase()
  if (!email) {
    return { ok: false, error: 'Email is required for CRM sync' }
  }

  const properties = buildContactProperties(form, payload)

  const contactId = await upsertHubSpotContact(properties)
  if (!contactId) {
    return { ok: false, error: 'Unable to create or update contact in HubSpot' }
  }

  const noteOk = await attachHubSpotNote(contactId, formatNoteBody(form, payload))
  if (!noteOk) {
    return { ok: false, error: 'Contact saved but submission details could not be attached in HubSpot' }
  }

  return { ok: true }
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

export default async function handler(
  req: { method?: string; body?: SubmitFormBody },
  res: {
    setHeader: (name: string, value: string) => void
    status: (code: number) => { json: (body: unknown) => unknown }
  },
) {
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

  const requiresRecaptcha = !FORMS_WITHOUT_RECAPTCHA.includes(form)

  if (requiresRecaptcha) {
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

  const hubspotResult = await syncLeadToHubSpot(form, payload)
  if (!hubspotResult.ok) {
    return res.status(502).json({
      error:
        hubspotResult.error ??
        'Your message was received but CRM sync failed. Please call (888) 999-8809.',
    })
  }

  return res.status(200).json({ ok: true, hubspot: hubspotResult.skipped ? 'skipped' : 'synced' })
}
