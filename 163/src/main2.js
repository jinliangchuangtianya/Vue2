// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App2 from './App2'
import router from './router'

import VueJsonp from 'vue-jsonp'
import Scroller from 'vue-scroller'
import  { ToastPlugin } from 'vux'
Vue.use(VueJsonp)
Vue.use(Scroller)
Vue.use(ToastPlugin)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App2 },
  template: '<App2/>'
})
