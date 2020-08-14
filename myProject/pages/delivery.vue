<template class="container">
  <div class=" container mb-4">
    <h1 class="heading">
      Delivery
    </h1>
    <span class="wrapper-divider" />
    <div class="mp-wrapper mb-4">
      <img class="mp-banner" src="../assets/img/2153.jpg" alt="promo-Ddelivery">
    </div>

    <div class="d-flex align-items-md-center mb-4 mp-wrapper">
      <img class="mp-img-services" src="../assets/img/12b0a0e8249323e2f98f69bb192ffa0e.jpg">

      <div>
        <h2 class="mb-3 mp-info-heading">
          Служба доставки сети «aVocado» – это:
        </h2>
        <ul class="mp-list-delivery-services">
          <li class="mp-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, tempora.
          </li>
          <li class="mp-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, dolore ex iste libero odio repellendus vitae voluptate.
          </li>
          <li class="mp-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium facere magnam maiores minus nam nesciunt quidem quisquam temporibus voluptates voluptatibus?
          </li>
          <li class="mp-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci at consectetur consequuntur hic in minus neque nobis obcaecati sed similique, voluptatum?
          </li>
          <li class="mp-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis illum natus voluptate.
          </li>
        </ul>
      </div>
    </div>

    <div class="d-flex flex-column align-items-center flex-lg-row justify-content-lg-between mb-5 mp-wrapper">
      <div class="order-2 mp-info ">
        <h2 class=" mb-3 mp-info-heading">
          Система оплаты и доставки
        </h2>

        <div>
          <p class="mp-description mb-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto beatae consectetur cumque doloremque
            dolorum eligendi enim, explicabo, facere harum maxime nemo, quam temporibus! Assumenda, corporis, cum debitis inventore
          </p>

          <img class="mb-3 mp-img-cart" src="../assets/img/all_line.gif">

          <p class="mp-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at aut dignissimos
            expedita iure modi mollitia recusandae reiciendis sunt voluptas.
          </p>
        </div>
      </div>
      <img class="order-1 order-lg-2 mb-3 mb-lg-0 mp-img-delivery" src="../assets/img/v873batch4-aum-22.jpg">
    </div>

    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d164244.53389549567!2d36.18933732707251!3d49.96784138064238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2012d3a9c8ad3d11!2z0JHQvtGC0LDQvdC40YfQtdGB0LrQuNC5INGB0LDQtCDQvdCwINCe0YLQsNC60LDRgNCwINCv0YDQvtGI0LA!5e0!3m2!1sru!2sua!4v1594384964457!5m2!1sru!2sua"
      width="100%"
      height="auto"
      frameborder="0"
      style="border:0;"
      allowfullscreen=""
      aria-hidden="false"
      tabindex="0"
    />
  </div>
</template>

<script>
export default {
  name: 'Delivery'
}
</script>

<style scoped>
  .mp-wrapper{
    width: 100%;
  }

.mp-banner{
  width: 100%;
}
  .mp-img-services{
    display: none;
    width: 30vw;
    border-radius: 20px;
  }

  .wrapper-divider{
    background:url('../assets/img/product.svg');
    background-size: cover;
  }

  .mp-list-delivery-services{
  width: 80%;
  margin: 0 auto;
}

  .mp-list-delivery-services li{
    position: relative;
    margin-bottom: 10px;
  }
  .mp-list-delivery-services li:before{
    position:absolute;
    left: -24px;
    transform: translateX(-50%);
    background: url("../assets/img/motorcycle.svg") no-repeat center ;
    background-size: cover;
    border-radius: 2px;
    content: '';
    width: 26px;
    height: 25px;
  }

  .mp-img-delivery{
    width:74%;
    border-radius: 20px;
  }
  .mp-img-cart{
    display: block;
    max-width: 98%;
    width: auto;
    margin: 0 auto;
  }
  .mp-description {
    font-size: 1rem;
    letter-spacing: 1px;
  }
  @media (min-width:920px) {
    .mp-img-services {
      display: block;
    }
    .mp-description {
      font-size: 1.1rem;
    }
  }
  @media (min-width:990px) {
    .mp-img-delivery {
      width: 45%;
    }
    .mp-info{
      width: 44%;
    }
  }
</style>
