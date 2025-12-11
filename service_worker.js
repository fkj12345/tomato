// 后续再做离线缓存
self.addEventListener('fetch', e => e.respondWith(fetch(e.request)));
