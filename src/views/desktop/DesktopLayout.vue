<template>
  <main class="main">
    <DesktopSidebar class="main-left" />

    <section class="section">
      <transition
        name="slide"
        mode="out-in"
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

export default {
  name: 'DesktopLayout',
  components: {
    DesktopSidebar,
    HomePage,
    WatchlistPage,
    WatchedPage,
    RecommendPage
  }
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
    display: none !important;
  }
}

.slide-enter-active {
  transition: transform 600ms, opacity 600ms;
}

.slide-enter {
  transform: translate(15%, 0);
  opacity: 0;
}

.slide-leave-to {
  transform: translate(0, 0);
}
</style>
