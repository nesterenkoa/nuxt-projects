<template>
  <div>
    <div v-if="favorites.length > 0">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h2 class="mp-cart-title">
          Ваша корзина
        </h2>
        <p class="empty-trash" @click="removeAllProducts">
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
.mp-cart-title{
  color: #862a5c;
  font-size: 20px;
  font-style: italic;

}
  .empty-trash{
    color: red;
    font-size: 13px;

  }
</style>
