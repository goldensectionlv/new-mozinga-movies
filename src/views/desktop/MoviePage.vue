<template>
  <transition
    name="slideMoviePage"
    mode="in-out"
  >
    <div
      v-if="activation"
      class="moviePage"
    >
      <div class="moviePageContainer">
        <v-btn
          fab
          dark
          elevation="0"
          style="margin: 15px 15px 0 0; position: absolute; right: 0"
          color="rgba(0,0,0,.6)"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>

        <div
          :key="backdrop"
          class="moviePageBackdrop"
          :style="{backgroundImage: 'url( ' + backdrop + ')'}"
        />

        <div
          v-click-outside="clickClose"
          class="moviePageBody white--text"
        >
          <DescriptionHeader
            :movie-name="movieModal.name"
            :movie-name-origin="movieModal.name_origin"
            :movie-year="movieModal.year"
            big-text
            for-modal-fix
          />
          <DescriptionBody
            :description-text="movieModal.description"
            :actors="movieModal.actors"
            :country="movieModal.country"
            :directors="movieModal.director"
            :genres="movieModal.genres"
            :trailer-link="movieModal.trailer"
            bold-text
          />
          <!--          there will be buttons-->
          <div style="width: 450px; max-width: 90vw">
            <MainButtonsGroup
              :movie-buttons-data="movieModalButtonsData"
              :movie-id="movieModal.id"
              @likeOrDislikeClick="likeOrDislikeClickModal"
              @watchedOrWatchlistClick="watchedOrWatchlistClickModal"
            />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import DescriptionHeader from '@/components/Description/DescriptionHeader'
import DescriptionBody from '@/components/Description/DescriptionBody'
import MainButtonsGroup from '@/components/MainButtonsGroup'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'MoviePage',
  components: {
    DescriptionHeader,
    DescriptionBody,
    MainButtonsGroup
  },
  props: {
    activation: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      prevRoute: null
    }
  },
  computed: {
    ...mapGetters(['backdrop', 'movieModal', 'movieModalButtonsData'])
  },
  methods: {
    ...mapActions([
      'toggleMoviePage',
      'likeOrDislikeModal',
      'getRecommendList',
      'addToWatchedOrWatchlistModal',
      'getWatchlist',
      'getWatchedList'
    ]),
    clickClose () {
      if (window.history.length > 2) {
        this.$router.go(-1)
      } else {
        this.$router.push('/')
      }
      this.toggleMoviePage()
    },
    async likeOrDislikeClickModal (movieId, action) {
      await this.likeOrDislikeModal({ movie_id: movieId, action })
      // await this.getRecommendList()
    },
    async watchedOrWatchlistClickModal (movieId, action) {
      await this.addToWatchedOrWatchlistModal({ movie_id: movieId, action })
      await this.getWatchlist('full')
      await this.getWatchedList('full')
      await this.getRecommendList()
    }
  }
}
</script>

<style lang="scss" scoped>
.moviePage {
  position: fixed;
  border-top-left-radius: 21px;
  border-top-right-radius: 21px;
  background-color: black;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
}

.moviePageContainer {
  width: 100%;
  height: 100%;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  position: relative
}

.moviePageBackdrop {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  background-position: center;
  background-size: cover;
}

.moviePageBody {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  width: 80%;
  height: 100%;
  background-color: rgba(0, 0, 0, .6);
  display: flex;
  flex-direction: column;
  padding: 5vw 5vw 0 5vw;

}

@media (max-width: 900px) {
  .moviePageBody {
    width: 100%;
  }
}

.slideMoviePage-enter-active, .slideMoviePage-leave-active {
  transition: transform 300ms;
}

.slideMoviePage-enter, {
  transform: translateY(96%);
}
.slideMoviePage-leave-to {
  transform: translateY(100%);
}
</style>
