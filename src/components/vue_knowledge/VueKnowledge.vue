<template>
  <div>
    <h2 id="vue_knowledge" class="pb-4">Vue Knowledge</h2>
    <config-example></config-example>
    <parent-example></parent-example>
    <render-wrap></render-wrap>
    <todo-list>
      <span slot-scope="{ todo }">
        <!-- 或者使用变量绑定文本 \u2714, html解析的码点是十进制的，可以从str.codePointAt(index)得到 -->
        <i v-if="todo.isComplete">&#10004;</i>
        <i v-else>&#10006;</i>
        <span>{{ todo.text }}</span>
      </span>
    </todo-list>
  </div>
</template>
<script>
import Vue from 'vue'
import ConfigExample from './example/ConfigExample'
import ParentExample from './example/ParentExample'
import RenderWrap from './example/RenderWrap'
import TodoList from './example/TodoList'
export default {
  name: 'VueKnowledge',
  components: {
    ConfigExample,
    ParentExample,
    RenderWrap,
    TodoList
  },
  customOption: '自定义选项，通过$optons访问',
  data () {
    return {
      showError: false
    }
  },
  mounted: function () {
    console.log('Vue版本号:' + Vue.version)
    console.log('自定义选项：', this.$options.customOption)
    console.log('是否运行在服务器：', this.$isServer)
  }
}
</script>
<style lang="scss" scoped>
h2 {
  border-bottom: 0.05rem solid #faad63;
}
</style>
