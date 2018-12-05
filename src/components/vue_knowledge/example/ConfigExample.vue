<template>
  <div>
    <h3>全局配置</h3>
    <pre>
Vue.config.silent = false
Vue.config.optionMergeStrategies = function (parent, child, vm) {}
Vue.config.devtools = true
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
    </pre>
  </div>
</template>
<script>
export default {
  name: 'ConfigExample'
}
</script>
