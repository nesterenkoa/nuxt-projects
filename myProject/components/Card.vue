<template>

  <div class="container">
    <div class="row">

       <nuxt-link v-for="product of products" :key="product.image" class="col-lg-4 col-md-6 col-sm-12 mp-link-styles" to="#">
         <div class="mp-gallery-item">
           <img :src ="product.image"  :alt="product.alt">

           <div class= "mp-test">
             <div class="d-flex justify-content-between align-items-center mp-margin-bt">
               <h4 class="mp-title">{{product.title}}</h4>
               <p class="mp-price">{{product.price}}</p>
             </div>
             <p class="mp-description">{{product.description}}</p>

             <button class="mp-btn mp-btn-order">Order</button>
           </div>
         </div>
       </nuxt-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'card',
  data: () => ({
    products: [
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
      },
      {
        image: require('../assets/img-5.jpg'),
        alt: 'img-5',
        title: 'Item - 5',
        description: 'Totam rem aperiam, eaque ipsa quae ab illo inventore  et quasi architecto beata.',
        price: 650,
        id: 5
      },
      {
        image: require('../assets/img-6.jpg'),
        alt: 'img-6',
        title: 'Item - 6',
        description: 'But I must explain to you how all this mistaken idea of raising pain was born and I will ',
        price: 950,
        id: 6
      },
      {
        image: require('../assets/img-7.jpg'),
        alt: 'img-7',
        title: 'Item - 7',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempom',
        price: 950,
        id: 7
      },
      {
        image: require('../assets/img-8.jpg'),
        alt: 'img-8',
        title: 'Item - 8',
        description: 'Totam rem aperiam, eaque ipsa ventore veritatis eitecto beatae vitae dicta sunt explicabo.',
        price: 80,
        id: 8
      },
      {
        image: require('../assets/img-9.jpg'),
        alt: 'img-9',
        title: 'Item - 9',
        description: 'But I must explain to you how all this mistaken idea of decing pleas in was born and I will ',
        price: 950,
        id: 9
      },
      {
        image: require('../assets/img-10.jpg'),
        alt: 'img-10',
        title: 'Item - 10',
        description: 'Lorem ipsum.Atusamus quoset quas molestias eri sint  sit amet, adipiscing eli od tempom',
        price: 950,
        id: 10
      },
      {
        image: require('../assets/img-11.jpg'),
        alt: 'img-11',
        title: 'Item - 11',
        description: 'Totam rem aperiam, eaque ipsa quae ab  veritatisitecto beatae vitae dicta ',
        price: 950,
        id: 11
      },
      {
        image: require('../assets/img-12.jpg'),
        alt: 'img-12',
        title: 'Item - 12',
        description: 'But I must explain to you how all this mdenounciure and praising pain was born and I will ',
        price: 950,
        id: 12
      },
      {
        image: require('../assets/img-13.jpg'),
        alt: 'img-13',
        title: 'Item - 9',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempom',
        price: 950,
        id: 13
      },
      {
        image: require('../assets/img-14.jpg'),
        alt: 'img-14',
        title: 'Item - 14',
        description: 'At vero aque iquae ab illo inventore veritatis uasi architecto beatae vitae dicta sunt explicabo.',
        price: 950,
        id: 14
      },
      {
        image: require('../assets/img-15.jpg'),
        alt: 'img-15',
        title: 'Item - 15',
        description: 'But I must explain to you how all this mistaken idea of denouncing pleasure',
        price: 950,
        id: 15
      },
      {
        image: require('../assets/img-16.jpg'),
        alt: 'img-16',
        title: 'Item - 16',
        description: 'Dolores et quas molestias excepturi sint consecteturg elit, sed do eiusmod tempom sasads',
        price: 950,
        id: 16
      },
      {
        image: require('../assets/img-17.jpg'),
        alt: 'img-17',
        title: 'Item - 17',
        description: 'Totam rem aperiam, eaque ipsa quae ab il veritatis et quasi architecto beatae vitae dicta',
        price: 950,
        id: 17
      },
      {
        image: require('../assets/img-18.jpg'),
        alt: 'img-18',
        title: 'Item - 18',
        description: 'But I must explain to you how alls mistaken idea of denouncing pleasure and  born and I will ',
        price: 950,
        id: 18
      },
      {
        image: require('../assets/img-19.jpg'),
        alt: 'img-19',
        title: 'Item - 19',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempom sasads',
        price: 950,
        id: 19
      },
      {
        image: require('../assets/img-20.jpg'),
        alt: 'img-20',
        title: 'Item - 20',
        description: 'At vero eos etatum deleniti atque dlestias excepturi sint  beatae vitae dicta sunt explicabo.',
        price: 950,
        id: 20
      }
    ]
  })
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
