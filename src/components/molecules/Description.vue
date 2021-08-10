<template>
  <div
    class="description"
    :class="{ 'descriptionInactive': !descriptionActive }"
  >
    <div
      id="description-header"
      class="header"
      @click="$emit('openDescription')"
    >
      <BaseText description-header-text>
        {{ movie.name }}
      </BaseText>

      <BaseText description-sub-header-text-one>
        {{ movie.name_origin }}
      </BaseText>

      <BaseText description-sub-header-text-two>
        {{ movie.year }}
      </BaseText>
    </div>
  </div>
</template>

<script>
import BaseText from '@/components/atoms/BaseText'
export default {
  name: 'Description',
  components: {
    BaseText
  },
  props: {
    descriptionActive: {
      type: Boolean,
      default: false
    },
    movie: {
      type: Object,
      default () { return [] }
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
  background-color: rgba(0, 0, 0, .5);
  backdrop-filter: blur(6px) opacity(1);
  transition: background-color 110ms ease, transform 300ms, backdrop-filter 1s;
  z-index: 2;
}

.descriptionInactive {
  backdrop-filter: blur(6px) opacity(0);
  background-color: rgba(0, 0, 0, .1);
  transform: translateY(calc(100% - 130px));
}

.header {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 42px;
  cursor: pointer;
  height: 130px;
}
</style>
