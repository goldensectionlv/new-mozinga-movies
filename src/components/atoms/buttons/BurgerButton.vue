<template>
  <div
    v-ripple
    class="btn"
    style="position: absolute; z-index: 100; right: 21px; top: 21px"
    @click="$emit('clickBurger')"
  >
    <v-icon
      v-if="iconShowCondition"
      color="black"
    >
      mdi-menu
    </v-icon>
    <v-icon
      v-else
      color="black"
    >
      mdi-close
    </v-icon>
  </div>
</template>

<script>
export default {
  name: 'BurgerButton',
  props: {
    iconShowCondition: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.btn {
  width: 51px;
  height: 51px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>
