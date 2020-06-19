<template>
  <div class="d-flex justify-content-between mp-wrapper">
    <nuxt-link :to="{ name: 'products'}" class="mp-link-page-products">
      <i class="fa fa-arrow-circle-left mr-2" aria-hidden="true" />
      Продолжить покупки
    </nuxt-link>

    <span class="mp-order-cost">Сумма заказа: {{ orderCost }}  <i class="fa fa-credit-card" aria-hidden="true" /></span>
    <button class="mp-btn mp-btn-checkout">
      Оформить заказ
    </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'TabloOrder',
  computed: {
    ...mapGetters({
      favorites: 'favorites/items'
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
.mp-wrapper{
  box-shadow: -2px 6px 10px 0 rgba(0, 0, 0, 0.46);
  padding: 35px;
  background: #862a5c;
  border-radius: 15px;
  margin-bottom: 50px;
}
.mp-order-cost{
  color:white;
}
.mp-link-page-products{
  color:#f4a548;
}
  .mp-link-page-products:hover{
    text-decoration: none;
  }
</style>
