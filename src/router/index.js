import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/layout' //布局页

Vue.use(VueRouter)

// 通用页面, 这里的配置不需要权限
export const constRouter = [
  {
    path: '',
    component: Layout, //应用布局页
    redirect: '/market',
  },
  {
    path: '/market',
    component: Layout, //应用布局页
    name: 'market',
    children: [
      {
        path: '',
        component: () => import('@/views/market/index.vue'),
        name: 'market',
      },
      {
        path: 'details',
        component: () => import('@/views/market/details.vue'),
        name: 'details',
      }
    ]
  },
  {
    path: '/wallet',
    component: Layout,
    name: 'wallet',
    children: [
      {
        path: '',
        component: () => import('@/views/wallet/index.vue'),
        name: 'wallet',
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes: constRouter,
  scrollBehavior: () => ({ y: 0 }), //路由跳转后页面回到顶部
})

export default router

