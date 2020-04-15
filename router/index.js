import Vue from 'vue'
import VueRouter from 'vue-router'
import path1 from './path1'
import path2 from './path2'

Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        ...path1,
        ...path2,
    ]
})

export default router