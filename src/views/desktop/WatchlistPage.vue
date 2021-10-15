<template>
  <BaseGridCardsContainer :cards-array="watchlistFull">
    <template v-slot:header>
      Очередь просмотра
    </template>
  </BaseGridCardsContainer>
</template>

<script>
import { mapGetters } from 'vuex'
import BaseGridCardsContainer from '@/components/BaseGridCardsContainer'

export default {
  name: 'WatchlistPage',
  components: { BaseGridCardsContainer },
  computed: mapGetters(['watchlistFull'])
}
</script>

<style lang="scss" scoped>

</style>
