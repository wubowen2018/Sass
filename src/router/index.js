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
  },
  {
    path: '/jer_exercise',
    name: 'JER运动',
    component: () => import('../views/jer_exercise/index.vue'),
    children:[
      {
        path: 'daily',
        // name: '日常训练',
        component: () => import('../views/jer_exercise/daily.vue')
      },
      {
        path: '/fu_ji',
        // name: '腹肌训练',
        component: () => import('../views/jer_exercise/fu_ji.vue')
      },
      {
        path: '/fu_wo_cheng',
        // name: '俯卧撑训练',
        component: () => import('../views/jer_exercise/fu_wo_cheng.vue')
      },
      {
        path: '/xiong_tui',
        // name: '俯卧撑训练',
        component: () => import('../views/jer_exercise/xiong_tui.vue')
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
