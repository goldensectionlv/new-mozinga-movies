import apiRequests from '@/store/apiRequests'

export default {
  state: {
    moviePageActive: false,
    backdrop: '',
    movieModal: {
      name: '',
      name_origin: '',
      year: '',
      country: '',
      thumb_url: '',
      genres: '',
      description: '',
      trailer: '',
      director: [],
      actors: []
    },
    movieModalButtonsData: {
      like: false,
      dislike: false,
      watched: false,
      watchlist: false,
      total_likes: 0,
      total_dislikes: 0
    }
  },
  getters: {
    moviePageActive: state => state.moviePageActive,
    backdrop: state => state.backdrop,
    movieModal: state => state.movieModal
  },
  mutations: {
    toggleMoviePage: state => {
      if (state.moviePageActive) state.backdrop = ''
      state.moviePageActive = !state.moviePageActive
    },
    setBackdropForMoviePage: (state, backdrop) => {
      state.backdrop = backdrop
    },

    getMovie: (state, movieModal) => {
      state.movieModal = movieModal.movie
    },
    clearMovieModalData: state => {
      state.movieModal = {}
    }
  },
  actions: {
    toggleMoviePage: ({ commit }) => commit('toggleMoviePage'),

    setBackdropForMoviePage: ({ commit }, backdrop = '') => commit('setBackdropForMoviePage', backdrop),

    getMovie: async ({ commit }, id) => {
      commit('clearMovieModalData')
      const response = await apiRequests.getMovie(id)
      commit('getMovie', response.response.data)
    }
  }
}
