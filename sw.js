const CACHE='fanta-asta-v56';
const PRECACHE=['./favicon.png','./icon-192.png','./icon-512.png','./manifest.json','./site.webmanifest'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(PRECACHE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!=='GET'||u.origin!==location.origin)return;if(u.pathname==='/'||u.pathname.endsWith('/index.html')||u.pathname.endsWith('/sw.js')){e.respondWith(fetch(e.request,{cache:'no-store'}));return}e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request).then(r=>{if(r.ok){const copy=r.clone();caches.open(CACHE).then(cache=>cache.put(e.request,copy))}return r}).catch(()=>c)))})
