import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './util/req';
import './assets/styles/global.scss';


// import Moment from 'moment';

// let now = Moment().format()
// console.log(now);

// 引入mock的开关
import { whetherUseMock } from './config/default.config'
if (whetherUseMock){
  require('./mock')
}

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
