/**
 * Provides an asynchronous service worker to 
 * manage application behavior based on network access.
 * 
 * - Download (on accessing page, every 24 hours)
 * - Install (if new): yields install event
 * - Activate: yields activate after pages load and old service worker is no longer used
 *  
 * Use Chrome Dev Tools / Application / ServiceWorker to debug.
 * 
 * Check "update on reload" to force service worker update on page reload.
 * 
 * JSDoc comments are written in Markdown.
 * 
 */

const cacheName = '44-517'
const dataCacheName = '44-517-data'
const repo = '44-517-bigdata-syllabus'
const filesToCache = [
  '/'+repo +'/',
  '/'+repo +'/index.html',
  '/'+repo +'/vendor/bootstrap-4.1.3-dist/css/bootstrap.min.css',
  '/'+repo +'/styles/case-syllabus.css',
  '/'+repo +'/vendor/mark.min.js',
  '/'+repo +'/scripts/main.js',
  '/'+repo +'/images/northwestlogo.jpg'
]


/* Install - prepare sw to serve files offline
*/
self.addEventListener('install', function (event) {
  console.log('SERVICE-WORKER: Starting install');
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      console.log('  SERVICE-WORKER caching app shell');
      return cache.addAll(filesToCache);
    })
  );
})

// activate is fired when worker starts up - delete outdated caches
self.addEventListener('activate', function (event) {
  console.log('SERVICE-WORKER: Starting activate')
  event.waitUntil(
    caches.keys().then(function (keyList) {
      return Promise.all(keyList.map(function (key) {
        if (key !== cacheName && key !== dataCacheName) {
          console.log('  SERVICE-WORKER removing old cache', key)
          return caches.delete(key)
        }
      }));
    })
  );
  // fix corner case and enable faster activation
  return self.clients.claim();
})

// serve the app shell from the cache
self.addEventListener('fetch', function (event) {
  console.log('SERVICE-WORKER: Starting fetch', event.request.url);

  /*
   * The app is asking for app shell files. In this scenario the app uses the
   * "Cache, falling back to the network" offline strategy:
   * https://jakearchibald.com/2014/offline-cookbook/#cache-falling-back-to-network
   */
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request)
    })
  );
})