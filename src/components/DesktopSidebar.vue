<template>
  <div class="TheLeftBar">
    <BaseText logo-text>
      mozinga movies
    </BaseText>

    <nav class="nav">
      <BaseNavBarButton
        btn-text="Home"
        icon-name="home"
        :active="$route.path === '/'"
        @click.native="$router.push('/').catch(() => {})"
      />

      <BaseNavBarButton
        btn-text="Recommend"
        icon-name="head-heart-outline"
        mt30
        :active="$route.path === '/recommend'"
        @click.native="$router.push('/recommend').catch(() => {})"
      />

      <BaseNavBarButton
        btn-text="Очередь"
        icon-name="playlist-star"
        mt30
        :active="$route.path === '/watchlist'"
        @click.native="clickWatchlist"
      />

      <BaseNavBarButton
        btn-text="Просмотренные"
        icon-name="playlist-check"
        mt30
        :active="$route.path === '/watched'"
        @click.native="$router.push('/watched').catch(() => {})"
      />
    </nav>
  </div>
</template>

<script>
import BaseText from '@/components/atoms/BaseText'
import BaseNavBarButton from '@/components/atoms/buttons/BaseNavBarButton'
import { mapActions } from 'vuex'
export default {
  name: 'TheLeftBar',
  components: {
    BaseText,
    BaseNavBarButton
  },
  methods: {
    ...mapActions(['getWatchlist']),
    clickWatchlist () {
      this.$router.push('/watchlist').catch(() => {})
      // this.getWatchlist('full')
    }
  }
}
</script>

<style lang="scss" scoped>
.TheLeftBar {
  width: 100%;
  background-color: rgb(196,196,196,.1);
  padding: 30px 22px;
  border-top-right-radius: 21px;
}

.nav {
  margin-top: 39px;
}
</style>
