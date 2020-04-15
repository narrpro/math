import NewsView from '../views/VueStudy/NewsView.vue'
import AskView from '../views/VueStudy/AskView.vue'
import JobsView from '../views/VueStudy/JobsView.vue'
import createListView from '@/views/VueStudy/CreateListView.js'

export default [
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
]