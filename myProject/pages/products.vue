<template>
  <div class="container">
    <ListProducts />
  </div>
</template>

<script>
import ListProducts from '../components/ListProducts.vue'

export default {
  name: 'Products',
  components: {
    ListProducts
  },
  watchQuery: ['q'],
  async fetch ({ store, query }) {
    if (query.q) {
      await store.dispatch('products/search', query.q)
    } else {
      await store.dispatch('products/load')
    }
  }
}
</script>

<style scoped>

</style>
