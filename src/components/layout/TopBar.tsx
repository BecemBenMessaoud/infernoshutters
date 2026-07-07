import { Mail, MapPin } from 'lucide-react'
import { EMAIL, POWERED_BY } from '../../data/site'
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from '../ui/SocialIcons'

const SOCIAL_LINKS = [
  { href: '#', label: 'Facebook', Icon: FacebookIcon },
  { href: '#', label: 'Twitter', Icon: TwitterIcon },
  { href: '#', label: 'LinkedIn', Icon: LinkedinIcon },
  { href: '#', label: 'Instagram', Icon: InstagramIcon },
] as const

export function TopBar() {
  return (
    <div className="flex w-full min-w-0 overflow-hidden text-xs text-white sm:text-sm">
      <div
        className="relative z-10 flex min-w-0 max-w-[52%] items-center gap-1.5 bg-inferno-500 py-2 pl-3 pr-7 sm:max-w-none sm:gap-2 sm:py-2.5 sm:pl-6 sm:pr-14"
        style={{ clipPath: 'polygon(0 0, calc(100% - 28px) 0, 100% 100%, 0 100%)' }}
      >
        <MapPin className="h-3.5 w-3.5 shrink-0" />
        <span className="truncate font-medium">
          <span className="sm:hidden">{POWERED_BY}</span>
          <span className="hidden sm:inline">Powered by {POWERED_BY}</span>
        </span>
      </div>

      <div className="-ml-4 flex min-w-0 flex-1 items-center justify-end gap-1 bg-navy-900 py-2 pl-5 pr-2 sm:-ml-6 sm:gap-3 sm:py-2.5 sm:pl-10 sm:pr-6 lg:pr-8">
        <a
          href={`mailto:${EMAIL}`}
          className="inline-flex min-h-9 min-w-9 shrink-0 items-center justify-center gap-1.5 transition-colors hover:text-inferno-400 sm:min-h-0 sm:min-w-0 sm:justify-start"
          aria-label={`Email ${EMAIL}`}
        >
          <Mail className="h-3.5 w-3.5 shrink-0" />
          <span className="hidden sm:inline">{EMAIL}</span>
        </a>

        <span className="hidden h-4 w-px shrink-0 bg-white/40 sm:block" aria-hidden />

        <span className="hidden whitespace-nowrap sm:inline">Visit Us:</span>

        <div className="flex shrink-0 items-center">
          {SOCIAL_LINKS.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="inline-flex min-h-9 min-w-9 items-center justify-center transition-colors hover:text-inferno-400 sm:min-h-11 sm:min-w-11"
            >
              <Icon className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}