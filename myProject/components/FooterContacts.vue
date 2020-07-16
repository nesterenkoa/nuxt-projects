<template>
  <div class="mp-footer-bg">
    <div class="container d-flex flex-column flex-sm-row justify-content-between align-items-center">
      <p class="mp-delivery-hours mb-1 mb-sm-0 mp-bg">
        <i class="fa fa-clock-o" aria-hidden="true" />
        Доставка с 10-00 до 23-00
      </p>

      <div class="d-flex flex-column mp-bg">
        <a class="mp-contact-tel mb-1" href="tel:+380123456789" title="клацните cюда,чтобы позвонить нам ;)">
          <i class="fa fa-mobile" aria-hidden="true" />
          +380123456789
        </a>

        <a class="mp-contact-tel" href="tel:+380123456789" title="клацните cюда,чтобы позвонить нам ;)">
          <i class="fa fa-mobile" aria-hidden="true" />
          +380987654321
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterContacts'
}
</script>

<style scoped>
.mp-footer-bg{
  background: url("../assets/img/good6.jpg");
  padding: 20px 0;
}
 .mp-bg{
  background: #85cbc9;
}
  .mp-delivery-hours{
    color: white;
    font-size: 19px;
  }
  .mp-contact-tel{
    color: yellow;
  }
  .mp-contact-tel:hover{
    text-decoration: none;
  }
</style>
