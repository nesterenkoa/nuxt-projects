export const state = () => ({
  locales: ['en', 'fr'],
  locale: 'en'
})

export const getters = {
  locale: store => store.locale,
  locales: store => store.locales
}

export const mutations = {
  setLang (state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
}
