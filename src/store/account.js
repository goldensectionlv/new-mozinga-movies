
export default {
  state: {
    accountModalShow: false,
    username: ''
  },
  getters: {
    accountModalShow: state => state.accountModalShow,
    username: state => state.username
  },
  mutations: {
    toggleAccountModal: state => {
      state.accountModalShow = !state.accountModalShow
    },
    setUsername (state, username) {
      state.username = username
      console.log(state.username)
    },
    logout: (state) => {
      state.username = ''
      localStorage.clear()
    },
    requestUsername: state => {
      const storageUsername = localStorage.getItem('username')
      if (storageUsername) state.username = storageUsername
    }
  },
  actions: {
    toggleAccountModal: ({ commit }) => commit('toggleAccountModal'),
    setUsername: ({ commit }, username) => commit('setUsername', username),
    logout: ({ commit }) => commit('logout'),
    requestUsername: ({ commit }) => commit('requestUsername')
  }
}
