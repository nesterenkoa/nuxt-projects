<template>
  <div class="container">
    <Slider class="mb-5" />
    <NewItemsProducts />
    <CoffeeToGo />
  </div>
</template>

<script>
import CoffeeToGo from '../components/CoffeeToGo'
import Slider from '~/components/Slider.vue'
import NewItemsProducts from '~/components/NewItemsProducts.vue'

export default {
  components: {
    Slider,
    NewItemsProducts,
    CoffeeToGo
  },
  async created () {
    await this.$store.dispatch('products/load')
  }
}
</script>

<style>
</style>
