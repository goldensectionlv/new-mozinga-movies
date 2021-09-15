import Vue from 'vue'
import Vuex from 'vuex'
import home from '@/store/home'
import watchlist from '@/store/watchlist'
import watched from '@/store/watched'
import recommend from '@/store/recommend'
import account from '@/store/account'
import moviePage from '@/store/moviePage'

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
    watchlist,
    watched,
    recommend,
    account,
    moviePage

  }
})
