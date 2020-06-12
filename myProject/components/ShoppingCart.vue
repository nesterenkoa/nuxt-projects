<template>
  <nuxt-link :to="{ name: 'cart'}" class="mp-shopping-cart">
    <i class="fa fa-shopping-cart" aria-hidden="true" />
    <span class="mp-cart-quantity"> {{ favorites.length }}</span>
  </nuxt-link>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ShoppingCart',
  computed: mapGetters({
    favorites: 'favorites/items'
  })
}
</script>

<style scoped>

  .mp-shopping-cart{
    text-decoration: none;
    color: #74d4c0;
    font-size: 25px;
    position: relative;
  }

  .mp-shopping-cart:hover{
    color: #eca0b6;
  }

  .mp-cart-quantity{
    display: inline-block;
    background:#fafba4 ;
    border-radius: 50%;
    box-sizing: border-box;
    /*padding: 5px 8px;*/
    line-height: normal;
    text-align: center;
    font-size: 18px;
    position: absolute;
    top: -12px;
  }
</style>
