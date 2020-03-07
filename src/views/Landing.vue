<script>
import Navbar from '@/components/Navbar.vue'
import EmailSection from '@/components/EmailSection.vue'
import Features from '@/components/Features.vue'
import Video from '@/components/Video.vue'

export default {
  name: 'Landing',
  components: {
    EmailSection,
    Navbar,
    Features,
    Video
  }
}
</script>

<template>
  <div>
    <navbar />
    <email-section />
    <features />
    <features />
    <features />
    <Video />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
