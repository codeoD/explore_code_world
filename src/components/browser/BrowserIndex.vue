<template>
  <div>
    <h2 class="pb-4">浏览器相关</h2>
    <render-engine></render-engine>
    <render-process></render-process>
  </div>
</template>
<script>
import RenderEngine from './RenderEngine'
import RenderProcess from './RenderProcess'
export default {
  name: 'BrowserIndex',
  components: {
    RenderEngine,
    RenderProcess
  }
}
</script>
