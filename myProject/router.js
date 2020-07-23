import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages'
import About from './pages/about'
import Products from './pages/products'
import Delivery from './pages/delivery'
import ProductDetails from './pages/productDetails'
import Cart from './pages/cart'
import Form from './pages/form'
Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        name: 'about',
        path: '/:lang?/about',
        component: About,
        meta: {
          breadcrumb: [
            { text: 'home', to: { name: 'home' } },
            { text: 'about', active: true }
          ]
        }
      },
      {
        name: 'products',
        path: '/:lang?/products',
        component: Products,
        meta: {
          breadcrumb: [
            { text: 'home', to: { name: 'home' } },
            { text: 'products', active: true }
          ]
        }
      },
      {
        name: 'product-details',
        path: '/:lang?/product/:id',
        component: ProductDetails,
        meta: {
          breadcrumb: [
            { text: 'home', to: { name: ' home' } },
            { text: 'products', to: { name: 'products' } },
            { text: 'product-details', active: true }
          ]
        }
      },
      {
        name: 'delivery',
        path: '/:lang?/delivery',
        component: Delivery,
        meta: {
          breadcrumb: [
            { text: 'home', to: { name: 'home' } },
            { text: 'delivery', active: true }
          ]
        }
      },
      {
        name: 'cart',
        path: '/:lang?/cart',
        component: Cart,
        meta: {
          breadcrumb: [
            { text: 'home', to: { name: 'home' } },
            { text: 'cart', active: true }
          ]
        }
      },
      {
        name: 'form',
        path: '/:lang?/form',
        component: Form,
        meta: {
          breadcrumb: [
            { text: 'home', to: { name: 'home' } },
            { text: 'cart', to: { name: 'cart' } },
            { text: 'form', active: true }
          ]
        }
      },
      {
        name: 'home',
        path: '/:lang?/home',
        component: Home,
        meta: {
          breadcrumb: [
            { text: 'home', active: true }
          ]
        }
      },
      {
        name: 'home',
        path: '/:lang?',
        component: Home,
        meta: {
          breadcrumb: [
            { text: 'home', active: true }
          ]
        }
      }
    ]
  })
}
