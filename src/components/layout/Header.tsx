import { useEffect, useRef, useState } from 'react'
import { ChevronDown, Menu as MenuIcon, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { NAV_LINKS, PRODUCT_MENU_ITEMS } from '../../data/site'

type DropdownNavLabel = 'Products'

const NAV_DROPDOWNS: Record<
  DropdownNavLabel,
  {
    items: readonly { label: string; href: string }[]
    hashes: string[]
  }
> = {
  Products: {
    items: PRODUCT_MENU_ITEMS,
    hashes: ['#products'],
  },
}

function isDropdownNavLabel(label: string): label is DropdownNavLabel {
  return label in NAV_DROPDOWNS
}

export function Header() {
  const location = useLocation()
  const [openDropdown, setOpenDropdown] = useState<DropdownNavLabel | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setOpenDropdown(null)
    setMobileMenuOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (!mobileMenuOpen) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [mobileMenuOpen])

  const isActive = (href: string) => {
    if (href.startsWith('/#')) {
      return false
    }

    if (href === '/service') {
      return location.pathname.startsWith('/service')
    }

    if (href === '/investor-info') {
      return location.pathname.startsWith('/investor-info')
    }

    return location.pathname === href
  }

  const isDropdownActive = (label: DropdownNavLabel) => {
    const menu = NAV_DROPDOWNS[label]

    if (label === 'Products' && location.pathname.startsWith('/products')) {
      return true
    }

    return (
      openDropdown === label ||
      menu.hashes.some((hash) => location.hash === hash)
    )
  }

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <header className="w-full border-b border-gray-100 bg-white shadow-sm">
      <div className="mx-auto flex w-full min-w-0 max-w-7xl items-center justify-between gap-2 px-3 py-2.5 sm:gap-4 sm:px-6 sm:py-3 lg:px-8">
        <Link to="/" className="min-w-0 shrink" onClick={closeMobileMenu}>
          <img
            src="/images/Logo Inferno.png"
            alt="Inferno-Roll Shutters"
            className="h-10 w-auto max-w-[9.5rem] object-contain object-left sm:h-12 sm:max-w-none lg:h-14"
          />
        </Link>

        <nav className="hidden flex-1 items-center justify-end gap-4 lg:flex lg:gap-5 xl:gap-6">
          {NAV_LINKS.map((link) =>
            isDropdownNavLabel(link.label) ? (() => {
              const dropdownLabel = link.label
              return (
                <div
                  key={link.label}
                  ref={openDropdown === dropdownLabel ? dropdownRef : null}
                  className="relative"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenDropdown((current) =>
                        current === dropdownLabel ? null : dropdownLabel,
                      )
                    }
                    aria-expanded={openDropdown === dropdownLabel}
                    aria-haspopup="true"
                    className={`inline-flex items-center gap-1 whitespace-nowrap text-sm font-medium transition-colors ${
                      isDropdownActive(dropdownLabel)
                        ? 'text-inferno-500'
                        : 'text-gray-900 hover:text-inferno-500'
                    }`}
                  >
                    {dropdownLabel}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        openDropdown === dropdownLabel ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {openDropdown === dropdownLabel ? (
                    <div className="absolute left-0 top-full z-50 mt-2 min-w-[11rem] overflow-hidden rounded-lg border border-gray-100 bg-white py-2.5 ps-3 pe-4 shadow-lg">
                      {NAV_DROPDOWNS[dropdownLabel].items.map((item) => (
                        <Link
                          key={item.label}
                          to={item.href}
                          onClick={() => setOpenDropdown(null)}
                          className="block py-1.5 text-sm font-medium text-gray-900 transition-colors hover:text-inferno-500"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              )
            })() : (
              <Link
                key={link.label}
                to={link.href}
                className={`whitespace-nowrap text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-inferno-500'
                    : 'text-gray-900 hover:text-inferno-500'
                }`}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-md border border-gray-200 text-gray-700 lg:hidden"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {mobileMenuOpen ? (
        <div className="fixed inset-0 z-40 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            aria-label="Close menu overlay"
            onClick={closeMobileMenu}
          />
          <nav className="absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col overflow-y-auto bg-white p-6 shadow-xl">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-lg font-bold text-navy-900">Menu</span>
              <button
                type="button"
                onClick={closeMobileMenu}
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md text-gray-600 hover:bg-gray-100"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <ul className="space-y-1">
              {NAV_LINKS.map((link) =>
                isDropdownNavLabel(link.label) ? (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      onClick={closeMobileMenu}
                      className="block rounded-lg px-3 py-3 text-base font-medium text-gray-900 hover:bg-gray-50"
                    >
                      {link.label}
                    </Link>
                    <ul className="mb-2 ms-3 space-y-1 border-l border-gray-200 ps-3">
                      {PRODUCT_MENU_ITEMS.map((item) => (
                        <li key={item.label}>
                          <Link
                            to={item.href}
                            onClick={closeMobileMenu}
                            className="block rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-inferno-500"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      onClick={closeMobileMenu}
                      className={`block rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-gray-50 ${
                        isActive(link.href) ? 'text-inferno-500' : 'text-gray-900'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>
        </div>
      ) : null}
    </header>
  )
}