
    export default {
      '/': () => { return import(/* webpackChunkName: "uxia-home-page" */ './modules/uxia-module/pages/uxia-home-page/uxia-home-page.html') }, 
'style-guide': () => { return import(/* webpackChunkName: "example-style-guide-page" */ './modules/example-module/pages/example-style-guide-page/example-style-guide-page.js') }
    }
  