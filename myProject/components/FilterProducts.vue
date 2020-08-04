<template>
  <div class="d-flex  flex-wrap justify-content-between  align-items-center mb-3">
    <button class="mb-2 btn-11 mp-btn-filter" @click.prevent="resetFilters">
      #Показать все
    </button>
    <button v-for="category of categories" :key="category" class="mb-2  mp-btn-filter" @click.prevent="setCategoryFilter(category)">
      #{{ category }}
    </button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'FilterProducts',
  computed: {
    ...mapGetters({
      categories: 'products/categories',
      filters: 'products/filters'
    })
  },
  methods: {
    ...mapMutations({
      setFilter: 'products/setFilter',
      resetFilters: 'products/resetFilters'
    }),
    setCategoryFilter (category) {
      const active = this.filters.category === category
      this.setFilter({ category: active ? '' : category })
    }
  }
}
</script>

<style scoped>
  .mp-btn-filter{
    min-width: 30%;
    font-size: 12px;
    padding: 1px 4px;
    background: white;
    border: 1px solid #74d4c0;
    color: #74d4c0;
    outline: none;
    position: relative;
    transition: all 0.3s ease;
    z-index: 2;
  }

  .mp-btn-filter:hover,
  .mp-btn-filter:focus{
    color:white;
    background: #74d4c0;
  }

  .mp-btn-filter:first-of-type{
    border-color: #ca3f8b;
    color: #ca3f8b;
  }

  .mp-btn-filter:first-of-type:hover,
  .mp-btn-filter:first-of-type:focus
  {
    background: #ca3f8b;
    color: white;
  }

  .mp-btn-filter:nth-of-type(2n){
    color:rgb(239,140,61);
    border-color:rgb(239,140,61);
  }
  .mp-btn-filter:nth-of-type(2n):hover,
  .mp-btn-filter:nth-of-type(2n):focus
  {
    background:rgb(239,140,61);
    color: white;
  }
  @media (min-width:400px ) {
    .mp-btn-filter {
      font-size: 15px;
      padding: 4px 4px;
    }
  }

    @media (min-width: 800px) {
      .mp-btn-filter:before,
      .mp-btn-filter:after {
        position: absolute;
        content: " ";
        z-index: -1;
        width: 10%;
        top: 50%;
        height: 1px;
        background:#ca3f8b;
        transition: all 0.3s ease;
      }

      .mp-btn-filter:before {
        left: -10%;
      }

      .mp-btn-filter:after {
        right: -10%;
      }

      .mp-btn-filter:hover:before {
        left: 0%;
      }

      .mp-btn-filter:hover:after {
        right: 0%;
      }
    }

</style>
