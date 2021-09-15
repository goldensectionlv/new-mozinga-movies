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
        <span class="recommendSubtitle__right">{{ recommend.based_on.name }}</span>
      </div>

      <div class="grid">
        <BaseAspectMovieCard
          v-for="movie in recommend.recommend"
          :key="movie.id"
          :img-url="movie.thumb_url"
          :alt-text="movie.name"
          :backdrop="movie.backdrop"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BaseText from '@/components/atoms/BaseText'
import { mapGetters } from 'vuex'
import BaseAspectMovieCard from '@/components/atoms/BaseAspectMovieCard'
export default {
  name: 'RecommendPage',
  components: {
    BaseText,
    BaseAspectMovieCard
  },

  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['recommendList'])
  },
  mounted () {
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
}

.recommendRow {
  margin-bottom: 21px;
}

.recommendSubtitle {
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
    column-gap: 3.33%;
    grid-template-columns: repeat(auto-fill, 31%);
    grid-row-gap: 42px;
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
