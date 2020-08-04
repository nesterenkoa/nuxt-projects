<template>
  <div class="mb-5">
    <h3 class="heading">
      Novelty
    </h3>
    <span class="wrapper-divider" />

    <div class="row d-flex flex-column flex-md-row justify-content-md-between">
      <nuxt-link v-for="product of newItems" :key="product.id" class=" d-flex justify-content-center align-items-center mb-4 col-sm-12 col-md-4  mp-link-styles" :to="{ name: 'product-details', params: { id: product.id } }">
        <div class="mp-wrapper-img mr-4 mr-md-2 mr-lg-4">
          <!--<div class="mp-icon-new"> <i class="fa fa-tags" aria-hidden="true" /></div>-->
          <img :src="product.img" :alt="product.alt">
        </div>

        <div class="mp-info-product">
          <div class="d-flex justify-content-between align-items-center mb-3 flex-md-column align-items-md-start">
            <h4 class="mp-title mb-md-2">
              {{ product.title }}
            </h4>
            <span class="mp-price">
              <i class="fa fa-tags" aria-hidden="true" />
              {{ product.price }}
            </span>
          </div>
          <p class="mp-newProducts-description">
            {{ product.previewText.substr(0,60) + '...' }}
          </p>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'NewItemsProducts',
  computed: {
    ...mapGetters({
      newItems: 'products/newItems'
    })
  },
  created () {
    console.log('Created', { newItems: this.newItems, products: this.products })
  },
  updated () {
    console.log('Updated', { newItems: this.newItems, products: this.products })
  }
}
</script>

<style scoped>
  .wrapper-divider{
    background:url('../assets/img/new-heading.svg');
  }

  .mp-wrapper-img{
    width: 40vw;
    position: relative;
  }

  .mp-wrapper-img img {
    display: block;
    width: 100%;
    border-top-right-radius: 20px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 0;
  }
  .mp-wrapper-img:after{
    content: '';
    position: absolute;
    width: 25%;
    height: 19%;
    top: 5px;
    left: 5px;
    /*transform: translate(50%);*/
    background: url("../assets/img/new.svg")no-repeat;
  }

  .mp-info-product{
    border: 2px dashed pink;
    border-radius: 20px;
    padding: 10px;
  }
  .mp-title{
    font-size:16px ;
  }

.mp-newProducts-description{
  width: 100%;
  font-size: 12px;
  color: #7f828b;
  margin: 0;
}
.mp-link-styles{
    text-decoration: none;
  }
.mp-link-styles:last-child{
  margin-bottom: 0 !important;
}
.mp-price{
  padding: 2px;
  font-size: 12px;
}
  @media (min-width: 310px ) and (max-width: 450px) {
    .mp-wrapper-img{
      width: 80vw;
    }
  }
  @media (min-width: 768px ) {
    .mp-wrapper-img {
      width: 50vw;
    }

    .mp-info-product {
      border: none;
      padding: 0;
    }

  }
  @media (min-width:1000px ){
    .mp-title{
      font-size:24px ;
    }

    .mp-newProducts-description {
      font-size: 16px;
    }
  }

</style>
