
    importScripts("sw.js")
    importScripts("workbox-routing.js")
    const router = new workbox.routing.Router()
    this.build = JSON.parse('{"name":"prod","baseHref":"/","analytics":"UA-106485786-1","firebaseVersion":"4.2.0","database":"prod","sentryUrl":"https://24dc96644a4742c0b1a5fa7301017b67@sentry.io/217002","firebaseConfig":[],"appVersion":"0.0.1"}')
    this.app = JSON.parse('{"title":"State of UX in Asia","shortTitle":"UXIA","description":"The first free annual report highlighting the State of User Experience Design and Research in the Asian continent. Featuring real stories from UX Practitioners all over the region.","twitter":"","image":""}')
    this.random = "Thu Sep 14 2017 17:32:58 GMT+0800 (PHT)"
    importScripts("service-worker-core/routing.js")
    importScripts("service-worker-src/routing.js")
  