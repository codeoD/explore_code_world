<template>
  <div>
    <p class="mt-2 mb-2">来自父组件的props: {{ info }}</p>
    <div class="mt-2 mb-2"><slot></slot></div>
    <slot class="mt-2 mb-2" name="my-slot"></slot>
  </div>
</template>
<script>
export default {
  name: 'RenderTemplate',
  // camelCase命名的prop在DOM模板中使用时需使用等价的kebab-case格式，字符串模板中无此限制
  props: {
    info: {
      type: String,
      required: true
    }
  }
}
</script>
