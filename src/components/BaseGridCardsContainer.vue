<template>
  <div class="pageContainer">
    <BaseText
      page-header
      style="margin-bottom: 30px"
    >
      <slot name="header" />
    </BaseText>

    <div class="grid">
      <BaseAspectMovieCard
        v-for="movie in cardsArray"
        :key="movie.id"
        :img-url="movie.thumb_url"
        :alt-text="movie.name"
        :backdrop="movie.backdrop"
        :movie-id="movie.id"
      >
        {{ movie.name }}
      </BaseAspectMovieCard>
    </div>
  </div>
</template>

<script>
import BaseText from '@/components/atoms/BaseText'
import BaseAspectMovieCard from '@/components/atoms/BaseAspectMovieCard'
export default {
  name: 'BaseGridCardsContainer',
  components: {
    BaseText,
    BaseAspectMovieCard
  },
  props: {
    cardsArray: {
      type: Array,
      default () { return [] }
    }
  }
}
</script>

<style lang="scss" scoped>
.pageContainer {
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  color: white;
  padding: 60px 45px;
  border-top-left-radius: 21px;
  position: absolute;
}

.grid {
  display: grid;
  grid-row-gap: 21px;
  grid-template-columns: repeat(auto-fill, 23%);
  justify-content: space-between;
}

@media (max-width: 1324px) {
  .grid {
    grid-template-columns: repeat(auto-fill, 31%);
  }
  .pageContainer {
    padding: 45px 30px;
  }
}

@media (max-width: 660px) {
  .grid {
    grid-template-columns: repeat(auto-fill, 48%);
  }
  .pageContainer {
    padding: 30px 30px;
  }
}
</style>
