<template>
  <div style="width: 100%; padding-bottom: 45%; position: relative">
    <div style="width: 100%; height: 100%; position: absolute">
      <iframe
        class="rounded-xl"
        :src="trailerLink"
        style="width: 100%; height: 100%; border: none"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DescriptionTrailer',
  props: {
    trailerLink: {
      type: String,
      default: ''
    }
  }
}
</script>
