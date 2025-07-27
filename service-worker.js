const CACHE_NAME = 'rihayi-cache-v1'; // This is like a name for our special storage box
const urlsToCache = [
  '/', // This means the main page
  '/index.html', // Our main drawing
  '/manifest.json', // Our toy box label
  'https://cdn.tailwindcss.com', // The special paint we use for looks
  'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap', // The fancy writing style
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css' // The little icons like microphones
];

// When your app is first put on the phone, this helper puts all our important files in a special "cache" box.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache); // Put all the listed files into the box
      })
  );
});

// When your app needs something (like a picture or a part of the page),
// this helper first checks its "cache" box. If it's there, it uses that!
// If not, it goes to the internet to get it.
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response; // Found it in the box!
        }
        return fetch(event.request); // Not in the box, go get it from the internet
      })
  );
});

// When we make a new version of the app, this helper cleans up old "cache" boxes
// so we don't have too many old toys lying around!
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME]; // Only keep the newest box
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName); // Throw away old boxes
          }
        })
      );
    })
  );
});