<template>
  <main class="main">
    <DesktopSidebar />

    <section>
      <transition name="slide">
        <HomePage v-show="$route.path === '/'" />
      </transition>

      <transition name="slide">
        <router-view :key="$route.path" />
      </transition>
    </section>
  </main>
</template>

<script>
import DesktopSidebar from '@/components/DesktopSidebar'
import HomePage from '@/views/desktop/HomePage'
export default {
  name: 'DesktopLayout',
  components: {
    DesktopSidebar,
    HomePage
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
  transition: 300ms;
}
.slide-enter {
  transform: translate(100%, 0);
  opacity: 1;
}
</style>
