import apiRequests from '@/store/apiRequests'

export default {
  state: { recommendList: [] },
  getters: {
    recommendList: state => state.recommendList
  },
  mutations: {
    getRecommendList: (state, recommendList) => {
      state.recommendList = recommendList
      console.log('recommend loaded')
    }
  },
  actions: {
    getRecommendList: async ({ commit }) => {
      const response = await apiRequests.recommendSliced()
      commit('getRecommendList', response.response.data)
    }
  }
}
