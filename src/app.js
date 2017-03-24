import Vue from 'vue'
import VueResource from 'vue-resource'
import router from './router'
import App from './views/app.vue'

import WebFont from 'webfontloader'

import 'purecss'
import 'purecss/build/grids-responsive-min.css'
import 'font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false
Vue.use(VueResource)

WebFont.load({
  google: {
    families: ['Gentium Basic', 'Open Sans']
  }
})

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
