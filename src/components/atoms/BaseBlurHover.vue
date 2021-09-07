<template>
  <transition name="fade">
    <div
      v-show="activateOn"
      class="descriptionHover"
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
  border-top-left-radius: 21px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  z-index: 1;

}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 200ms ease-in-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
