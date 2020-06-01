<template>
  <div class="mp-wrapper-slider">
    <b-carousel
      id="carousel-animation"
      style="text-shadow: 0px 0px 2px #000"
      fade
      indicators
      img-width="1024"
      img-height="480"
    >
      <b-carousel-slide
        caption="First slide"
        img-src="../assets/slide-3.jpg"
      />

      <b-carousel-slide
        caption="Second Slide"
        img-src="../assets/slide-14.jpg"
      />
      <b-carousel-slide
        caption="Third Slide"
        img-src="../assets/slide-6.jpg"
      />
      <b-carousel-slide
        caption="Fourth Slide"
        img-src="../assets/slide-10.jpg"
      />
    </b-carousel>
  </div>
  <!--<b-carousel-->
  <!--id="carousel-no-animation"-->
  <!--style="text-shadow: 0px 0px 2px #000"-->
  <!--no-animation-->
  <!--indicators-->
  <!--img-width="1024"-->
  <!--img-height="480"-->
  <!--&gt;-->
  <!--<b-carousel-slide-->
  <!--v-for="slide in imagesSlider"-->
  <!--:key="slide.image"-->
  <!--:caption="slide.alt"-->
  <!--:mg-src="slide.image"-->
  <!--&gt;</b-carousel-slide>-->

  <!--</b-carousel>-->
  <!--</div>-->
  <!--</div>-->
</template>
<script>
export default {
  name: 'Slider'
  // data: () => ({
  //   imagesSlider: [
  //     {
  //       image: require('../assets/slide-2.jpg'),
  //       alt: 'Second slide'
  //     },
  //     {
  //       image: require('../assets/slide-3.jpg'),
  //       alt: 'Trird slide'
  //     },
  //     {
  //       image: require('../assets/slide-4.jpg'),
  //       alt: 'Fourth slide'
  //     },
  //     {
  //       image: require('../assets/slide-5.jpg'),
  //       alt: 'Fifth slide'
  //     }
  //   ]
  // })
}
// </script>

<style scoped>
  .mp-wrapper-slider{
    width: 86%;
    margin: 0 auto;
  }

</style>
