<template>
  <div
    :class="{
      'logoText': logoText,
      'descriptionHeaderText': descriptionHeaderText,
      'descriptionHeaderTextBig': descriptionHeaderTextBig,
      'descriptionSubHeaderTextOne': descriptionSubHeaderTextOne,
      'descriptionSubHeaderTextOneBig': descriptionSubHeaderTextOneBig,
      'descriptionSubHeaderTextTwo': descriptionSubHeaderTextTwo,
      'descriptionSubHeaderTextTwoBig': descriptionSubHeaderTextTwoBig,
      'likeOrDislikeText': likeOrDislikeText,
      'pageHeader': pageHeader,
      'titleMovieNameForCard': titleMovieNameForCard,
      'descriptionTextTab': descriptionTextTab,
      'detailsTabHeader': detailsTabHeader,
      'detailsTabText': detailsTabText,
      'boldText': boldText
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
    },
    descriptionHeaderTextBig: {
      type: Boolean,
      default: false
    },
    descriptionSubHeaderTextOneBig: {
      type: Boolean,
      default: false
    },
    descriptionSubHeaderTextTwoBig: {
      type: Boolean,
      default: false
    },
    boldText: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.logoText {
  font-size: calc(15px + 6 * (100vw/1280));
  font-weight: 900;
  color: white;
}

.descriptionHeaderText {
  font-size: calc(21px + 1 * (100vw/1280));
  font-weight: 900;
  color: white;
  letter-spacing: 0;
}

.descriptionHeaderTextBig {
  font-size: calc(21px + 9 * (100vw/1280));
  font-weight: 900;
  color: white;
  letter-spacing: 0;
}

.descriptionSubHeaderTextOne {
  font-size: calc(15px + 1 * (100vw/1280));
  font-weight: 700;
  color: #00FFFF;
}

.descriptionSubHeaderTextOneBig {
  font-size: calc(15px + 3 * (100vw/1280));
  font-weight: 700;
  color: #00FFFF;
}

.descriptionSubHeaderTextTwo {
  font-size: calc(15px + 3 * (100vw/1280));
  font-weight: 700;
  color: white;
  margin-top: 3px;
}

.descriptionSubHeaderTextTwoBig {
  font-size: calc(15px + 3 * (100vw/1280));
  font-weight: 700;
  color: white;
  margin-top: 3px;
}

.descriptionTextTab {
  font-weight: 400;
  letter-spacing: 1px;
  font-size: calc(12px + 3 * (100vw/1280));
  color: white;
}

.detailsTabHeader {
  color: white;
  font-weight: 800;
  font-size: calc(9px + 6 * (100vw/1280));
}

.detailsTabText {
  color: white;
  font-weight: 400;
  font-size: calc(9px + 6 * (100vw/1280));
}
.likeOrDislikeText {
  font-size: calc(7px + 2 * (100vw/1280));
  color: #A8C2CF;
  margin-top: 3px;
  font-weight: 600;
}

.pageHeader {
  color: white;
  font-weight: 900;
  font-size: calc(21px + 12 * (100vw/1280));
}

.titleMovieNameForCard {
  font-size: calc(12px + 3 * (100vw/1280));
  font-weight: 700;
  color: white;
  margin-top: 3px;
}

.boldText {
  font-weight: 600 !important;
}
</style>
