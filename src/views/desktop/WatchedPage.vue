<template>
  <BaseGridCardsContainer :cards-array="watchedListFull">
    <template v-slot:header>
      Просмотренные фильмы
    </template>
  </BaseGridCardsContainer>
</template>

<script>
import { mapGetters } from 'vuex'

import BaseGridCardsContainer from '@/components/BaseGridCardsContainer'

export default {
  name: 'WatchedPage',
  components: { BaseGridCardsContainer },
  computed: mapGetters(['watchedListFull'])
}
</script>

<style lang="scss" scoped>

</style>
