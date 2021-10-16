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
    movieModal: state => state.movieModal,
    movieModalButtonsData: state => state.movieModalButtonsData
  },
  mutations: {
    toggleMoviePage: state => {
      if (state.moviePageActive) state.backdrop = ''
      state.moviePageActive = !state.moviePageActive
    },
    setBackdropForMoviePage: (state, backdrop) => {
      state.backdrop = backdrop
    },
    setMovieNameToModal: (state, movieName) => {
      state.movieModal.name = movieName
    },

    getMovie: (state, movieModal) => {
      state.movieModal = movieModal.movie
      state.movieModalButtonsData.like = movieModal.like
      state.movieModalButtonsData.dislike = movieModal.dislike
      state.movieModalButtonsData.watched = movieModal.watched
      state.movieModalButtonsData.watchlist = movieModal.watchlist
      state.movieModalButtonsData.total_likes = movieModal.total_likes
      state.movieModalButtonsData.total_dislikes = movieModal.total_dislikes
    },
    clearMovieModalData: state => {
      state.movieModal = {}
    },
    likeOrDislikeModal: (state, data) => {
      state.movieModalButtonsData.like = data.like
      state.movieModalButtonsData.dislike = data.dislike
      state.movieModalButtonsData.total_likes = data.total_likes
      state.movieModalButtonsData.total_dislikes = data.total_dislikes
    },
    addToWatchedOrWatchlistModal: (state, data) => {
      state.movieModalButtonsData.watched = data.watched
      state.movieModalButtonsData.watchlist = data.watchlist
    }

  },
  actions: {
    toggleMoviePage: ({ commit }) => commit('toggleMoviePage'),

    setBackdropForMoviePage: ({ commit }, backdrop = '') => {
      commit('clearMovieModalData')
      commit('setBackdropForMoviePage', backdrop)
    },

    setMovieNameToModal: ({ commit }, movieName) => {
      commit('setMovieNameToModal', movieName)
    },

    getMovie: async ({ commit }, id) => {
      const response = await apiRequests.getMovie(id)
      commit('getMovie', response.response.data)
    },

    likeOrDislikeModal: async ({ commit }, args = { movie_id: null, action: 'like/dislike' }) => {
      const response = await apiRequests.likeOrDislike(args)
      commit('likeOrDislikeModal', response.response.data)
    },
    addToWatchedOrWatchlistModal: async ({ commit }, args = { movie_id: null, action: 'watchlist/watched' }) => {
      const response = await apiRequests.adToWatchedOrWatchlist(args)
      commit('addToWatchedOrWatchlistModal', response.response.data)
    }
  }
}
