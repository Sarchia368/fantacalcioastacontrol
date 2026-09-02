const CACHE='fanta-asta-v50';
const CORE=['./','./index.html','./manifest.json','./site.webmanifest','./favicon.png','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);if(u.pathname==='/'||u.pathname.endsWith('/index.html')||u.pathname.endsWith('/sw.js')){e.respondWith(fetch(r,{cache:'no-store'}).catch(()=>caches.match(r)));return;}e.respondWith(caches.match(r).then(x=>x||fetch(r).then(res=>{const copy=res.clone();caches.open(CACHE).then(c=>c.put(r,copy));return res;})))});
