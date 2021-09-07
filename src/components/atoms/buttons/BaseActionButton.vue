<template>
  <div style="width: 24%; text-align: center">
    <div style="width: 100%; padding-bottom: 45%; position: relative">
      <div style="width: 100%; height: 100%; position: absolute">
        <v-btn
          class="action-button white--text text-lowercase"
          elevation="0"
          :color="active ? activeColor : color"
        >
          {{ buttonName }}
        </v-btn>
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseActionButton',
  props: {
    buttonName: {
      type: String,
      default: ''
    },
    active: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: 'rgba(0,255,255,.6)'
    },
    color: {
      type: String,
      default: 'rgba(196,196,196, 0.06)'
    }
  }
}
</script>

<style lang="scss" scoped>
.action-button {
  width: 100%;
  min-width: 0;
  padding: 0;
  height: 100% !important;
  border-radius: 15px;
  font-weight: 800;
  font-size: 9pt;
  letter-spacing: 0;
}

@media (max-height: 768px) {
  .action-button {
    font-size: 7pt;
  }

}
</style>
