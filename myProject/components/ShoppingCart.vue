<template>
    <nuxt-link :to="{ name: 'cart', params: { lang} }" class="mp-shopping-cart mr-lg-4">
      <i class="fa fa-shopping-cart" aria-hidden="true" />
      <span class="mp-cart-quantity"> {{ favorites.length }}</span>
      <span v-if="orderCost > 0" class="order-price"> = {{ orderCost }} <i class="fa fa-credit-card" aria-hidden="true" /> </span>
    </nuxt-link>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ShoppingCart',
  computed: {
    ...mapGetters({
      favorites: 'favorites/items',
      lang: 'localization/locale'
    }),
    orderCost () {
      return this.favorites.reduce(function (sum, item) {
        return sum + item.price
      }, 0)
    }
  }
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
    min-width: 20px;
    min-height: 20px;
    background: yellow;
    border-radius: 50%;
    box-sizing: border-box;
    padding: 4px;
    line-height: normal;
    text-align: center;
    font-size: 18px;
    position: absolute;
    top: -12px;
    left: 24px
  }

  .order-price{
    color:#007892;
    font-size: 19px;
  }
</style>
