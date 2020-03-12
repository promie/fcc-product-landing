<script>
export default {
  name: 'Video'
}
</script>

<template>
  <iframe
    src="https://www.youtube.com/embed/exKJSq7uVYc"
    class="iframe-video"
    height="300px"
    width="100%"
    frameborder="0"
    allowfullscreen
  ></iframe>
</template>

<style scoped>
.iframe-video {
  height: 300px;
  width: 100%;
}

@media only screen and (min-width: 768px) {
  .iframe-video {
    width: 50%;
  }
}
</style>
