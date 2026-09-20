import { createContext, useContext, useState, useEffect } from 'react'

const FontSizeContext = createContext(null)

// Slider value 0–100 maps to font size 13px → 20px
export const MIN_PX = 13
export const MAX_PX = 20

function valueToPx(v) {
  const clamped = Math.max(0, Math.min(100, Number(v)))
  return Math.round(MIN_PX + (MAX_PX - MIN_PX) * (clamped / 100))
}

export function FontSizeProvider({ children }) {
  const [sliderValue, setSliderValue] = useState(() => {
    try {
      const saved = localStorage.getItem('xent_font_slider')
      return saved !== null ? Number(saved) : 40 // default ~16px
    } catch {
      return 40
    }
  })

  useEffect(() => {
    const px = valueToPx(sliderValue)
    document.documentElement.style.fontSize = `${px}px`
    try {
      localStorage.setItem('xent_font_slider', String(sliderValue))
    } catch {}
  }, [sliderValue])

  return (
    <FontSizeContext.Provider
      value={{
        sliderValue,
        setSliderValue,
        sizePx: valueToPx(sliderValue),
      }}
    >
      {children}
    </FontSizeContext.Provider>
  )
}

export function useFontSize() {
  const ctx = useContext(FontSizeContext)
  if (!ctx) throw new Error('useFontSize must be used inside FontSizeProvider')
  return ctx
}
