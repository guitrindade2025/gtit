import { Routes, Route, useLocation, Navigate, BrowserRouter as Router } from 'react-router-dom'
import { useEffect, Suspense } from 'react'
import Seo from './components/Seo'
import CookieConsent from './components/CookieConsent'
import Support from './pages/Support'
import Microsoft365 from './pages/Microsoft365'
import Privacy from './pages/Privacy'
import { AnimatePresence } from 'framer-motion'
import './App.css'
import './components/layout/Layout.css'
import './styles/text-selection.css'
import './styles/global-no-select.css'
import FastCursor from './components/ui/FastCursor'
import { CursorProvider, useCursor } from './context/CursorContext'
import { LayoutProvider } from './context/LayoutContext'
// import { HelmetProvider } from 'react-helmet-async'

// Layout Components
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Consulting from './pages/Consulting'
import Security from './pages/Security'
import Design from './pages/Design'
// Service Detail Pages
import WebDevelopment from './pages/ServiceDetail/WebDevelopment'
import MobileApps from './pages/ServiceDetail/MobileApps'
import CloudSolutions from './pages/CloudSolutions'

// Demo Pages
import { AdvogadosDemo, EntretenimentoDemo, PlanetasDemo, EcommerceDemo, SaudeDemo, ImobiliariaDemo, TecnologiaDemo, EducacaoDemo } from './pages/Demo'
import MobileAppsDemo from './pages/Demo/MobileAppsDemo'

// Page transition wrapper
export const AppContent = () => {
  const location = useLocation()

  // Scroll to top on route change
  useEffect(() => {
    if (!location.hash) { window.scrollTo(0, 0); return; }
    const frame = requestAnimationFrame(() => document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView());
    return () => cancelAnimationFrame(frame)
  }, [location.pathname, location.hash])

  return (
    <div className="flex flex-col min-h-screen">
      <Seo />
      <a href="#conteudo" className="skip-link">Ir para o conteúdo</a>
      <Header />
      {location.pathname.startsWith('/demo/') && <aside className="pt-28 pb-4 px-5 bg-amber-50 text-amber-950 text-center text-sm">Demonstração de interface. Os conteúdos são ilustrativos e não representam um cliente ou um caso de estudo da GT IT.</aside>}
      <div id="conteudo" className="page-content flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/mobile-apps" element={<MobileApps />} />
            <Route path="/services/cloud-solutions" element={<CloudSolutions />} />
            <Route path="/services/security" element={<Security />} />
            <Route path="/services/design" element={<Design />} />
            <Route path="/services/consulting" element={<Consulting />} />
            <Route path="/services/support" element={<Support />} />
            <Route path="/services/microsoft-365" element={<Microsoft365 />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/demo">
              <Route path="advogados" element={<AdvogadosDemo />} />
              <Route path="entretenimento" element={<EntretenimentoDemo />} />
              <Route path="planetas" element={<PlanetasDemo />} />
              <Route path="ecommerce" element={<EcommerceDemo />} />
              <Route path="saude" element={<SaudeDemo />} />
              <Route path="imobiliaria" element={<ImobiliariaDemo />} />
              <Route path="tecnologia" element={<TecnologiaDemo />} />
              <Route path="educacao" element={<EducacaoDemo />} />
              <Route path="mobile-apps" element={<MobileAppsDemo />} />
              <Route index element={<Navigate to="/services" replace />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
      <CookieConsent />
    </div>
  )
}

// CursorAwareApp component that uses the cursor context
const CursorAwareApp = () => {
  const { cursorStyle, primaryColor, secondaryColor, isTouchDevice } = useCursor();
  
  // Don't render cursor for touch devices only (always enable for desktop)
  if (isTouchDevice) {
    return <AppContent />;
  }

  return (
    <>      <FastCursor 
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        cursorSize={10}
        cursorRingSize={36}
        cursorStyle={cursorStyle}
      />
      <AppContent />
    </>
  );
};

function App() {
  return (
    // <HelmetProvider>
      <Router>
        <CursorProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <LayoutProvider>
              <CursorAwareApp />
            </LayoutProvider>
          </Suspense>
        </CursorProvider>
      </Router>
    // </HelmetProvider>
  )
}

export default App
