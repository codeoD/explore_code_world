<template>
  <div class="inline-block side-bar bg-teal-lightest overflow-y-auto">
    <div class="text-center text-purple-dark font-medium">
      Content Tree
    </div>
    <ul class="pl-12">
      <li class="text-sm mt-2"><router-link to="vueknowledge" class="hover:no-underline font-bold">Vue Knowledge</router-link></li>
      <ul class="pl-4">
        <!-- @click="routeToSubItem($event, 'vueknowledge')" -->
        <li class="text-xs mt-2"><a href="#global_config" class="hover:no-underline">全局配置</a></li>
        <li class="text-xs mt-2"><a href="#component_concern" class="hover:no-underline">组件相关</a></li>
        <li class="text-xs mt-2"><a href="#render_function" class="hover:no-underline">Render函数</a></li>
        <li class="text-xs mt-2">
          <!-- <a href="#slot_component" class="hover:no-underline">Slot组件</a> -->
          <router-link to="vueknowledge#slot_component" class="hover:no-underline">Slot组件</router-link>
        </li>
      </ul>
      <li class="text-sm mt-2"><router-link to="interesting" class="hover:no-underline font-bold">Interesting Thing</router-link></li>
      <ul class="pl-4">
        <li class="text-xs mt-2"><a href="">Oauth2</a></li>
      </ul>
      <li class="text-sm mt-2"><router-link to="browser" class="hover:no-underline font-bold">Browser</router-link></li>
      <ul class="pl-4">
        <li class="text-xs mt-2"><a href="" class="hover:no-underline">Render Engine</a></li>
        <li class="text-xs mt-2"><a href="" class="hover:no-underline">JS Engine</a></li>
        <li class="text-xs mt-2"><a href="" class="hover:no-underline">Render Mechanism</a></li>
      </ul>
      <li class="text-sm mt-2"><router-link to="http" class="hover:no-underline font-bold">HTTP</router-link></li>
      <ul class="pl-4" @click="routeToSubItem($event, 'http')">
        <li class="text-xs mt-2"><a href="#headers" class="hover:no-underline">Headers</a></li>
        <li class="text-xs mt-2"><a href="#res_status_codes" class="hover:no-underline">Res Status Codes</a></li>
        <li class="text-xs mt-2"><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status">Other</a></li>
      </ul>
      <li class="text-sm mt-2"><a href="" class="hover:no-underline font-bold">App Deploy</a></li>
      <ul class="pl-4">
        <li class="text-xs mt-2"><a href="" class="hover:no-underline">Tomcat Config</a></li>
      </ul>
      <li class="text-sm mt-2"><a href="" class="hover:no-underline font-bold">More</a></li>
      <ul class="pl-4 mb-12">
        <li class="text-xs mt-2"><a href="">About</a></li>
      </ul>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'SideBar',
  methods: {
    routeToSubItem (e, str) {
      this.$router.push({path: str})
      // console.log(e.target)
      // e.target.click()
    }
  }
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
