import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Breadcrumbs } from '../seo/Breadcrumbs'
import { Footer } from './Footer'
import { SiteHeader } from './SiteHeader'
import { SkipToContent } from './SkipToContent'

export function Layout() {
  const location = useLocation()
  const withFooterOverlap = location.pathname === '/'

  useEffect(() => {
    const main = document.querySelector('main')
    if (main) {
      main.id = 'main-content'
      main.tabIndex = -1
    }
  }, [location.pathname])

  return (
    <>
      <SkipToContent />
      <SiteHeader />
      <Breadcrumbs />
      <Outlet />
      <Footer withOverlapSpacing={withFooterOverlap} />
    </>
  )
}
