<template>
          <div class='navbar'>
            <div class='book-menu'>
            <img svg-inline class='icon' src='../assets/book.png' alt='example' />
            <a href='#' class='link'><lable class='bookstore'>Bookstore</lable></a>
            <input type='text' placeholder='   Search Book Here...' solo class='search'/>
            <button class='search-btn'>search</button>
            <router-link to='/cart' class='link'><img svg-inline class='cart-icon' src='../assets/cart1.png' alt='cart' /></router-link>
            <router-link to='/about' class='link'><img svg-inline class='wishlist-icon' src='../assets/wishlist.png' alt='whishlist' /></router-link>
            <router-link to='/about' class='link'><img svg-inline class='cart-icon' src='../assets/login.jpg' alt='login' /></router-link>
            <!--<a href="#"><label>Login </label></a> -->
            </div>
        </div>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'Navigation'
})
</script>
<style scoped>
  .navbar {
    background-color: #00BFFF;
    width: 100%;
    height: 13%;
    box-shadow: teal;
  }
  .book-menu {
    display: flex;
    flex-direction: row;
    padding: 2%;
  }
  .bookstore, .cart, .wishlist, .login {
    color: white;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 140%;
  }
  .icon {
    width: 50px;
    height: 50px;
  }
  .cart-icon {
    width: 30px;
    height: 34px;
    margin-left: 12%;
  }
   .wishlist-icon {
    width: 35px;
    height: 38px;
    margin-left: 12%;
  }
  .cart, .wishlist {
    margin-right: 25px
  }
  .link {
    color: #00BFFF;
  }
  .bookstore {
    margin-left: 8%;
    font-size: 170%;
  }
  .search {
    width: 40%;
    height: 40px;
    margin-left: 3%;
    margin-top: 2px;
    background-color: white;
    box-shadow: gray
  }
  .search-btn {
     margin-right: 20%;
     background-color: black;
     height: 40px;
     margin-top: 2px;
     color: white;
     width: 6%;
  }
</style>
