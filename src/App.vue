<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <top-bar></top-bar>
    <side-bar></side-bar>
    <router-view class="main-content inline-block fixed"/>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar'
import SideBar from '@/components/SideBar'
export default {
  name: 'App',
  components: {
    TopBar,
    SideBar
  }
}
</script>

<style>
@import url('../static/css/bootstrap-reboot.css');
@import url('./assets/css/style.scss');

/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
.main-content {
  width: calc(100vw - 8rem);
}
</style>
