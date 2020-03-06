<script>
import Navbar from '@/components/Navbar.vue'
import EmailSection from '@/components/EmailSection.vue'

export default {
  name: 'Landing',
  components: {
    EmailSection,
    Navbar
  }
}
</script>

<template>
  <div>
    <Navbar />
    <email-section />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
