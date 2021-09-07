<template>
  <div :style="{marginTop: marginTop}">
    <BaseText details-tab-header>
      {{ detailName }}
    </BaseText>

    <BaseText details-tab-text>
      <slot />
    </BaseText>
  </div>
</template>

<script>
import BaseText from '@/components/atoms/BaseText'
export default {
  name: 'DescriptionBodyDetailsAtom',
  components: {
    BaseText
  },
  props: {
    detailName: {
      type: String,
      default: ''
    },
    marginTop: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>
