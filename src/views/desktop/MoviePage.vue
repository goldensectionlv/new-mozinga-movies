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
          {{ movieModal.name }} {{ prevRoute }}
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'MoviePage',
  components: {
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
    ...mapGetters(['backdrop', 'movieModal'])
  },
  methods: {
    ...mapActions(['toggleMoviePage']),
    clickClose () {
      if (window.history.length > 2) {
        this.$router.go(-1)
      } else {
        this.$router.push('/')
      }
      this.toggleMoviePage()
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
}

@media (max-width: 900px) {
  .moviePageBody {
    width: 100%;
  }
}

.slideMoviePage-enter-active, .slideMoviePage-leave-active {
  transition: transform 300ms;
}

.slideMoviePage-enter, .slideMoviePage-leave-to {
  transform: translateY(100%);
}

</style>
