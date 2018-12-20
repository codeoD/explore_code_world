<template>
  <div class="bg-teal-lighter">
    <img src="../assets/img/yiliya.png" alt="yiliya img load faiture" class="w-32 ml-24 align-middle">
    <div class="relative inline-block w-4/5 text-left">
      <span class="text-2xl font-semibold ml-12">欢迎来到Code World</span>
      <span class="text-xs ml-10">这里将对vue和一些有趣的事情探索，一起来吧！</span>
      <div v-if="!nickName" class="inline-block absolute sign">
        <router-link to="signin" class="cursor-pointer text-teal hover:text-teal-darkest" tag="span">Sign in</router-link>
        <span class="text-white"> Or </span>
        <router-link to="signup" tag="span" class="cursor-pointer text-teal hover:text-teal-darkest">Sign up</router-link>
      </div>
      <div v-else class="inline-block absolute sign">
        <span>{{ nickName }}</span>
        <img src="../assets/img/4.jpg" alt="user avatar" width="50px" height="50px">
        <span class="cursor-pointer text-teal hover:text-teal-darkest" @click="handleLogout">Sign Out</span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'TopBar',
  props: {
    nickName: {
      type: String
    },
    avatarSrc: {
      type: String,
      validator: function (val) {
        return val !== ''
      }
    }
  },
  data () {
    return {}
  },
  methods: {
    ...mapActions('authModule', [
      'logout'
    ]),
    handleLogout () {
      this.logout()
    }
  }
}
</script>
<style lang="scss">
.sign {
  top: 0.75rem;
  right: 0.5rem;
  font-size: 14px;
}
</style>
