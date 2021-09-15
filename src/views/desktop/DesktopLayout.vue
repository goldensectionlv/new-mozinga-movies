<template>
  <main class="main">
    <DesktopSidebar class="main-left" />

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
    MoviePageBackdropPreRender
  },
  computed: mapGetters(['accountModalShow', 'moviePageActive'])
}
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: minmax(280px, 21vw) 1fr;
}

.section {
  position: relative;
}

@media (max-width: 1124px) {
  .main {
    grid-template-columns: minmax(280px, 21vw) 1fr;
  }
}

@media (max-width: 900px) {
  .main {
    grid-template-columns: 1fr;
  }
  .main-left {
    //display: none !important;
    position: absolute;
    background-color: rgba(0,0,0,.6);
    backdrop-filter: blur(30px);
    border-radius: unset;
    transform: translateY(-100%);
    z-index: 3;
  }
}

.slide-enter-active {
  transition: ease-out, opacity 600ms;
}

.slide-enter {
  //transform: translateX(15%);
  opacity: 0;
}

</style>
