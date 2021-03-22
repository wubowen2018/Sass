import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './util/request'
import './assets/styles/global.scss';


import { whetherUseMock } from './config/default.config'
if (whetherUseMock){
  require('./mock')
}

// import './styles/global.scss'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
