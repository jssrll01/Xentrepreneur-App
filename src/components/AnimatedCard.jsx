import { motion } from 'framer-motion'

export default function AnimatedCard({ title, children, index = 0 }) {
  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
    >
      <h3>{title}</h3>
      <p>{children}</p>
    </motion.div>
  )
}
