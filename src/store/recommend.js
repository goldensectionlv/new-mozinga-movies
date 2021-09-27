import apiRequests from '@/store/apiRequests'

export default {
  state: { recommendList: [] },
  getters: {
    recommendList: state => state.recommendList
  },
  mutations: {
    getRecommendList: (state, recommendList) => {
      state.recommendList = recommendList
      console.log(recommendList)
      console.log('recommend loaded')
    },
    clearRecommendList: state => {
      state.recommendList = []
    }
  },
  actions: {
    getRecommendList: async ({ commit }) => {
      const response = await apiRequests.recommendSliced()
      commit('getRecommendList', response.response.data)
    },
    clearRecommendList: ({ commit }) => commit('clearRecommendList')
  }
}
