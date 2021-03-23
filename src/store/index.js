import Vue from 'vue'
import Vuex from 'vuex'
// import getters from './getters'

Vue.use(Vuex)

// const modulesFiles = require.context('./modules', true, /\.js$/)
// const modules = modulesFiles.keys().reduce((modules, modulePath) => {
//   const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
//   const value = modulesFiles(modulePath)
//   modules[moduleName] = value.default
//   return modules
// }, {})

// console.log(modules);

const state = {
  count: 1
}

const mutations = {
  add(state) {
    state.count += 1;
  },
  reduce(state) {
    state.count -= 1;
  }
}

const store = new Vuex.Store({
  state, mutations
})

// const store = new Vuex.Store({
//   modules,
//   getters
// })

export default store
