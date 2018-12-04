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
  width: 8rem;
  height: calc(100vh - 5rem);
}
ul {
  padding-left: 1rem;
  list-style-type: none;
}
</style>
