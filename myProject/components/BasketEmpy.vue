<template>
  <div class="d-flex flex-column justify-content-center align-items-center overflow-hidden mp-basket-empy">
    <p class="mp-text-basket">
      Ваша корзина пуста
      <i class="fa fa-frown-o" aria-hidden="true" />
    </p>
    <img src="../assets/img/basket.jpg">
    <nuxt-link class="mp-link-page-products" :to="{name: 'products', params: { lang } }">
      Вернуться к выбору блюд
    </nuxt-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'BasketEmpy',
  computed: mapGetters({
    lang: 'localization/locale'
  })
}
</script>

<style scoped>
  .mp-basket-empy{
    display: block;
    position: relative;
  }

  .mp-text-basket{
    padding: 10px;
    border-radius: 10px;
    position: absolute;
    top:10%
  }

  .fa-frown-o{
    border-radius: 50%;
}

  .mp-link-page-products{
    position: absolute;
    bottom: 5%;
    background: #f0a412;
    color:yellow;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid black;
  }

  .mp-link-page-products:hover{
    text-decoration: none;
  }

</style>
