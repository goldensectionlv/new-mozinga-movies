<template>
  <v-btn
    color="rgba(255,255,255, .1)"
    style="margin: 3px"
    fab
    light
    elevation="0"
  >
    <v-icon
      color="blue-grey lighten-5"
    >
      {{ left ? 'mdi-arrow-left' : 'mdi-arrow-right' }}
    </v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'BaseArrowButton',
  props: {
    left: {
      type: Boolean,
      default: false
    },
    right: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>

</style>
