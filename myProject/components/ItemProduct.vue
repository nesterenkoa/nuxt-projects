<template>
  <div class="col-lg-4 col-md-6 col-sm-12">
    <nuxt-link
      class="mp-link-styles"
      :to="{ name: 'product-details', params: { id: product.id } }"
    >
      <div class="mp-gallery-item">
        <div :class="{ mpIconNew: product.new }">
          <img :src="product.img" :alt="product.alt">
        </div>
        <div class="d-flex flex-column justify-content-between">
          <div class="d-flex justify-content-between align-items-center">
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
            {{ product.previewText }}
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
    </nuxt-link>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'ItemProduct',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: mapGetters({
    isCanAdd: 'favorites/isCanAdd'
  }),
  methods: mapActions({
    onAddToFavorites: 'favorites/add',
    onRemoveFromFavorites: 'favorites/remove'
  })
}
</script>

<style scoped>
  .mp-link-styles{
    text-decoration: none;
  }

  .mp-gallery-item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    padding: 15px;
    box-sizing: border-box;
    box-shadow: -2px 6px 10px 0 rgba(0, 0, 0, 0.46);
    /*position: relative;*/
    margin-bottom: 10%;
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
  /*.mpIconNew:before{*/
    /*content: "";*/
    /*position: absolute;*/
    /*top: 0.8em;*/
    /*left: 1em;*/
    /*width: 10%;*/
    /*height: 15%;*/
    /*background: linear-gradient(to left, rgba(255,255,255,.0), rgba(255,255,255,.8), rgba(255,255,255,.0)) no-repeat -2em 0%;*/
    /*background-size: 2em 100%;*/
    /*z-index: 7;*/
    /*transition: 2s linear;*/
    /*background-position: 0 20%;*/
    /*animation: timing;*/
  /*}*/
  .row .mp-gallery-item:last-child {
    margin-right: 0;
  }

  .mp-gallery-item img {
    display: block;
    width: 100%;
    max-height: 35vw;
    object-fit: cover;
    margin-bottom: 10px;
  }
</style>
