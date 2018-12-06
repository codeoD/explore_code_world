<template>
  <div class="inline-block side-bar bg-teal-lightest">
    <div class="text-center text-purple-dark font-medium">
      Content Tree
    </div>
    <ul class="pl-12">
      <li class="text-sm mt-2"><router-link to="vueknowledge" class="hover:no-underline font-bold">Vue Knowledge</router-link></li>
      <ul class="pl-4">
        <li class="text-xs mt-2"><a href="#global_config" class="hover:no-underline">全局配置</a></li>
        <li class="text-xs mt-2"><a href="#component_concern" class="hover:no-underline">组件相关</a></li>
        <li class="text-xs mt-2"><a href="#render_function" class="hover:no-underline">Render函数</a></li>
        <li class="text-xs mt-2"><a href="" class="hover:no-underline">test</a></li>
      </ul>
      <li class="text-sm mt-2"><a href="" class="hover:no-underline font-bold">Interesting Thing</a></li>
      <ul class="pl-4">
        <li class="text-xs mt-2"><a href="">Oauth2</a></li>
      </ul>
      <li class="text-sm mt-2"><a href="" class="hover:no-underline font-bold">Browser Concern</a></li>
      <ul class="pl-4">
        <li class="text-xs mt-2"><a href="">Render Engine</a></li>
        <li class="text-xs mt-2"><a href="">JS Engine</a></li>
        <li class="text-xs mt-2"><a href="">Render Mechanism</a></li>
      </ul>
      <li class="text-sm mt-2"><a href="" class="hover:no-underline font-bold">App Deploy</a></li>
      <ul class="pl-4">
        <li class="text-xs mt-2"><a href="">Tomcat Config</a></li>
      </ul>
      <li class="text-sm mt-2"><a href="" class="hover:no-underline font-bold">More</a></li>
      <ul class="pl-4">
        <li class="text-xs mt-2"><a href="">About</a></li>
      </ul>
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
  // padding-left: 3rem;
  list-style-type: none;
}
</style>
