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
          minHeight: '300px',
          minWidth: '150px',
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.img {
  width: 100%;
  height: 100%;
  border-radius: 15px;
  cursor: pointer;
}

@media (max-width: 600px) {
  .img {
    width: 100% !important;
    height: auto !important;
  }
}

.back-enter-active {
  transition: transform 600ms, opacity 600ms;
}
.back-enter {
  transform: translate(-20%, 0%);
  opacity: 0;
}
.back-leave-to {
  transform: translate(0, 0);
}
.forward-enter-active {
  transition: transform 600ms, opacity 600ms;
}
.forward-enter {
  transform: translate(20%, 0%);
  opacity: 0;
}
.forward-leave-to {
  transform: translate(0, 0);
}

</style>
