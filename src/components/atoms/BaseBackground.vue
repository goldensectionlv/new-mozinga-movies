<template>
  <div
    class="bg-main"
  >
    <div
      class="bg-main_blur"
      :style="{backgroundImage: 'url( ' + bgUrl + ')'}"
    >
      <div class="cover" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseBackground',
  props: {
    bgUrl: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.bg-main {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;
  &_blur {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    filter: blur(60px);

  }
}

.cover {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .30);
}
</style>
