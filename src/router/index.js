import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/homePages/Homepage'
import List from '@/pages/homePages/list/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/',
      name: 'List',
      component: List
    }
  ]
})
