const CACHE_NAME = 'vigilancia-nutricional-v5';
const ASSETS_TO_CACHE = [
  'index.html',
  'manifest.json',
  'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js'
];

// Instalar service worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE).catch(err => {
        console.log('Algunos assets no pudieron cachearse (esto es normal si falta conexión):', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// Activar service worker
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Estrategia: Network first, fallback to cache
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Solo cachear requests HTTP/HTTPS
  if (!url.protocol.startsWith('http')) {
    return;
  }

  // Para CDN de terceros: Network first
  if (url.hostname.includes('cdnjs.cloudflare.com')) {
    event.respondWith(
      fetch(request)
        .then(response => {
          if (response.ok) {
            const cache = caches.open(CACHE_NAME);
            cache.then(c => c.put(request, response.clone()));
          }
          return response;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  // Para recursos locales: Cache first
  event.respondWith(
    caches.match(request)
      .then(response => response || fetch(request))
      .catch(() => {
        // Si no está en cache y no hay conexión, devolver página offline
        if (request.destination === 'document') {
          return caches.match('index.html');
        }
      })
  );
});

// Mensaje desde el cliente para limpiar cache
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
