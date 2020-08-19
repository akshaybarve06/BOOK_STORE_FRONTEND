<template>
  <div class="login-box">
    <h1>Welcome to BookStore</h1>
    <div class="input-wrapper">
      <input class="field" type="email" placeholder="Email"/>
      <input class="field" type="password" placeholder="Password" />
    </div>
    <div>
      <button class="button">Login</button>
    </div>
    <div>
      <a class="ref-link" style="color:white"
        href="/signup"
      >Create account instead!</a>
      <a class="ref-link" style="color:white"
        href="/forgot-password"
      >forgot password?</a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import '../assets/styles/App.scss'

export default Vue.extend({
  name: 'SignIn'
})
</script>
