<template>
  <div class="container d-flex flex-sm-row flex-column justify-content-between align-items-center mp-background">
    <div class="mp-wrapper-img">
      <div :class="{ mpIconNew: product.new }">
        <img :src="product.img" :alt="product.alt">
      </div>
    </div>

    <div class="mp-wrapper d-flex flex-column">
      <div class="d-flex justify-content-between align-items-center mp-margin-bt">
        <h4 class="mp-title">
          {{ product.title }}
        </h4>
        <p class="mp-price">
          <i class="fa fa-tags" aria-hidden="true" />
          {{ product.price }}
        </p>
      </div>
      <p class="mp-description mb-2">
        <i class="fa fa-cutlery" aria-hidden="true" />
        {{ product.description }}
      </p>
      <button v-if="isCanAdd(product.id)" class="mp-btn mp-btn-order" @click.prevent="onAddToFavorites(product)">
        <i class="fa fa-cart-plus" aria-hidden="true" />
        Add to cart
      </button>
      <button v-else class="mp-btn mp-btn-remove" @click.prevent="onRemoveFromFavorites(product)">
        <i class="fa fa-shopping-cart" aria-hidden="true" />
        Remove from cart
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ProductDetails',
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
}

  .mp-wrapper-img{
    width: 100%;
  }

  .mpIconNew{
    width: 100%;
    height: auto;
    position: relative;
  }
  .mpIconNew:after{
    content: '';
    position: absolute;
    width: 17%;
    height: 35%;
    top: 5px;
    left: 5px;
    background: url("../assets/img/new.svg")no-repeat;
  }
  .mp-wrapper{
    background-color: white;
    padding: 10px;
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

    .mp-wrapper {
      width: 100%;
    }
    .mp-description{
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

  .mp-wrapper {
    width: 56%;
  }

}
</style>
