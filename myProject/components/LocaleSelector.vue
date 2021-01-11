<template>
  <b-dropdown id="locale-selector" :text="locale" class="m-md-2">
    <b-dropdown-item v-for="locale of locales" :key="locale" class="mp-locale-selector" @click.prevent="changeLanguage(locale)">
      {{ locale }}
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'LocaleSelector',
  computed: mapGetters({
    locale: 'localization/locale',
    locales: 'localization/locales'
  }),
  methods: {
    changeLanguage (locale) {
      const regExp = new RegExp(`^/${this.locale}/?`)
      const path = this.$nuxt.$route.path.replace(regExp, '/')
      if (this.$nuxt.$route.path !== `/${locale}${path}`) {
        this.$router.push(`/${locale}${path}`)
      }
    }
  }
}
</script>

<style scoped>
/*.btn-secondary{*/
    /*background-color: orange !important;*/
  /*}*/

</style>
