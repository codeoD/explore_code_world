<template>
  <div class="bg-grey-darker">
    <header>欢迎登录！</header>
    <router-view />
    <footer>这里是底部</footer>
  </div>
</template>
<script>
export default {
  name: 'SignIndex'
}
</script>
<style lang="scss" scoped>
header {
  height: 4rem;
}
footer {
  height: 8rem;
}
</style>
