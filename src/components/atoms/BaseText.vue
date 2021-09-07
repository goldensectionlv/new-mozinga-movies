<template>
  <div
    :class="{
      'logoText': logoText,
      'descriptionHeaderText': descriptionHeaderText,
      'descriptionSubHeaderTextOne': descriptionSubHeaderTextOne,
      'descriptionSubHeaderTextTwo': descriptionSubHeaderTextTwo,
      'likeOrDislikeText': likeOrDislikeText,
      'pageHeader': pageHeader,
      'titleMovieNameForCard': titleMovieNameForCard,
      'descriptionTextTab': descriptionTextTab,
      'detailsTabHeader': detailsTabHeader,
      'detailsTabText': detailsTabText
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
    },
    pageHeader: {
      type: Boolean,
      default: false
    },
    titleMovieNameForCard: {
      type: Boolean,
      default: false
    },
    descriptionTextTab: {
      type: Boolean,
      default: false
    },
    detailsTabHeader: {
      type: Boolean,
      default: false
    },
    detailsTabText: {
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

.descriptionTextTab {
  font-weight: 400;
  letter-spacing: 1px;
  font-size: 16px;
  color: white;
}

.detailsTabHeader {
  color: white;
  font-weight: 800;
}

.detailsTabText {
  color: white;
  font-weight: 400;
  font-size: 16px;
}
.likeOrDislikeText {
  font-size: 7pt;
  color: #A8C2CF;
  margin-top: 3px;
  font-weight: 600;
}

.pageHeader {
  color: white;
  font-weight: 900;
  font-size: 30px;
}

.titleMovieNameForCard {
  font-size: 15px;
  font-weight: 700;
  color: white;
  margin-top: 3px;
}
</style>
