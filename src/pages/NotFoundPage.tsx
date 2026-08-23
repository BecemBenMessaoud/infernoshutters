import { ArrowRight, BookOpen, Mail, Package, Wrench } from 'lucide-react'
import { Link } from 'react-router-dom'
import { NotFoundHero } from '../components/layout/NotFoundHero'

const QUICK_LINKS = [
  {
    label: 'Products',
    description: 'Fire-resistant, hurricane, and security roll shutters',
    href: '/products/overview',
    icon: Package,
  },
  {
    label: 'Services',
    description: 'Installation, repair, and maintenance',
    href: '/service',
    icon: Wrench,
  },
  {
    label: 'Blog',
    description: 'Wildfire protection and home hardening guides',
    href: '/blog',
    icon: BookOpen,
  },
  {
    label: 'Contact',
    description: 'Speak with our team or request a quote',
    href: '/contact',
    icon: Mail,
  },
] as const

export function NotFoundPage() {
  return (
    <main>
      <NotFoundHero />

      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-inferno-500 px-8 py-3 text-sm font-bold text-white transition hover:bg-inferno-600 sm:text-base"
          >
            Back to Home
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>

          <nav aria-label="Helpful links" className="mt-12 text-left">
            <h2 className="text-center text-xl font-bold text-navy-900 sm:text-2xl">
              Where would you like to go?
            </h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {QUICK_LINKS.map((link) => {
                const Icon = link.icon
                return (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="group flex h-full min-h-[5.5rem] flex-col rounded-xl border border-gray-200 bg-white px-5 py-4 transition hover:border-inferno-500 hover:shadow-sm"
                    >
                      <span className="flex items-center gap-2 text-sm font-bold text-navy-900 group-hover:text-inferno-500 sm:text-base">
                        <Icon className="h-5 w-5 shrink-0 text-inferno-500" aria-hidden />
                        {link.label}
                      </span>
                      <span className="mt-2 text-sm leading-relaxed text-gray-600">
                        {link.description}
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </section>

      <section className="relative overflow-hidden bg-inferno-500 py-14 lg:py-16">
        <div
          className="absolute bottom-0 left-0 h-0 w-0 border-b-[56px] border-r-[72px] border-b-transparent border-r-navy-900"
          aria-hidden
        />
        <div className="relative z-10 flex flex-col items-center gap-4 px-4 sm:flex-row sm:justify-center">
          <Link
            to="/quote"
            className="w-full max-w-xs rounded border-2 border-white px-10 py-3 text-center text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white hover:text-inferno-500 sm:w-auto sm:text-base"
          >
            Request a Quote
          </Link>
          <Link
            to="/faq"
            className="w-full max-w-xs rounded border-2 border-white/60 px-10 py-3 text-center text-sm font-bold uppercase tracking-wide text-white transition hover:border-white hover:bg-white/10 sm:w-auto sm:text-base"
          >
            View FAQ
          </Link>
        </div>
      </section>
    </main>
  )
}
