<template>
  <div
    class="pageContainer"
  >
    <BaseText
      page-header
      style="margin-bottom: 30px"
    >
      Просмотренные фильмы
    </BaseText>

    <div class="grid">
      <BaseAspectMovieCard
        v-for="movie in watchedListFull"
        :key="movie.id"
        :img-url="movie.thumb_url"
        :alt-text="movie.name"
        :backdrop="movie.backdrop"
      >
        <BaseText
          title-movie-name-for-card
          style="margin-top: 12px;"
        >
          {{ movie.name }}
        </BaseText>
      </BaseAspectMovieCard>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BaseText from '@/components/atoms/BaseText'
import BaseAspectMovieCard from '@/components/atoms/BaseAspectMovieCard'

export default {
  name: 'WatchedPage',
  components: {
    BaseText,
    BaseAspectMovieCard
  },
  computed: {
    ...mapGetters({
      watchedListFull: 'watchedListFull'
    })
  },
  methods: {
    movieClick () {
      console.log('movieClick from watched')
    }
  }
}
</script>

<style lang="scss" scoped>
//temp repeat code
.pageContainer {
  width: 100%;
  //width: clamp(100%, 10%, 100%);
  height: 100vh;
  overflow-y: scroll;
  color: white;
  padding: 60px 45px;
  border-top-left-radius: 21px;
  position: absolute;

}

.grid {
  display: grid;
  grid-row-gap: 30px;
  grid-template-columns: repeat(auto-fill, 23%);
  justify-content: space-between;
}

@media (max-width: 1324px) {
  .grid {
    grid-template-columns: repeat(auto-fill, 31%);
    grid-row-gap: 42px;
  }
  .pageContainer {
    padding: 45px 30px;
  }
}

@media (max-width: 660px) {
  .grid {
    grid-template-columns: repeat(auto-fill, 48%);
    grid-row-gap: 30px;
  }
  .pageContainer {
    padding: 30px 30px;
  }
}

</style>
