import Vue from 'vue'
import Router from 'vue-router'
import cIndex from '@/components/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: cIndex
    },
    {
      path: '/:parametros',
      name: 'Index',
      component: cIndex,
      props: true
    }
  ],
  mode: 'history',
  linkActiveClass: 'active-page',
  linkExactActiveClass: 'current-page'
})
