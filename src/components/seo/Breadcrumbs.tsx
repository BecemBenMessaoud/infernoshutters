import { Link, useLocation } from 'react-router-dom'
import { getPageSeo } from '../../data/seo'

export function Breadcrumbs() {
  const { pathname } = useLocation()

  if (pathname === '/') {
    return null
  }

  const { breadcrumbs } = getPageSeo(pathname)

  if (breadcrumbs.length <= 1) {
    return null
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className="border-b border-gray-100 bg-gray-50/80"
    >
      <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-1 px-4 py-2.5 text-xs text-gray-600 sm:px-6 sm:text-sm lg:px-8">
        {breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs.length - 1

          return (
            <li key={crumb.path} className="inline-flex items-center gap-1">
              {index > 0 ? (
                <span aria-hidden className="text-gray-400">
                  /
                </span>
              ) : null}
              {isLast ? (
                <span aria-current="page" className="font-medium text-navy-900">
                  {crumb.name}
                </span>
              ) : (
                <Link
                  to={crumb.path}
                  className="transition hover:text-inferno-500"
                >
                  {crumb.name}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
