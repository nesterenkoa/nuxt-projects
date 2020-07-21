<template>
  <!--<b-breadcrumb :items="breadcrumbList"></b-breadcrumb>-->
  <!--<div>-->
  <!--<nav aria-label="breadcrumb">-->
  <!--<ol class="breadcrumb bg-white">-->
  <!--<li class="breadcrumb-item">-->
  <!--<a href="#">Home</a>-->
  <!--</li>-->
  <!--<li class="breadcrumb-item">-->
  <!--<a href="#">Library</a>-->
  <!--</li>-->
  <!--<li class="breadcrumb-item active" aria-current="page">-->
  <!--Data-->
  <!--</li>-->
  <!--</ol>-->
  <!--</nav>-->
  <!--</div>-->
  <p>
    {{ breadcrumbList }}
  </p>
</template>

<script>
export default {
  name: 'Breadcrumb',
  computed: {
    breadcrumbList () {
      console.log(this.$route)
      if (!this.$route.meta.breadcrumb) {
        console.log('Ebat no breadcrumb')
        return 'Oooops'
      }
      return this.$route.meta.breadcrumb.map((item) => {
        if (item.name === 'nav.product-details') {
          const { id } = this.$route.params
          const product = this.$store.getters['products/item'](id)
          return product ? product.title : '???'
        }
        return item.name
      }).join(' / ')
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
</style>
