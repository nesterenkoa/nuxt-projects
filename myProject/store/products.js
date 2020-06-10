export const state = () => ({
  items: []
})

export const getters = {
  items: store => store.items
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
  }
}
