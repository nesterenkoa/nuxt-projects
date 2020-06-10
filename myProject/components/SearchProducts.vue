<template>
  <div>
    <form @submit.prevent="onSearch">
      <input v-model="q" type="search" class="form-control mp-search" placeholder="Type to search...">
    </form>
  </div>
</template>

<script>

export default {
  name: 'SearchProducts',
  data: () => ({
    q: ''
  }),
  methods: {
    onSearch () {
      this.$nuxt.$router.push({
        name: 'products',
        query: { q: this.q }
      })
    }
  }
}
</script>

<style scoped>
.mp-search{

}
</style>
