<template>
  <div>
    <h2 class="pb-4">浏览器相关</h2>
    <render-engine></render-engine>
  </div>
</template>
<script>
import RenderEngine from './RenderEngine'
export default {
  name: 'BrowserIndex',
  components: {
    RenderEngine
  }
}
</script>
