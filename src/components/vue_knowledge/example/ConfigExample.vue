<template>
  <div>
    <h3>全局配置</h3>
    <pre>
      <span>Vue.config.silent = false</span>
      <span>Vue.config.optionMergeStrategies = function (parent, child, vm) {}</span>
      <span>Vue.config.devtools = true</span>
      <span>Vue.config.errorHandler = function (err, vm, info) {</span>
      <span>console.log('全局错误处理函数捕获：', err)</span>
      <span>}</span>
      <span>Vue.config.ignoredElements = []</span>
      <span>Vue.config.keyCodes = {</span>
      <span>'media-play-pause': 13</span>
      <span>}</span>
      <span>// 注册全局指令</span>
      <span>Vue.directive('focus', {</span>
      <span>inserted: function (el) {</span>
      <span>el.focus()</span>
      <span>}</span>
      <span>})</span>
      <span>// 注册全局过滤器</span>
      <span>Vue.filter('capitalize', value => {</span>
      <span>if (!value) return ''</span>
      <span>value = value.toString()</span>
      <span>return value.split(' ').map((val) => {</span>
      <span>return val.charAt(0).toUpperCase() + val.slice(1)</span>
      <span>}).join(' ')</span>
      <span>})</span>
    </pre>
  </div>
</template>
<script>
export default {
  name: 'ConfigExample'
}
</script>
