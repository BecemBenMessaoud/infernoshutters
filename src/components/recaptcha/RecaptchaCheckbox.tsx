import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { assertRecaptchaSiteKey, loadRecaptchaScript } from '../../lib/recaptcha/loadScript'
import { isRecaptchaConfigured } from '../../lib/recaptcha/config'

export type RecaptchaHandle = {
  getToken: () => string | null
  reset: () => void
}

type RecaptchaCheckboxProps = {
  className?: string
  size?: 'normal' | 'compact'
  onChange?: (token: string | null) => void
}

export const RecaptchaCheckbox = forwardRef<RecaptchaHandle, RecaptchaCheckboxProps>(
  function RecaptchaCheckbox({ className = '', size = 'normal', onChange }, ref) {
    const containerRef = useRef<HTMLDivElement>(null)
    const widgetIdRef = useRef<number | null>(null)
    const [loadError, setLoadError] = useState<string | null>(null)

    useImperativeHandle(ref, () => ({
      getToken: () => {
        if (!window.grecaptcha || widgetIdRef.current === null) {
          return null
        }
        const token = window.grecaptcha.getResponse(widgetIdRef.current)
        return token || null
      },
      reset: () => {
        if (window.grecaptcha && widgetIdRef.current !== null) {
          window.grecaptcha.reset(widgetIdRef.current)
        }
        onChange?.(null)
      },
    }))

    useEffect(() => {
      if (!isRecaptchaConfigured || !containerRef.current) {
        return
      }

      let cancelled = false

      loadRecaptchaScript()
        .then(() => {
          if (cancelled || !containerRef.current || !window.grecaptcha) {
            return
          }

          if (widgetIdRef.current !== null) {
            return
          }

          widgetIdRef.current = window.grecaptcha.render(containerRef.current, {
            sitekey: assertRecaptchaSiteKey(),
            size,
            theme: 'light',
            callback: (token) => onChange?.(token),
            'expired-callback': () => onChange?.(null),
            'error-callback': () => onChange?.(null),
          })
        })
        .catch(() => {
          if (!cancelled) {
            setLoadError('Unable to load reCAPTCHA. Please refresh and try again.')
          }
        })

      return () => {
        cancelled = true
      }
    }, [onChange, size])

    if (!isRecaptchaConfigured) {
      return (
        <p className="text-xs text-amber-700" role="status">
          reCAPTCHA is not configured for this environment.
        </p>
      )
    }

    if (loadError) {
      return (
        <p className="text-xs text-red-600" role="alert">
          {loadError}
        </p>
      )
    }

    return <div ref={containerRef} className={className} aria-label="reCAPTCHA verification" />
  },
)
