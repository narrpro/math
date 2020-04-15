import Home from '../views/Home.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        // beforeEnter: userCheck,
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
        path: '/userprofile',
        name: 'userprofile',
        component: () =>
            import ('../views/admin/userProfile.vue')
    },
    {
        path: '/chart',
        name: 'chart',
        component: () =>
            import ('../views/chart/TestChart.vue')
    },
    {
        path: '/drag',
        name: 'drag',
        component: () =>
            import ('../views/chart/Drag.vue')
    },
    {
        path: '/poll',
        name: 'poll',
        component: () =>
            import ('../views/chart/Poll.vue')
    },
    {
        path: '/show',
        name: 'show',
        component: () =>
            import ('../components/Movie/showpage.vue')
    },
    {
        path: '/Level0',
        name: 'Level0',
        component: () =>
            import ('../views/admin/Level0.vue')
    },
    {
        path: '/Level1',
        name: 'Level1',
        component: () =>
            import ('../views/admin/Level1.vue')
    },
    {
        path: '/Level2',
        name: 'Level2',
        component: () =>
            import ('../views/admin/Level2.vue')
    },
    {
        path: '/news',
        name: 'news',
        component: () =>
            import ('../views/VueStudy/NewsView.vue')
    },
    {
        path: '/ask',
        name: 'ask',
        component: () =>
            import ('../views/VueStudy/AskView.vue')
    },
    {
        path: '/jobs',
        name: 'jobs',
        component: () =>
            import ('../views/VueStudy/JobsView.vue')
    },
    {
        path: '/userview/:id',
        name: 'userview',
        component: () =>
            import ('../views/VueStudy/UserView.vue')
    },
    {
        path: '*',
        name: 'e404',
        component: () =>
            import ('../views/test/e404.vue')
    }
]

export default routes