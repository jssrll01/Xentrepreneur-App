import { createContext, useContext, useState, useEffect } from 'react'

const InstallContext = createContext(null)

export function InstallProvider({ children }) {
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [isInstalled, setIsInstalled] = useState(false)
  const [showCustomPrompt, setShowCustomPrompt] = useState(false)

  useEffect(() => {
    // Already installed as PWA?
    const installed =
      window.matchMedia('(display-mode: standalone)').matches ||
      window.navigator.standalone === true
    setIsInstalled(installed)

    const onBeforeInstall = (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
    }

    const onInstalled = () => {
      setIsInstalled(true)
      setDeferredPrompt(null)
      setShowCustomPrompt(false)
    }

    window.addEventListener('beforeinstallprompt', onBeforeInstall)
    window.addEventListener('appinstalled', onInstalled)

    return () => {
      window.removeEventListener('beforeinstallprompt', onBeforeInstall)
      window.removeEventListener('appinstalled', onInstalled)
    }
  }, [])

  const triggerInstall = async () => {
    // iOS / unsupported browsers: show manual instructions
    if (!deferredPrompt) {
      setShowCustomPrompt(true)
      return { ok: false, reason: 'no-prompt' }
    }
    try {
      deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      setDeferredPrompt(null)
      return { ok: outcome === 'accepted', outcome }
    } catch (err) {
      setShowCustomPrompt(true)
      return { ok: false, reason: 'error' }
    }
  }

  return (
    <InstallContext.Provider
      value={{
        canInstall: !!deferredPrompt,
        isInstalled,
        triggerInstall,
        showCustomPrompt,
        setShowCustomPrompt,
      }}
    >
      {children}
    </InstallContext.Provider>
  )
}

export function useInstall() {
  const ctx = useContext(InstallContext)
  if (!ctx) throw new Error('useInstall must be used inside InstallProvider')
  return ctx
}
