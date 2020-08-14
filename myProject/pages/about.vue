<template>
  <div class="container">
    <h1 class="heading">
      Немного о нас
    </h1>
    <span class="wrapper-divider" />
    <div class="d-flex flex-column justify-content-center  flex-lg-row align-items-center mb-4">
      <div class="mb-4 mb-lg-0 mr-lg-4">
        <h2 class="mb-3 mp-info-heading">
          Наша философия
        </h2>
        <p class="mp-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cum doloremque doloribus itaque, iusto pariatur ratione.
          Accusamus consequatur cumque dolorum inventore maiores nisi odio quo reprehenderit unde! Earum, quos, ratione.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet aut, cum, dicta eaque eius esse eveniet nam nostrum perspiciatis
          porro quas qui recusandae repudiandae similique soluta ut vitae voluptatem.
        </p>
      </div>
      <img class="mp-img-philosophy" src="../assets/img/3524968.jpg">
    </div>

    <div class="d-flex  flex-column justify-content-center align-items-center flex-lg-row justify-content-lg-between mb-4">
      <img class="order-2  order-lg-1 mr-lg-5 mp-img-orange" src="../assets/img/353ba741fb3ed895b6f7ce4672fd9a5c.jpg">
      <div class="order-1 order-lg-2 mb-4 mb-lg-0">
        <h2 class="mb-3 mp-info-heading">
          Lorem ipsum.
        </h2>
        <p class="mp-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cum doloremque doloribus itaque, iusto pariatur ratione.
          Accusamus consequatur cumque dolorum inventore maiores nisi odio quo reprehenderit unde! Earum, quos, ratione.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet aut, cum, dicta eaque eius esse eveniet nam nostrum perspiciatis
          porro quas qui recusandae repudiandae similique soluta ut vitae voluptatem.
        </p>
      </div>
    </div>

    <div class="d-flex flex-column justify-content-center  flex-lg-row justify-content-lg-between align-items-center mb-4">
      <div class="mb-4 mb-lg-0 mr-lg-4">
        <h2 class="mb-3 mp-info-heading">
          Lorem ipsum dolor sit.
        </h2>
        <p class="mp-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cum doloremque doloribus itaque, iusto pariatur ratione.
          Accusamus consequatur cumque dolorum inventore maiores nisi odio quo reprehenderit unde! Earum, quos, ratione.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet aut, cum, dicta eaque eius esse eveniet nam nostrum perspiciatis
          porro quas qui recusandae repudiandae similique soluta ut vitae voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet, beatae
          laboriosam mollitia nihil nisi nulla officiis provident quae ullam.
        </p>
      </div>
      <img class="mp-img-order" src="../assets/img/v873batch3-04_1.jpg">
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
  .wrapper-divider{
    background:url('../assets/img/bakery.svg');
  }
  .mp-img-philosophy {
    width: 100%;
  }
  .mp-img-orange{
    width: 50vw;
    border-radius: 50%;
  }
  .mp-img-order{
    border-radius: 20px;
    width: 60%;
    object-fit: cover;
  }
  .mp-description {
    font-size: 1rem;
    letter-spacing: 1px;
  }
  @media (min-width:920px) {
    .mp-description {
      font-size: 1.1rem;
    }
  }
  @media (min-width: 992px) {
    .mp-img-philosophy{
      width: 55%;
    }
    .mp-img-order{
      width: 32%;
    }
  }
</style>
