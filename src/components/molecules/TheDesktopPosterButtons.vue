<template>
  <div class="poster-buttons">
    <BaseActionButton
      button-name="лайк"
      :active="movieButtonsData.like"
      @click.native="likeOrDislikeClick(movieId, 'like')"
    >
      <BaseText like-or-dislike-text>
        {{ movieButtonsData.total_likes }}
      </BaseText>
    </BaseActionButton>

    <BaseActionButton
      button-name="не лайк"
      :active="movieButtonsData.dislike"
      @click.native="likeOrDislikeClick(movieId, 'dislike')"
    >
      <BaseText like-or-dislike-text>
        {{ movieButtonsData.total_dislikes }}
      </BaseText>
    </BaseActionButton>

    <BaseActionButton
      button-name="смотрел"
      :active="movieButtonsData.watched"
      @click.native="watchedOrWatchlistClick(movieId, 'watched')"
    />

    <BaseActionButton
      button-name="посмотрю"
      :active="movieButtonsData.watchlist"
      @click.native="watchedOrWatchlistClick(movieId, 'watchlist')"
    />
  </div>
</template>

<script>
import BaseActionButton from '@/components/atoms/buttons/BaseActionButton'
import BaseText from '@/components/atoms/BaseText'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'TheDesktopPosterButtons',
  components: {
    BaseActionButton,
    BaseText
  },
  props: {
    movieId: {
      type: Number,
      default: null
    }
  },
  computed: {
    ...mapGetters(['movieButtonsData'])
  },
  methods: {
    ...mapActions(['likeOrDislike', 'adToWatchedOrWatchlist']),

    async likeOrDislikeClick (movieId, action) {
      await this.likeOrDislike({ movie_id: movieId, action })
    },
    async watchedOrWatchlistClick (movieId, action) {
      await this.adToWatchedOrWatchlist({ movie_id: movieId, action })
    }
  }
}
</script>

<style lang="scss" scoped>
.poster-buttons {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 12px;
}

</style>
