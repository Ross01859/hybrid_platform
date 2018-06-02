import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Home'
import login from '@/components/Login'

import container from '@/components/single_page/Container'
// import curd from '@/components/single_page/Curd'
import bug_sys from '@/components/model_components/Bug_sys/Bug_init'

Vue.use( Router )

export default new Router( {
    mode: 'history',
    routes: [
        { path: '/', redirect: { name: 'login' } },
        { path: '*', redirect: { name: 'login' } },
        { path: '/login', name: 'login', component: login },
        {
            path: '/home',
            name: 'home',
            redirect: '/home/container',
            meta: { auth: true },
            component: home,
            children: [ {
                name: 'container',
                path: 'container',
                meta: { auth: true },
                component: container
            }, {
                name: 'bug_sys',
                path: 'bug_sys',
                meta: { auth: true },
                component: bug_sys

            } ]
        }
    ]
} )
