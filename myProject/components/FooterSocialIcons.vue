<template>
  <div class="mp-footer-bg">
    <ul class="container d-flex justify-content-between mp-center">
      <li>
        <a href="#" title="facebook">
          <i class="fa fa-facebook-square" aria-hidden="true" />
        </a>
      </li>

      <li>
        <a href="#" title="instagram">
          <i class="fa fa-instagram" aria-hidden="true" />
        </a>
      </li>

      <li>
        <a href="#" title="telegram">
          <i class="fa fa-telegram" aria-hidden="true" />
        </a>
      </li>

      <li>
        <a href="#" title="twitter">
          <i class="fa fa-twitter" aria-hidden="true" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FooterSocialIcons'
}
</script>

<style scoped>
.mp-footer-bg{
  background:#bc658d;
  padding: 10px 0;
}
  .mp-center{
    margin: 0 auto;
  }
  .mp-center *{
    color: yellow;
    font-size: 40px;
    padding: 2px;
  }

  .mp-center *:hover{
    color: #74d4c0;
    transition: 0.3s;
  }

  @media (min-width: 768px) {
    .mp-center{
      width: 50%;
    }
  }
</style>
