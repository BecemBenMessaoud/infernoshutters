import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'
import { TopBar } from './TopBar'

export function Layout() {
  const location = useLocation()
  const withFooterOverlap = location.pathname === '/'

  return (
    <>
      <div className="sticky top-0 z-50">
        <TopBar />
        <Header />
      </div>
      <Outlet />
      <Footer withOverlapSpacing={withFooterOverlap} />
    </>
  )
}