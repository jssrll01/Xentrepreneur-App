// Each key is an 8-digit authentication ID.
// Every user gets their own unique key.
// Add or remove entries here as needed.

export const AUTH_KEYS = [
  { id: '10000001', name: 'astraaaa' },
  { id: '10000002', name: 'Beta Member' },
  { id: '10000003', name: 'VIP Access' },
  { id: '10000004', name: 'Early Adopter' },
  { id: '10000005', name: 'Inner Circle' },
  { id: '20000001', name: 'Premium Member' },
  { id: '20000002', name: 'Pro Member' },
  { id: '20000003', name: 'Elite Member' },
  { id: '30000001', name: 'Mastermind' },
  { id: '30000002', name: 'Legacy Member' },
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
