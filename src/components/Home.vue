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

<style lang="scss" scoped>
.bookgrid{
  padding-left: 15%;
}
@media (min-width :360px) {
  .bookgrid{
    padding-left: 5%;
  }
}
</style>
