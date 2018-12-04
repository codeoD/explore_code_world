import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'

describe('HelloWorld.vue', () => {
  const Constructor = Vue.extend(HelloWorld)
  const vm = new Constructor().$mount()
  it('should render correct contents', () => {
    // const Constructor = Vue.extend(HelloWorld)
    // const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })

  test('getVmData', done => {
    Vue.prototype.$http.get = function (url) {
      return new Promise((resolve, reject) => {
        resolve(true)
      })
    }
    expect.assertions(1)
    vm.getVmData()
    setTimeout(() => {
      expect(vm.msg).toBe('hi, it is me')
      done()
    }, 2000)
  })
})
