// Bump this on every deploy that touches cached files (html/css/js/icons).
// The old cache is deleted automatically in "activate" below, so this is the
// ONLY thing you need to change to force every installed user to pick up a
// fix instead of being stuck on a stale cached copy.
const CACHE_NAME = "cakes-bread-v2.0.0";
const PRECACHE_URLS = [
  "./",
  "./index.html",
  "./css/styles.css",
  "./js/data.js",
  "./js/app.js",
  "./manifest.json",
  "./assets/icons/icon-72.png",
  "./assets/icons/icon-96.png",
  "./assets/icons/icon-128.png",
  "./assets/icons/icon-144.png",
  "./assets/icons/icon-152.png",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-192-maskable.png",
  "./assets/icons/icon-384.png",
  "./assets/icons/icon-512.png",
  "./assets/icons/icon-512-maskable.png",
  "./assets/icons/favicon.png",
];

// File types that change often during development (markup/logic/styles).
// These use "stale-while-revalidate": the cached copy is returned instantly
// (fast + works offline), but a network fetch always runs in the background
// and overwrites the cache, so the NEXT load already has the update instead
// of being stuck on a cache-first copy indefinitely.
const REVALIDATE_EXTENSIONS = [".html", ".css", ".js", ".json"];

function shouldRevalidate(pathname) {
  return REVALIDATE_EXTENSIONS.some((ext) => pathname.endsWith(ext));
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const req = event.request;

  if (req.method !== "GET") return;

  // Network-first for navigation requests, fallback to cache/offline shell
  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const resClone = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, resClone));
          return res;
        })
        .catch(() => caches.match("./index.html"))
    );
    return;
  }

  const url = new URL(req.url);

  // Never cache the geocoding lookup itself since it's per-location.
  if (url.hostname === "nominatim.openstreetmap.org") {
    event.respondWith(fetch(req).catch(() => new Response(null, { status: 504 })));
    return;
  }

  if (url.origin === self.location.origin && shouldRevalidate(url.pathname)) {
    // Stale-while-revalidate: serve the cached file immediately if present,
    // and always kick off a network fetch to refresh the cache for next time.
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) =>
        cache.match(req).then((cached) => {
          const networkFetch = fetch(req)
            .then((res) => {
              if (res && res.ok) cache.put(req, res.clone());
              return res;
            })
            .catch(() => null);
          return cached || networkFetch || fetch(req);
        })
      )
    );
    return;
  }

  // Cache-first for other same-origin static assets (icons, images: these
  // rarely change, and cache-first keeps them instant + offline-friendly).
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(req).then((cached) => {
        if (cached) return cached;
        return fetch(req)
          .then((res) => {
            const resClone = res.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, resClone));
            return res;
          })
          .catch(() => cached);
      })
    );
    return;
  }

  // Network-first for other cross-origin requests (fonts, icon CDN).
  event.respondWith(
    fetch(req)
      .then((res) => {
        const resClone = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(req, resClone));
        return res;
      })
      .catch(() => caches.match(req))
  );
});
