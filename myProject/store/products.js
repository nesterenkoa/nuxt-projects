export const state = () => ({
  items: [],
  product: {}
})

export const getters = {
  items: store => store.items,
  product: store => store.product,
  item: store => id => store.items.find(i => i.id === id),
  newItems: store => store.items.filter(i => !!i.new)
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
  }
}
