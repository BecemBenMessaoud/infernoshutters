import { Mail, MapPin } from 'lucide-react'
import { EMAIL, POWERED_BY } from '../../data/site'
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from '../ui/SocialIcons'

const SOCIAL_LINKS = [
  { href: '#', label: 'Facebook', Icon: FacebookIcon },
  { href: '#', label: 'Twitter', Icon: TwitterIcon },
  { href: '#', label: 'LinkedIn', Icon: LinkedinIcon },
  { href: '#', label: 'Instagram', Icon: InstagramIcon },
] as const

const BADGE_CLIP_PATH = 'polygon(0 0, calc(100% - 28px) 0, 100% 100%, 0 100%)'

export function TopBar() {
  return (
    <div className="flex w-full min-w-0 items-stretch overflow-hidden bg-navy-900 text-xs text-white sm:text-sm">
      <div
        className="relative z-10 flex shrink-0 items-center gap-2 bg-inferno-500 py-2 pl-4 pr-12 sm:py-2.5 sm:pl-6 sm:pr-14"
        style={{ clipPath: BADGE_CLIP_PATH }}
      >
        <MapPin className="h-4 w-4 shrink-0" strokeWidth={2.5} />
        <span className="whitespace-nowrap font-semibold">{POWERED_BY}</span>
      </div>

      <div className="flex min-w-0 flex-1 items-center justify-end gap-3 py-2 pr-4 sm:py-2.5 sm:pr-6 lg:pr-8">
        <a
          href={`mailto:${EMAIL}`}
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center transition-colors hover:text-inferno-400"
          aria-label={`Email ${EMAIL}`}
        >
          <Mail className="h-4 w-4 shrink-0" strokeWidth={2} />
        </a>

        {SOCIAL_LINKS.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center transition-colors hover:text-inferno-400"
          >
            <Icon className="h-4 w-4" />
          </a>
        ))}
      </div>
    </div>
  )
}
