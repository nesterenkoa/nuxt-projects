<template>
  <div>
    <TheHeader />
    <div class="mb-3" />
    <div class="container">
      <Breadcrumb />
      <nuxt />
    </div>
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader'
import Breadcrumb from '../components/Breadcrumb'
export default {
  components: {
    TheHeader,
    Breadcrumb
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
