<template>
  <div>
    <h1 class="heading">
      Products
    </h1>
    <span class="wrapper-divider" />
    <FilterProducts />
    <div class="row">
      <ItemProduct v-for="product of products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ItemProduct from './ItemProduct'
import FilterProducts from './FilterProducts'

export default {
  name: 'ListProducts',
  components: {
    ItemProduct,
    FilterProducts
  },
  computed: mapGetters({
    products: 'products/filteredProducts'
  })
}
</script>

<style scoped>
  .wrapper-divider {
    background: url('../assets/img/pizza.svg');
    background-size: cover;
  }
</style>
