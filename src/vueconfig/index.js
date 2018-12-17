import Vue from 'vue'
import qs from 'qs'
import { axios, api } from '../services'

Vue.config.productionTip = false
Vue.prototype.$qs = qs
Vue.prototype.$http = axios
Vue.prototype.$api = api

Vue.config.errorHandler = function (err, vm, info) {
  console.log('全局错误处理函数捕获：', err)
}
Vue.config.ignoredElements = []
Vue.config.keyCodes = {
  'media-play-pause': 13
}

// 注册全局指令
Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  }
})

// 注册全局过滤器
Vue.filter('capitalize', value => {
  if (!value) return ''
  value = value.toString()
  return value.split(' ').map((val) => {
    return val.charAt(0).toUpperCase() + val.slice(1)
  }).join(' ')
})

export default Vue
