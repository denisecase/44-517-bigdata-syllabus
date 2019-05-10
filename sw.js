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

console.log("Service worker starting");

const CACHE_NAME = '44-517-v1';
const CACHE_CONTAINING_ERROR_MESSAGES = '44-517-error-cache'
const urlsToCache = [
  '/images/N60-2Stack-Full.jpg',
  '/images/northwestlogo.jpg',
  '/images/icons/android/android-launchericon-144-144.png',
  '/images/icons/android/android-launchericon-192-192.png',
  '/images/icons/android/android-launchericon-48-48.png',
  '/images/icons/android/android-launchericon-512-512.png',
  '/images/icons/android/android-launchericon-72-72.png',
  '/images/icons/android/android-launchericon-96-96.png',
  '/styles/case-syllabus.css',
  '/scripts/main.js'
];

self.addEventListener('install', event => {
  console.log("Service worker install starting");
  // Perform install steps - open cache, cache files, confirm
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache ', CACHE_NAME);
        return cache.addAll(urlsToCache);
      })
      .catch(err => {
        console.log('Error opening cache ', CACHE_NAME);
        return;
      })
  );
  console.log("Service worker installed");
});

self.addEventListener('activate', event => {
  console.log("Service worker activated");
});

self.addEventListener('beforeinstallprompt', event => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  event.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = event;
});

self.addEventListener('fetch', event => {
  console.log("Service worker got a fetch request");
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          console.log('Service worker found ', event.request.url, ' in the cache');
          return response;
        }
        else {
          console.log("Service worker fetching updated content from the web");
          return fetch(event.request)
            // IMPORTANT: Clone the response. A response is a stream 
            // and its body can only be consumed once.
            // We need one for the browser and one for the cache.
            .then(res => {
              console.log("Service worker saving response and returning fetched data")
              return caches.open(CACHE)
                .then(cache => {
                  cache.put(event.request.url, res.clone());
                  return res;
                })
            })
            .catch(err => {
              console.log('Service worker unsuccessful fetching event request ', event.request);
              return fetch(event.request);
            });
        }
      })
  );
  console.log("Service worker finished fetch");
});
