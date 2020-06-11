<template>
  <div>
    <h1> caarttt</h1>
    <ListCartProducts v-if="favorites.length > 0" />
    <p v-else>
      В Вашей корзине ничего нет =(
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ListCartProducts from '../components/ListCartProducts'
export default {
  name: 'Cart',
  components: {
    ListCartProducts
  },
  computed: mapGetters({
    favorites: 'favorites/items'
  })

}
</script>

<style scoped>

</style>
