import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext'
import { FontSizeProvider } from './context/FontSizeContext'
import { PreferencesProvider } from './context/PreferencesContext'
import { InstallProvider } from './context/InstallContext'
import './styles/global.css'

// Register minimal service worker to enable PWA installability.
// It doesn't cache anything — assets are always fetched fresh.
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {})
  })
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <FontSizeProvider>
          <PreferencesProvider>
            <InstallProvider>
              <App />
            </InstallProvider>
          </PreferencesProvider>
        </FontSizeProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)
