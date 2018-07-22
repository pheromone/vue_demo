import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/homePages/Homepage'
import City from '@/pages/city/City'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/city',
      name: 'City',
      component: City
    }
  ]
})
