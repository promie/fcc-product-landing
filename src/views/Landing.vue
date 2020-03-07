<script>
import Navbar from '@/components/Navbar.vue'
import EmailSection from '@/components/EmailSection.vue'
import Features from '@/components/Features.vue'

export default {
  name: 'Landing',
  components: {
    EmailSection,
    Navbar,
    Features
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
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
