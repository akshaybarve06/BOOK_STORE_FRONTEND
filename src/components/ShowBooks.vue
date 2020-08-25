<template>
  <div>
  <div class="container" v-if="$store.getters.searchInput===''">
    <v-card
      class="bookdetails"
      style="margin: 10px"
      v-for="items in allBooks"
      :key="items.id"
    >
      <v-flex xs24 class="pr-8">
        <div class="imagediv">
          <img class="bookimage" :src="items.thumbnailUrl" alt />
        </div>
        <div class="bookcredentials">
          <v-title class="booktitle">{{
            items.title
          }}</v-title>
          <br>
          <v-subtitle class="bookauthor">by {{
            items.authors
          }}</v-subtitle>
          <br>
          <v-title class="booktitle">Rs. {{
            items.price
          }}</v-title>
          <v-card-actions class="buttons">
            <v-card flat dense @click="addToBag(items)"><v-text class="addtobag">ADD TO BAG</v-text></v-card>
            <v-card flat dense @click="addToWishList()"><v-text class="wishlist">WISHLIST</v-text></v-card>
          </v-card-actions>
        </div>
      </v-flex>
    </v-card>
  </div>
   <div class="container" v-if="$store.getters.searchInput!==''">
    <v-card
      class="bookdetails"
      style="margin: 10px"
      v-for="items in $store.getters.filterBookData"
      :key="items.id"
    >
      <v-flex xs24 class="pr-8">
        <div class="imagediv">
          <img class="bookimage" :src="items.thumbnailUrl" alt />
        </div>
        <div class="bookcredentials">
          <v-title class="booktitle">{{
            items.title
          }}</v-title>
          <br>
          <v-subtitle class="bookauthor">by {{
            items.authors
          }}</v-subtitle>
          <br>
          <v-title class="booktitle">Rs. {{
            items.price
          }}</v-title>
          <v-card-actions class="buttons">
            <v-card flat dense v-on:click="addToBag(items)"><v-text class="addtobag">ADD TO BAG</v-text></v-card>
            <v-card flat dense v-on:click="addToWishList()"><v-text class="wishlist">WISHLIST</v-text></v-card>
          </v-card-actions>
        </div>
      </v-flex>
    </v-card>
  </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import books from '../data/books.json'
export default Vue.extend({
  name: 'Showbooks',
  data () {
    return {
      allBooks: books,
      cartArray: []
    }
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    addToBag (book: any) {
      this.cartArray.push(book)
      localStorage.setItem('cartBooks', JSON.stringify(this.cartArray))
      // if(!localStorage.getItem('cartBooks')){
      // window.localStorage.setItem('cartBooks', JSON.stringify($scope.cartBooks));
      console.log(this.cartArray.toString())
      alert('BOOK ADDED TO CART...')
    }
  }
})
</script>
<style lang="stylus" scoped>
@import '../assets/styles/ShowBooks.scss'
</style>
