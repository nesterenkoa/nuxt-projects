<template>
  <div>
    <form class="mb-3">
      <input v-model="q" type="search" class="form-control mp-search" placeholder="Type to search...">
    </form>
  </div>
</template>

<script>
export default {
  name: 'SearchProducts',
  data: () => ({
    q: '',
    searchTimeout: null
  }),
  watch: {
    q (newValue) {
      clearTimeout(this.searchTimeout)
      this.searchTimeout = setTimeout(async () => {
        if (newValue.length >= 3) {
          this.$emit('search', await this.$axios.$get('/products', {
            params: {
              q: newValue
            }
          }))
        } else {
          this.$emit('search', await this.$axios.$get('/products'))
        }
      }, 500)
    }
  }
}
</script>

<style scoped>

</style>
