import Vue from 'vue'
import Vuex from 'vuex'
import home from '@/store/home/home'
import watchlist from '@/store/watchlist'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    home,
    watchlist

  }
})
