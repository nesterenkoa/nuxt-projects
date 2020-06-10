export const actions = {
  async nuxtServerInit ({ dispatch }) {
    await dispatch('favorites/load')
  }
}
