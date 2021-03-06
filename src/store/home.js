import apiRequests from '@/store/apiRequests'

export default {
  state: {
    movie: {
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
    movieButtonsData: {
      like: false,
      dislike: false,
      watched: false,
      watchlist: false,
      total_likes: 0,
      total_dislikes: 0
    },
    watchlist_list: '',
    recommend_list: '',
    miniRecommend: '',

    previous_movie: {},
    next_movie: {}

  },
  mutations: {
    createdHome: (state, mainMovieData) => {
      state.movie = mainMovieData.movie
      state.movieButtonsData.like = mainMovieData.like
      state.movieButtonsData.dislike = mainMovieData.dislike
      state.movieButtonsData.watched = mainMovieData.watched
      state.movieButtonsData.watchlist = mainMovieData.watchlist
      state.movieButtonsData.total_likes = mainMovieData.total_likes
      state.movieButtonsData.total_dislikes = mainMovieData.total_dislikes
      state.miniWatchlist = mainMovieData.watchlist_list
      state.miniRecommend = mainMovieData.recommend_list
      state.previous_movie = mainMovieData.previous_movie
      state.next_movie = mainMovieData.next_movie
      console.log('home page loaded')
    },
    buttonForwardOrBack: (state, mainMovieData) => {
      state.movie = mainMovieData.movie
      state.previous_movie = mainMovieData.previous_movie
      state.next_movie = mainMovieData.next_movie
      state.movieButtonsData.like = mainMovieData.like
      state.movieButtonsData.dislike = mainMovieData.dislike
      state.movieButtonsData.watched = mainMovieData.watched
      state.movieButtonsData.watchlist = mainMovieData.watchlist
      state.movieButtonsData.total_likes = mainMovieData.total_likes
      state.movieButtonsData.total_dislikes = mainMovieData.total_dislikes
    },
    preDataChanger: (state, direction) => {
      if (direction === 'forward') {
        state.movie.thumb_url = state.next_movie.thumb_url
        state.movie.name = state.next_movie.name
        state.movie.name_origin = state.next_movie.name_origin
        state.movie.year = state.next_movie.year
        state.movie.description = state.next_movie.description
      } else {
        state.movie.thumb_url = state.previous_movie.thumb_url
        state.movie.name = state.previous_movie.name
        state.movie.name_origin = state.previous_movie.name_origin
        state.movie.year = state.previous_movie.year
        state.movie.description = state.previous_movie.description
      }
      console.log(`pre data change for ${direction}`)
    },
    likeOrDislike: (state, response) => {
      state.movieButtonsData.like = response.like
      state.movieButtonsData.dislike = response.dislike
      state.movieButtonsData.total_likes = response.total_likes
      state.movieButtonsData.total_dislikes = response.total_dislikes
    },
    addToWatchedOrWatchlist (state, response) {
      state.movieButtonsData.watched = response.watched
      state.movieButtonsData.watchlist = response.watchlist
    }
  },
  actions: {
    createdHome: async ({ commit }) => {
      const mainMovieData = await apiRequests.createdHome()
      commit('createdHome', mainMovieData.response.data)
    },
    buttonForwardOrBack: async ({ commit }, direction) => {
      const mainMovieData = await apiRequests.buttonForwardOrBack(direction)
      commit('buttonForwardOrBack', mainMovieData.response.data)
      console.log(`btn ${direction} action`)
    },
    preDataChanger: ({ commit }, direction) => commit('preDataChanger', direction),

    likeOrDislike: async ({ commit }, args = { movie_id: null, action: 'like/dislike' }) => {
      const response = await apiRequests.likeOrDislike(args)
      commit('likeOrDislike', response.response.data)
      console.log(`btn ${args.action} pressed`)
    },

    addToWatchedOrWatchlist: async ({ commit }, args = { movie_id: null, action: 'watchlist/watched' }) => {
      const response = await apiRequests.adToWatchedOrWatchlist(args)
      commit('addToWatchedOrWatchlist', response.response.data)
      console.log(`btn ${args.action} pressed`)
    }
  },
  getters: {
    movie: state => state.movie,
    previous_movie: state => state.previous_movie,
    next_movie: state => state.next_movie,
    movieButtonsData: state => state.movieButtonsData

  }
}
