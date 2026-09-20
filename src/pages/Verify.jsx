import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useAuth } from '../context/AuthContext'
import Icon from '../components/Icon'

export default function Verify() {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { verify } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const cleaned = value.replace(/\D/g, '')

    if (cleaned.length !== 8) {
      setError('Authentication ID must be exactly 8 digits.')
      return
    }

    setError('')
    setLoading(true)

    // simulate verification pause for visual feedback
    await new Promise((r) => setTimeout(r, 1400))

    const result = verify(cleaned)
    if (result.ok) {
      navigate('/lessons')
    } else {
      setLoading(false)
      setError(result.error)
    }
  }

  const handleChange = (e) => {
    setError('')
    setValue(e.target.value.replace(/\D/g, '').slice(0, 8))
  }

  return (
    <motion.div
      className="verify-wrap"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <form className="verify-card" onSubmit={handleSubmit}>
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loading"
              className="verify-loading"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="verify-spinner"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              >
                <Icon name="loader" size={42} />
              </motion.div>
              <h2>Verifying your ID…</h2>
              <p className="verify-loading-sub">
                Checking your access credentials against our records.
              </p>
              <div className="verify-dots">
                <motion.span
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: 0 }}
                />
                <motion.span
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: 0.2 }}
                />
                <motion.span
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: 0.4 }}
                />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h1>Enter Your Access ID</h1>
              <p>Your account ID is your access ID. Do not share it.</p>

              <input
                className="verify-input"
                type="text"
                inputMode="numeric"
                autoComplete="off"
                placeholder="••••••••"
                maxLength={8}
                value={value}
                onChange={handleChange}
                autoFocus
              />

              {error && <div className="verify-error">{error}</div>}

              <button type="submit" className="cta verify-btn">
                Unlock Lessons
              </button>

              <Link to="/" className="verify-back">
                Back to Home
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </motion.div>
  )
}
