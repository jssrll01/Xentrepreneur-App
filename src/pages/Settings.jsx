import { Navigate, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import Icon from '../components/Icon'
import { useAuth } from '../context/AuthContext'
import { useFontSize } from '../context/FontSizeContext'
import { usePreferences } from '../context/PreferencesContext'

function Toggle({ label, description, value, onChange }) {
  return (
    <div className="setting-row">
      <div className="setting-info">
        <span className="setting-label">{label}</span>
        {description && <span className="setting-desc">{description}</span>}
      </div>
      <button
        className={`toggle ${value ? 'on' : ''}`}
        onClick={onChange}
        aria-pressed={value}
        aria-label={label}
      >
        <span className="toggle-knob" />
      </button>
    </div>
  )
}

export default function Settings() {
  const { user } = useAuth()
  const { sliderValue, setSliderValue, sizePx } = useFontSize()
  const { prefs, toggle, resetAll } = usePreferences()
  const navigate = useNavigate()

  if (!user) return <Navigate to="/verify" replace />

  const pct = sliderValue

  const handleBack = () => {
    if (window.history.length > 1) navigate(-1)
    else navigate('/lessons')
  }

  return (
    <PageTransition>
      <article className="settings-page">
        <button className="settings-back" onClick={handleBack} type="button">
          <Icon name="arrow-left" size={16} />
          <span>Back</span>
        </button>

        <header className="page-header">
          <h1>Settings</h1>
          <p>Personalize your reading experience.</p>
        </header>

        <motion.section
          className="settings-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2>Account</h2>
          <div className="setting-row">
            <div className="setting-info">
              <span className="setting-label">Access Level</span>
              <span className="setting-desc">Your current plan tier</span>
            </div>
            <span className="setting-value">{user.name}</span>
          </div>
          <div className="setting-row">
            <div className="setting-info">
              <span className="setting-label">Access ID</span>
              <span className="setting-desc">Stored locally on this device</span>
            </div>
            <span className="setting-value">••••••••</span>
          </div>
        </motion.section>

        <motion.section
          className="settings-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.08 }}
        >
          <h2>Typography</h2>
          <div className="setting-slider-wrap">
            <div className="setting-slider-labels">
              <span>Text Size</span>
              <span className="setting-value">{sizePx}px</span>
            </div>
            <div className="fontsize-slider-row">
              <span className="slider-aa small">A</span>
              <input
                type="range"
                min="0"
                max="100"
                value={sliderValue}
                onChange={(e) => setSliderValue(Number(e.target.value))}
                className="fontsize-slider"
                style={{ '--pct': `${pct}%` }}
                aria-label="Text size"
              />
              <span className="slider-aa large">A</span>
            </div>
            <div className="setting-slider-ticks">
              <span>Small</span>
              <span>Default</span>
              <span>Large</span>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="settings-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.16 }}
        >
          <h2>Appearance</h2>
          <Toggle
            label="Compact Mode"
            description="Tighter spacing for more content per screen"
            value={prefs.compactMode}
            onChange={() => toggle('compactMode')}
          />
          <Toggle
            label="High Contrast"
            description="Stronger color contrast for readability"
            value={prefs.highContrast}
            onChange={() => toggle('highContrast')}
          />
          <Toggle
            label="Ambient Effects"
            description="Background gradients and card glow"
            value={prefs.showAmbientEffects}
            onChange={() => toggle('showAmbientEffects')}
          />
          <Toggle
            label="Reduced Motion"
            description="Minimize animations across the app"
            value={prefs.reducedMotion}
            onChange={() => toggle('reducedMotion')}
          />
        </motion.section>

        <motion.section
          className="settings-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.24 }}
        >
          <h2>Data & Reset</h2>
          <p className="settings-note-inline">
            Preferences are stored locally on this device only. Clearing them
            restores defaults.
          </p>
          <button className="setting-danger" onClick={resetAll}>
            <Icon name="logout" size={16} />
            <span>Reset All Settings</span>
          </button>
        </motion.section>

        <div className="settings-version">
          <span>Xentrepreneur</span>
          <span className="settings-version-num">v1.0.0.0</span>
        </div>
      </article>
    </PageTransition>
  )
}
