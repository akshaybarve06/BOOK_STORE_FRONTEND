<template>
  <div class="footer">
            <text is="x3d" class="footer-text-style" >
              Copyright@2020, Bookstore Private Limited. All Rights Reserved
            </text>
</div>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'footer'
})
</script>

<style>
  .footer {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00BFFF;
  color: white;
  height: 50px;
  font-family: fontawesome;
  bottom: 0;
  size: inherit;
  position: sticky;
  margin-top: 500px;
  }
  .footer-text-style {
  display: flex;
  flex-direction: row;
  }
</style>
