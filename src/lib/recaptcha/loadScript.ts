import { RECAPTCHA_SITE_KEY } from './config'

let scriptPromise: Promise<void> | null = null

export function loadRecaptchaScript(): Promise<void> {
  if (typeof window === 'undefined') {
    return Promise.resolve()
  }

  if (window.grecaptcha) {
    return Promise.resolve()
  }

  if (scriptPromise) {
    return scriptPromise
  }

  scriptPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>('script[data-recaptcha-loader="true"]')
    if (existing) {
      existing.addEventListener('load', () => resolve(undefined), { once: true })
      existing.addEventListener('error', () => reject(new Error('Failed to load reCAPTCHA')), {
        once: true,
      })
      return
    }

    const script = document.createElement('script')
    script.src = `https://www.google.com/recaptcha/api.js?render=explicit`
    script.async = true
    script.defer = true
    script.dataset.recaptchaLoader = 'true'
    script.onload = () => resolve(undefined)
    script.onerror = () => reject(new Error('Failed to load reCAPTCHA'))
    document.head.appendChild(script)
  }).then(
    () =>
      new Promise<void>((resolve) => {
        if (!window.grecaptcha) {
          resolve(undefined)
          return
        }
        window.grecaptcha.ready(() => resolve(undefined))
      }),
  )

  return scriptPromise
}

export function assertRecaptchaSiteKey(): string {
  if (!RECAPTCHA_SITE_KEY) {
    throw new Error('reCAPTCHA is not configured. Set VITE_RECAPTCHA_SITE_KEY.')
  }
  return RECAPTCHA_SITE_KEY
}
