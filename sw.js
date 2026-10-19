/* sw.js — TRAZA//CO2 v2.1.1 */
const CACHE = 'traza-co2-v2.1.1';
const RUNTIME = 'traza-co2-runtime-v2.1.1';

const CORE = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-512-maskable.png'
];

// CDN necesarios para que la app funcione SIN CONEXIÓN
const CDN_HOSTS = ['unpkg.com', 'cdn.tailwindcss.com'];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    // allSettled: si un fichero aún no está publicado, el SW NO muere en cadena
    await Promise.allSettled(
      CORE.map((url) => cache.add(new Request(url, { cache: 'reload' })))
    );
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(
      keys.filter((k) => k !== CACHE && k !== RUNTIME).map((k) => caches.delete(k))
    );
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  const isCDN = CDN_HOSTS.includes(url.hostname);
  if (url.origin !== self.location.origin && !isCDN) return;

  // 1) Apertura de la app: red primero, sin cobertura => index en caché
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put('./index.html', copy));
          return res;
        })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  // 2) Recursos propios y CDN: cache-first + revalidación en segundo plano
  event.respondWith(
    caches.match(req).then((cached) => {
      const network = fetch(req)
        .then((res) => {
          if (res && (res.ok || res.type === 'opaque')) {
            const copy = res.clone();
            caches.open(isCDN ? RUNTIME : CACHE).then((c) => c.put(req, copy));
          }
          return res;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});