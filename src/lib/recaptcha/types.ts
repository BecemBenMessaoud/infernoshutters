export type Grecaptcha = {
  render: (
    container: HTMLElement,
    parameters: {
      sitekey: string
      callback?: (token: string) => void
      'expired-callback'?: () => void
      'error-callback'?: () => void
      theme?: 'light' | 'dark'
      size?: 'normal' | 'compact'
    },
  ) => number
  reset: (widgetId?: number) => void
  getResponse: (widgetId?: number) => string
  ready: (callback: () => void) => void
}

declare global {
  interface Window {
    grecaptcha?: Grecaptcha
  }
}

export {}
