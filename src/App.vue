<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <top-bar></top-bar>
    <side-bar></side-bar>
    <div class="main-content inline-block fixed bg-teal-lightest">
      <router-view class="main-content-view"/>
    </div>
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
  width: calc(100vw - 12rem);
  height: calc(100vh - 5rem);
  overflow-y: auto;
}
.main-content-view {
  position: relative;
  padding: 1rem;
}
.main-content-view::before {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-image: url('./assets/img/magic_girl.jpg'); */
  /* background-clip: padding-box; */
  background-size: cover;
  background-position: bottom;
  z-index: -1;
  filter: opacity(0.4);
}
</style>
