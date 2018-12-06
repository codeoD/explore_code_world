<template>
  <div>
    <h3 class="mt-4 mb-4" id="global_config">全局配置</h3>
    <div>
      <pre>
        <span>Vue.config.silent = <span class="text-purple-light">false</span></span>
        <span>Vue.config.optionMergeStrategies = <span class="text-red-light">function</span> (parent, child, vm) {}</span>
        <span>Vue.config.devtools = <span class="text-purple-light">true</span></span>
        <span>Vue.config.errorHandler = <span class="text-red-light">function</span> (err, vm, info) {</span>
        <span>console.log(<span class="text-green-light">'全局错误处理函数捕获：'</span>, err)</span>
        <span>}</span>
        <span>Vue.config.ignoredElements = []</span>
        <span>Vue.config.keyCodes = {</span>
        <span><span class="text-green-light">'media-play-pause'</span>: <span class="text-purple-light">13</span></span>
        <span>}</span>
        <span class="text-grey">// 注册全局指令</span>
        <span>Vue.directive(<span class="text-green-light">'focus'</span>, {</span>
        <span>  inserted: <span class="text-red-light">function</span> (el) {</span>
        <span>  el.focus()</span>
        <span> }</span>
        <span>})</span>
        <span class="text-grey">// 注册全局过滤器</span>
        <span>Vue.filter(<span class="text-green-light">'capitalize'</span>, value => {</span>
        <span>  if (!value) <span class="text-red-light">return</span> ''</span>
        <span>  value = value.toString()</span>
        <span><span class="text-red-light">  return</span> value.split(<span class="text-green-light">' '</span>).map((val) => {</span>
        <span><span class="text-red-light">    return</span> val.charAt(<span class="text-purple-light">0</span>).toUpperCase() + val.slice(<span class="text-purple-light">1</span>)</span>
        <span>  }).join(<span class="text-green-light">' '</span>)</span>
        <span>})</span>
      </pre>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ConfigExample'
}
</script>
<style lang="scss">
</style>
