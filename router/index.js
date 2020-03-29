import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue' // 전부 다불러와서. 뿌려줌
import store from '../store'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ('../views/test/About.vue')

    },
    {
        path: '/test',
        name: 'test',
        component: () =>
            import ('../views/test/Test.vue')
    },
    {
        path: '/test0317',
        name: 'test0317',
        component: () =>
            import ('../views/test/test0317.vue')
    },
    {
        path: '/Users',
        name: 'users',
        component: () =>
            import ('../views/test/Users.vue')
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

        component: () =>
            import ('../views/test/Login.vue')
    },
    {
        path: '/relogin',
        name: 'relogin',

        component: () =>
            import ('../views/test/ReLogin.vue')
    },
    {
        path: '/Api-test',
        name: 'Api-test',
        component: () =>
            import ('../views/test/Api-test.vue')
    },
    {
        path: '/CardDB',
        name: 'carddb',
        beforeEnter: (to, from, next) => {
            next()
        },
        component: () =>
            import ('../views/test/CardDB.vue')
    },
    {
        path: '/Sign',
        name: 'sign',
        component: () =>
            import ('../views/Sign.vue')
    },
    {
        path: '/Axios',
        name: 'axios',
        component: () =>
            import ('../views/test/Axios.vue')
    },
    {
        path: '/Mother',
        name: 'mother',
        beforeEnter: (to, from, next) => {
            next()
        },
        component: () =>
            import ('../views/test/Mother.vue')
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

//true 될때만 가드
router.beforeEach((to, from, next) => {
    Vue.prototype.$Progress.start()
    if (Vue.prototype.$isFirebaseAuth) next()
})

router.afterEach((to, from) => {
    Vue.prototype.$Progress.finish()

})
export default router