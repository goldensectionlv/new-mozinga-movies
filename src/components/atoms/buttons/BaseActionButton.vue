<template>
  <div style="width: 24%; text-align: center">
    <div style="width: 100%; padding-bottom: 45%; position: relative">
      <div style="width: 100%; height: 100%; position: absolute">
        <v-btn
          class="action-button white--text text-lowercase"
          elevation="0"
          color="rgba(196,196,196, 0.06)"
        >
          {{ buttonName }}
        </v-btn>
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
    }
  }
}
</script>

<style scoped>
.action-button {
  width: 100%;
  min-width: 0;
  padding: 0;
  height: 100% !important;
  border-radius: 15px;
  font-weight: 600;
  font-size: 9pt;
  letter-spacing: 0;
}

@media (max-height: 768px) {
  .action-button {
    font-size: 7pt;
  }

}
</style>
