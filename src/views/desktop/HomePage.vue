<template>
  <div
    class="Home"
    tabindex="0"
    @keyup.left="onArrowClick('back')"
    @keyup.right="onArrowClick('forward')"
    @wheel.prevent="scrollDescription"
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
        @posterClick="descriptionActive = true"
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

    <BaseBlurHover
      :activate-on="descriptionActive"
      @close="descriptionActive = false"
      @wheel.native.prevent="scrollDescription"
    />

    <Description
      :description-active="descriptionActive"
      :movie="movie"
      @openDescription="descriptionActive = !descriptionActive"
      @wheel.native.prevent="scrollDescription"
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
import BaseBlurHover from '@/components/atoms/BaseBlurHover'

export default {
  name: 'HomePage',

  components: {
    BasePoster,
    BaseArrowButton,
    MainButtonsGroup,
    Description,
    PreRender,
    BaseBlurHover
  },

  data () {
    return {
      descriptionActive: false,
      animation: false,
      slideDirection: '',
      closeAfterScroll: false
    }
  },

  computed: {
    ...mapGetters(['movie', 'previous_movie', 'next_movie', 'movieButtonsData'])
  },

  async mounted () {
    this.animation = true
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

    check (movieId, action) {
      console.log(movieId, action, 'emit check')
    },
    scrollDescription (event) {
      this.descriptionActive = event.deltaY >= 1
    },

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
  overflow: hidden;
}

.HomeMain {
  height: 81vh;
  padding-top: 60px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

*:focus {
  outline: none;
}
</style>
