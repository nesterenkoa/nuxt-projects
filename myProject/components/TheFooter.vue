<template>
  <footer class="mp-footer">
    <FooterSocialIcons />
    <Footer-contacts />
  </footer>
</template>

<script>
import FooterSocialIcons from '../components/FooterSocialIcons'
import FooterContacts from '../components/FooterContacts'

export default {
  name: 'TheFooter',
  components: {
    FooterSocialIcons,
    FooterContacts
  }
}
</script>

<style scoped>
/*.mp-footer{*/
  /*margin-top: 70px;*/
/*}*/
</style>
