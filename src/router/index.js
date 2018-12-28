import Vue from 'vue'
import Router from 'vue-router'
import { TokenService } from '../services/storage.service'
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

// 使用vue-router的滚动行为暂时有问题：不能正确滚动，页面会向下偏移等2个问题
// scrollBehavior,
const router = new Router({
  mode: 'history',
  // scrollBehavior (to, from, savedPosition) {
  //   if (to.hash) {
  //     return {
  //       selector: to.hash
  //     }
  //   }
  // },
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
          component: InterestingThing,
          meta: {
            private: true
          }
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
      name: 'Sign',
      component: SignIndex,
      children: [
        {
          path: 'signin',
          name: 'SignIn',
          component: SignIn,
          meta: {
            // public: true, // Allow access to even if not logged in
            onlyWhenLoggedOut: true
          }
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

router.beforeEach((to, from, next) => {
  // protected route: https://medium.com/@zitko/structuring-a-vue-project-authentication-87032e5bfe16
  // const isPublic = to.matched.some(record => record.meta.public)
  const isPrivate = to.matched.some(record => record.meta.private)
  const onlyWhenLoggedOut = to.matched.some(record => record.meta.onlyWhenLoggedOut)
  const loggedIn = !!TokenService.getToken()

  if (isPrivate && !loggedIn) {
    return next({
      path: '/signin',
      query: { redirect: to.fullPath }
    })
  }

  if (loggedIn && onlyWhenLoggedOut) {
    return next('/')
  }

  next()
})

// 一种变通的方式处理官方的scrollBehavior行为异常问题
router.afterEach((to, from) => {
  Vue.nextTick().then(() => {
    const scrollTarget = document.getElementById('scrollTarget')
    const parent = scrollTarget.parentElement
    const padding = Number.parseInt(window.getComputedStyle(scrollTarget).padding)
    if (to.hash) {
      let str = to.hash.replace('#', '')
      console.log('to.hash:', to.hash)
      let el = document.getElementById(str)
      parent.scrollTo({
        top: el.offsetTop - el.offsetHeight + padding,
        left: el.offsetLeft,
        behavior: 'smooth'
      })
    } else {
      parent.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  })
})
export default router
