<template>
  <div>
    <DescriptionBodyDetailsAtom detail-name="Страна">
      <span v-if="country === 'US'">United States of America</span>
      <span v-else-if="country === 'GB'">Great Britain</span>
      <span v-else-if="country === 'ES'">Spain</span>
      <span v-else>{{ country }}</span>
    </DescriptionBodyDetailsAtom>

    <DescriptionBodyDetailsAtom
      detail-name="Режиссер"
      margin-top="21px"
    >
      <span
        v-for="(director, index) in directors"
        :key="index"
      >
        <span :key="director.director_name">{{ director.director_name }}</span>
        <span v-if="index < directors.length - 1">,&nbsp;</span>
      </span>
    </DescriptionBodyDetailsAtom>

    <DescriptionBodyDetailsAtom
      detail-name="Жанры"
      margin-top="21px"
    >
      {{ genres }}
    </DescriptionBodyDetailsAtom>

    <DescriptionBodyDetailsAtom
      detail-name="В ролях"
      margin-top="21px"
    >
      <span
        v-for="(actor, index) in actors"
        :key="index"
      >
        <span>{{ actor.actor_name }}</span>
        <span v-if="index < actors.length - 1">,&nbsp;</span>
      </span>
    </DescriptionBodyDetailsAtom>
  </div>
</template>

<script>
import DescriptionBodyDetailsAtom from '@/components/Description/DescriptionBody/DescriptionBodyDetailsAtom'

export default {
  name: 'DescriptionBodyDetails',
  components: {
    DescriptionBodyDetailsAtom
  },
  props: {
    country: {
      type: String,
      default: ''
    },
    directors: {
      type: Array,
      default () { return {} }
    },
    actors: {
      type: Array,
      default () { return [] }
    },
    genres: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>
