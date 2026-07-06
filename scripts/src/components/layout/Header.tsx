import { NAV_LINKS } from '../../data/site'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="shrink-0">
          <img src="/images/Logo Inferno.png" alt="Inferno-Roll" className="h-12 w-auto object-contain sm:h-14" />
        </a>
        <nav className="hidden items-center gap-5 xl:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                'active' in link && link.active ? 'text-inferno-500' : 'text-gray-700 hover:text-inferno-500'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button type="button" className="rounded-md border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 xl:hidden" aria-label="Open menu">
          Menu
        </button>
      </div>
    </header>
  )
}
