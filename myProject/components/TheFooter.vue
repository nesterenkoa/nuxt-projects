<template>
  <footer class="mp-footer">
    <FooterSocialIcons />
    <Footer-contacts />
    <LocaleSelector />
  </footer>
</template>

<script>
import FooterSocialIcons from '../components/FooterSocialIcons'
import FooterContacts from '../components/FooterContacts'
import LocaleSelector from './LocaleSelector'

export default {
  name: 'TheFooter',
  components: {
    FooterSocialIcons,
    FooterContacts,
    LocaleSelector
  }
}
</script>

<style scoped>
.mp-footer{
  margin-top: 70px;
}
</style>
