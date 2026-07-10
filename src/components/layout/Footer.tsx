import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { PHONE, POWERED_BY } from '../../data/site'
import { SOCIAL_LINKS } from '../../data/social'
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from '../ui/SocialIcons'

type FooterProps = {
  withOverlapSpacing?: boolean
}

const FOOTER_LINKS_LEFT = ['Contact', 'Service areas', 'Testimonials'] as const
const FOOTER_LINKS_RIGHT = ['Hours', 'Quick links'] as const

const SOCIAL_ICONS = {
  Facebook: FacebookIcon,
  X: TwitterIcon,
  LinkedIn: LinkedinIcon,
  Instagram: InstagramIcon,
} as const

export function Footer({ withOverlapSpacing = false }: FooterProps) {
  return (
    <footer
      className={`relative z-10 bg-[#f3f2ee] ${
        withOverlapSpacing ? 'pt-20 lg:pt-24' : 'pt-12'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img
              src="/images/Logo Inferno.png"
              alt="Inferno-Roll"
              className="h-16 w-auto object-contain"
            />
            <p className="mt-2 text-sm text-gray-600">Powered by {POWERED_BY}</p>
            <p className="mt-6 text-sm font-semibold text-navy-900">Phone Number:</p>
            <a
              href={`tel:${PHONE.replace(/\D/g, '')}`}
              className="mt-1 inline-block text-sm text-gray-700 underline transition hover:text-inferno-500"
            >
              {PHONE}
            </a>
          </div>

          <div>
            <ul className="space-y-3">
              {FOOTER_LINKS_LEFT.map((label) => (
                <li key={label}>
                  <a
                    href="#"
                    className="flex items-center gap-1 text-sm text-gray-700 transition hover:text-inferno-500"
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-inferno-500" />
                    <ChevronRight className="-ml-2.5 h-3.5 w-3.5 text-inferno-500" />
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="mt-4 inline-block text-sm text-gray-700 underline transition hover:text-inferno-500"
            >
              Contact Us
            </Link>
          </div>

          <div>
            <ul className="space-y-3">
              {FOOTER_LINKS_RIGHT.map((label) => (
                <li key={label}>
                  <a
                    href="#"
                    className="flex items-center gap-1 text-sm text-gray-700 transition hover:text-inferno-500"
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-inferno-500" />
                    <ChevronRight className="-ml-2.5 h-3.5 w-3.5 text-inferno-500" />
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-navy-900">Newsletter</h4>
            <p className="mt-2 text-sm text-gray-600">Get updates about our latest news!</p>
            <form className="mt-4 flex" onSubmit={(event) => event.preventDefault()}>
              <input
                type="email"
                placeholder="you@example.com"
                className="flex-1 rounded-l-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-inferno-500"
              />
              <button
                type="submit"
                className="flex items-center justify-center rounded-r-lg bg-inferno-500 px-3 text-white transition hover:bg-inferno-600"
                aria-label="Subscribe"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <h4 className="mt-6 text-sm font-bold text-navy-900">Follow Us:</h4>
            <div className="mt-3 flex gap-3">
              {SOCIAL_LINKS.map(({ href, label }) => {
                const Icon = SOCIAL_ICONS[label]
                return (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 transition hover:text-inferno-500"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-end gap-4 border-t border-gray-300 pt-6 text-xs text-gray-500">
          <a href="#" className="transition hover:text-inferno-500">
            Privacy Policy
          </a>
          <a href="#" className="transition hover:text-inferno-500">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  )
}