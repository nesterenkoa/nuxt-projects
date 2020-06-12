<template>
  <div class="d-flex flex-column justify-content-center align-items-center overflow-hidden">
    <p class="text-basket">
      Ваша корзина пуста
      <i class="fa fa-frown-o" aria-hidden="true"></i>
    </p>
      <img src="../assets/img/basket.jpg"/>
  </div>

</template>

<script>
export default {
  name: 'BasketEmpy'
}
</script>

<style scoped>

  .text-basket {
    padding: 10px;
    border-radius: 10px;
  }
  .fa-frown-o{
    border-radius: 50%;
}

</style>
