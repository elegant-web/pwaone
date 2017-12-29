self.addEventListener('install', function(event){
  console.log('[Service Worker] Installed');
})

self.addEventListener('activate', function(event){
  console.log('[Service Worker] Activated');
  return self.clients.claim();
})