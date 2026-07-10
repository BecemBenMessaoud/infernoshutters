import { Mail, MapPin } from 'lucide-react'
import { EMAIL, POWERED_BY } from '../../data/site'
import { SOCIAL_LINKS } from '../../data/social'
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from '../ui/SocialIcons'

const SOCIAL_ICONS = {
  Facebook: FacebookIcon,
  X: TwitterIcon,
  LinkedIn: LinkedinIcon,
  Instagram: InstagramIcon,
} as const

const BADGE_CLIP_PATH = 'polygon(0 0, calc(100% - 28px) 0, 100% 100%, 0 100%)'

export function TopBar() {
  return (
    <div className="flex w-full min-w-0 items-stretch overflow-hidden bg-navy-900 text-[11px] text-white sm:text-sm">
      <div
        className="relative z-10 flex max-w-[58%] shrink-0 items-center gap-1.5 bg-inferno-500 py-1.5 pl-3 pr-9 sm:max-w-none sm:gap-2 sm:py-2.5 sm:pl-6 sm:pr-14"
        style={{ clipPath: BADGE_CLIP_PATH }}
      >
        <MapPin className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" strokeWidth={2.5} />
        <span className="truncate font-semibold">{POWERED_BY}</span>
      </div>

      <div className="flex min-w-0 flex-1 flex-nowrap items-center justify-end gap-0.5 py-1.5 pr-1.5 sm:gap-2 sm:py-2.5 sm:pr-6 lg:gap-3 lg:pr-8">
        <a
          href={`mailto:${EMAIL}`}
          className="inline-flex h-7 w-7 shrink-0 items-center justify-center transition-colors hover:text-inferno-400 sm:h-9 sm:w-9"
          aria-label={`Email ${EMAIL}`}
        >
          <Mail className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" strokeWidth={2} />
        </a>

        {SOCIAL_LINKS.map(({ href, label }) => {
          const Icon = SOCIAL_ICONS[label]
          return (
          <a
            key={label}
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-7 w-7 shrink-0 items-center justify-center transition-colors hover:text-inferno-400 sm:h-9 sm:w-9"
          >
            <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </a>
          )
        })}
      </div>
    </div>
  )
}
