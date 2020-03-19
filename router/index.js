import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue' // 전부 다불러와서. 뿌려줌

Vue.use(VueRouter)
const About = () =>
    import ('../views/About.vue')
    // about만 불러와서 뿌림
const Test = () =>
    import ('../views/Test.vue')
const test0317 = () =>
    import ('../views/test0317.vue')
const Users = () =>
    import ('../views/Users.vue')
const Login = () =>
    import ('../views/Login.vue')
    // const UsersTest = () =>
    //     import ('../views/Userstest.vue')

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
        component: Login
    },
    {
        path: '*',
        name: 'e404',
        component: () =>
            import ('../views/e404.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router