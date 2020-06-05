<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb bg-white">
        <li class="breadcrumb-item">
          <a href="#">Home</a>
        </li>
        <li class="breadcrumb-item">
          <a href="#">Library</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          Data
        </li>
      </ol>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb'
}
</script>

<style scoped>
  .breadcrumb-item a{
    color:#74d4c0;
  }

  .breadcrumb-item.active {
    color: #862a5c;
  }
</style>
