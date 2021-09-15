export default {
  state: {
    moviePageActive: false,
    backdrop: ''
  },
  getters: {
    moviePageActive: state => state.moviePageActive,
    backdrop: state => state.backdrop
  },
  mutations: {
    toggleMoviePage: state => {
      if (state.moviePageActive) state.backdrop = ''
      state.moviePageActive = !state.moviePageActive
    },
    setBackdropForMoviePage: (state, backdrop) => {
      state.backdrop = backdrop
    }
  },
  actions: {
    toggleMoviePage: ({ commit }) => commit('toggleMoviePage'),
    setBackdropForMoviePage: ({ commit }, backdrop = '') => commit('setBackdropForMoviePage', backdrop)
  }
}
