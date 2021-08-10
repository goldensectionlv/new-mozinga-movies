<template>
  <transition name="fade">
    <div
      v-show="activateOn"
      class="descriptionHover wheelTarget"
      @click="$emit('close')"
    />
  </transition>
</template>

<script>
export default {
  name: 'BaseBlurHover',
  props: {
    activateOn: {
      type: Boolean,
      default: false

    }
  }
}
</script>

<style lang="scss" scoped>
.descriptionHover {
  position: absolute;
  height: 100%;
  width: 100%;
  backdrop-filter: blur(21px);
  z-index: 1;

}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 600ms ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
