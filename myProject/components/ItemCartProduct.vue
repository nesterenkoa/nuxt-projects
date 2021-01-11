<template>
  <nuxt-link :to="{ name: 'product-details', params: {id: favorit.id } }" class="d-flex  flex-column flex-md-row justify-content-around  align-items-center mb-3 mp-wrapper-cart">
    <img :src="favorit.img" :alt="favorit.alt" class=" mb-3 mb-md-0 mr-md-3 mp-favorit-img">

    <div class="mp-info d-flex flex-column">
      <div class="d-flex justify-content-between align-items-center mp-margin-bt">
        <h4 class="mp-title">
          {{ favorit.title }}
        </h4>
        <p class="mp-price">
          <i class="fa fa-tags" aria-hidden="true" />
          {{ favorit.price }}
        </p>
      </div>

      <p class="mp-description mb-2">
        <i class="fa fa-cutlery" aria-hidden="true" />
        {{ favorit.previewText }}
      </p>
      <button class="mp-btn mp-btn-remove al" @click.prevent="onRemoveFromFavorites(favorit)">
        <i class="fa fa-shopping-cart" aria-hidden="true" />
        Remove from cart
      </button>
    </div>
  </nuxt-link>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ItemCartProduct',
  props: {
    favorit: {
      type: Object,
      required: true
    }
  },
  computed: mapGetters({
    lang: 'localization/locale'
  }),
  methods: mapActions({
    onRemoveFromFavorites: 'favorites/remove'
  })
}
</script>

<style scoped>
  .mp-wrapper-cart{
    box-shadow: -2px 6px 10px 0 rgba(0, 0, 0, 0.46);
    padding: 15px;
    text-decoration: none;
  }
  .mp-info{
    width: 70%;
  }
 .mp-favorit-img{
  height: 46vh;
   position: relative;
}

  @media (max-width: 400px) {
    .mp-info{
      width: 95%;
    }
  }
</style>
