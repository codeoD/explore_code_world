<template>
  <div class="inline-block side-bar bg-teal-lightest">
    <div class="text-center text-purple-dark font-medium">
      Content Tree
    </div>
    <ul>
      <li class="text-sm"><a href="">Vue Knowledge</a></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'SideBar'
}
</script>
<style lang="scss">
.side-bar {
  width: 12rem;
  height: calc(100vh - 5rem);
}
ul {
  padding-left: 3rem;
  list-style-type: none;
}
</style>
