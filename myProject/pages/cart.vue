<template>
  <div>
    <div  v-if="favorites.length > 0">
        <div class="d-flex justify-content-between">
            <h2> Ваша корзина </h2>
            <p @click="removeAllProducts">
              <i class="fa fa-times" aria-hidden="true"></i>
              Oчистить все
            </p>
        </div>
        <ListCartProducts  />
      </div>
    <p v-else>
      Ваша корзина пуста =(
    </p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ListCartProducts from '../components/ListCartProducts'
export default {
  name: 'Cart',
  components: {
    ListCartProducts
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
