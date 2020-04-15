import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue' // 전부 다불러와서. 뿌려줌
import store from '../store'
import NewsView from '../views/VueStudy/NewsView.vue'
import AskView from '../views/VueStudy/AskView.vue'
import JobsView from '../views/VueStudy/JobsView.vue'
import createListView from '@/views/VueStudy/CreateListView.js'

Vue.use(VueRouter)

// const levelCheck = (to, from, next) => {
//     if (!store.state.user) return next('/')
//     if (!store.state.claims) return next('/userprofile')
//     next()
// }
const adminCheck = (to, from, next) => {
    if (!store.state.beforelist.user) {
        if (to.path !== '/login') return next('/')
    } else {
        if (!store.state.beforelist.user.emailVerified) return next('/userprofile')
        if (!store.state.beforelist.claims.level === 0) throw Error('관리자용')
    }
    next()
}
const userCheck = (to, from, next) => {
    if (!store.state.beforelist.user) {
        if (to.path !== '/login') return next('/')
    } else {
        if (!store.state.beforelist.user.emailVerified) return next('/userprofile')
        if (!store.state.beforelist.claims.level > 1) throw Error('사용자용')
    }
    next()
}
const guestCheck = (to, from, next) => {
    if (!store.state.beforelist.user) {
        if (to.path !== '/') return next('/')
    } else {
        if (!store.state.beforelist.user.emailVerified) return next('/userprofile')
        if (!store.state.beforelist.claims.level > 2) throw Error('게스트용')
    }
    next()
}
const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        // beforeEnter: userCheck,
    },
    {
        path: '/about',
        name: 'About',
        beforeEnter: userCheck,
        component: () =>
            import ('../views/test/About.vue')

    },
    {
        path: '/test',
        name: 'test',
        beforeEnter: userCheck,
        component: () =>
            import ('../views/test/Test.vue')
    },
    {
        path: '/test0317',
        name: 'test0317',
        beforeEnter: userCheck,
        component: () =>
            import ('../views/test/test0317.vue')
    },
    {
        path: '/Users',
        name: 'users',
        beforeEnter: userCheck,
        component: () =>
            import ('../views/test/Users.vue')

    },
    {
        path: '/Login',
        name: 'login',
        beforeEnter: (to, from, next) => {
            if (store.state.beforelist.user) return next('/')
            next()
        },
        component: () =>
            import ('../views/test/Login.vue')
    },
    {
        path: '/relogin',
        name: 'relogin',
        beforeEnter: userCheck,
        component: () =>
            import ('../views/test/ReLogin.vue')
    },
    {
        path: '/Api-test',
        name: 'Api-test',
        beforeEnter: userCheck,
        component: () =>
            import ('../views/test/Api-test.vue')
    },
    {
        path: '/CardDB',
        name: 'carddb',
        beforeEnter: userCheck,
        component: () =>
            import ('../views/test/CardDB.vue')
    },
    {
        path: '/Sign',
        name: 'sign',
        beforeEnter: userCheck,
        component: () =>
            import ('../views/Sign.vue')
    },
    {
        path: '/Axios',
        name: 'axios',
        beforeEnter: userCheck,
        component: () =>
            import ('../views/test/Axios.vue')
    },
    {
        path: '/Mother',
        name: 'mother',
        beforeEnter: userCheck,
        component: () =>
            import ('../views/test/Mother.vue')
    },
    {
        path: '/admin/users',
        name: 'userlist',
        beforeEnter: adminCheck,
        component: () =>
            import ('../views/admin/users.vue')
    },
    {
        path: '/userprofile',
        name: 'userprofile',
        beforeEnter: (to, from, next) => {
            if (!store.state.beforelist.user) return next('/login')
            next()
        },
        component: () =>
            import ('../views/admin/userProfile.vue')
    },
    {
        path: '/chart',
        name: 'chart',
        beforeEnter: userCheck,
        component: () =>
            import ('../views/chart/TestChart.vue')
    },
    {
        path: '/drag',
        name: 'drag',
        beforeEnter: userCheck,
        component: () =>
            import ('../views/chart/Drag.vue')
    },
    {
        path: '/poll',
        name: 'poll',
        beforeEnter: userCheck,
        component: () =>
            import ('../views/chart/Poll.vue')
    },
    {
        path: '/show',
        name: 'show',
        beforeEnter: userCheck,
        component: () =>
            import ('../components/Movie/showpage.vue')
    },
    {
        path: '/Level0',
        name: 'Level0',
        beforeEnter: adminCheck,
        component: () =>
            import ('../views/admin/Level0.vue')
    },
    {
        path: '/Level1',
        name: 'Level1',
        beforeEnter: userCheck,
        component: () =>
            import ('../views/admin/Level1.vue')
    },
    {
        path: '/Level2',
        name: 'Level2',
        beforeEnter: guestCheck,
        component: () =>
            import ('../views/admin/Level2.vue')
    },
    {
        path: '/news',
        name: 'news',
        component: createListView('NewsView')

    },
    {
        path: '/ask',
        name: 'ask',
        component:  createListView('AskView')
    },
    {
        path: '/jobs',
        name: 'jobs',
        component:  createListView('JobsView')
    },
    {
        path: '/newsuser/:id',
        name: 'newsuser',
        component: () =>
            import ('../views/VueStudy/NewsUser.vue')
    },
    {
        path: '/askuser/:id',
        name: 'askuser',
        component: () =>
            import ('../views/VueStudy/AskUser.vue')
    },
    {
        path: '/jobsuser/:id',
        name: 'jobsuser',
        component: () =>
            import ('../views/VueStudy/JobsUser.vue')
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
                if (store.state.beforelist.firebaseLoaded) {
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