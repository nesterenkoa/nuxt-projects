<template>
  <div class="d-flex  flex-column  align-items-center flex-md-row  justify-content-md-between mp-wrapper">
    <nuxt-link :to="{ name: 'products', params: { lang } }" class="order-3 order-md-1 mp-link-page-products">
      <i class="fa fa-arrow-circle-left mr-2" aria-hidden="true" />
      Продолжить покупки
    </nuxt-link>

    <span class="mb-1 mb-md-0 order-2 mp-order-cost">Сумма заказа: {{ orderCost }}  <i class="fa fa-credit-card" aria-hidden="true" /></span>
    <nuxt-link class="order-1 order-md-3 mb-1 mb-md-0 mp-btn mp-btn-checkout" :to="{ name: 'form', params:{ lang } }">
      Оформить заказ
    </nuxt-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'TabloOrder',
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
