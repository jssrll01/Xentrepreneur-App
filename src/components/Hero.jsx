import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <motion.section className="hero" variants={container} initial="hidden" animate="show">
      <motion.h1 variants={item}>
        Build The Business. Own The Wealth.
      </motion.h1>
      <motion.p variants={item}>
        Xentrepreneur is your shortcut from broke dreamer to funded founder —
        real strategy, zero fluff.
      </motion.p>
      <motion.div variants={item}>
        <Link to="/verify" className="cta">Start Building →</Link>
      </motion.div>
    </motion.section>
  )
}
