<template>
  <div class="login-box">
    <h1>Welcome to BookStore</h1>
    <div class="input-wrapper">
      <input class="field" type="email" placeholder="Email" required />
      <input class="field" type="password" placeholder="Password" required />
      <input class="field" type="password" placeholder="Confirm Password" required />
    </div>
    <div>
      <button class="button">Signup!</button>
    </div>
    <div>
      <a class="ref-link" style="color:white"
        href="/signin"
      >Have an account? SignIn</a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import '../assets/styles/App.scss'

export default Vue.extend({
  name: 'SignUp'
})
</script>
