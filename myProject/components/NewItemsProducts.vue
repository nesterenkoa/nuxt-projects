<template>
  <div class="">
    <h3 class="mp-heading">
      Новинки
    </h3>
    <div class="row">
      <nuxt-link v-for="item of newItems" :key="item.id" class="col-lg-4 col-md-6 col-sm-12 mp-link-styles" to="#">
        <div class="mp-gallery-item">
          <img :src="item.image" :alt="item.alt">

          <div class="mp-test">
            <div class="d-flex justify-content-between align-items-center mp-margin-bt">
              <h4 class="mp-title">
                {{ item.title }}
              </h4>
              <p class="mp-price">
                {{ item.price }}
              </p>
            </div>
            <p class="mp-description">
              {{ item.description }}
            </p>

            <button class="mp-btn mp-btn-order">
              Order
            </button>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewItemsProducts',
  data: () => ({
    newItems: [
      {
        image: require('../assets/img-1.jpg'),
        alt: 'img-1',
        title: 'Item - 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempom',
        price: 250,
        id: 1
      },
      {
        image: require('../assets/img-2.jpg'),
        alt: 'img-2',
        title: 'Item - 2',
        description: 'Totam rem aperiam, eaque ipsa quae ab illo inventore i  beatae vitae dicta sunt explicabo.',
        price: 270,
        id: 2
      },
      {
        image: require('../assets/img-3.jpg'),
        alt: 'img-3',
        title: 'Item - 3',
        description: 'But et iust ducimus qui blanditiis  deleniti atque  quos dolorese a pain was born and I will ',
        price: 340,
        id: 3
      },
      {
        image: require('../assets/img-4.jpg'),
        alt: 'img-4',
        title: 'Item - 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempom',
        price: 650,
        id: 4
      }]
  })
}
</script>

<style scoped>
  .mp-heading{
    text-align: center;
  }
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
