import { motion, AnimatePresence } from 'framer-motion'
import { useInstall } from '../context/InstallContext'
import Icon from './Icon'

export default function InstallPrompt() {
  const { showCustomPrompt, setShowCustomPrompt } = useInstall()

  return (
    <AnimatePresence>
      {showCustomPrompt && (
        <>
          <motion.div
            className="install-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setShowCustomPrompt(false)}
          />
          <motion.div
            className="install-modal"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.3, type: 'spring', stiffness: 260 }}
          >
            <button
              className="install-close"
              onClick={() => setShowCustomPrompt(false)}
              aria-label="Close"
            >
              <Icon name="close" size={18} />
            </button>

            <div className="install-icon-wrap">
              <div className="install-icon">X</div>
            </div>

            <h2>Install Xentrepreneur</h2>
            <p className="install-sub">
              Add Xentrepreneur to your home screen for quick access — works
              like a real app, even offline.
            </p>

            <div className="install-instructions">
              <div className="install-step">
                <span className="install-step-num">1</span>
                <div>
                  <strong>Open your browser menu</strong>
                  <p>Tap the ⋮ icon (Android) or the Share button (iOS).</p>
                </div>
              </div>
              <div className="install-step">
                <span className="install-step-num">2</span>
                <div>
                  <strong>Choose "Install app"</strong>
                  <p>Or "Add to Home Screen" if you're on iPhone.</p>
                </div>
              </div>
              <div className="install-step">
                <span className="install-step-num">3</span>
                <div>
                  <strong>Confirm</strong>
                  <p>Xentrepreneur will appear on your home screen.</p>
                </div>
              </div>
            </div>

            <button
              className="cta install-done"
              onClick={() => setShowCustomPrompt(false)}
            >
              Got it
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
