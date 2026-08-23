import { Suspense, lazy } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { SeoHead } from './components/seo/SeoHead'
import { ScrollToTop } from './components/layout/ScrollToTop'
import { Layout } from './components/layout/Layout'
import { HomePage } from './pages/HomePage'

const AboutPage = lazy(() => import('./pages/AboutPage').then((m) => ({ default: m.AboutPage })))
const BlogIndexPage = lazy(() =>
  import('./pages/BlogIndexPage').then((m) => ({ default: m.BlogIndexPage })),
)
const BlogArticlePage = lazy(() =>
  import('./pages/BlogArticlePage').then((m) => ({ default: m.BlogArticlePage })),
)
const BecomeADealerPage = lazy(() =>
  import('./pages/BecomeADealerPage').then((m) => ({ default: m.BecomeADealerPage })),
)
const ContactPage = lazy(() => import('./pages/ContactPage').then((m) => ({ default: m.ContactPage })))
const FaqPage = lazy(() => import('./pages/FaqPage').then((m) => ({ default: m.FaqPage })))
const InvestorInfoPage = lazy(() =>
  import('./pages/InvestorInfoPage').then((m) => ({ default: m.InvestorInfoPage })),
)
const ProductDetailPage = lazy(() =>
  import('./pages/ProductDetailPage').then((m) => ({ default: m.ProductDetailPage })),
)
const PrivacyPolicyPage = lazy(() =>
  import('./pages/PrivacyPolicyPage').then((m) => ({ default: m.PrivacyPolicyPage })),
)
const ProductsDetailsPage = lazy(() =>
  import('./pages/ProductsDetailsPage').then((m) => ({ default: m.ProductsDetailsPage })),
)
const ProductsOverviewPage = lazy(() =>
  import('./pages/ProductsOverviewPage').then((m) => ({ default: m.ProductsOverviewPage })),
)
const QuotePage = lazy(() => import('./pages/QuotePage').then((m) => ({ default: m.QuotePage })))
const QuoteReceivedPage = lazy(() =>
  import('./pages/QuoteReceivedPage').then((m) => ({ default: m.QuoteReceivedPage })),
)
const ResourcesPage = lazy(() =>
  import('./pages/ResourcesPage').then((m) => ({ default: m.ResourcesPage })),
)
const ServicesPage = lazy(() => import('./pages/ServicesPage').then((m) => ({ default: m.ServicesPage })))
const TermsConditionsPage = lazy(() =>
  import('./pages/TermsConditionsPage').then((m) => ({ default: m.TermsConditionsPage })),
)
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })))

function RouteFallback() {
  return <div className="min-h-[50vh] bg-white" aria-hidden />
}

function App() {
  return (
    <BrowserRouter>
      <SeoHead />
      <ScrollToTop />
      <Suspense fallback={<RouteFallback />}>
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
      </Suspense>
    </BrowserRouter>
  )
}

export default App
