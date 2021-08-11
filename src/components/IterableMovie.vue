<template>
  <div style="width: 100%; padding-bottom: 150%; position: relative">
    <div style="width: 100%; height: 100%; position: absolute">
      <img
        :key="thumbUrl"
        class="img"
        :src="thumbUrl"
        :alt="altText"
        @click="$emit('posterClick')"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'IterableMovie',
  props: {
    thumbUrl: {
      type: String,
      default: ''
    },
    altText: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.img {
  width: 100%;
  height: 100%;
  border-radius: 15px;
  cursor: pointer;
}

</style>
