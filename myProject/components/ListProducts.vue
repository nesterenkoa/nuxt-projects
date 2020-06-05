<template>
  <div class="row">
    <ItemProduct v-for="product of products" :key="product.id" :product="product" />
  </div>
</template>

<script>
import ItemProduct from './ItemProduct'

export default {
  name: 'ListProducts',
  comments: { ItemProduct },
  props: {
    products: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
