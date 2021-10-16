<template>
  <main class="main">
    <DesktopSidebar
      v-if="$vuetify.breakpoint.width > 900"
      class="main-left"
    />

    <transition
      v-else
      name="slide2"
    >
      <DesktopSidebar
        v-if="menuActive && $vuetify.breakpoint.width < 900"
        v-click-outside="closeMenu"
        class="main-left2"
      />
    </transition>

    <BurgerButton
      v-if="$vuetify.breakpoint.width < 900"
      :icon-show-condition="!menuActive"
      @clickBurger="menuActive = !menuActive"
    />

    <account v-if="accountModalShow" />

    <MoviePageBackdropPreRender />

    <MoviePage
      :activation="moviePageActive"
    />

    <section class="section">
      <transition
        name="slide"
      >
        <HomePage v-show="$route.path === '/'" />
      </transition>

      <transition
        name="slide"
        mode="out-in"
      >
        <RecommendPage v-show="$route.path === '/recommend'" />
      </transition>

      <transition
        name="slide"
        mode="out-in"
      >
        <!--        <router-view :key="$route.path" /> - not used, because need v-show render for better ux-->
        <WatchlistPage v-show="$route.path === '/watchlist'" />
      </transition>

      <transition
        name="slide"
        mode="out-in"
      >
        <WatchedPage v-show="$route.path === '/watched'" />
      </transition>
    </section>
  </main>
</template>

<script>
import DesktopSidebar from '@/components/DesktopSidebar'
import HomePage from '@/views/desktop/HomePage'
import WatchlistPage from '@/views/desktop/WatchlistPage'
import WatchedPage from '@/views/desktop/WatchedPage'
import RecommendPage from '@/views/desktop/RecommendPage'
import account from '@/components/account/account'
import MoviePage from '@/views/desktop/MoviePage'
import MoviePageBackdropPreRender from '@/components/atoms/MoviePageBackdropPreRender'
import BurgerButton from '@/components/atoms/buttons/BurgerButton'
import { mapGetters } from 'vuex'

export default {
  name: 'DesktopLayout',
  components: {
    DesktopSidebar,
    HomePage,
    WatchlistPage,
    WatchedPage,
    RecommendPage,
    account,
    MoviePage,
    MoviePageBackdropPreRender,
    BurgerButton
  },
  data () {
    return {
      menuActive: false
    }
  },
  computed: mapGetters(['accountModalShow', 'moviePageActive']),
  methods: {
    closeMenu () {
      this.menuActive = false
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: minmax(260px, 280px) 1fr;
}

.section {
  position: relative;
}

.main-left2 {
  display: none;
}

@media (max-width: 1124px) {
  .main {
    grid-template-columns: minmax(260px, 280px) 1fr;
  }
}

@media (max-width: 900px) {
  .main {
    grid-template-columns: 1fr;
  }
  .main-left {
    display: none !important;
    position: absolute;
    background-color: rgba(0,0,0,.6);
    backdrop-filter: blur(30px);
    border-radius: unset;
    height: 100%;
    width: 60%;
    max-width: 280px;
    z-index: 3;
  }
  .main-left2 {
    display: flex !important;
    position: absolute;
    background-color: rgba(0,0,0,.6);
    backdrop-filter: blur(30px);
    border-radius: unset;
    height: 100%;
    width: 60%;
    max-width: 280px;
    z-index: 3;
  }
}

.slide-enter-active, {
  transition: ease-out, opacity 300ms;
}

.slide-enter {
  //transform: translateX(15%);
  opacity: 0;
}

.slide2-enter-active, .slide2-leave-active {
  transition: ease-out, transform 300ms;
}

.slide2-enter, .slide2-leave-to {
  transform: translateX(-100%);

}
</style>
