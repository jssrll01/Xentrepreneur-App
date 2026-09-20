import { createContext, useContext, useState, useEffect } from 'react'
import { isValidKey, getKeyOwner } from '../data/authKeys'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('xentrepreneur_user')
      return saved ? JSON.parse(saved) : null
    } catch {
      return null
    }
  })

  useEffect(() => {
    if (user) {
      localStorage.setItem('xentrepreneur_user', JSON.stringify(user))
    } else {
      localStorage.removeItem('xentrepreneur_user')
    }
  }, [user])

  const verify = (input) => {
    if (isValidKey(input)) {
      const owner = getKeyOwner(input)
      setUser({ key: String(input).trim(), name: owner })
      return { ok: true }
    }
    return { ok: false, error: 'Invalid authentication ID. Please check and try again.' }
  }

  const logout = () => setUser(null)

  return (
    <AuthContext.Provider value={{ user, verify, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider')
  return ctx
}
