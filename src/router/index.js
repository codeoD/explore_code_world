import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import FromNow from '@/components/FromNow'
import VueKnowledge from '@/components/vue_knowledge/VueKnowledge'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FromNow',
      component: FromNow
    },
    {
      path: '/vueKnowledge',
      name: 'VueKnowledge',
      component: VueKnowledge
    }
  ]
})
