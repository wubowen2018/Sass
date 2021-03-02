import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    // redirect: '/hi',
    name: 'Home',
    component: Home
  },
  {
    path: '/normal',
    name: 'normal',
    component: ()=>import('../views/normal.vue')
  },
  {
    path: '/router',
    name: '路由',
    component: () => import('../views/router.vue'),
    children:[
      {
        path: '/hi',
        component: () => import('../views/Hi/Hi.vue'),
        children: [        //子路由,嵌套路由 （此处偷个懒，免得单独再列一点）
          { path: '/', name: 'Hi', component: () => import('../views/Hi/Hi.vue') },
          { path: 'hi1', name: 'Hi1', component: () => import('../views/Hi/Hi1.vue') },
          { path: 'hi2', name: 'Hi2', component: () => import('../views/Hi/Hi2.vue') }
        ]
      }

    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
