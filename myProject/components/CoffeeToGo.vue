<template>
  <div>
    <h1 class="heading">
      Coffee to go
    </h1>
    <span class="wrapper-divider" />

    <div class="d-flex flex-column flex-lg-row align-items-center mb-4">
      <p class="mp-description">
        Lorem ipsum dolor sit amet, c
        onsectetur adipisicing elit. Aperiam expedita labore minima quae rem? Accusamus accusantium alias aliquid
        architecto autem commodi consequatur consequuntur debitis dicta ducimus eos est eum eveniet impedit
        ipsum iure magni modi nam natus nobis odio perferendis provident quaerat quas rem sequi, similique tenetur. Doloribus, iure, praesentium.
      </p>

      <div>
        <img class="mp-img" src="../assets/img/5535.jpg" alt="coffe">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CoffeeToGo'
}
</script>

<style scoped>
  .mp-description{
    z-index: 3;
  }

  .mp-img{
  width: 100%;
  margin-top: -7%;
}
  .wrapper-divider{
    background:url('../assets/img/coffee-breaks.svg');
    background-size: cover;
  }
</style>
