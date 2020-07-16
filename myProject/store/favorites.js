export const state = () => ({
  items: []
})

export const getters = {
  items (state) {
    return state.items
  },
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
    const alreadyAdded = state.items.find(item => item.id === product.id)
    if (alreadyAdded) {
      // уже в корзине - не делаем ничего
      return
    }
    try {
      await this.$axios.$post('/favorites', product)
      commit('addProduct', product)
    } catch (e) {
      console.log(e)
    }
  },
  async remove ({ commit, state }, product) {
    try {
      await this.$axios.$delete(`/favorites/${product.id}`)
      commit('removeProduct', product)
    } catch (e) {
      console.log(e)
    }
  },
  removeAll ({ commit, state }) {
    try {
      state.items.forEach(item => this.$axios.$delete(`/favorites/${item.id}`))
      commit('saveProducts', [])
    } catch (e) {
      console.log(e)
    }
  }
}

export const mutations = {
  saveProducts (state, products) {
    state.items = products
  },
  addProduct (state, product) {
    state.items.push(product)
  },
  removeProduct (state, product) {
    state.items = state.items.filter(i => i.id !== product.id)
  }
}
