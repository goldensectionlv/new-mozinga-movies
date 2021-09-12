<template>
  <div class="unauthorizedModal">
    <BaseFormButton
      btn-text="зарегаться"
      icon-name="account-plus"
      @click.native="clickRegisterButton"
    />
    <BaseFormButton
      btn-text="Войти"
      icon-name="login-variant"
      margin-top
      @click.native="clickLoginButton"
    />

    <v-btn
      fab
      dark
      style="margin-top: 15px;"
      color="rgba(0,255,255,.60%)"
      @click="clickCloseButton"
    >
      <v-icon>mdi-close</v-icon>
    </v-btn>
  </div>
</template>

<script>
import BaseFormButton from '@/components/atoms/buttons/BaseFormButton'

export default {
  name: 'UnauthorizedMenu',
  components: {
    BaseFormButton
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
