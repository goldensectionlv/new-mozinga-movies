<template>
  <v-btn
    class="nav-btn text-capitalize white--text rounded-lg"
    block
    elevation="0"
    color="rgba(255,0,122,.66)"
    :style="{marginTop: marginTop ? '15px' : ''}"
  >
    <v-icon v-if="iconName">
      mdi-{{ iconName }}
    </v-icon>
    <span>{{ btnText }}</span>
  </v-btn>
</template>

<script>
export default {
  name: 'BaseFormButton',
  props: {
    iconName: {
      type: String,
      default: ''
    },
    btnText: {
      type: String,
      default: ''
    },
    marginTop: {
      type: Boolean,
      default: false
    }

  }
}
</script>

<style lang="scss" scoped>
.nav-btn {
  width: 100%;
  padding: 30px 16px !important;
  font-weight: bold;
  letter-spacing: 0;
}
</style>
