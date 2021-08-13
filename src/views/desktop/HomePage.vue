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
        <TheDesktopPosterButtons
          :movie-id="movie.id"
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
import TheDesktopPosterButtons from '@/components/molecules/TheDesktopPosterButtons'
import Description from '@/components/molecules/Description'
import PreRender from '@/components/atoms/PreRender'
import BaseBlurHover from '@/components/atoms/BaseBlurHover'

export default {
  name: 'HomePage',

  components: {
    BasePoster,
    BaseArrowButton,
    TheDesktopPosterButtons,
    Description,
    PreRender,
    BaseBlurHover
  },

  data () {
    return {
      descriptionActive: false,
      animation: false,
      slideDirection: ''
    }
  },

  computed: {
    ...mapGetters(['movie', 'previous_movie', 'next_movie'])
  },

  async mounted () {
    this.animation = true
  },

  methods: {
    ...mapActions(['buttonForwardOrBack', 'preDataChanger']),

    scrollDescription (event) {
      event.preventDefault()
      this.descriptionActive = event.deltaY >= 1
    },

    onArrowClick (direction) {
      if (direction === 'forward') this.slideDirection = 'forward'
      else if (direction === 'back') this.slideDirection = 'back'

      this.preDataChanger(direction)
      this.buttonForwardOrBack(direction)
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
