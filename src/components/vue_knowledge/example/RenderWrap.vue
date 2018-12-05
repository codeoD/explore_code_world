<template>
  <div>
    <h3>Render函数</h3>
    <div>
      <input type="button" value="点击切换显示" @click="showError=!showError">
      <render-example :showError="showError" :info="info"></render-example>
    </div>
  </div>
</template>
<script>
import RenderExample from './RenderExample'
export default {
  name: 'RenderWrap',
  components: {
    RenderExample
  },
  data () {
    return {
      showError: false
    }
  },
  computed: {
    info: {
      get () {
        return this.showError ? 'ohh! That is a Error!' : 'Good News! You are Here!'
      }
    }
  }
}
</script>
