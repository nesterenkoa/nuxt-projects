<template>
  <div class="sticky-top">
    <b-navbar toggleable="lg" class="mp-bg-nav">
      <div class="container d-flex flex-column justify-content-start flex-lg-row justify-content-lg-between align-items-center">
        <div class="d-flex flex-row justify-content-between mp-wrapper">
          <nuxt-link :to="{name: 'home', params:{ lang } }" class="mp-logo mr-4">
            aVocado
          </nuxt-link>
          <div>
            <b-navbar-toggle target="nav-collapse" class="mr-1 border-0" />
            <LocaleSelector class="d-lg-none mp-locale-selector" />
          </div>
        </div>

        <b-collapse id="nav-collapse" is-nav>
          <ul class="navbar-nav mb-4 mb-lg-0">
            <li class="nav-item">
              <nuxt-link class="nav-link mp-nav" exact active-class="active" :to="{ name: 'home', params: { lang } }">
                {{ $t('nav.home') }}<span class="sr-only">(current)</span>
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link mp-nav" active-class="active" :to="{ name: 'products', params: { lang } }">
                {{ $t('nav.products') }}
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link mp-nav active" :to="{ name: 'delivery', params: { lang } }">
                {{ $t('nav.delivery') }}
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link mp-nav" active-class="active" :to="{ name: 'about', params: { lang } }">
                {{ $t('nav.abous') }}
              </nuxt-link>
            </li>
          </ul>
        </b-collapse>

        <div class="d-flex  flex-column align-items-center flex-lg-row justify-content-lg-between  mp-width">
          <SearchProducts />
          <ShoppingCart />
          <LocaleSelector class="d-none d-lg-block" />
        </div>
      </div>
    </b-navbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SearchProducts from '../components/SearchProducts'
import ShoppingCart from '../components/ShoppingCart'
import LocaleSelector from './LocaleSelector'
export default {
  name: 'TheHeader',
  components: {
    SearchProducts,
    ShoppingCart,
    LocaleSelector
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
    text-decoration: none;

  }

  .mp-logo:hover{
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

  #nav-collapse .mp-nav{
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
    background: pink;
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
      width: 52%;
    }
  }
</style>
