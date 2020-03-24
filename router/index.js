import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue' // 전부 다불러와서. 뿌려줌
import store from '../store'

Vue.use(VueRouter)
const About = () =>
    import ('../views/test/About.vue')
    // about만 불러와서 뿌림
const Test = () =>
    import ('../views/test/Test.vue')
const test0317 = () =>
    import ('../views/test/test0317.vue')
const Users = () =>
    import ('../views/test/Users.vue')
const Login = () =>
    import ('../views/test/Login.vue')

//가드 그냥 외워버려
const rejectAuthUser = (to, from, next) => {
        if (store.state.isLogin === true) {
            //로그인 된사람
            next('/')
        } else { next() }
    }
    // 접속페이지에 로그인 안된사람 못들어와
const onlytAuthUser = (to, from, next) => {
    if (store.state.isLogin === false) {
        //로그인 안된사람
        next('/')
    } else { next() }
}

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About

    },
    {
        path: '/test',
        name: 'test',
        component: Test
    },
    {
        path: '/test0317',
        name: 'test0317',
        component: test0317
    },
    {
        path: '/Users',
        name: 'users',
        component: Users
            // children: [{
            //     path: ":id",
            //     name: "userstest",
            //     component: UsersTest
            // }]
    },
    {
        path: '/Login',
        name: 'login',
        //가드
        beforeEnter: rejectAuthUser,
        component: Login
    },
    {
        path: '/relogin',
        name: 'relogin',
        beforeEnter: onlytAuthUser,
        component: () =>
            import ("../views/test/ReLogin.vue")
    },
    {
        path: '/Api-test',
        name: 'Api-test',
        component: () =>
            import ('../views/test/Api-test.vue')
    },
    {
        path: '*',
        name: 'e404',
        component: () =>
            import ('../views/test/e404.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router