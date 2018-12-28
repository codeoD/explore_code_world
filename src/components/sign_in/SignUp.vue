<template>
  <div>
    <div class="register-form">
      <div class="field">
        <label for="" class="label">Username</label>
        <div class="control has-icons-left has-icons-right">
          <input type="text" class="input is-success">
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </div>
      </div>
      <!-- <div class="field">
        <label for="" class="label">Realname</label>
        <input type="text" class="input">
      </div> -->
      <div class="field">
        <label for="" class="label">Password</label>
        <div class="control has-icons-left has-icons-right">
          <input type="password" class="input is-success" id="">
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </div>
      </div>
      <div class="field">
        <label for="" class="label">Confirm Password</label>
        <div class="control has-icons-left has-icons-right">
          <input type="password" class="input is-success" id="">
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </div>
      </div>
      <div class="field">
        <label for="" class="label">Invite ID</label>
        <div class="control has-icons-left has-icons-right">
          <input type="text" class="input is-success" id="">
          <span class="icon is-small is-left">
            <i class="fas fa-key"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </div>
      </div>
      <div class="field">
        <input type="button" value="Register" class="button is-link w-full">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SignUp'
}
</script>
<style lang="scss">
.register-form {
  margin: 0 36%;
  padding: 1rem;
}
</style>
