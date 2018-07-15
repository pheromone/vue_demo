import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/homePages/Homepage'
import Mine from '@/pages/mine/Mine'

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
      name: 'Mine',
      component: Mine
    }
  ]
})
