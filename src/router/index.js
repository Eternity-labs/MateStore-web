import Vue from 'vue'
import Router from 'vue-router'
// import Layout from '@/layout'

Vue.use(Router)

export const baseRoutes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/layout/index'),
    children: [
      {
        path: '/about',
        name: 'about',
        component: () => import('@/views/about/index')
      }, {
        path: '/alpha',
        name: 'alpha',
        component: () => import('@/views/alpha/index')
      }, {
        path: '/create',
        name: 'create',
        component: () => import('@/views/create/index')
      }, {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index')
      }, {
        path: '/map',
        name: 'map',
        component: () => import('@/views/map/index')
      }, {
        path: '/market',
        name: 'market',
        component: () => import('@/views/market/index')
      }
    ]
  }
]
const createRouter = () => new Router({
  scrollBehavior: () => ({y: 0}),
  routes: baseRoutes
})
const router = createRouter()

export default router
