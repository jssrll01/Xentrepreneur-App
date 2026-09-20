import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import BackToTop from './BackToTop'
import TableOfContents from './TableOfContents'
import LessonNav from './LessonNav'
import Icon from './Icon'

export default function LessonLayout({ number, title, summary, children }) {
  const { slug } = useParams()

  return (
    <motion.article
      className="lesson"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Link to="/lessons" className="back-link">
        <Icon name="arrow-left" size={16} />
        <span>Back to Lessons</span>
      </Link>

      <header className="lesson-header">
        <span className="lesson-number">Lesson {number}</span>
        <h1>{title}</h1>
        <p>{summary}</p>
      </header>

      <TableOfContents />

      <div className="lesson-body">{children}</div>

      <Link to="/lessons" className="lesson-return-card">
        <span className="lesson-return-icon">
          <Icon name="book" size={22} />
        </span>
        <div className="lesson-return-text">
          <span className="lesson-return-label">Return to</span>
          <span className="lesson-return-title">All Lessons</span>
        </div>
        <span className="lesson-return-arrow">→</span>
      </Link>

      <LessonNav currentSlug={slug} />

      <BackToTop />
    </motion.article>
  )
}
