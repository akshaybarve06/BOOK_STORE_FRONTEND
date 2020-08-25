import Vue from 'vue'
import books from '../../data/books.json'

export default Vue.extend({
  name: 'ShowBooks',
  props: ['array'],
  data () {
    return {
      allBooks: books,
      cartArray: []
    }
  },
  methods: {
    addToBag () {
      // this.cartArray.push(book)
      // localStorage.setItem('cartBooks', JSON.stringify(this.cartArray))
      alert('BOOK ADDED TO CART...')
    },
    addToWishList () {
      // this.cartArray.push()
      // localStorage.setItem('wishlistBooks', JSON.stringify(this.cartArray))
      alert('BOOK ADDED TO WISHLIST...')
    }
  }
})
