<template>
  <div
    class="pageContainer"
  >
    <BaseText
      page-header
      style="margin-bottom: 21px"
    >
      Рекомендации
    </BaseText>

    <div
      v-for="recommend in recommendList"
      :key="recommend.based_on.id"
      class="recommendRow"
    >
      <div class="recommendSubtitle">
        <span class="recommendSubtitle__left">Похожие на </span>
        <span
          class="recommendSubtitle__right"
          @click="clickMovieCard(recommend.based_on.backdrop, recommend.based_on.id, recommend.based_on.name)"
        >
          {{ recommend.based_on.name }}
        </span>
      </div>

      <div class="grid">
        <BaseAspectMovieCard
          v-for="movie in recommend.recommend"
          :key="movie.id"
          :img-url="movie.thumb_url"
          :alt-text="movie.name"
          :backdrop="movie.backdrop"
          :movie-id="movie.id"
          :movie-name="movie.name"
        >
          {{ movie.name }}
        </BaseAspectMovieCard>
      </div>
    </div>
  </div>
</template>

<script>
import BaseText from '@/components/atoms/BaseText'
import { mapGetters, mapActions } from 'vuex'
import BaseAspectMovieCard from '@/components/atoms/BaseAspectMovieCard'

export default {
  name: 'RecommendPage',

  components: {
    BaseText,
    BaseAspectMovieCard
  },

  computed: {
    ...mapGetters(['recommendList'])
  },

  methods: {
    ...mapActions(['setBackdropForMoviePage', 'toggleMoviePage', 'getMovie', 'setMovieNameToModal']),

    clickMovieCard (backdrop, movieId, movieName) {
      this.$router.push('/movie/' + movieId)
      this.setBackdropForMoviePage(backdrop)
      this.setMovieNameToModal(movieName)
      this.toggleMoviePage()
      this.getMovie(movieId)
    }
  }
}
</script>

<style lang="scss" scoped>

.pageContainer {
  background-color: rgba(0,255,255,0.1);
  width: 100%;
  height: 100%;
  padding: 60px 45px;
  color: white;
  border-top-left-radius: 21px;
  position: absolute;
  overflow-y: scroll;
}

.grid {
  width: 100%;
  display: grid;
  column-gap: 1%;
  grid-template-columns: repeat(auto-fill, 19%);
  justify-content: space-between;
}

.recommendRow {
  margin-bottom: 45px;
}

.recommendSubtitle {
  font-size: calc(12px + 3 * (100vw/1280));
  margin-bottom: 15px;
  &__left {
    font-weight: 800;
    user-select: none;
  }

  &__right {
    font-weight: 800;
    user-select: none;
    color: #00FFFF;
    cursor: pointer;
  }
}

@media (max-width: 1324px) {
  .grid {

    grid-template-columns: repeat(auto-fill, 23%);
    grid-row-gap: 42px;
  }
  .pageContainer {
    padding: 45px 30px;
  }
}

@media (max-width: 1023px) {
  .grid {

    grid-template-columns: repeat(auto-fill, 31%);
  }
  .pageContainer {
    padding: 45px 30px;
  }
}

@media (max-width: 660px) {
  .grid {
    column-gap: 4%;
    grid-template-columns: repeat(auto-fill, 48%);
    grid-row-gap: 30px;
  }
  .pageContainer {
    padding: 30px 30px;
  }
}
</style>
