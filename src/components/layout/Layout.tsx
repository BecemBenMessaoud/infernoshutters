import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from './Footer'
import { SiteHeader } from './SiteHeader'

export function Layout() {
  const location = useLocation()
  const withFooterOverlap = location.pathname === '/'

  return (
    <>
      <SiteHeader />
      <Outlet />
      <Footer withOverlapSpacing={withFooterOverlap} />
    </>
  )
}