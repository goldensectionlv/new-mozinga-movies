import apiRequests from '@/store/apiRequests'

export default {
  state: {
    watchedListFull: []
  },
  getters: {
    watchedListFull: state => state.watchedListFull
  },
  mutations: {
    getWatchedList: (state, response) => {
      state.watchedListFull = response
      console.log('watched list loaded')
    },
    clearWatchedList: state => {
      state.watchedListFull = []
    }

  },
  actions: {
    getWatchedList: async ({ commit }, listType = 'full') => {
      const response = await apiRequests.getWatchedList(listType)
      commit('getWatchedList', response.response.data)
    },
    clearWatchedList: ({ commit }) => commit('clearWatchedList')
  }
}
