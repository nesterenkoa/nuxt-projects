<template>
  <div class="container">
    <b-breadcrumb :items="breadcrumbList" class=" mp-breadcrumb">
      {{ breadcrumbList }}
    </b-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb',
  computed: {
    breadcrumbList () {
      return this.$route.meta.breadcrumb.map((item) => {
        if (item.text === 'product-details') {
          const { id } = this.$route.params
          const product = this.$store.getters['products/item'](id)
          if (!id || !product) {
            console.log('Ooops, no such product')
            return item
          }
          return {
            ...item,
            text: product.title
          }
        }
        return item
      })
    }
  }
}
</script>

<style scoped>
  .breadcrumb-item a{
    color:#74d4c0;
  }

  .breadcrumb-item.active {
    color: #862a5c;
  }

  .mp-breadcrumb{
    background-color: transparent;
    padding: 2px;
  }
</style>
