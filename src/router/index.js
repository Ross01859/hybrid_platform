import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Home'
import login from '@/components/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/login', redirect: { name: 'login' } },
    { path: '*', redirect: { name: 'login' } },
    { path: '/', name: 'login', component: login },
    { path: '/home', name: 'home', component: home },
  ]
})
