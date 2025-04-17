const CACHE_NAME = 'bus-tracker-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/driver_login.html',
    '/passenger.html',
    '/bus_info.html',
    '/track.html',
    '/driver_signup.html'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
}); 