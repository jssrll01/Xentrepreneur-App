import { useEffect, useState } from 'react'

export default function TableOfContents() {
  const [headings, setHeadings] = useState([])
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const article = document.querySelector('.lesson-body')
    if (!article) return

    const els = Array.from(article.querySelectorAll('h2'))
    const items = els.map((el, i) => {
      const id = `section-${i}`
      el.id = id
      return { id, text: el.textContent }
    })
    setHeadings(items)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-20% 0px -70% 0px' }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  if (headings.length === 0) return null

  return (
    <nav className={`toc ${open ? 'open' : ''}`}>
      <button className="toc-toggle" onClick={() => setOpen((v) => !v)}>
        On This Page
        <span className={`toc-arrow ${open ? 'up' : ''}`}>▾</span>
      </button>
      <ul className="toc-list">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className={active === h.id ? 'active' : ''}
              onClick={() => setOpen(false)}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
