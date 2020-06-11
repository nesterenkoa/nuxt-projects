import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages'
import About from './pages/about'
import Products from './pages/products'
import Delivery from './pages/delivery'
import ProductDetails from './pages/productDetails'
import Cart from './pages/cart'
Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        name: 'about',
        path: '/:lang?/about',
        component: About
      },
      {
        name: 'products',
        path: '/:lang?/products',
        component: Products
      },
      {
        name: 'product-details',
        path: '/:lang?/product/:id',
        component: ProductDetails
      },
      {
        name: 'delivery',
        path: '/:lang?/delivery',
        component: Delivery
      },
      {
        name: 'cart',
        path: '/:lang?/cart',
        component: Cart
      },
      {
        name: 'home',
        path: '/:lang?/home',
        component: Home
      }
    ]
  })
}
