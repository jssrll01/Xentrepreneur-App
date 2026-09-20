/* Minimal service worker to enable PWA installability.
   Intentionally does NOT cache anything or serve a fallback —
   the app always fetches fresh assets from the network. */
self.addEventListener('install', () => self.skipWaiting())
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()))
self.addEventListener('fetch', () => { /* network passthrough */ })
