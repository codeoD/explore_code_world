import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import IndexPage from '@/components/Index'
import FromNow from '@/components/FromNow'
import VueKnowledge from '@/components/vue_knowledge/VueKnowledge'
import BrowserIndex from '@/components/browser/BrowserIndex'
import InterestingThing from '@/components/interesting_thing/InterestingThing'
import SignIndex from '@/components/sign_in/SignIndex'
import SignIn from '@/components/sign_in/SignIn'
import SignUp from '@/components/sign_in/SignUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: IndexPage,
      children: [
        {
          path: '',
          name: 'FromNow',
          component: FromNow
        },
        {
          path: 'vueknowledge',
          name: 'VueKnowledge',
          component: VueKnowledge
        },
        {
          path: 'browser',
          name: 'BrowserIndex',
          component: BrowserIndex
        },
        {
          path: 'interesting',
          name: 'InterestingThing',
          component: InterestingThing
        }
      ]
    },
    {
      path: '/',
      name: 'SignIn',
      component: SignIndex,
      children: [
        {
          path: 'signin',
          name: 'SignIn',
          component: SignIn
        },
        {
          path: 'signup',
          name: 'SignUp',
          component: SignUp
        }
      ]
    }
  ]
})
