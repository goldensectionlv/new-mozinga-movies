<template>
  <div
    id="description"
    class="description"
  >
    <DescriptionHeader
      :movie-name="movie.name"
      :movie-name-origin="movie.name_origin"
      :movie-year="movie.year"
      @click.native="$emit('openDescription')"
    />

    <DescriptionBody
      class="descriptionBody"
      :actors="movie.actors"
      :genres="movie.genres"
      :directors="movie.director"
      :country="movie.country"
      :description-text="movie.description"
      :trailer-link="movie.trailer"
    />
  </div>
</template>

<script>
import DescriptionHeader from '@/components/Description/DescriptionHeader'
import DescriptionBody from '@/components/Description/DescriptionBody'

export default {
  name: 'Description',
  components: {
    DescriptionHeader,
    DescriptionBody
  },
  props: {
    movie: {
      type: Object,
      default () { return {} }
    }
  }
}
</script>

<style lang="scss" scoped>

.description {
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  border-top-right-radius: 21px;
  border-top-left-radius: 21px;
  background-color: rgba(0, 0, 0, .03);
  padding: 0 42px 42px 42px;
  transition: background-color 300ms ease, transform 300ms;
  z-index: 2;
  overflow-y: scroll;
  transform: translateY(calc(100% - 130px));
}

.descriptionInactive {
  background-color: rgba(0, 0, 0, .03);
  transform: translateY(calc(100% - 130px));
}

</style>
