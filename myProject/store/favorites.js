export const state = () => ({
  items: []
})

export const getters = {
  items: state => state.items,
  isCanAdd (state) {
    return function (productId) {
      return state.items.findIndex(item => item.id === productId) === -1
    }
  }
}
export const actions = {
  async load ({ commit }) {
    let products = []
    try {
      products = await this.$axios.$get('/favorites')
    } catch (e) {
      console.log(e)
    }
    commit('saveProducts', products)
  },
  async add ({ commit, state }, product) {
    try {
      if (state.items.findIndex(item => item.id === product.id) === -1) {
        const favoritesProduct = await this.$axios.$post('/favorites', { ...product })
        commit('saveNew', favoritesProduct)
      }
    } catch (e) {
      console.log(e)
    }
  }
}

export const mutations = {
  saveProducts (state, products) {
    state.items = products
  },
  saveNew (state, product) {
    state.items.push(product)
  }
}
