import { ArrowRight, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import { EMAIL, NAV_LINKS } from '../../data/site'

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src="/images/Logo Inferno.png" alt="Inferno-Roll" className="h-16 w-auto object-contain" />
            <p className="mt-2 text-sm text-gray-500">Powered by Sun & Security</p>
            <div className="mt-4 flex gap-3">
              <a href="#" aria-label="Facebook" className="text-gray-600 transition hover:text-inferno-500"><Facebook className="h-4 w-4" /></a>
              <a href="#" aria-label="Twitter" className="text-gray-600 transition hover:text-inferno-500"><Twitter className="h-4 w-4" /></a>
              <a href="#" aria-label="LinkedIn" className="text-gray-600 transition hover:text-inferno-500"><Linkedin className="h-4 w-4" /></a>
              <a href="#" aria-label="Instagram" className="text-gray-600 transition hover:text-inferno-500"><Instagram className="h-4 w-4" /></a>
            </div>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-navy-900">Contact Info</h4>
            <p className="text-sm text-gray-600">{EMAIL}</p>
            <p className="mt-1 text-sm text-gray-600">(888) 999-8809</p>
            <p className="mt-2 text-sm text-gray-600">Los Angeles, CA</p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-navy-900">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.slice(0, 6).map((link) => (
                <li key={link.label}><a href={link.href} className="text-sm text-gray-600 transition hover:text-inferno-500">{link.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-navy-900">Newsletter</h4>
            <p className="mb-3 text-sm text-gray-600">Get updates about our latest news!</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="you@example.com" className="flex-1 rounded-l-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-inferno-500" />
              <button type="submit" className="flex items-center justify-center rounded-r-lg bg-inferno-500 px-3 text-white transition hover:bg-inferno-600" aria-label="Subscribe"><ArrowRight className="h-4 w-4" /></button>
            </form>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 text-xs text-gray-500 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Inferno-Roll. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="transition hover:text-inferno-500">Privacy Policy</a>
            <a href="#" className="transition hover:text-inferno-500">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
