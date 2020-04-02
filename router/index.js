import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue' // 전부 다불러와서. 뿌려줌
import store from '../store'

Vue.use(VueRouter)

// const levelCheck = (to, from, next) => {
//     if (store.state.claims.level === undefined) next('/Mother')
//     next()
// }
const adminCheck = (to, from, next) => {
    if (!store.state.user) {
        if (to.path !== '/login') return next('/login')
    } else {
        if (!store.state.user.emailVerified) return next('/Mother')
        if (store.state.claims.level > 0) throw Error('관리자용입니다')
    }
    next()
}
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

    },
    {
        path: '/Login',
        name: 'login',
        beforeEnter: (to, from, next) => {
            if (store.state.user) return next('/')
            next()
        },
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
        beforeEnter: adminCheck,
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
        component: () =>
            import ('../views/test/Mother.vue')
    },
    {
        path: '/admin/users',
        name: 'userlist',
        component: () =>
            import ('../views/admin/users.vue')
    },
    {
        path: '/chart',
        name: 'chart',
        component: () =>
            import ('../views/chart/TestChart.vue')
            // children: [{
            //     path: ":id",
            //     name: "show",
            //     component: () =>
            //         import ('../components/Movie/showpage.vue'),
            // }]
    },
    {
        path: '/show',
        name: 'show',
        component: () =>
            import ('../components/Movie/showpage.vue')
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

const waitFirebase = () => {
        return new Promise((resolve, reject) => {
            let cnt = 0
            const tmr = setInterval(() => {
                if (store.state.firebaseLoaded) {
                    clearInterval(tmr)
                    resolve()
                } else if (cnt++ > 200) {
                    clearInterval(tmr)
                    reject(Error('loading 실패'))
                }
            }, 10)
        })
    }
    //true 될때만 가드
router.beforeEach((to, from, next) => {
    Vue.prototype.$Progress.start()
        // if (store.state.firebaseLoaded) next()
    waitFirebase()
        .then(() => next())
        .catch(e => Vue.prototype.$toasted.global.error(e.message))
})

router.afterEach((to, from) => {
    Vue.prototype.$Progress.finish()
})

router.onError(e => {
    Vue.prototype.$Progress.finish()
    Vue.prototype.$toasted.global.error(e.message)
})
export default router