<template>
  <div
    class="description-header"
    :class="{'header-active': descriptionActive}"
  >
    <BaseText description-header-text>
      {{ movieName }}
    </BaseText>

    <BaseText description-sub-header-text-one>
      {{ movieNameOrigin }}
    </BaseText>

    <BaseText description-sub-header-text-two>
      {{ movieYear }}
    </BaseText>
  </div>
</template>

<script>
import BaseText from '@/components/atoms/BaseText'
export default {
  name: 'DescriptionHeader',
  components: {
    BaseText
  },
  props: {
    descriptionActive: {
      type: Boolean,
      default: false
    },
    movieName: {
      type: String,
      default: ''
    },
    movieNameOrigin: {
      type: String,
      default: ''
    },
    movieYear: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.description-header {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  height: 130px;
  user-select: none;
}
</style>
