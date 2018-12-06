<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import IndexPage from '@/components/Index'
// import SignIndex from '@/components/sign_in/SignIndex'
export default {
  name: 'App'
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
</style>
