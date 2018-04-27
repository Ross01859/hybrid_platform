// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
// import 'es6-promise/auto'
import store from './store/store'
import VueCookies from 'vue-cookies'
// import { addCookie, getCookie, delCookie, allCookie } from './config/cookie'


import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'
import '../static/bg/css/reset.css'
/*eslint-disable*/
import $ from 'jquery'
// axios.defaults.baseURL = 'http://192.168.1.119:3000'
// axios.defaults.baseURL = 'http://192.168.1.128:3000'
// axios.defaults.baseURL = 'http://192.168.31.169:3000'
axios.defaults.baseURL = 'http://192.168.1.134:3000'
// axios.request(Qs)
Vue.use(ElementUI)
Vue.use(VueCookies)

Vue.prototype.$ajax = axios
Vue.prototype.$echarts = echarts



Vue.config.productionTip = false

// 这个官方名字叫导航守卫，挺形象的
router.beforeEach((to, from, next) => {
  let that = VueCookies
  if (to.matched.some(m => m.meta.auth)) {
    if (that.get('logined')) {
      if (to.path === '/login' || to.path === '/regin') {
        sessionStorage.removeItem('user')
      }
      next()
    } else {
      next({ path: '/login' })
    }
  } else {
    next()
  }
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
