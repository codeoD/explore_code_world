import Vue from 'vue'

// 节流函数，但如果一直持续触发一个操作将一次都不执行，如果是按钮，可以考虑置为不可点击
Vue.prototype.throttle = function (fn, context) {
  if (fn.id) {
    clearTimeout(fn.id)
  } else {
    console.log(new Date().toLocaleString())
  }
  fn.id = setTimeout(() => {
    // fn.apply(context)
    fn.bind(context)()
    console.log(new Date().toLocaleString(), context.count)
    fn.id = undefined
  }, 2000)
}
// 防抖函数，一定间隔内执行一次
Vue.prototype.debounce = function (fn, context) {
  setTimeout(() => {
    fn.apply(context)
    // 不能使用arguments.callee 参考mdn standardjs规范
    Vue.prototype.debounce(fn, context)
  }, 3000)
}
