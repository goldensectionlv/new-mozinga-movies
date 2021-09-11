<template>
  <div>
    <div class="descriptionNav">
      <BaseSingleButton
        v-for="tab in tabs"
        :key="tab.name"
        :button-name="tab.name"
        :active="tab.active"
        class="mr-3"
        @click.native="tabSwitcher(tab)"
      />
    </div>

    <div
      v-if="tabs.textTab.active"
      class="textTab"
    >
      <BaseText description-text-tab>
        {{ descriptionText }}
      </BaseText>
    </div>

    <DescriptionBodyDetails
      v-if="tabs.detailsTab.active"
      class="detailsTab"
      :country="country"
      :directors="directors"
      :genres="genres"
      :actors="actors"
    />

    <DescriptionTrailer
      v-if="tabs.trailerTab.active"
      :trailer-link="trailerLink"
    />
  </div>
</template>
<script>
import BaseSingleButton from '@/components/atoms/buttons/BaseSingleButton'
import BaseText from '@/components/atoms/BaseText'
import DescriptionBodyDetails from '@/components/Description/DescriptionBody/DescriptionBodyDetails'
import DescriptionTrailer from '@/components/Description/DescriptionBody/DescriptionBodyTrailer'
export default {
  name: 'DescriptionBody',
  components: {
    BaseSingleButton,
    BaseText,
    DescriptionBodyDetails,
    DescriptionTrailer
  },
  props: {
    descriptionText: {
      type: String,
      default: ''
    },
    country: {
      type: String,
      default: ''
    },
    directors: {
      type: Array,
      default () { return [] }
    },
    genres: {
      type: String,
      default: ''
    },
    actors: {
      type: Array,
      default () { return [] }
    },
    trailerLink: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      tabs: {
        textTab: {
          name: 'Описание',
          active: true
        },
        detailsTab: {
          name: 'Детали',
          active: false
        },
        trailerTab: {
          name: 'Трейлер',
          active: false
        }
      }
    }
  },
  methods: {
    tabSwitcher (tab) {
      this.tabs.textTab.active = tab.name === this.tabs.textTab.name
      this.tabs.detailsTab.active = tab.name === this.tabs.detailsTab.name
      this.tabs.trailerTab.active = tab.name === this.tabs.trailerTab.name
    }
  }
}
</script>

<style lang="scss" scoped>

.descriptionNav {
  margin-bottom: 21px;
}
.textTab {
  padding-right: calc(12vw - 42px);
}
</style>
