import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/router',
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
    component: () => import('../views/router.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
