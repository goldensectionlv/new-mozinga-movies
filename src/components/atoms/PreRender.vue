<template>
  <div class="container">
    <div class="item">
      <img
        alt="..."
        :src="previous_movie.thumb_url"
      >
    </div>

    <div
      class="item"
    >
      <img
        alt="..."
        :src="next_movie.thumb_url"
      >
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'PreRender',
  computed: {
    ...mapGetters(['next_movie', 'previous_movie'])
  }
}
</script>

<style scoped>
.container {
  position: absolute;
  visibility: hidden;
}
.item {
  width: 10%;
  height: 10%;
}
</style>
