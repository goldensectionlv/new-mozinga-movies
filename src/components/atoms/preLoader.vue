<template>
  <div class="loaderContainer">
    <div
      class="lds-ripple"
    >
      <div />
      <div />
    </div>

    <span class="loaderText">
      mozinga movies
    </span>
  </div>
</template>

<script>
export default {
  name: 'PreLoader'
}
</script>

<style scoped>
.loaderContainer {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.loaderText {
  color: white;
  font-size: 16pt;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
}

.lds-ripple {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}

.lds-ripple div {
  position: absolute;
  border: 4px solid #fff;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}

.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}

@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}

</style>
