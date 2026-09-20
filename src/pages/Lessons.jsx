import { useState, useMemo, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { LESSONS } from '../data/lessons'
import { MODULES } from '../data/modules'
import { useAuth } from '../context/AuthContext'
import Icon from '../components/Icon'

export default function Lessons() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [query, setQuery] = useState('')

  // Guard: require verification
  useEffect(() => {
    if (!user) navigate('/verify', { replace: true })
  }, [user, navigate])

  const byslug = useMemo(() => Object.fromEntries(LESSONS.map((l) => [l.slug, l])), [])

  const filteredModules = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return MODULES.map((m) => ({ ...m, lessons: m.lessons.map((s) => byslug[s]) }))
    return MODULES.map((m) => ({
      ...m,
      lessons: m.lessons
        .map((s) => byslug[s])
        .filter(
          (l) =>
            l &&
            (l.title.toLowerCase().includes(q) ||
              l.summary.toLowerCase().includes(q) ||
              l.number.includes(q))
        ),
    })).filter((m) => m.lessons.length > 0)
  }, [query, byslug])

  if (!user) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="page-header">
        <h1>Welcome, {user.name}</h1>
        <p>Your private lesson library. Work through them in order.</p>
      </div>

      <motion.div
        className="search-wrap"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        <span className="search-icon">
          <Icon name="search" size={18} />
        </span>
        <input
          className="search-input"
          type="text"
          placeholder="Search lessons…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <button className="search-clear" onClick={() => setQuery('')} aria-label="Clear">
            <Icon name="close" size={16} />
          </button>
        )}
      </motion.div>

      {filteredModules.length === 0 ? (
        <div className="search-empty">No lessons matched "{query}".</div>
      ) : (
        <div className="modules">
          {filteredModules.map((m, mi) => (
            <motion.section
              key={m.key}
              className="module"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: mi * 0.08, duration: 0.4 }}
            >
              <header className="module-header">
                <div>
                  <h2>{m.title}</h2>
                  <p>{m.description}</p>
                </div>
                <span className="module-count">
                  {m.lessons.length} {m.lessons.length === 1 ? 'lesson' : 'lessons'}
                </span>
              </header>
              <div className="grid lessons-grid">
                {m.lessons.map((lesson, i) => (
                  <motion.div
                    key={lesson.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.02, duration: 0.35 }}
                  >
                    <Link to={`/lessons/${lesson.slug}`} className="card lesson-card">
                      <span className="lesson-tag">Lesson {lesson.number}</span>
                      <h3>{lesson.title}</h3>
                      <p>{lesson.summary}</p>
                      <span className="lesson-open">Open →</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      )}
    </motion.div>
  )
}
