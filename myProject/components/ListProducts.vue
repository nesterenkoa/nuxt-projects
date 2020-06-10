<template>
  <div class="row">
    <ItemProduct v-for="product of products" :key="product.id" :product="product" />
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

</style>
