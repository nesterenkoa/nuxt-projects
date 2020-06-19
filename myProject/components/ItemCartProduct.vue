<template>
  <div class="d-flex flex-row justify-content-around  align-items-center mb-3 mp-wrapper-cart">
    <img :src="favorit.img" :alt="favorit.alt" class="mp-favorit-img">

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

      <p class="mp-description">
        <i class="fa fa-cutlery" aria-hidden="true" />
        {{ favorit.description }}
      </p>
      <button class="mp-btn mp-btn-remove" @click.prevent="onRemoveFromFavorites(favorit)">
        <i class="fa fa-shopping-cart" aria-hidden="true" />
        Remove from favorites
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ItemCartProduct',
  props: {
    favorit: {
      type: Object,
      required: true
    }
  },
  methods: mapActions({
    onRemoveFromFavorites: 'favorites/remove'
  })
}
</script>

<style scoped>
  .mp-wrapper-cart{
    box-shadow: -2px 6px 10px 0 rgba(0, 0, 0, 0.46);
    padding: 15px;
  }
  .mp-info{
    width: 70%;
  }
.mp-favorit-img{
  height: 16vw;
  object-fit: contain;
}

</style>
