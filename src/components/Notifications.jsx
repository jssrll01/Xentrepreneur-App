import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Icon from './Icon'

export default function Notifications() {
  const unread = 4

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.4, delay: 0.4, type: 'spring', stiffness: 200 }}
    >
      <Link to="/notifications" className="notif-bell" aria-label="Notifications">
        <Icon name="bell" size={20} />
        {unread > 0 && <span className="notif-badge">{unread}</span>}
      </Link>
    </motion.div>
  )
}
