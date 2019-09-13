if (location.hostname === 'localhost') {
  const CACHE_NAME = 'cuberider';
  self.addEventListener('fetch', function(event) {
    if (event.request.url.startsWith('http://cube.crider.co.uk')) {
      event.respondWith(
        caches.match(event.request).then(function(response) {
          // Cache hit - return response
          if (response) return response;
          // Cache not hit - needs fetching
          return fetch(event.request).then(function(response) {
            var responseToCache = response.clone();
            caches.open(CACHE_NAME).then(function(cache) {
              cache.put(event.request, responseToCache);
            });
            return response;
          });
        })
      );
    }
  });
}
