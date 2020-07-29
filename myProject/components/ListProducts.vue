<template>
  <div>
    <h1 class="heading">
      Продукты
    </h1>
    <span class="wrapper-divider" />
    <div class="row">
      <ItemProduct v-for="product of products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ItemProduct from './ItemProduct'

export default {
  name: 'ListProducts',
  components: { ItemProduct },
  computed: mapGetters({
    products: 'products/items'
  })
}
</script>

<style scoped>
  .wrapper-divider {
    background: url('../assets/img/pizza.svg');
    background-size: cover;
  }
</style>
