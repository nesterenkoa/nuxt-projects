<template>
  <div class="mp-wrapper-slider">
    <h3 class="heading">
      Hot deals
    </h3>
    <span class="wrapper-divider" />
    <b-carousel
      id="carousel-animation"
      style="text-shadow: 0px 0px 2px #000"
      fade
      indicators
      img-width="1024"
      img-height="480"
    >
      <b-carousel-slide
        v-for="img of imagesSlider"
        :key="img.src"
        :caption="img.alt"
        :img-src="img.src"
        class="mp-img-slider"
      />
    </b-carousel>
  </div>
</template>
<script>
export default {
  name: 'Slider',
  data: () => ({
    imagesSlider: [
      {
        src: require('../assets/img/slide-9.jpg'),
        alt: 'First slide'
      },
      {
        src: require('../assets/img/slide-2.jpg'),
        alt: 'Second slide'
      },
      {
        src: require('../assets/img/slide-3.jpg'),
        alt: 'Trird slide'
      },
      {
        src: require('../assets/img/slide-4.jpg'),
        alt: 'Fourth slide'
      },
      {
        src: require('../assets/img/slide-14.jpg'),
        alt: 'Fifth slide'
      }
    ]
  })
}
</script>

<style scoped>
  .wrapper-divider {
    background: url('../assets/img/discount.svg');
  }

  .wrapper-divider:before{
    bottom: 32%;
  }
  .wrapper-divider:after{
    bottom: 32%;
  }
</style>
