import apiRequests from '@/store/apiRequests'
export default {
  state: {
    watchlistFull: []
  },

  getters: {
    watchlistFull: state => state.watchlistFull
  },

  mutations: {
    getWatchlist: (state, data) => {
      state.watchlistFull = data
      console.log('watchlist loaded')
    }
  },

  actions: {
    getWatchlist: async ({ commit }, size = 'full') => {
      const response = await apiRequests.getWatchlist(size)
      commit('getWatchlist', response.response.data)
    }
  }
}
