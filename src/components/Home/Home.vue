<template>
  <div class='bookgrid'>
    <ShowBooks :array="booksArray" v-if="$store.getters.searchInput===''"/>
    <ShowBooks :array="$store.getters.filterBookData" v-if="$store.getters.searchInput!==''"/>
    </div>
</template>

<script lang='ts'>
import './Home.scss'
import Home from './Home'
import ShowBooks from '@/components/ShowBooks/ShowBooks.vue'
import books from '@/data/books.json'
export default {
  name: 'Home',
  components: {
    ShowBooks
  },
  data () {
    return {
      booksArray: books
    }
  }
}
</script>
