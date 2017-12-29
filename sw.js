self.addEventListener('install', function(event){
  console.log('[Service Worker] Installed');
})

self.addEventListener('activate', function(event){
  console.log('[Service Worker] Activated');
  return self.clients.claim();
})

self.addEventListener('fetch', function(event){
  console.log('[Service Worker] fetching');
  event.respondWith(fetch(event.request));
})