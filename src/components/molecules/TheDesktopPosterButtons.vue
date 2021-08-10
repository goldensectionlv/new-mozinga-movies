<template>
  <div class="poster-buttons">
    <BaseActionButton button-name="лайк" />
    <BaseActionButton button-name="не лайк" />
    <BaseActionButton button-name="смотрел" />
    <BaseActionButton button-name="посмотрю" />
  </div>
</template>

<script>
import BaseActionButton from '@/components/atoms/buttons/BaseActionButton'
export default {
  name: 'TheDesktopPosterButtons',
  components: {
    BaseActionButton
  }
}
</script>

<style lang="scss" scoped>
.poster-buttons {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 12px;
}

</style>
