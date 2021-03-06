// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from './vueconfig'
import App from './App'
import router from './router'
import store from './store'
import ApiService from './services/api.service'
import { TokenService } from './services/storage.service'
import 'bulma'
// import '@fortawesome/fontawesome-free'
// 要分开导入
import '@fortawesome/fontawesome-free/css/all.min.css'
import '@fortawesome/fontawesome-free/js/all.min.js'

ApiService.init('http://localhost:3000')

if (TokenService.getToken()) {
  ApiService.setHeader()
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
