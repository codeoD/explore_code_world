<template>
  <div>
    <div>
      <label for="">username</label>
      <input type="text" v-model="email">
    </div>
    <div>
      <label for="">password</label>
      <input type="password" v-model="password">
    </div>
    <div>
      <input type="button" value="SignIn" @click="handleSubmit">
    </div>
    <div>
      <a id="qq" @click="qqSignIn">sign in with QQ</a>
      <a id="google" class="ml-4">sign in with google</a>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'SignIn',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    ...mapGetters('authModule', [
      'authenticating',
      'authenticationError',
      'authenticationErrorCode'
    ])
  },
  methods: {
    // 实际情况中各公司提供的oauth2的认证参数不太一样，可以使用一些库处理或者在各个登录方式上分别处理
    qqSignIn (e) {
      let params = {
        // 固定值
        response_type: 'code',
        // 应用id，需要向第三方申请
        client_id: '000001',
        // 授权成功时的重定向url
        redriect_uri: 'http://localhost:6060/#/',
        // 请求的范围
        scope: 'get_user_info',
        // 状态参数，服务器会原值返回
        state: 'test state'
      }
      let targetHref = 'http://localhost:3000/oauth2/authorize?' + this.$qs.stringify(params)
      e.target.href = targetHref
    },
    ...mapActions('authModule', [
      'login'
    ]),
    handleSubmit () {
      if (this.email !== '' && this.password !== '') {
        this.login({
          email: this.email,
          password: this.password
        })
        this.password = ''
      }
    }
  }
}
</script>
