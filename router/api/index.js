import Vue from 'vue'
import Router from 'vue-router'
import Voting from '@/components/test/Voting'
import Result from '@/components/test/Result'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/vote',
      name: 'vote',
      component: Voting
    },
    {
      path: '/result',
      name: 'Result',
      component: Result
    }
  ]
})