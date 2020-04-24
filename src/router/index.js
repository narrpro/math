import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import bus from '@/utils/bus'
import NewsView from '../views/VueStudy/NewsView.vue'
import AskView from '../views/VueStudy/AskView.vue'
import JobsView from '../views/VueStudy/JobsView.vue'
import { routes } from '@/router'
Vue.use(Router)

const pageLogWrite = (to) => {
  const { uid, email } = store.state.user
  Vue.prototype.$firebase.firestore().collection('pageLogs').add({
    uid,
    email,
    to: to.path,
    createdAt: new Date()
  }).catch((e) => console.log(e.message))
}

const levelCheck = (level) => {
  return (to, from, next) => {
    if (!store.state.user) {
      if (to.path !== '/sign') {
        Vue.prototype.$toasted.global.error('로그인이 필요합니다')
        return next('/sign')
      }
    } else {
      const msg = [
        '관리자 이상만 들어갈 수 있습니다',
        '사용자 이상만 들어갈 수 있습니다',
        '손님 이상만 들어갈 수 있습니다'
      ]
      if (store.state.claims.level > level) throw Error(msg[level])
      pageLogWrite(to)
    }
    next()
  }
}

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue')
      // beforeEnter: levelCheck(1)
    },
    {
      path: '/sign',
      name: 'sign',
      component: () => import('@/views/sign.vue'),
      beforeEnter: (to, from, next) => {
        if (store.state.user) return next('/')
        next()
      }
    },
    {
      path: '/admin/users',
      component: () => import('@/views/admin/users'),
      beforeEnter: levelCheck(0)
    },
    {
      path: '/test/lv0',
      component: () => import('@/views/test/lv0.vue'),
      beforeEnter: levelCheck(0)
    },
    {
      path: '/test/lv1',
      component: () => import('@/views/test/lv1.vue'),
      beforeEnter: levelCheck(1)
    },
    {
      path: '/test/lv2',
      component: () => import('@/views/test/lv2.vue'),
      beforeEnter: levelCheck(2)
    },
    {
      path: '/userProfile',
      component: () => import('@/views/userProfile.vue'),
      beforeEnter: (to, from, next) => {
        if (!store.state.user) return next('/sign')
        pageLogWrite(to)
        next()
      }
    },
    {
      path: '/CardDB',
      name: 'carddb',
      beforeEnter: levelCheck(1),
      component: () =>
          import ('@/views/test/CardDB.vue')
  },
    {
      path: '/newsuser/:id',
      name: 'newsuser',
      component: () =>
          import ('@/views/VueStudy/NewsUser.vue')
  },
  {
      path: '/askuser/:id',
      name: 'askuser',
      component: () =>
          import ('@/views/VueStudy/AskUser.vue')
  },
  {
      path: '/jobsuser/:id',
      name: 'jobsuser',
      component: () =>
          import ('@/views/VueStudy/JobsUser.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: NewsView ,
    beforeEnter: (to, from, next) => {
      bus.$emit('start:spinner')
      store.dispatch('newslist/Fetch_List',to.name)
      .then(()=>{
        bus.$emit('end:spinner')
        next()
      })
      .catch((err)=>{
        console.log(err)
      })
    }, // ...
  },
  //   component: createListView('NewsView')

  {
    path: '/ask',
    name: 'ask',
    component: AskView,
    beforeEnter: (to, from, next) => {
      bus.$emit('start:spinner')
      store.dispatch('newslist/Fetch_List',to.name)
      .then(()=>{
        bus.$emit('end:spinner')
        next()
      })
      .catch((err)=>{
        console.log(err)
      })
    }, //
    //   component:  createListView('AskView')
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: JobsView,
    beforeEnter: (to, from, next) => {
      bus.$emit('start:spinner')
      store.dispatch('newslist/Fetch_List',to.name)
      .then(()=>{
        bus.$emit('end:spinner')
        next()
      })
      .catch((err)=>{
        console.log(err)
      })
    }, //
    //   component:  createListView('JobsView')
  },
  {
    path: '/poll',
    name: 'poll',
    component: () => import ('@/views/admin/Poll.vue')
  },
  {
    path: '/daegi',
    name: 'daegi',
    component: () => import ('@/views/Poll/Daegi.vue')
  },
  {
    path: '*',
    component: () => import('@/views/e404.vue')
  },
]
})

const waitFirebase = () => {
  return new Promise((resolve, reject) => {
    let cnt = 0
    const tmr = setInterval(() => {
      if (store.state.firebaseLoaded) {
        clearInterval(tmr)
        resolve()
      } else if (cnt++ > 500) reject(Error('제한 시간 초과, 인터넷 연결을 확인하세요'))
    }, 10)
  })
}

router.beforeEach((to, from, next) => {
  Vue.prototype.$Progress.start()
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
