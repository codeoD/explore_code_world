<template>
  <div class="bg-grey-darker login-view">
    <header>欢迎登录！</header>
    <router-view class="main-content" />
    <footer>这里是底部</footer>
  </div>
</template>
<script>
export default {
  name: 'SignIndex'
}
</script>
<style lang="scss" scoped>
.login-view {
  display: flex;
  flex-flow: column;
  min-height: 100vh;
}
header {
  height: 4rem;
}
footer {
  height: 8rem;
}
.main-content {
  flex: 1;
}
</style>
