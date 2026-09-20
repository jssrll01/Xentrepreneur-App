import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInstall } from '../context/InstallContext'

export default function InstallPrompt() {
  const { showCustomPrompt, setShowCustomPrompt, triggerInstall } = useInstall()
  const [trying, setTrying] = useState(false)

  useEffect(() => {
    if (showCustomPrompt) {
      setTrying(true)
      triggerInstall().finally(() => {
        setTrying(false)
        setShowCustomPrompt(false)
      })
    }
  }, [showCustomPrompt, setShowCustomPrompt, triggerInstall])

  return (
    <AnimatePresence>
      {showCustomPrompt && (
        <motion.div
          className="install-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          onClick={() => setShowCustomPrompt(false)}
        >
          <motion.div
            className="install-modal install-modal-minimal"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="install-icon-wrap">
              <div className="install-icon">X</div>
            </div>
            <h2>{trying ? 'Opening install…' : 'Try Install again'}</h2>
            <p className="install-sub">
              {trying
                ? 'Follow the prompt from your browser.'
                : 'Native install requires Chrome or Edge. On iOS, use Share → Add to Home Screen.'}
            </p>
            <button
              className="cta install-done"
              onClick={() => setShowCustomPrompt(false)}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
