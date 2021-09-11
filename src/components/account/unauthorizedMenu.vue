<template>
  <div class="unauthorizedModal">
    <BaseNavBarButton
      btn-text="зарегаться"
      icon-name="account-plus"
      justify-content="center"
      default-color="rgba(0,255,255,.15)"
      rounded
      @click.native="clickRegisterButton"
    />

    <BaseNavBarButton
      btn-text="Войти"
      icon-name="login-variant"
      justify-content="center"
      default-color="rgba(0,255,255,.15)"
      rounded
      mt30
      @click.native="clickLoginButton"
    />

    <v-btn
      fab
      dark
      style="margin-top: 30px;"
      color="rgba(0,255,255,.60%)"
      @click="clickCloseButton"
    >
      <v-icon>mdi-close</v-icon>
    </v-btn>
  </div>
</template>

<script>
import BaseNavBarButton from '@/components/atoms/buttons/BaseNavBarButton'

export default {
  name: 'UnauthorizedMenu',
  components: {
    BaseNavBarButton
  },
  methods: {
    clickRegisterButton () {
      this.$emit('clickRegisterButton')
    },
    clickLoginButton () {
      this.$emit('clickLoginButton')
    },
    clickCloseButton () {
      this.$emit('clickCloseButton')
    }
  }
}
</script>

<style scoped>
.unauthorizedModal {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
