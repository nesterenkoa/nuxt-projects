<template>
  <div class="d-flex flex-sm-row flex-column justify-content-between align-items-center mp-background">
    <div class="mp-wrapper-img">
      <img :src="product.img" :alt="product.alt">
    </div>

    <div class="mp-test d-flex flex-column">
      <div class="d-flex justify-content-between align-items-center mp-margin-bt">
        <h4 class="mp-title">
          {{ product.title }}
        </h4>
        <p class="mp-price">
          {{ product.price }}
        </p>
      </div>
      <p class="mp-description">
        <i class="fa fa-cutlery" aria-hidden="true" />
        {{ product.description }}
      </p>
      <button v-if="isCanAdd(product.id)" class="mp-btn mp-btn-order" @click.prevent="onAddToFavorites(product)">
        <i class="fa fa-cart-plus" aria-hidden="true" />
        Add to favorites
      </button>
      <button v-else class="mp-btn mp-btn-remove" @click.prevent="onRemoveFromFavorites(product)">
        <i class="fa fa-shopping-cart" aria-hidden="true" />
        Remove from favorites
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ProductDetails',
  // async asyncData({$axios, params, error}) {
  //   try {
  //     const product = await $axios.$get(`/products/${params.id}`)
  //     return {product}
  //   } catch (e) {
  //     return error(e)
  //   }
  // },
  async fetch ({ store, params }) {
    await store.dispatch('products/loadSingle', params.id)
  },
  computed: mapGetters({
    isCanAdd: 'favorites/isCanAdd',
    product: 'products/product'
  }),
  methods: mapActions({
    onAddToFavorites: 'favorites/add',
    onRemoveFromFavorites: 'favorites/remove'
  })
}
</script>

<style scoped>
  .mp-wrapper-img{
    width: 37%;
  }

 .mp-wrapper-img img{
  width: 100%;
   /*border-radius: 10px;*/
}

  .mp-wrapper-img{
    width: 100%;
  }

  .mp-test{
    background-color: white;
    padding: 10px;
    /*border-radius: 15px;*/
  }
  .mp-background{
    padding: 20px;
    position: relative;
  }

  .mp-background::before{
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    content: "";
    background: url('../assets/img/backfood4.jpg');
    z-index: -1;
    opacity: 0.4;
  }

  @media (max-width: 767px){
    .mp-wrapper-img{
      width: 100%;
    }

    .mp-test {
      width: 100%;
    }

    .mp-description{
      /*font-size: 14px;*/
      font-size: 1rem;
    }

    .mp-btn{
      font-size: 1rem;
    }
  }
@media (min-width: 768px) {
  .mp-wrapper-img{
    width: 37%;
  }

  .mp-test {
    width: 56%;
  }

}
  /*@media (min-width: 900px){*/
    /*.mp-wrapper-img{*/
      /*width: 35%;*/
    /*}*/
    /*.mp-test {*/
      /*width: 50%;*/
    /*}*/
  /*}*/
</style>
