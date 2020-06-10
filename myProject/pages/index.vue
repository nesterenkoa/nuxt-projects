<template>
  <div class="container">
    <Slider class="mb-5" />
    <NewItemsProducts />
  </div>
</template>

<script>
import Slider from '~/components/Slider.vue'
import NewItemsProducts from '~/components/NewItemsProducts.vue'

export default {
  components: {
    Slider,
    NewItemsProducts
  }
}
</script>

<style>
</style>
