<template>
  <div>
    <TheHeader />
    <div class="mb-3" />
    <Breadcrumb />
    <nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader'
import Breadcrumb from '../components/Breadcrumb'
import TheFooter from '../components/TheFooter'
export default {
  components: {
    TheHeader,
    Breadcrumb,
    TheFooter
  },
  fetch ({ store }) {
    store.dispatch('favorites/load')
  }
  // methods: mapActions({
  //   loadFavorites: 'favorites/load',
  // })
  // onCreate: () => {
  //   loadFavorites();
  // }
}
</script>

<style>
</style>
