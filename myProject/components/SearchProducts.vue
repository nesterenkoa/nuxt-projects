<template>
  <form class=" mb-4 mb-lg-0 mr-lg-5 mp-search" @submit.prevent="onSearch">
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
/*flex-grow: 1;*/
  width: 100%;
}
  .mp-search input{
    border-radius: 20px;
    border-color: yellow;
  }

@media (min-width: 992px){
  .mp-search{
    width: auto;
    flex-grow: 1;
  }
}
</style>
