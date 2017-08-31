import Vue from 'vue'
import Router from 'vue-router'
import cIndex from '@/components/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'cIndex',
      component: cIndex
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  mode: 'history',
  linkActiveClass: 'active-page',
  linkExactActiveClass: 'current-page'
})
