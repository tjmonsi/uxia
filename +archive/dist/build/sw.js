importScripts('workbox-sw.prod.v2.0.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "app-toast.1.bundle.js",
    "revision": "0baaa93e846d79369ab585d4ce6880a6"
  },
  {
    "url": "bower_components/web-component-tester/browser.js",
    "revision": "b8faa14fc2f7b2f04d8aaf15dbf8d74c"
  },
  {
    "url": "bower_components/webcomponentsjs/custom-elements-es5-adapter.js",
    "revision": "a5043c1d0dd16d84558ee6cc2276212e"
  },
  {
    "url": "bower_components/webcomponentsjs/gulpfile.js",
    "revision": "0366da1f0f7858c9af2daa3ef7d950ea"
  },
  {
    "url": "bower_components/webcomponentsjs/webcomponents-hi-ce.js",
    "revision": "ac506890cf3f0f8ef4017398fa4034a0"
  },
  {
    "url": "bower_components/webcomponentsjs/webcomponents-hi-sd-ce.js",
    "revision": "c53b10e1469a4d6b1108cd5ec995875b"
  },
  {
    "url": "bower_components/webcomponentsjs/webcomponents-hi.js",
    "revision": "b88ce284fda849097ab4997d97bfc8b6"
  },
  {
    "url": "bower_components/webcomponentsjs/webcomponents-lite.js",
    "revision": "fc5fd8d2c8b27139307536abb8aecda7"
  },
  {
    "url": "bower_components/webcomponentsjs/webcomponents-loader.js",
    "revision": "f13bbbbf647b7922575a7894367ddaaf"
  },
  {
    "url": "bower_components/webcomponentsjs/webcomponents-sd-ce.js",
    "revision": "b4daa8feea009da29844c0ceffde61dd"
  },
  {
    "url": "example-not-authorized-page.4.bundle.js",
    "revision": "6b93fffd03b05c6c664724a19589dbab"
  },
  {
    "url": "example-not-found-page.3.bundle.js",
    "revision": "bb14a884311c25a46710dd04f943b87d"
  },
  {
    "url": "example-style-guide-page.2.bundle.js",
    "revision": "f2f162f898a2cecee4610a80f059375c"
  },
  {
    "url": "index.html",
    "revision": "480b1485f22f00cc153dceb11078b062"
  },
  {
    "url": "main.bundle.js",
    "revision": "b2463556c2bc3f565fb5e48797c84366"
  },
  {
    "url": "modernizr-bundle.js",
    "revision": "b8463a62043adafcbd035b6ccd2a0d7e"
  },
  {
    "url": "uxia-home-page.0.bundle.js",
    "revision": "90f0a164bb5c170800131b332eb8a05f"
  },
  {
    "url": "images/favicon.ico",
    "revision": "82b34d0faee76b89a9f946763428f668"
  },
  {
    "url": "images/img_JanetFu.png",
    "revision": "67d3a460dc191ddf98af3629626689be"
  },
  {
    "url": "images/img_logo-Agoda.png",
    "revision": "1b6b26d45c839d43d2ca0de557766b13"
  },
  {
    "url": "images/img_logo-AirAsia.png",
    "revision": "7b03f0a4211704c1d61fa9f63ecd711e"
  },
  {
    "url": "images/img_logo-Globe.png",
    "revision": "9cd7e5b668e8f85ec8378c6022d7af17"
  },
  {
    "url": "images/img_logo-Lazada.png",
    "revision": "398791e9e6661d701c5669aa70e7fef6"
  },
  {
    "url": "images/img_logo-VietnamWorks.png",
    "revision": "fd1119f03f32cce6d1a8f3169a3e6021"
  },
  {
    "url": "images/img_PatrickLim.png",
    "revision": "6b8831f1bd16ade78bbb0f6a8438eada"
  },
  {
    "url": "images/img_SuzenLim.png",
    "revision": "f62466b06b2379d7b0d3672174625da5"
  },
  {
    "url": "images/img_Taskworld.png",
    "revision": "2a3c1704c85f58db0a49faddeef480ff"
  },
  {
    "url": "images/logo-white.png",
    "revision": "f4268ce1dac13f4914adb3d3f95c16a8"
  },
  {
    "url": "images/logo.png",
    "revision": "0f3a0854200fd23c223edaa0dca8190f"
  },
  {
    "url": "images/city/ic_china.jpg",
    "revision": "767a9a96fa14ef098c1299b2e417054d"
  },
  {
    "url": "images/city/ic_china.png",
    "revision": "3e3d35a0ba2021e393831f94913424b7"
  },
  {
    "url": "images/city/ic_china@2x.png",
    "revision": "0e9dbbb1d6b0054c3f217eef15527f5b"
  },
  {
    "url": "images/city/ic_china@3x.png",
    "revision": "d7424b34ba2ce7979d0a9c4cbddf9bff"
  },
  {
    "url": "images/city/ic_hongkong.jpg",
    "revision": "4c3abd51242625d55439a08c1cb5e88e"
  },
  {
    "url": "images/city/ic_hongkong.png",
    "revision": "aef6edee4d3d1c5dd9808728f3a05635"
  },
  {
    "url": "images/city/ic_hongkong@2x.png",
    "revision": "c27e60b68dfc459369d627c1b4bdc1b4"
  },
  {
    "url": "images/city/ic_hongkong@3x.png",
    "revision": "906c6890c7d9b173e9425f4cb370faaf"
  },
  {
    "url": "images/city/ic_india.jpg",
    "revision": "d167056fc2b283029a9a7dad4f3ed828"
  },
  {
    "url": "images/city/ic_india.png",
    "revision": "2bca8dc9e2e24a97e774e23104a6e177"
  },
  {
    "url": "images/city/ic_india@2x.png",
    "revision": "f225a11602749da9500c3d88987e3106"
  },
  {
    "url": "images/city/ic_india@3x.png",
    "revision": "0aa80a2fe3745947620beb168cdc62d0"
  },
  {
    "url": "images/city/ic_indonesia.jpg",
    "revision": "bab318db9afaacfea805f6cad8f07217"
  },
  {
    "url": "images/city/ic_indonesia.png",
    "revision": "f4ac463b905b826fb76e80ecd359918e"
  },
  {
    "url": "images/city/ic_indonesia@2x.png",
    "revision": "2d66ee2bd019968506a7e6862c09844d"
  },
  {
    "url": "images/city/ic_indonesia@3x.png",
    "revision": "3bbe94bd74fdba299837b9a99c2fd01b"
  },
  {
    "url": "images/city/ic_japan.jpg",
    "revision": "5937e89da530e167bbfe68f61cd616b4"
  },
  {
    "url": "images/city/ic_japan.png",
    "revision": "ef4945f20d5c7243667d97f94bb43ebc"
  },
  {
    "url": "images/city/ic_japan@2x.png",
    "revision": "58ff81a18064a9c5c26e1aa2053b8c38"
  },
  {
    "url": "images/city/ic_japan@3x.png",
    "revision": "d460c3a6d200d8d88a94720fb9cb7d5b"
  },
  {
    "url": "images/city/ic_korea.jpg",
    "revision": "8e6a8ed88a95a0379c7a0061db776d22"
  },
  {
    "url": "images/city/ic_korea.png",
    "revision": "b8d4ddf5c4059fc8abe487305d25017b"
  },
  {
    "url": "images/city/ic_korea@2x.png",
    "revision": "2a5d03d992868f5c5b99943d21143fde"
  },
  {
    "url": "images/city/ic_korea@3x.png",
    "revision": "44763ca8fdcb4a2094494866b7450ee6"
  },
  {
    "url": "images/city/ic_malaysia.jpg",
    "revision": "17b3612dc8deefbe17243dd2083a71fe"
  },
  {
    "url": "images/city/ic_malaysia.png",
    "revision": "da993af0f766b4a544f7a6c45502d5cb"
  },
  {
    "url": "images/city/ic_malaysia@2x.png",
    "revision": "3c019561cdc752c206f06ecedc356cfa"
  },
  {
    "url": "images/city/ic_malaysia@3x.png",
    "revision": "eb41795d3da90aaabcd9f10428ca7e18"
  },
  {
    "url": "images/city/ic_philippines.jpg",
    "revision": "9d1d9d1a071c057a61e6084ba1108e09"
  },
  {
    "url": "images/city/ic_philippines.png",
    "revision": "5398878d36c1f803ae54c4d4e7dab248"
  },
  {
    "url": "images/city/ic_philippines@2x.png",
    "revision": "1bd7aefc8a2b3e2db7dea849e2ea48a6"
  },
  {
    "url": "images/city/ic_philippines@3x.png",
    "revision": "f0afd9bb09e84efab8d5d34b39bc390a"
  },
  {
    "url": "images/city/ic_singapore.jpg",
    "revision": "8ac1333776b56b3d82430f3272af966f"
  },
  {
    "url": "images/city/ic_singapore.png",
    "revision": "34f6c66ca2cc0caa35ffc329e00b784f"
  },
  {
    "url": "images/city/ic_singapore@2x.png",
    "revision": "5e8a37254a9dcc89bc5768edfda5476e"
  },
  {
    "url": "images/city/ic_singapore@3x.png",
    "revision": "8e33f8c8155d98ebcf298a3d144287f4"
  },
  {
    "url": "images/city/ic_taiwan.jpg",
    "revision": "4549ca55e5a9cab3c9472efd74dc5cf6"
  },
  {
    "url": "images/city/ic_taiwan.png",
    "revision": "93008b0be3fa4cefb5ec7ec4abfdab32"
  },
  {
    "url": "images/city/ic_taiwan@2x.png",
    "revision": "0f87469e949a19479cc9d975f9e33056"
  },
  {
    "url": "images/city/ic_taiwan@3x.png",
    "revision": "4227bf2922e6737267d1693f023ea7f7"
  },
  {
    "url": "images/city/ic_thailand.jpg",
    "revision": "07477f7326bea8dddb617f3974b7c517"
  },
  {
    "url": "images/city/ic_thailand.png",
    "revision": "b1f201d3dcf0759e9794a345ed83112a"
  },
  {
    "url": "images/city/ic_thailand@2x.png",
    "revision": "ae3132c944ad9b3364e04d3dd03ad59a"
  },
  {
    "url": "images/city/ic_thailand@3x.png",
    "revision": "ccfb790d1278eca774e4147ec4659eb9"
  },
  {
    "url": "images/city/ic_vietnam.jpg",
    "revision": "44827ff1751a75e6a922ded795614dcc"
  },
  {
    "url": "images/city/ic_vietnam.png",
    "revision": "f5f7ee366785715c612baa4b00f11e40"
  },
  {
    "url": "images/city/ic_vietnam@2x.png",
    "revision": "9239ca7627022d281b91c2de277f73ae"
  },
  {
    "url": "images/city/ic_vietnam@3x.png",
    "revision": "af7d15e3ba568fa61bc2d8cf73faebce"
  },
  {
    "url": "images/Cover/Book_Cover_LetterSize_Style1.png",
    "revision": "ef2deb8718ff2c72cfaaab67cdc174d1"
  },
  {
    "url": "images/Cover/Book_Cover_LetterSize_Style2_Big.png",
    "revision": "cffee47a1364287d820a90bdfb99992d"
  },
  {
    "url": "images/Cover/Book_Cover_LetterSize_Style2_Small.png",
    "revision": "e319620356d211f6da5a97d494ebac55"
  },
  {
    "url": "images/Cover/Book_Cover_LetterSize.png",
    "revision": "ef2deb8718ff2c72cfaaab67cdc174d1"
  },
  {
    "url": "images/manifest/icon-144x144.png",
    "revision": "478afbe0b6197aaf3edc0d271ffba2bc"
  },
  {
    "url": "images/manifest/icon-192x192.png",
    "revision": "8b2578d5ee89ca1c933c86b9a238d2c1"
  },
  {
    "url": "images/manifest/icon-48x48.png",
    "revision": "ebad89ead380767d40472bc551b011af"
  },
  {
    "url": "images/manifest/icon-512x512.png",
    "revision": "cac1b6bccc3df35644065632b161af5f"
  },
  {
    "url": "images/manifest/icon-72x72.png",
    "revision": "cf096b1d068ca0fb27eb9480aa2a5a17"
  },
  {
    "url": "images/manifest/icon-96x96.png",
    "revision": "9c1481dd9fec6fc394bfa6ad8c52d8e0"
  },
  {
    "url": "manifest.json",
    "revision": "9e9f201d98567244020813b913ffd644"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "UXIA",
  "skipWaiting": true
});
workboxSW.precache(fileManifest);
workboxSW.router.registerNavigationRoute("/index.html", {
  whitelist: [/^(?!(\/__)|(\/service-worker\.js)|(\/sw\.js)|(\/routing-sw\.js)|(\/_bundle-sizes\.html)|(\/_statistic\.html)|(\/_statistic\.json))/,],
});workboxSW.router.registerRoute(/^https:\/\/maps.googleapis.com\/.*/, workboxSW.strategies.networkFirst({}), 'GET');
workboxSW.router.registerRoute(/^https:\/\/fonts.googleapis.com\/.*/, workboxSW.strategies.cacheFirst({}), 'GET');
workboxSW.router.registerRoute(/^https:\/\/fonts.gstatic.com\/.*/, workboxSW.strategies.cacheFirst({}), 'GET');
workboxSW.router.registerRoute(/^https:\/\/cdn.ravenjs.com\/.*/, workboxSW.strategies.cacheFirst({}), 'GET');
workboxSW.router.registerRoute(/^https:\/\/www.gstatic.com\/firebasejs\/.*/, workboxSW.strategies.cacheFirst({}), 'GET');
workboxSW.router.registerRoute(/^https:\/\/www.google-analytics.com\/analytics.js/, workboxSW.strategies.networkFirst({}), 'GET');
workboxSW.router.registerRoute(/^https:\/\/polyfill.io\/.*/, workboxSW.strategies.networkFirst({}), 'GET');
