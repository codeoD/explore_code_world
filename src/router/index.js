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

// 一种变通的方式处理官方的scrollBehavior行为异常问题
router.afterEach((to, from) => {
  if (to.hash) {
    let str = to.hash.replace('#', '')
    console.log(str)
    Vue.nextTick().then(data => {
      console.log(data)
      let el = document.getElementById(str)
      // let { x: left, y: top } = el.getClientRects()[0]
      let parent = document.getElementById('parent')
      let padding = 16
      parent.scrollTo({
        top: el.offsetTop - el.offsetHeight + padding,
        left: el.offsetLeft,
        behavior: 'smooth'
      })
    })
  }
})

export default router
