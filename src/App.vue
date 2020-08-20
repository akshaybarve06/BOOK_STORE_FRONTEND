<template>
  <v-app>
    <v-main>
      <Navigation/>
      <router-view></router-view>
      <Footer/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Navigation from './components/Navigation.vue'
import Footer from './components/footer.vue'

export default Vue.extend({
  name: 'App',

  components: {
    Navigation,
    Footer
  }
})
</script>
