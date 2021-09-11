<template>
  <div
    class="accountContainer"
  >
    <div
      v-click-outside="clickCloseButton"
      class="accountModal"
    >
      <unauthorizedMenu
        v-if="unauthorizedMenuActive && !username"
        @clickRegisterButton="clickRegisterButton"
        @clickLoginButton="clickLoginButton"
        @clickCloseButton="clickCloseButton"
      />

      <authorizedMenu
        v-if="username"
        :username="username"
        @clickLogout="clickLogout"
      />

      <loginMenu
        v-if="loginActive && !username"
        :error="error"
        @login="login"
      />

      <registerMenu v-if="registerActive && !username" />
    </div>
  </div>
</template>

<script>
import unauthorizedMenu from '@/components/account/unauthorizedMenu'
import loginMenu from '@/components/account/loginMenu'
import registerMenu from '@/components/account/registerMenu'
import authorizedMenu from '@/components/account/authorizedMenu'
import { mapActions, mapGetters } from 'vuex'
import apiRequests from '@/store/apiRequests'
export default {
  name: 'Account',
  components: {
    unauthorizedMenu,
    authorizedMenu,
    loginMenu,
    registerMenu
  },
  data () {
    return {
      unauthorizedMenuActive: true,
      loginActive: false,
      registerActive: false,
      error: ''
    }
  },
  computed: {
    ...mapGetters(['username'])
  },
  methods: {
    ...mapActions([
      'toggleAccountModal',
      'logout',
      'setUsername',
      'createdHome',
      'getWatchlist',
      'getWatchedList',
      'getRecommendList',
      'clearWatchlist',
      'clearWatchedList',
      'clearRecommendList'
    ]),
    clickRegisterButton () {
      this.registerActive = true
      this.unauthorizedMenuActive = false
    },
    clickLoginButton () {
      this.loginActive = true
      this.unauthorizedMenuActive = false
    },
    clickCloseButton () {
      this.toggleAccountModal()
    },
    async clickLogout () {
      this.logout()
      await this.createdHome()
      this.clearWatchlist()
      this.clearWatchedList()
      this.clearRecommendList()
    },
    async login (username, password) {
      await apiRequests.login(username, password)
        .then(response => {
          localStorage.setItem('token', response.response.data.token)
          localStorage.setItem('username', username)
          this.setUsername(username)
          this.createdHome()
          this.getWatchlist()
          this.getWatchedList()
          this.getRecommendList()
          apiRequests.deleteAnonymous()
          this.toggleAccountModal()
        }).catch(error => {
          this.error = 'Неправильный логин или пароль'
          console.log(error)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.accountContainer {
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: rgba(0,0,0,.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
}
.accountModal {
  width: 300px;
  max-width: 90%;
  padding: 30px;
  border-radius: 21px;
  background-color: rgba(0,0,0,.9);
}
</style>
