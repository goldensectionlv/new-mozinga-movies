<template>
  <div>
    <preLoader v-if="!initialAnimation" />
    <transition name="fade">
      <v-app
        v-show="initialAnimation"
        class="my-app"
      >
        <BaseBackground :bg-url="movie.thumb_url" />

        <main class="app-container">
          <router-view />
        </main>
      </v-app>
    </transition>
  </div>
</template>

<script>
import cookie from '@/store/cookie'
import { mapGetters, mapActions } from 'vuex'
import BaseBackground from '@/components/atoms/BaseBackground'
import preLoader from '@/components/atoms/preLoader'

export default {
  name: 'App',
  components: {
    BaseBackground,
    preLoader

  },
  data () {
    return { initialAnimation: false }
  },
  computed: {
    ...mapGetters(['movie'])
  },
  created () {
    let device = cookie.getCookie('device')
    if (device == null) device = cookie.uuidv4()
    document.cookie = 'device=' + device + ';domain=;path=/'
  },
  async mounted () {
    await this.createdHome()
    this.initialAnimation = true
  },
  methods: {
    ...mapActions(['createdHome'])
  }
}
</script>

<style lang="scss" scoped>

html {
  font-family: 'Montserrat', sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  overflow: hidden;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.my-app {
  background-color: transparent !important;
  font-family: 'Montserrat', sans-serif !important;
}

.app-container {
  width: 100%;
  height: 100%;
}

.v-item-group.v-bottom-navigation .v-btn.v-size--default {
  height: inherit;
}

/** Montserrat Regular **/
@font-face {
  font-family: "Montserrat";
  font-weight: 400;
  font-style: normal;
  src: url("../src/assets/fonts/Montserrat-Regular.woff2") format("woff2"),
  url("../src/assets/fonts/Montserrat-Regular.woff") format("woff");
}

/** Montserrat Medium **/
@font-face {
  font-family: "Montserrat";
  font-weight: 500;
  font-style: normal;
  src: url("../src/assets/fonts/Montserrat-Medium.woff2") format("woff2"),
  url("../src/assets/fonts/Montserrat-Medium.woff") format("woff");
}

/** Montserrat SemiBold **/
@font-face {
  font-family: "Montserrat";
  font-weight: 600;
  font-style: normal;
  src: url("../src/assets/fonts/Montserrat-SemiBold.woff2") format("woff2"),
  url("../src/assets/fonts/Montserrat-SemiBold.woff") format("woff");
}

/** Montserrat Bold **/
@font-face {
  font-family: "Montserrat";
  font-weight: 700;
  font-style: normal;
  src: url("../src/assets/fonts/Montserrat-Bold.woff2") format("woff2"),
  url("../src/assets/fonts/Montserrat-Bold.woff") format("woff");
}

/** Montserrat ExtraBold **/
@font-face {
  font-family: "Montserrat";
  font-weight: 800;
  font-style: normal;
  src: url("../src/assets/fonts/Montserrat-ExtraBold.woff2") format("woff2"),
  url("../src/assets/fonts/Montserrat-ExtraBold.woff") format("woff");
}

/** Montserrat Black **/
@font-face {
  font-family: "Montserrat";
  font-weight: 900;
  font-style: normal;
  src: url("../src/assets/fonts/Montserrat-Black.woff2") format("woff2"),
  url("../src/assets/fonts/Montserrat-Black.woff") format("woff");
}

::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 0; /* Remove scrollbar space */
  height: 0;
  background: transparent; /* Optional: just make scrollbar invisible */
}

.fade-enter-active,
.fade-leave-active {
  transition: 500ms;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
