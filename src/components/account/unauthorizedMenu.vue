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
    }
  }
}
</script>

<style scoped>
.unauthorizedModal {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
