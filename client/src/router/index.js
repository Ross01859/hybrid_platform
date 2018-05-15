import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Home'
import login from '@/components/Login'

import container from '@/components/fun_module/Container'
import curd from '@/components/fun_module/Curd'

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
                name: 'curd',
                path: 'curd',
                meta: { auth: true },
                component: curd
            } ]
        }
    ]
} )
