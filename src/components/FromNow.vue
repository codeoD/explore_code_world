<template>
  <div class="text-center">
    <h1 class="from-now">Frow now, keep curiosity!</h1>
  </div>
</template>
<script>
export default {
  name: 'FromNow',
  mounted: function () {
    console.log('--logined:', this.$store.state.logined)
  }
}
</script>
<style lang="scss">
.from-now {
  margin: 16% 0;
}
</style>
