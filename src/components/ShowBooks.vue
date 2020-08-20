<template>
  <div class="container">
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
            <v-card flat dense @click="addToBag()"><v-text class="addtobag">ADD TO BAG</v-text></v-card>
            <v-card flat dense @click="addToWishList()"><v-text class="wishlist">WISHLIST</v-text></v-card>
          </v-card-actions>
        </div>
      </v-flex>
    </v-card>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import books from '../data/books.json'

export default Vue.extend({
  data () {
    return {
      allBooks: books
    }
  }
})
</script>
<style lang="stylus" scoped>
@import '../assets/styles/ShowBooks.scss'
</style>
