<template>
  <div
    class="zoom"
    @click="clickMovieCard()"
    @mouseenter="setBackdropForMoviePage(backdrop)"
  >
    <div style="width: 100%; padding-bottom: 150%; position: relative">
      <div style="width: 100%; height: 100%; position: absolute">
        <v-img
          class="img fill-height"
          :src="imgUrl"
          :alt="altText"
        />
      </div>
    </div>

    <BaseText
      title-movie-name-for-card
      style="margin-top: 12px; cursor: pointer"
    >
      <slot />
    </BaseText>
  </div>
</template>

<script>
import BaseText from '@/components/atoms/BaseText'
import { mapActions } from 'vuex'
export default {
  name: 'BaseAspectMovieCard',
  components: { BaseText },
  props: {
    imgUrl: {
      type: String,
      default: ''
    },
    altText: {
      type: String,
      default: 'img'
    },
    backdrop: {
      type: String,
      default: ''
    },
    movieId: {
      type: Number,
      default: null
    },
    movieName: {
      type: String,
      default: ''
    }

  },
  methods: {
    ...mapActions(['toggleMoviePage', 'setBackdropForMoviePage', 'getMovie', 'setMovieNameToModal']),
    clickMovieCard () {
      this.$router.push('/movie/' + this.movieId)
      this.setBackdropForMoviePage(this.backdrop)
      this.setMovieNameToModal(this.movieName)
      this.toggleMoviePage()
      this.getMovie(this.movieId)
    }
  }
}
</script>

<style lang="scss" scoped>
.img {
  height: 100%;
  width: 100%;
  border-radius: 12px;
  cursor: pointer;
}

.zoom {
  -ms-transform: scale(1.00); /* IE 9 */
  -webkit-transform: scale(1.00); /* Safari 3-8 */
  transform: scale(1.00);
  transition: 200ms ease-out;
}
.zoom:hover {
  -ms-transform: scale(1.03); /* IE 9 */
  -webkit-transform: scale(1.03); /* Safari 3-8 */
  transform: scale(1.03);
  transition: 100ms ease-out;
}
</style>
