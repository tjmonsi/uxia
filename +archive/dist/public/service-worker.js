
    console.log('Development mode. Will cache files in production mode. Generated: Thu Sep 14 2017 18:19:30 GMT+0800 (PHT)')
    // The install handler takes care of precaching the resources we always need.
    self.addEventListener('install', event => {
      if (self.skipWaiting) { self.skipWaiting(); }
    });

    // The activate handler takes care of cleaning up old caches.
    self.addEventListener('activate', event => {
      console.log('activated')
    });
  