import { Mail, MapPin } from 'lucide-react'
import { EMAIL, POWERED_BY } from '../../data/site'
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from '../ui/SocialIcons'

export function TopBar() {
  return (
    <div className="flex w-full text-xs text-white sm:text-sm">
      <div
        className="relative z-10 flex shrink-0 items-center gap-2 bg-inferno-500 py-2.5 pl-4 pr-10 sm:pl-6 sm:pr-14"
        style={{ clipPath: 'polygon(0 0, calc(100% - 28px) 0, 100% 100%, 0 100%)' }}
      >
        <MapPin className="h-3.5 w-3.5 shrink-0" />
        <span className="font-medium sm:whitespace-nowrap">
          Powered by {POWERED_BY}
        </span>
      </div>

      <div className="-ml-6 flex flex-1 items-center justify-end gap-3 bg-navy-900 py-2.5 pl-8 pr-4 sm:gap-4 sm:pl-10 sm:pr-6 lg:pr-8">
        <a
          href={`mailto:${EMAIL}`}
          className="flex items-center gap-1.5 transition-colors hover:text-inferno-400"
        >
          <Mail className="h-3.5 w-3.5 shrink-0" />
          <span className="hidden sm:inline">{EMAIL}</span>
          <span className="sm:hidden">Email</span>
        </a>

        <span className="hidden h-4 w-px bg-white/40 sm:block" aria-hidden />

        <span className="hidden whitespace-nowrap sm:inline">Visit Us:</span>

        <div className="flex items-center gap-2.5">
          <a href="#" aria-label="Facebook" className="inline-flex min-h-11 min-w-11 items-center justify-center transition-colors hover:text-inferno-400">
            <FacebookIcon className="h-3.5 w-3.5" />
          </a>
          <a href="#" aria-label="Twitter" className="inline-flex min-h-11 min-w-11 items-center justify-center transition-colors hover:text-inferno-400">
            <TwitterIcon className="h-3.5 w-3.5" />
          </a>
          <a href="#" aria-label="LinkedIn" className="inline-flex min-h-11 min-w-11 items-center justify-center transition-colors hover:text-inferno-400">
            <LinkedinIcon className="h-3.5 w-3.5" />
          </a>
          <a href="#" aria-label="Instagram" className="inline-flex min-h-11 min-w-11 items-center justify-center transition-colors hover:text-inferno-400">
            <InstagramIcon className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  )
}