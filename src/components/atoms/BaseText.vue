<template>
  <div
    :class="{
      'logoText': logoText,
      'descriptionHeaderText': descriptionHeaderText,
      'descriptionSubHeaderTextOne': descriptionSubHeaderTextOne,
      'descriptionSubHeaderTextTwo': descriptionSubHeaderTextTwo,
      'likeOrDislikeText': likeOrDislikeText
    }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BaseTextVue',
  props: {
    logoText: {
      type: Boolean,
      default: false
    },
    descriptionHeaderText: {
      type: Boolean,
      default: false
    },
    descriptionSubHeaderTextOne: {
      type: Boolean,
      default: false
    },
    descriptionSubHeaderTextTwo: {
      type: Boolean,
      default: false
    },
    likeOrDislikeText: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.logoText {
  font-size: 21px;
  font-weight: 900;
  color: white;
}

.descriptionHeaderText {
  font-size: 24px;
  font-weight: 900;
  color: white;
  letter-spacing: 0;
}

.descriptionSubHeaderTextOne {
  font-size: 15px;
  font-weight: 700;
  color: #00FFFF;
}

.descriptionSubHeaderTextTwo {
  font-size: 15px;
  font-weight: 700;
  color: white;
  margin-top: 3px;
}

.likeOrDislikeText {
  font-size: 7pt;
  color: #A8C2CF;
  margin-top: 3px;
  font-weight: 600;
}
</style>
