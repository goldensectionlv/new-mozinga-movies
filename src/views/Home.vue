<template>
  <div class="Home">
    <PreRender />

    <div class="HomeMain wheelTarget">
      <BaseArrowButton
        left
        @click.native="onArrowClick('back')"
      />

      <BasePoster
        :height="66"
        :thumb-url="movie.thumb_url"
        :alt-text="movie.name_origin"
      >
        <TheDesktopPosterButtons :movie-id="movie.id" />
      </BasePoster>

      <BaseArrowButton
        right
        @click.native="onArrowClick('forward')"
      />
    </div>

    <transition name="fade">
      <div
        v-show="descriptionActive"
        class="descriptionHover wheelTarget"
        @click="descriptionActive = false"
      />
    </transition>

    <Description
      class="wheelTarget"
      :description-active="descriptionActive"
      :movie="movie"
      @openDescription="descriptionActive = !descriptionActive"
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

export default {
  name: 'Home',

  components: {
    BasePoster,
    BaseArrowButton,
    TheDesktopPosterButtons,
    Description,
    PreRender
  },

  data () {
    return { descriptionActive: false }
  },
  computed: {
    ...mapGetters(['movie', 'previous_movie', 'next_movie'])
  },
  async mounted () {
    document.querySelectorAll('.wheelTarget')
      .forEach((wheelTarget) => wheelTarget.addEventListener('wheel', this.scrollDescription))
  },
  destroyed () {
    document.querySelectorAll('.wheelTarget')
      .forEach((wheelTarget) => wheelTarget.removeEventListener('wheel', this.scrollDescription))
  },
  methods: {

    ...mapActions(['buttonForwardOrBack', 'preDataChanger']),

    scrollDescription (event) { this.descriptionActive = event.deltaY >= 1 },

    onArrowClick (direction) {
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
.descriptionHover {
  position: absolute;
  height: 100%;
  width: 100%;
  backdrop-filter: blur(21px);
  z-index: 1;

}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 300ms ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

</style>
