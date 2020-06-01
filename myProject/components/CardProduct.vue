<template>
  <div>
      <nuxt-link class="mp-link-styles" :to="{ name: 'product-details', params: { id: product.id } }">
        <div class="mp-gallery-item">
          <img :src="product.image" :alt="product.alt">

          <div class="mp-test">
            <div class="d-flex justify-content-between align-items-center mp-margin-bt">
              <h4 class="mp-title">
                {{ product.title }}
              </h4>
              <p class="mp-price">
                {{ product.price }}
              </p>
            </div>
            <p class="mp-description">
              {{ product.description }}
            </p>

            <button class="mp-btn mp-btn-order">
              Order
            </button>
          </div>
        </div>
      </nuxt-link>
    </div>
</template>

<script>

export default {
  name: 'CardProduct',
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
  .mp-test{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .mp-link-styles{
    text-decoration: none;
  }

  .mp-gallery-item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /*height: 500px;*/
    padding: 15px;
    box-sizing: border-box;
    box-shadow: -2px 6px 10px 0 rgba(0, 0, 0, 0.46);
    position: relative;
    margin-bottom: 10%;
  }

  .row .mp-gallery-item:last-child {
    margin-right: 0;
  }

  .mp-gallery-item img {
    display: block;
    width: 100%;
    height: 29vw;
    object-fit: cover;
    margin-bottom: 10px;
  }

  .mp-margin-bt {
    margin-bottom: 10px;
  }

  .mp-title {
    color: #862a5c;
  }

  .mp-price {
    padding: 10px;
    margin: 0;
    background: #eca0b6;
    border-radius: 5px;
    color: white;
  }

  .mp-description {
    color: #007892;
    min-height: 75px;
  }

  .mp-btn-order{
    padding: 10px 15px;
    background: #fafba4;
    color: #862a5c;
    align-self: flex-end;
    border-radius: 5px;
    border: transparent;
  }

  .mp-btn-order:hover{
    background: #74d4c0;
    color: white;
  }
</style>
