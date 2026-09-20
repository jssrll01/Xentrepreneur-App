import { useState, useEffect } from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useAuth } from '../context/AuthContext'
import { useInstall } from '../context/InstallContext'
import Icon from './Icon'

const APP_VERSION = '1.0.0.0'

const links = [
  { to: '/', label: 'Home', icon: 'home' },
  { to: '/lessons', label: 'Lessons', icon: 'book' },
  { to: '/about', label: 'About Xentrepreneur', icon: 'info' },
  { to: '/settings', label: 'Settings', icon: 'settings' },
]

export default function FloatingBurger() {
  const [open, setOpen] = useState(false)
  const { user, logout } = useAuth()
  const { isInstalled, triggerInstall } = useInstall()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const handleInstall = async () => {
    setOpen(false)
    await triggerInstall()
  }

  return (
    <>
      <motion.button
        className={`floating-burger ${open ? 'open' : ''}`}
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle menu"
        aria-expanded={open}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.5, delay: 0.3, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
      >
        <span className="burger-line" />
        <span className="burger-line" />
        <span className="burger-line" />
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="burger-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
            />
            <motion.nav
              className="burger-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 32 }}
            >
              <div className="burger-header">
                <span className="burger-title">Menu</span>
                {user && (
                  <span className="burger-user">
                    Signed in as <strong>{user.name}</strong>
                  </span>
                )}
              </div>

              <ul className="burger-links">
                {links.map((l, i) => (
                  <motion.li
                    key={l.to}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i + 0.1 }}
                  >
                    <NavLink
                      to={l.to}
                      className={({ isActive }) => (isActive ? 'active' : '')}
                      onClick={() => setOpen(false)}
                    >
                      <span className="burger-icon">
                        <Icon name={l.icon} size={18} />
                      </span>
                      {l.label}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>

              {!isInstalled && (
                <motion.button
                  className="burger-install"
                  onClick={handleInstall}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.32 }}
                  type="button"
                >
                  <Icon name="download" size={18} />
                  <span>Install App</span>
                </motion.button>
              )}

              {user && (
                <motion.button
                  className="burger-logout"
                  onClick={handleLogout}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  type="button"
                >
                  <Icon name="logout" size={18} />
                  <span>Log Out</span>
                </motion.button>
              )}

              <div className="burger-version">
                <span>Xentrepreneur</span>
                <span className="burger-version-num">v{APP_VERSION}</span>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
