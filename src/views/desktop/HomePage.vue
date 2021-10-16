<template>
  <div
    class="Home"
    tabindex="0"
    @keyup.left="onArrowClick('back')"
    @keyup.right="onArrowClick('forward')"
  >
    <PreRender />

    <div class="HomeMain">
      <BaseArrowButton
        left
        @click.native="onArrowClick('back')"
      />

      <BasePoster
        :height="66"
        :thumb-url="movie.thumb_url"
        :alt-text="movie.name_origin"
        :slide-direction="slideDirection"
      >
        <MainButtonsGroup
          :movie-id="movie.id"
          :movie-buttons-data="movieButtonsData"
          @likeOrDislikeClick="likeOrDislikeClick"
          @watchedOrWatchlistClick="watchedOrWatchlistClick"
        />
      </BasePoster>

      <BaseArrowButton
        right
        @click.native="onArrowClick('forward')"
      />
    </div>

    <Description
      :movie="movie"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import BasePoster from '@/components/atoms/BasePoster'
import BaseArrowButton from '@/components/atoms/buttons/BaseArrowButton'
import MainButtonsGroup from '@/components/MainButtonsGroup'
import Description from '@/components/Description/Description'
import PreRender from '@/components/atoms/PreRender'

export default {
  name: 'HomePage',

  components: {
    BasePoster,
    BaseArrowButton,
    MainButtonsGroup,
    Description,
    PreRender

  },

  data () {
    return {
      slideDirection: ''
    }
  },
  computed: {
    ...mapGetters(['movie', 'previous_movie', 'next_movie', 'movieButtonsData'])
  },
  methods: {
    ...mapActions([
      'buttonForwardOrBack',
      'preDataChanger',
      'addToWatchedOrWatchlist',
      'getWatchlist',
      'getWatchedList',
      'likeOrDislike',
      'getRecommendList'
    ]),

    onArrowClick (direction) {
      if (direction === 'forward') this.slideDirection = 'forward'
      else if (direction === 'back') this.slideDirection = 'back'
      this.preDataChanger(direction)
      this.buttonForwardOrBack(direction)
    },

    async likeOrDislikeClick (movieId, action) {
      await this.likeOrDislike({ movie_id: movieId, action })
      await this.getRecommendList()
    },
    async watchedOrWatchlistClick (movieId, action) {
      await this.addToWatchedOrWatchlist({ movie_id: movieId, action })
      await this.getWatchlist('full')
      await this.getWatchedList('full')
    }
  }

}
</script>

<style lang="scss" scoped>
.Home {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: scroll;
}

.HomeMain {
  height: calc(100% - 130px);
  padding-top: 60px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  //background-color: #ffbdbd;
}

*:focus {
  outline: none;
}
</style>
