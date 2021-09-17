<template>
  <v-btn
    class="action-button text-capitalize"
    elevation="0"
    :color="active ? activeColor : defaultColor"
    :fab="fab"
  >
    {{ buttonName }}
    <slot />
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
    },
    defaultColor: {
      type: String,
      default: 'rgba(196,196,196, 0.06)'
    },
    activeColor: {
      type: String,
      default: 'rgba(0,255,255,.6)'
    },
    fab: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.action-button {
  border-radius: 15px;
  font-weight: 800;
  font-size: calc(9px + 3 * (100vw/1280));
  letter-spacing: 0;
  color: white;
}
</style>
