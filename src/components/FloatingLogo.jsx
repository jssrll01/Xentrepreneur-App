import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function FloatingLogo() {
  return (
    <motion.div
      className="floating-logo"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Link to="/" className="floating-logo-link">
        Xentrepreneur
      </Link>
    </motion.div>
  )
}
