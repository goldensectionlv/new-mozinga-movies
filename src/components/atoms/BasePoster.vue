<template>
  <div class="poster">
    <img
      class="img"
      :src="thumbUrl"
      :alt="altText"
      :style="{
        height: height + 'vh',
        width: (height / 3) * 2 + 'vh',
        minHeight: '450px',
        minWidth: '300px'
      }"
    >
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
}
a img, :link img, :visited img {

  border: 0;

}
</style>
