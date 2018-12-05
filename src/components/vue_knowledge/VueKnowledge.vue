<template>
  <div>
    <h2 id="vue_knowledge" class="pb-4">Vue Knowledge</h2>
    <config-example></config-example>
    <parent-example></parent-example>
    <render-wrap></render-wrap>
  </div>
</template>
<script>
import Vue from 'vue'
import ConfigExample from './example/ConfigExample'
import ParentExample from './example/ParentExample'
import RenderWrap from './example/RenderWrap'
export default {
  name: 'VueKnowledge',
  components: {
    ConfigExample,
    ParentExample,
    RenderWrap
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
