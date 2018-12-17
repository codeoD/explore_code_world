import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import { auth } from './modules/auth.module'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug,
  state,
  modules: {
    authModule: auth
  }
})
