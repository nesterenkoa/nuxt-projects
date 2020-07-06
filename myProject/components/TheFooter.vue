<template>
  <div>
 <FooterSocialIcons />
  <Footer-contacts />
  </div>
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

</style>
