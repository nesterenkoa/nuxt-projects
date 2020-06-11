<template>
  <div>
    <ItemCartProduct v-for="favorit of favorites" :key="favorit.id" :favorit="favorit" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ItemCartProduct from './ItemCartProduct'
export default {
  name: 'ListCartProducts',
  components: {
    ItemCartProduct
  },
  computed: mapGetters({
    favorites: 'favorites/items'
  })
}
</script>

<style scoped>

</style>
