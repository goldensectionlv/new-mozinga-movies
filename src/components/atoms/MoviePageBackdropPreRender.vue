<template>
  <img
    class="backdrop"
    :src="backdrop"
    alt="backdrop"
  >
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'MoviePageBackdropPreRender',
  computed: mapGetters(['backdrop'])
}
</script>

<style lang="scss" scoped>
.backdrop {
  position: absolute;
  width: 200px;
  height: 100px;
  z-index: 10;
  visibility: hidden;
}
</style>
