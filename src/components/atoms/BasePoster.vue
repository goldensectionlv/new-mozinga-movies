<template>
  <div class="poster">
    <transition
      :name="slideDirection"
      mode="out-in"
    >
      <img
        :key="thumbUrl"
        class="img"
        :src="thumbUrl"
        :alt="altText"
        :style="{
          height: height + 'vh',
          width: (height / 3) * 2 + 'vh',
          minHeight: '450px',
          minWidth: '300px'
        }"
        @click="$emit('posterClick')"
      >
    </transition>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BasePoster',
  props: {
    thumbUrl: {
      type: String,
      default: ''
    },
    altText: {
      type: String,
      default: ''
    },
    height: {
      type: Number,
      default: 1
    },
    slideDirection: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.poster {
  border-radius: 15px;
  user-select: none;
}
.img {
  width: 100%;
  height: 100%;
  border-radius: 15px;
  cursor: pointer;
}

.back-enter-active {
  transition: transform 600ms, opacity 300ms;
}
.back-enter {
  transform: translate(-20%, 0%);
  opacity: 0;
}
.back-leave-to {
  transform: translate(0, 0);
}
.forward-enter-active {
  transition: transform 600ms, opacity 540ms;
}
.forward-enter {
  transform: translate(20%, 0%);
  opacity: 0;
}
.forward-leave-to {
  transform: translate(0, 0);
}

</style>
