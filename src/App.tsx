import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { SeoHead } from './components/seo/SeoHead'
import { ScrollToTop } from './components/layout/ScrollToTop'
import { Layout } from './components/layout/Layout'
import { AboutPage } from './pages/AboutPage'
import { BlogIndexPage } from './pages/BlogIndexPage'
import { BlogArticlePage } from './pages/BlogArticlePage'
import { BecomeADealerPage } from './pages/BecomeADealerPage'
import { ContactPage } from './pages/ContactPage'
import { FaqPage } from './pages/FaqPage'
import { InvestorInfoPage } from './pages/InvestorInfoPage'
import { HomePage } from './pages/HomePage'
import { ProductDetailPage } from './pages/ProductDetailPage'
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage'
import { ProductsDetailsPage } from './pages/ProductsDetailsPage'
import { ProductsOverviewPage } from './pages/ProductsOverviewPage'
import { QuotePage } from './pages/QuotePage'
import { QuoteReceivedPage } from './pages/QuoteReceivedPage'
import { ResourcesPage } from './pages/ResourcesPage'
import { ServicesPage } from './pages/ServicesPage'
import { TermsConditionsPage } from './pages/TermsConditionsPage'
import { NotFoundPage } from './pages/NotFoundPage'

function App() {
  return (
    <BrowserRouter>
      <SeoHead />
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/products/:slug" element={<ProductDetailPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/becomeadealer" element={<BecomeADealerPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/blog" element={<BlogIndexPage />} />
          <Route path="/blog/:slug" element={<BlogArticlePage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/investor-info" element={<InvestorInfoPage />} />
          <Route path="/service" element={<ServicesPage />} />
          <Route path="/products/overview" element={<ProductsOverviewPage />} />
          <Route path="/products/details" element={<ProductsDetailsPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-and-conditions" element={<TermsConditionsPage />} />
          <Route path="/terms" element={<Navigate to="/terms-and-conditions" replace />} />
          <Route path="/quote" element={<QuotePage />} />
          <Route path="/quote/received" element={<QuoteReceivedPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App