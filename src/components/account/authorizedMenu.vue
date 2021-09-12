<template>
  <div class="white--text authorizedMenu">
    <v-btn
      block
      disabled
      text
      dark
      style="color: white !important"
    >
      <span>Я есть <br> <span class="font-weight-bold">{{ username }}</span></span>
    </v-btn>

    <BaseFormButton
      btn-text="Выйти"
      margin-top
      @click.native="clickLogout"
    />
  </div>
</template>

<script>
import BaseFormButton from '@/components/atoms/buttons/BaseFormButton'

export default {
  name: 'AuthorizedMenu',
  components: {

    BaseFormButton
  },
  props: {
    username: {
      type: String,
      default: ''
    }
  },
  methods: {
    clickLogout () {
      this.$emit('clickLogout')
    }
  }
}
</script>

<style lang="scss" scoped>
.authorizedMenu {
  width: 100%;
}
</style>
