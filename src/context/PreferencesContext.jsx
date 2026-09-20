import { createContext, useContext, useState, useEffect } from 'react'

const PreferencesContext = createContext(null)

const DEFAULTS = {
  reducedMotion: false,
  compactMode: false,
  showReadingProgress: true,
  autoScrollTop: true,
  showToc: true,
  stickyHeader: true,
  focusMode: false,
  highContrast: false,
  showAmbientEffects: true,
  soundEffects: false,
}

export function PreferencesProvider({ children }) {
  const [prefs, setPrefs] = useState(() => {
    try {
      const saved = localStorage.getItem('xent_prefs')
      return saved ? { ...DEFAULTS, ...JSON.parse(saved) } : DEFAULTS
    } catch {
      return DEFAULTS
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('xent_prefs', JSON.stringify(prefs))
    } catch {}
    // Apply body-level classes
    document.body.classList.toggle('reduced-motion', prefs.reducedMotion)
    document.body.classList.toggle('compact-mode', prefs.compactMode)
    document.body.classList.toggle('high-contrast', prefs.highContrast)
    document.body.classList.toggle('focus-mode', prefs.focusMode)
    document.body.classList.toggle('no-ambient', !prefs.showAmbientEffects)
  }, [prefs])

  const toggle = (key) => {
    setPrefs((p) => ({ ...p, [key]: !p[key] }))
  }

  const setPref = (key, value) => {
    setPrefs((p) => ({ ...p, [key]: value }))
  }

  const resetAll = () => setPrefs(DEFAULTS)

  return (
    <PreferencesContext.Provider value={{ prefs, toggle, setPref, resetAll }}>
      {children}
    </PreferencesContext.Provider>
  )
}

export function usePreferences() {
  const ctx = useContext(PreferencesContext)
  if (!ctx) throw new Error('usePreferences must be used inside PreferencesProvider')
  return ctx
}
