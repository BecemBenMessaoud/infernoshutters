import { Link } from 'react-router-dom'

const HELPFUL_LINKS = [
  { label: 'Roll Shutter Products', href: '/products/overview' },
  { label: 'Fire-Resistant Shutters', href: '/products/fire-resistant' },
  { label: 'Installation Services', href: '/service' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Request a Quote', href: '/quote' },
] as const

export function NotFoundPage() {
  return (
    <main className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-navy-900 sm:text-4xl">Page Not Found</h1>
        <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
          The page you are looking for may have been moved or no longer exists. Browse our
          roll shutter products, services, and wildfire protection resources below.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block rounded-lg bg-inferno-500 px-8 py-3 text-sm font-bold text-white transition hover:bg-inferno-600"
        >
          Return to Home
        </Link>

        <nav aria-label="Helpful links" className="mt-12 text-left">
          <h2 className="text-center text-lg font-bold text-navy-900">Popular Pages</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {HELPFUL_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="block rounded-lg border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700 transition hover:border-inferno-500 hover:text-inferno-500"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </main>
  )
}
