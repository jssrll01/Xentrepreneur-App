import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import FloatingBurger from './components/FloatingBurger'
import FloatingLogo from './components/FloatingLogo'
import Notifications from './components/Notifications'
import InstallPrompt from './components/InstallPrompt'
import Home from './pages/Home'
import Verify from './pages/Verify'
import Lessons from './pages/Lessons'
import LessonView from './pages/LessonView'
import About from './pages/About'
import NotificationsPage from './pages/Notifications'
import Settings from './pages/Settings'

const HIDE_FLOATING_PATHS = ['/notifications', '/settings']

export default function App() {
  const location = useLocation()
  const hideFloating =
    /^\/lessons\/[^/]+$/.test(location.pathname) ||
    HIDE_FLOATING_PATHS.includes(location.pathname)

  return (
    <div className="app">
      <ScrollToTop />

      {!hideFloating && (
        <>
          <FloatingLogo />
          <div className="floating-controls">
            <Notifications />
            <FloatingBurger />
          </div>
        </>
      )}

      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/lessons/:slug" element={<LessonView />} />
            <Route path="/about" element={<About />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />

      <InstallPrompt />
    </div>
  )
}
