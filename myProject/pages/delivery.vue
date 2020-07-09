<template>
  <div class="mb-5">
    <h1>
      Delivery
    </h1>

    <div class="mp-wrapper mb-4">
      <img  class="mp-banner" src="../assets/img/2153.jpg" alt="promo-Ddelivery">
    </div>

     <div class="d-flex align-items-md-center mb-4 mp-wrapper">
       <img  class="mp-img-services" src="../assets/img/12b0a0e8249323e2f98f69bb192ffa0e.jpg">

         <div>
             <h2 class="mb-3 mp-info-heading">Служба доставки сети «yuk» – это:</h2>

             <ul class="mp-list-delivery-services">
               <li class="styles-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, tempora.</li>
               <li class="styles-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, dolore ex iste libero odio repellendus vitae voluptate.</li>
               <li class="styles-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium facere magnam maiores minus nam nesciunt quidem quisquam temporibus voluptates voluptatibus?</li>
              <li class="styles-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci at consectetur consequuntur hic in minus neque nobis obcaecati sed similique, voluptatum?</li>
              <li class="styles-text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis illum natus voluptate.</li>
             </ul>
         </div>
     </div>

    <div class="d-flex flex-column align-items-center flex-lg-row justify-content-lg-between mb-4 mp-wrapper">
      <div class="order-2 mp-info ">
        <h2 class=" mb-3 mp-info-heading">Система оплаты и доставки</h2>

        <div>
          <p class="styles-text mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto beatae consectetur cumque doloremque
            dolorum eligendi enim, explicabo, facere harum maxime nemo, quam temporibus! Assumenda, corporis, cum debitis inventore
          </p>

          <img  class="mb-3 mp-img-cart" src="../assets/img/all_line.gif">

            <p class="styles-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at aut dignissimos
              expedita iure modi mollitia recusandae reiciendis sunt voluptas.
            </p>
        </div>
      </div>
      <img class="order-1 order-lg-2 mb-3 mb-lg-0 mp-img-delivery" src="../assets/img/v873batch4-aum-22.jpg">
    </div>

      <div class="d-flex  align-items-center mp-wrapper">
        <img  class="mp-img-time" src="../assets/img/caja-paquete-volador-alas_8580-86.jpg">

        <div  class="mp-width">
          <h2 class="mb-3 mp-info-heading">Time</h2>

          <p class="styles-text">
            Доставка еды происходит:
            <p>- вс - чт с 10:00 до 22:00</p>
            <p>- пт - сб с 10:00 до 2:00</p>
          </p>
        </div>
    </div>

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

  .mp-info-heading{
    font-size: 20px;
    color: #862a5c;
    text-align: center;
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

  .styles-text{
    color: #007892;
    font-size: 17px;
  }
.mp-img-time{
  width: 35%;
  transform: rotate(35deg);
  border-radius: 50%;
  margin-right: 15%;
}

.mp-width{
  width: 50%;
}
  @media (min-width:920px) {
    .mp-img-services {
      display: block;
    }
    .mp-width{
      width: 25%;
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
