import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    // 创建基本状态
    // 登录状态为没登录
    logined: false,
    // 用户信息数据,目前只需要avatar和name,还是把username也加上吧
    LoginedUser: {
        name: '',
        avatar: '',
        username: ''
    }
}
const mutations = {
    // 创建改变状态的方法
    // 改变状态的方法也需要2个，一个是登录或注册了，一个是登出了
    // 这里不能写箭头函数???
    // 登录
    LOGIN(state) {
    // 先让登录状态变为登录了
        state.logined = true
        // 然后去sessionStorage取用户数据
        let user = JSON.parse(sessionStorage.getItem('user'))
        // 再把用户数据发下去
        state.LoginedUser.name = user.name
        state.LoginedUser.avatar = user.avatar
        state.LoginedUser.username = user.username
    },
    // 登出
    LOGOUT(state) {
    // 这个同理
        state.logined = false
        state.LoginedUser.name = ''
        state.LoginedUser.avatar = ''
        state.LoginedUser.username = ''
    }
}
const actions = {
    // 创建驱动actions可以使得mutations得以启动
    // 这里先来一个驱动LOGIN的东西就叫login吧
    // 这个context是官方写的，应该叫什么无所谓
    login(context) {
        context.commit('LOGIN')
    },
    // 同样来个logout
    logout(context) {
        context.commit('LOGOUT')
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})
