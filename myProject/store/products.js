export const state = () => ({
  items: [],
  product: {},
  filters: {},
  filteredProducts: []
})

export const getters = {
  items: store => store.items,
  product: store => store.product,
  item: store => id => store.items.find(i => i.id === id),
  newItems: store => store.items.filter(i => !!i.new),
  filters: store => store.filters,
  filteredProducts: store => filterProducts(store.items, store.filters),
  categories: store => store.items.reduce((acc, item) => {
    if (!acc.includes(item.category) && item.category) {
      acc.push(item.category)
    }
    return acc
  }, [])
}

export const actions = {
  async load ({ commit }) {
    let products = []
    try {
      products = await this.$axios.$get('/products')
    } catch (e) {
      console.log(e)
    }
    commit('saveProducts', products)
  },
  async loadSingle ({ commit, store }, id) {
    let product = {}
    try {
      product = await this.$axios.$get(`/products/${id}`)
    } catch (e) {
      console.log(e)
    }
    commit('saveSingleProduct', product)
  },
  async search ({ commit }, q) {
    let products = []
    if (q.length >= 3) {
      products = await this.$axios.$get('/products', {
        params: { q }
      })
    } else {
      products = await this.$axios.$get('/products')
    }
    commit('saveProducts', products)
  }
}
export const mutations = {
  saveProducts (state, products) {
    state.items = products
  },
  saveSingleProduct (state, product) {
    state.product = product
  },
  setFilter (state, payload) {
    state.filters = {
      ...state.filters,
      ...payload
    }
  },
  resetFilters (state) {
    state.filters = {}
  }
}

const filterProducts = (products, filters) => {
  let filteredItems = products

  if (filters && filters.category) {
    filteredItems = filteredItems.filter(i => i.category === filters.category)
  }
  return filteredItems
}
