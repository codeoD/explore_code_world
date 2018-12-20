<template>
  <div>
    <!-- <div>
      <img src="../../assets/img/vue_developer_knowledge_map.png" alt="vue开发者知识图">
    </div> -->
    <div class="login-form">
      <div class="field">
      <label class="label" for="">Username</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input is-success" type="text" v-model="email" placeholder="input username">
        <span class="icon is-small is-left"><i class="fas fa-user"></i></span>
        <span class="icon is-small is-right"><i class="fas fa-check"></i></span>
      </div>
      <p class="help is-success">This username is available</p>
    </div>
    <div class="field">
      <label class="label">Password</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input is-danger" type="password" placeholder="input password" v-model="password">
        <span class="icon is-small is-left">
        <i class="fas fa-lock"></i>
        </span>
        <span class="icon is-small is-right">
        <i class="fas fa-exclamation-triangle"></i>
        </span>
      </div>
      <p class="help is-danger">This email is invalid</p>
    </div>
    <div class="field">
      <div class="control">
        <input class="is-link button w-full" value="SignIn" @click="handleSubmit">
      </div>
    </div>
    <div>
      <a id="qq" @click="qqSignIn">sign in with QQ</a>
      <a id="google" class="ml-4">sign in with google</a>
    </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'SignIn',
  data () {
    return {
      email: 'my@email.com',
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
<style lang="scss" scoped>
.login-form {
  // margin-left: 60%;
  // margin-right: 10%;
  margin: 0 36%;
  padding: 1rem;
}
</style>
