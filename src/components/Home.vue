<template>
  <div class='bookgrid'>
    <Showbooks />
  </div>
</template>

<script>
import Showbooks from './ShowBooks.vue'
export default {
  components: {
    Showbooks
  }
}
</script>
<style lang="stylus" scoped>
@import '../assets/styles/Home.scss'
</style>
