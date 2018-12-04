import Vue from 'vue'
import { axios } from '@/http'

Vue.config.productionTip = false
Vue.prototype.$http = axios
