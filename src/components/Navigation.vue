<template>
          <div class='navbar'>
            <div class='book-menu'>
            <img svg-inline class='book-icon' src='../assets/book.png' alt='book' />
            <a href='/home' class='link'><lable class='bookstore'>Bookstore</lable></a>
            <input type='text' placeholder='   Search Book Here...' solo class='search'/>
            <button class='search-btn'><img svg-inline class='search-icon' src='../assets/search.png' alt='search' /></button>
            <router-link to='/cart' class='link'><img svg-inline class='cart-icon' src='../assets/cart.png' alt='cart' /></router-link>
            <router-link to='/wishlist' class='link'><img svg-inline class='wishlist-icon' src='../assets/wishlist.png' alt='whishlist' /></router-link>
            <router-link to='/signin' class='link'><img svg-inline class='login-icon' src='../assets/user-login.png' alt='login' /></router-link>
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
    background-color: rgb(29, 140, 204);
    width: 100%;
    height: 95px;
    box-shadow: teal;
  }
  .book-menu {
    display: flex;
    flex-direction: row;
    padding: 2%;
  }
  .bookstore {
    color: white;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 140%;
    margin-left: 8%;
    font-size: 170%;
  }
  .book-icon {
    width: 50px;
    height: 50px;
    margin-left: 11px;
  }
  .cart-icon {
    width: 35px;
    height: 38px;
    margin-right: 10px;
  }
  .wishlist-icon {
    width: 35px;
    height: 38px;
    margin-left: 10px;
  }
  .login-icon {
    width: 35px;
    height: 38px;
    margin-left: 12px;
  }
  .link {
    color: rgb(29, 140, 204);
  }
  .search {
    width: 780px;
    height: 40px;
    margin-left: 160px;
    margin-top: 2px;
    background-color: white;
    box-shadow: gray;
    border-radius: 5px 0px 0px 5px;
  }
  .search-btn {
     height: 40px;
     margin-top: 2px;
     width: 40px;
     border-radius: 0px 5px 5px 0px;
     margin-right: 160px;
  }
  .search-icon {
     width: 40px;
     height: 40px;
     border-radius: 0px 5px 5px 0px;
     background-color: white;
  }
</style>
