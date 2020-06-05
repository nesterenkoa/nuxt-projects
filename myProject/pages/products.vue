<template>
  <div>
    <SearchProducts @search="onSearch" />
    <!--<ListProducts :products="products"/>-->
    <div class="row">
      <ItemProduct v-for="product of products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script>
import SearchProducts from '../components/SearchProducts'
import ItemProduct from '../components/ItemProduct.vue'

// import ListProducts from '../components/ListProducts.vue'

export default {
  name: 'Products',
  components: {
    // ListProducts,
    ItemProduct,
    SearchProducts
  },
  async asyncData ({ $axios }) {
    let products = []
    try {
      products = await $axios.$get('/products')
    } catch (e) {
      console.log(e)
    }
    return { products }
  },
  methods: {
    onSearch (products) {
      this.products = products
    }
  }
}
</script>

<style scoped>
/*.mp-search{*/

/*}*/
</style>
