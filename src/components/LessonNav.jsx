import { Link } from 'react-router-dom'
import { LESSONS } from '../data/lessons'

export default function LessonNav({ currentSlug }) {
  const idx = LESSONS.findIndex((l) => l.slug === currentSlug)
  const prev = idx > 0 ? LESSONS[idx - 1] : null
  const next = idx < LESSONS.length - 1 ? LESSONS[idx + 1] : null

  return (
    <nav className="lesson-nav">
      {prev ? (
        <Link to={`/lessons/${prev.slug}`} className="lesson-nav-btn prev">
          <span className="lesson-nav-label">← Previous</span>
          <span className="lesson-nav-title">Lesson {prev.number} · {prev.title}</span>
        </Link>
      ) : <span />}

      {next ? (
        <Link to={`/lessons/${next.slug}`} className="lesson-nav-btn next">
          <span className="lesson-nav-label">Next →</span>
          <span className="lesson-nav-title">Lesson {next.number} · {next.title}</span>
        </Link>
      ) : <span />}
    </nav>
  )
}
