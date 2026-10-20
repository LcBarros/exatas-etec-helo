const CACHE_PREFIX = 'helo-exatas-' + self.registration.scope;
const CACHE = CACHE_PREFIX + 'v4';
const ASSETS = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(
    keys.filter(key => key.startsWith(CACHE_PREFIX) && key !== CACHE)
      .map(key => caches.delete(key))
  )).then(() => self.clients.claim()));
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || url.origin !== self.location.origin ||
      !url.href.startsWith(self.registration.scope)) return;

  event.respondWith(caches.open(CACHE).then(async cache => {
    if (event.request.mode === 'navigate') {
      try {
        return await fetch(event.request);
      } catch (error) {
        return (await cache.match(event.request, {ignoreSearch: true})) ||
          (await cache.match('./index.html')) || Response.error();
      }
    }
    return (await cache.match(event.request)) || fetch(event.request);
  }));
});
