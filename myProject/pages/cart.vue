<template>
  <div>
    <div v-if="favorites.length > 0">
      <div class="d-flex justify-content-between">
        <h2> Ваша корзина </h2>
        <p @click="removeAllProducts">
          <i class="fa fa-times" aria-hidden="true" />
          Oчистить все
        </p>
      </div>
      <ListCartProducts />
    </div>
    <BasketEmpy v-else />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ListCartProducts from '../components/ListCartProducts'
import BasketEmpy from '../components/BasketEmpy'
export default {
  name: 'Cart',
  components: {
    ListCartProducts,
    BasketEmpy
  },
  computed: mapGetters({
    favorites: 'favorites/items'
  }),
  methods: mapActions({
    removeAllProducts: 'favorites/removeAll'
  })
}
</script>

<style scoped>

</style>
