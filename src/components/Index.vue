<template>
  <div class="">
    <top-bar v-bind="user"></top-bar>
    <div class="sticky">
      <!-- <div class="inline-block side-bar bg-teal-lightest overflow-y-auto">1</div>
      <div class="inline-block bg-teal-lightest">2</div> -->
      <side-bar  class="inline-block side-bar bg-teal-lightest overflow-y-auto"></side-bar>
      <div id="parent" class="main-content inline-block">
        <router-view class="main-content-view"/>
      </div>
    </div>
  </div>
</template>
<script>
import TopBar from '@/components/TopBar'
import SideBar from '@/components/SideBar'
export default {
  name: 'IndexPage',
  components: {
    TopBar,
    SideBar
  },
  data () {
    return {
      user: {
        nickName: '',
        avatarSrc: ''
      }
    }
  },
  mounted: async function () {
    console.log(location.href)
    let paramsStr = location.href.split('?')[1]
    let paramsObj = this.$qs.parse(paramsStr)
    console.log(paramsObj)
    // this.userInfo.realName
    if (paramsObj.code) {
      let params = {
        grant_type: '“authorization_code',
        client_id: '000001',
        code: paramsObj.code,
        redirect_uri: encodeURI('http://localhost:6060/#/')
      }
      // get token
      let token = await this.$http.get('http://localhost:3000/oauth2/token', {
        params: params
      }).then(res => {
        console.log(res.data)
        return res.data.access_token
      })

      // get openId
      let openID = await this.$http.get('http://localhost:3000/oauth2/me', {
        params: {
          access_token: token
        }
      }).then(res => {
        console.log(res.data)
        return res.data.openid
      })

      this.$http.get('http://localhost:3000/user/get_user_info', {
        params: {
          access_token: token,
          openid: openID,
          consumer_key: '000001'
        }
      }).then(res => {
        console.log(res.data.real_name, res.data.nick_name)
        this.user.nickName = res.data.nick_name
      })
    }
  }
}
</script>
<style lang="scss">
.main-content {
  width: calc(100vw - 12rem);
  height: calc(100vh - 5rem);
  margin-left: -5px;
  vertical-align: top;
  overflow-y: auto;
}
.main-content-view {
  padding: 1rem;
}
.main-content::before {
  position: absolute;
  content: '';
  top: 0;
  left: 12rem;
  width: 100%;
  height: 100%;
  background-image: url('../assets/img/magic_girl.jpg');
  /* background-clip: padding-box; */
  background-size: cover;
  /* background-position: bottom; */
  // background-attachment: fixed;
  z-index: -1;
  // filter: opacity(0.4);
  opacity: 0.4;
}
</style>
