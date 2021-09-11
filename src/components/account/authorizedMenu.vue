<template>
  <div class="white--text">
    <v-btn
      block
      disabled
      text
      dark
    >
      <span>Я есть <br> <span class="font-weight-bold">{{ username }}</span></span>
    </v-btn>

    <BaseNavBarButton
      btn-text="Выйти"
      rounded
      justify-content="center"
      mt30
      default-color="rgba(0,255,255,.3)"
      @click.native="clickLogout"
    />
  </div>
</template>

<script>
import BaseNavBarButton from '@/components/atoms/buttons/BaseNavBarButton'
export default {
  name: 'AuthorizedMenu',
  components: {
    BaseNavBarButton
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

<style scoped>

</style>
