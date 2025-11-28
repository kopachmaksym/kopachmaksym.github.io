/* Place this file at /sw.js on your server */
const CACHE_NAME = 'simple-pwa-v1';
const ASSETS = [
    '/',               // cache index.html as served at root
    '/index.html',
    '/offline.html',
    '/manifest.json',
    // add icons if you provide them, e.g. '/icons/icon-192.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => Promise.all(
            keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
        )).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', event => {
    // navigation requests -> try network first, fallback to cache -> offline page
    if (event.request.mode === 'navigate') {
        event.respondWith(
            fetch(event.request).then(resp => {
                // optionally update cache
                const copy = resp.clone();
                caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
                return resp;
            }).catch(() => caches.match('/offline.html'))
        );
        return;
    }

    // other requests -> cache-first, fallback to network
    event.respondWith(
        caches.match(event.request).then(cached => cached || fetch(event.request))
    );
});