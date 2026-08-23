export type HeroSlide = {
  alt: string
  objectPosition?: string
  width: number
  height: number
  /** Full-size WebP (native resolution). */
  webp: string
  /** Smaller WebP for narrow viewports. */
  webpSmall: string
  /** PNG fallback for browsers without WebP. */
  png: string
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    alt: 'Inferno-Roll shutters protecting a home from wildfire',
    width: 944,
    height: 682,
    webp: '/images/hero/inferno-roll.webp',
    webpSmall: '/images/hero/inferno-roll-640w.webp',
    png: '/images/inferno-roll.png',
  },
  {
    alt: 'Inferno-Roll shutters on an Arizona desert home',
    objectPosition: '38% center',
    width: 894,
    height: 771,
    webp: '/images/hero/az.webp',
    webpSmall: '/images/hero/az-640w.webp',
    png: '/images/az.png',
  },
  {
    alt: 'Inferno-Roll shutters on a snow-covered mountain home',
    width: 1024,
    height: 767,
    webp: '/images/hero/inferno-roll-winter.webp',
    webpSmall: '/images/hero/inferno-roll-winter-640w.webp',
    png: '/images/inferno-roll-winter.png',
  },
]

/** First-slide LCP asset (full WebP at native width). */
export const HERO_LCP_IMAGE = HERO_SLIDES[0].webp
export const HERO_LCP_IMAGE_SMALL = HERO_SLIDES[0].webpSmall
