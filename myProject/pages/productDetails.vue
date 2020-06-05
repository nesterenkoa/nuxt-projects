<template>
  <div class="mp-gallery-item">
    <img :src="product.img" :alt="product.alt">

    <div class="mp-test">
      <div class="d-flex justify-content-between align-items-center mp-margin-bt">
        <h4 class="mp-title">
          {{ product.title }}
        </h4>
        <p class="mp-price">
          {{ product.price }}
        </p>
      </div>
      <p class="mp-description">
        {{ product.description }}
      </p>

      <button class="mp-btn mp-btn-order">
        Order
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetails',
  async asyncData ({ $axios, params, error }) {
    try {
      const product = await $axios.$get(`/products/${params.id}`)
      return { product }
    } catch (e) {
      return error(e)
    }
  }
}
</script>

<style scoped>

</style>
