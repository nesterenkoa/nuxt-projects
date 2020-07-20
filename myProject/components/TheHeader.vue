<template>
  <div class="sticky-top">
    <nav class="navbar navbar-expand-lg mp-bg-nav ">
      <div class="container d-flex flex-column justify-content-start flex-lg-row  justify-content-lg-between">
        <div class="d-flex flex-row justify-content-between mp-wrapper">
          <nuxt-link :to="{name: 'home', params:{ lang } }" class="navbar-brand mp-logo">
            aVocado
          </nuxt-link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
        </div>

        <div id="navbarNav" class="collapse navbar-collapse mp-navbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <nuxt-link class="nav-link mp-nav" :to="{ name: 'home', params: { lang } }">
                {{ $t('nav.home') }}<span class="sr-only">(current)</span>
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link mp-nav" :to="{ name: 'products', params: { lang } }">
                {{ $t('nav.products') }}{{ `lang is ${lang}` }}
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link mp-nav" :to="{ name: 'delivery', params: { lang } }">
                {{ $t('nav.delivery') }}
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link mp-nav" :to="{ name: 'about', params: { lang } }">
                {{ $t('nav.abous') }}
              </nuxt-link>
            </li>
          </ul>
        </div>

        <div class="d-flex  flex-column align-items-center flex-lg-row justify-content-lg-between  mp-width">
          <SearchProducts />
          <ShoppingCart />
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SearchProducts from '../components/SearchProducts'
import ShoppingCart from '../components/ShoppingCart'
export default {
  name: 'TheHeader',
  components: {
    SearchProducts,
    ShoppingCart
  },
  computed: mapGetters({
    lang: 'localization/locale'
  })
}
</script>

<style scoped>
  .mp-bg-nav {
    background: #d7fffd;
  }

  .mp-wrapper{
    width: 100%;
  }

  .mp-width{
    width: 100%;
  }

  .mp-logo {
    color: white;
    text-shadow: 0 1px 3px rgba(21, 206, 193, 0.96);
    font-size: 30px;
  }

  .mp-navbar{
    flex-grow:0;
  }

  .mp-logo:hover {
    color: white;
  }

  .mp-nav,
  .mp-nav:after,
  .mp-nav:hover:after{
    transition: all .5s;
  }

  .mp-nav{
    color: #36C2CF;
    position: relative;
  }

  .mp-nav:after{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 0;
    content: '';
    background: yellow;
    height: 1px;
  }

  .mp-nav:hover:after {
    width: 100%;
  }

  .mp-nav:hover {
    transition: all .5s;
    color: #41cdc5;
  }
  @media (min-width: 992px){
    .mp-wrapper{
      width: auto;
    }
    .mp-width{
      width: 55%;
    }
  }
</style>
