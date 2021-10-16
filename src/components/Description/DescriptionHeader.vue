<template>
  <div
    class="description-header"
    :class="{'forModalFix': forModalFix}"
  >
    <BaseText
      :description-header-text="!bigText"
      :description-header-text-big="bigText"
    >
      {{ movieName }}
    </BaseText>

    <BaseText
      :description-sub-header-text-one="!bigText"
      :description-sub-header-text-one-big="bigText"
    >
      {{ movieNameOrigin }}
    </BaseText>

    <BaseText
      :description-sub-header-text-two="!bigText"
      :description-sub-header-text-two-big="bigText"
    >
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
    movieName: {
      type: String,
      default: ''
    },
    movieNameOrigin: {
      type: String,
      default: ''
    },
    movieYear: {
      type: [Number, String],
      default: ''
    },
    bigText: {
      type: Boolean,
      default: false
    },
    forModalFix: {
      type: Boolean,
      default: false
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
  min-height: 130px;
  user-select: none;
}

.forModalFix {
  min-height: unset !important;
  margin-bottom: 21px;
}
</style>
