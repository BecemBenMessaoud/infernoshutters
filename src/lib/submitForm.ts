export type ProtectedFormType =
  | 'quote'
  | 'contact'
  | 'dealer'
  | 'site-assessment'
  | 'custom-assessment'
  | 'service-call'
  | 'wholesale'
  | 'reservation'
  | 'newsletter'

export function formDataToRecord(formData: FormData): Record<string, string> {
  const record: Record<string, string> = {}
  formData.forEach((value, key) => {
    if (typeof value === 'string') {
      record[key] = value
    }
  })
  return record
}

export async function submitProtectedForm(
  form: ProtectedFormType,
  payload: Record<string, string>,
  recaptchaToken: string,
): Promise<void> {
  const response = await fetch('/api/submit-form', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ form, payload, recaptchaToken }),
  })

  if (!response.ok) {
    let message = 'Form submission failed'
    try {
      const body = (await response.json()) as { error?: string }
      if (body.error) {
        message = body.error
      }
    } catch {
      // Ignore JSON parse errors
    }
    throw new Error(message)
  }
}

export const RECAPTCHA_VALIDATION_ERROR = 'Please complete the reCAPTCHA check.'
