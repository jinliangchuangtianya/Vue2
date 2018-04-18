// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'       //引入路由模块
import VueResource from 'vue-resource'   //引入http请求模块
import App from './App'

import Home from './components/Home'
import HelloWorld from './components/HelloWorld'

Vue.config.productionTip = false
Vue.use(VueRouter)    //使用路由 (中间件)
Vue.use(VueResource)  //使用http

//配置路由
const router = new VueRouter({
  mode: 'history',     //去掉地址后面的 “#” 号
  routes : [
    {path : '/', component : Home },
    {path : '/hello', component : HelloWorld },
  ]
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
})
