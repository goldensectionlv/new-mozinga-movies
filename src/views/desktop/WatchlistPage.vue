<template>
  <div
    class="watchlist"
  >
    <div class="grid">
      <div
        v-for="movie in watchlist"
        :key="movie.id"
        class="zoom"
      >
        <img
          class="img"
          style="width: 100%"
          :src="movie.thumb_url"
          :alt="movie.name"
        >
        <BaseText description-sub-header-text-two>
          {{ movie.name }}
        </BaseText>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import BaseText from '@/components/atoms/BaseText'

export default {
  name: 'WatchlistPage',
  components: {
    BaseText
  },
  computed: {
    ...mapGetters({
      watchlist: 'watchlistFull'
    })

  },
  async mounted () {
    await this.getWatchlist('full')
  },
  methods: {
    ...mapActions(['getWatchlist'])
  }
}
</script>

<style lang="scss" scoped>
.watchlist {
  //background-color: rgba(0, 255, 255, 0.1);
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  color: white;
  padding: 60px 60px;
  border-top-left-radius: 21px;
  position: absolute;

}

.grid {
  display: grid;
  grid-row-gap: 60px;
  grid-template-columns: repeat(auto-fill, 23%);
  justify-content: space-between;
}

.img {
  border-radius: 12px;
  cursor: pointer;
}

@media (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(auto-fill, 31%);
    grid-row-gap: 42px;
  }
}

@media (max-width: 750px) {
  .grid {
    grid-template-columns: repeat(auto-fill, 48%);
    grid-row-gap: 30px;
  }
}

.zoom {
  -ms-transform: scale(1.00); /* IE 9 */
  -webkit-transform: scale(1.00); /* Safari 3-8 */
  transform: scale(1.00);
  transition: 200ms ease-out;
}
.zoom:hover {
  -ms-transform: scale(1.03); /* IE 9 */
  -webkit-transform: scale(1.03); /* Safari 3-8 */
  transform: scale(1.03);
  transition: 100ms ease-out;
}
</style>
