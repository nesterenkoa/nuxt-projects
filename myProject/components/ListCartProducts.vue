<template>
  <div>
    <ItemCartProduct v-for="favorit of favorites" :key="favorit.id" :favorit="favorit" />
    <TabloOrder />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ItemCartProduct from './ItemCartProduct'
import TabloOrder from './TabloOrder'
export default {
  name: 'ListCartProducts',
  components: {
    ItemCartProduct,
    TabloOrder
  },
  computed: mapGetters({
    favorites: 'favorites/items'
  })
}
</script>

<style scoped>

</style>
