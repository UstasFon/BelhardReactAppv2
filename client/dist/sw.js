self.addEventListener('install', function(event) {
    let indexPage = new Request('index.html');
    event.waitUntil(
        fetch(indexPage).then(function(response) {
            return caches.open('pwabuilder-offline').then(function(cache) {
                return cache.put(indexPage, response);
            });
        }));
});
self.addEventListener('fetch', function(event) {
    let updateCache = (request) => {
        return caches.open('pwabuilder-offline').then(function (cache) {
            return fetch(request).then(function (response) {
                console.log('[PWA Builder] add page to offline'+response.url);
                // TO DO: Add modal function
                return cache.put(request, response);
            });
        });
    };
    event.waitUntil(updateCache(event.request));
    event.respondWith(
        fetch(event.request).catch(function(error) {
            console.log( '[PWA Builder] Network request Failed. Serving content from cache: ' + error );
            return caches.open('pwabuilder-offline').then(function (cache) {
                return cache.match(event.request).then(function (matching) {
                    let report =  !matching || matching.status == 404?Promise.reject('no-match'): matching;
                    return report
                });
            });
        })
    );
});
