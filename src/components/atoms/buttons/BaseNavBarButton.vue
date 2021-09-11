<template>
  <v-btn
    class="nav-btn text-capitalize white--text"
    :class="{'mt30': mt30}"
    :color="active ? activeColor : defaultColor"
    :style="{justifyContent: justifyContent}"
    :rounded="rounded"
    block
    elevation="0"
  >
    <v-icon v-if="iconName">
      mdi-{{ iconName }}
    </v-icon>
    <span>{{ btnText }}</span>
  </v-btn>
</template>

<script>
export default {
  name: 'BaseNavBarButton',
  props: {
    btnText: {
      type: String,
      default: ''
    },
    active: {
      type: Boolean,
      default: false
    },
    iconName: {
      type: String,
      default: ''
    },
    mt30: {
      type: Boolean,
      default: false
    },
    justifyContent: {
      type: String,
      default: 'flex-start'
    },
    defaultColor: {
      type: String,
      default: 'rgba(0,255,255,.60%)'
    },
    activeColor: {
      type: String,
      default: '#FF007A'
    },
    rounded: {
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

.mt30 {
  margin-top: 30px;
}

span {
  margin-left: 12px;
}
</style>
