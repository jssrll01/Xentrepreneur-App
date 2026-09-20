// Each key is an 8-digit authentication ID.
// Every user gets their own unique key.
// Add or remove entries here as needed.

export const AUTH_KEYS = [
  { id: '10101010', name: 'astraaaa' },
]

// Validate a key — returns true if the 8-digit ID exists.
export function isValidKey(input) {
  const value = String(input).trim()
  return AUTH_KEYS.some((k) => k.id === value)
}

// Look up a key's name (for personalized welcome).
export function getKeyOwner(input) {
  const value = String(input).trim()
  const found = AUTH_KEYS.find((k) => k.id === value)
  return found ? found.name : null
}
