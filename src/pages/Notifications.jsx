import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import Icon from '../components/Icon'

const INITIAL = [
  { id: 1, title: 'Welcome to Xentrepreneur', body: 'Your 50-lesson business curriculum is ready.' },
  { id: 2, title: 'New Lesson: Price Psychology', body: 'Learn how to frame prices for better decisions.' },
  { id: 3, title: 'New Lesson: Choice Psychology', body: 'Design decisions customers can actually make.' },
  { id: 4, title: 'New Lesson: Urgency', body: 'Learn how to motivate action with real deadlines.' },
]

export default function Notifications() {
  const [items] = useState(INITIAL)

  return (
    <PageTransition>
      <article className="notif-page">
        <Link to="/" className="back-link">
          <Icon name="arrow-left" size={16} />
          <span>Back to Home</span>
        </Link>

        <header className="page-header">
          <h1>Notifications</h1>
          <p>Updates and new lessons from Xentrepreneur.</p>
        </header>

        {items.length === 0 ? (
          <div className="notif-empty">You're all caught up.</div>
        ) : (
          <ul className="notif-page-list">
            {items.map((n, i) => (
              <motion.li
                key={n.id}
                className="notif-page-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.35 }}
              >
                <div className="notif-page-title">{n.title}</div>
                <div className="notif-page-body">{n.body}</div>
              </motion.li>
            ))}
          </ul>
        )}
      </article>
    </PageTransition>
  )
}
