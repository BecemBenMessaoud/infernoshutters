import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DocumentTitle } from './components/layout/DocumentTitle'
import { ScrollToTop } from './components/layout/ScrollToTop'
import { Layout } from './components/layout/Layout'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { FaqPage } from './pages/FaqPage'
import { HomePage } from './pages/HomePage'
import { ProductDetailPage } from './pages/ProductDetailPage'
import { ProductsDetailsPage } from './pages/ProductsDetailsPage'
import { ProductsOverviewPage } from './pages/ProductsOverviewPage'
import { QuotePage } from './pages/QuotePage'
import { QuoteReceivedPage } from './pages/QuoteReceivedPage'
import { ResourcesPage } from './pages/ResourcesPage'
import { ServicesPage } from './pages/ServicesPage'

function App() {
  return (
    <BrowserRouter>
      <DocumentTitle />
      <ScrollToTop />
      <Routes>
        <Route path="/products/:slug" element={<ProductDetailPage />} />
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/service" element={<ServicesPage />} />
          <Route path="/products/overview" element={<ProductsOverviewPage />} />
          <Route path="/products/details" element={<ProductsDetailsPage />} />
          <Route path="/quote" element={<QuotePage />} />
          <Route path="/quote/received" element={<QuoteReceivedPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App