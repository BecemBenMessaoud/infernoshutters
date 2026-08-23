/** Public site key — safe for frontend (set in Vercel / .env). */
export const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY ?? ''

export const isRecaptchaConfigured = RECAPTCHA_SITE_KEY.length > 0
