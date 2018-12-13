import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import IndexPage from '@/components/Index'
import FromNow from '@/components/FromNow'
import VueKnowledge from '@/components/vue_knowledge/VueKnowledge'
import BrowserIndex from '@/components/browser/BrowserIndex'
import InterestingThing from '@/components/interesting_thing/InterestingThing'
import HttpIndex from '@/components/http/HttpIndex'
import SignIndex from '@/components/sign_in/SignIndex'
import SignIn from '@/components/sign_in/SignIn'
import SignUp from '@/components/sign_in/SignUp'

Vue.use(Router)

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    const position = {}
    // new navigation.
    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash
      // position.offset = { x: 0, y: 0 }
      console.log(to, position)
    }
    // check if any matched route config has meta that requires scrolling to top
    if (to.matched.some(m => m.meta.scrollToTop)) {
      // cords will be used if no selector is provided,
      // or if the selector didn't match any element.
      position.x = 0
      position.y = 0
    }
    // if the returned position is falsy or an empty object,
    // will retain current scroll position.
    return position
  }
}

export default new Router({
  mode: 'history',
  scrollBehavior,
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
        },
        {
          path: 'http',
          name: 'HttpIndex',
          component: HttpIndex
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
