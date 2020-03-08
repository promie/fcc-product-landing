<script>
import Navbar from '@/components/Navbar.vue'
import EmailSection from '@/components/EmailSection.vue'
import Features from '@/components/Features.vue'
import Video from '@/components/Video.vue'
import Pricing from '@/components/Pricing.vue'
import Footer from '@/components/Footer.vue'
import { FEATURES } from '@/constants'

export default {
  name: 'Landing',
  components: {
    EmailSection,
    Navbar,
    Features,
    Video,
    Pricing,
    Footer
  },
  created() {
    this.features = FEATURES
  }
}
</script>

<template>
  <div class="landing-wrapper">
    <div class="navbar">
      <navbar />
    </div>

    <div class="email-section">
      <email-section />
    </div>

    <div class="features">
      <features
        v-for="feature in features"
        v-bind:key="feature.id"
        v-bind:title="feature.title"
        v-bind:description="feature.description"
      />
    </div>

    <div class="video">
      <Video />
    </div>

    <div class="pricing">
      <Pricing />
      <Pricing />
      <Pricing />
    </div>
    <Footer />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

.email-section {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 220px;
}

.features {
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.video {
  margin-top: 35px;
  text-align: center;
}

.pricing {
  display: flex;
  flex-direction: column;
}

@media only screen and (min-width: 768px) {
  .landing-wrapper {
    width: 100%;
  }
  .email-section {
    margin-top: 95px;
  }
  .features {
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 200px;
  }
  .pricing {
    flex-direction: row;
  }
}
</style>
