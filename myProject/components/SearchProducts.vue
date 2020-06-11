<template>
  <form class="mr-5 mp-search" @submit.prevent="onSearch">
    <input v-model="q" type="search" class="form-control" placeholder="Type to search...">
  </form>
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
  flex-grow: 1;
}
  .mp-search input{
    border-radius: 20px;
    border-color: yellow;
  }
</style>
