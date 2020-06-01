<template>
  <div>
    <form class="mb-3">
      <input v-model="q" type="search" class="form-control mp-search" placeholder="Type to search...">
    </form>

    <div class="row">
      <CardProduct v-for="product of products" :key="product.id" :product="product" class="col-lg-4 col-md-6 col-sm-12 mp-link-styles" />
    </div>
  </div>
</template>

<script>
import CardProduct from '../components/CardProduct'

export default {
  name: 'Products',
  components: { CardProduct },
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
        price: 180,
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
        price: 910,
        id: 6
      },
      {
        image: require('../assets/img-7.jpg'),
        alt: 'img-7',
        title: 'Item - 7',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempom',
        price: 750,
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
        price: 150,
        id: 9
      },
      {
        image: require('../assets/img-10.jpg'),
        alt: 'img-10',
        title: 'Item - 10',
        description: 'Lorem ipsum.Atusamus quoset quas molestias eri sint  sit amet, adipiscing eli od tempom',
        price: 540,
        id: 10
      },
      {
        image: require('../assets/img-11.jpg'),
        alt: 'img-11',
        title: 'Item - 11',
        description: 'Totam rem aperiam, eaque ipsa quae ab  veritatisitecto beatae vitae dicta ',
        price: 876,
        id: 11
      },
      {
        image: require('../assets/img-12.jpg'),
        alt: 'img-12',
        title: 'Item - 12',
        description: 'But I must explain to you how all this mdenounciure and praising pain was born and I will ',
        price: 543,
        id: 12
      },
      {
        image: require('../assets/img-13.jpg'),
        alt: 'img-13',
        title: 'Item - 9',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempom',
        price: 130,
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
        price: 450,
        id: 15
      },
      {
        image: require('../assets/img-16.jpg'),
        alt: 'img-16',
        title: 'Item - 16',
        description: 'Dolores et quas molestias excepturi sint consecteturg elit, sed do eiusmod tempom sasads',
        price: 119,
        id: 16
      },
      {
        image: require('../assets/img-17.jpg'),
        alt: 'img-17',
        title: 'Item - 17',
        description: 'Totam rem aperiam, eaque ipsa quae ab il veritatis et quasi architecto beatae vitae dicta',
        price: 760,
        id: 17
      },
      {
        image: require('../assets/img-18.jpg'),
        alt: 'img-18',
        title: 'Item - 18',
        description: 'But I must explain to you how alls mistaken idea of denouncing pleasure and  born and I will ',
        price: 450,
        id: 18
      },
      {
        image: require('../assets/img-19.jpg'),
        alt: 'img-19',
        title: 'Item - 19',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempom sasads',
        price: 230,
        id: 19
      },
      {
        image: require('../assets/img-20.jpg'),
        alt: 'img-20',
        title: 'Item - 20',
        description: 'At vero eos etatum deleniti atque dlestias excepturi sint  beatae vitae dicta sunt explicabo.',
        price: 120,
        id: 20
      }
    ]
  })
}
</script>

<style scoped>
/*.mp-search{*/

/*}*/
</style>
