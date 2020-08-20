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
  name: 'Footer'
})
</script>

<style>
  .footer {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(29, 140, 204);
  color: white;
  height: 50px;
  font-family: fontawesome;
  bottom: 0;
  size: inherit;
  margin-top: 400px;
  position: sticky;
  box-shadow: teal
  }
  .footer-text-style {
  display: flex;
  flex-direction: row;
  }
</style>
