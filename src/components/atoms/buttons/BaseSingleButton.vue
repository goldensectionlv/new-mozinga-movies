<template>
  <v-btn
    class="action-button text-capitalize"
    elevation="0"
    :color="active ? 'rgba(0,255,255,.6)' : 'rgba(196,196,196, 0.06)'"
  >
    {{ buttonName }}
  </v-btn>
</template>

<script>
export default {
  name: 'BaseSingleButton',
  props: {
    active: {
      type: Boolean,
      default: false
    },
    buttonName: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.action-button {
  border-radius: 15px;
  font-weight: 800;
  font-size: 9pt;
  letter-spacing: 0;
  color: white;
}
</style>
