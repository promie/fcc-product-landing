<script>
import Navbar from '@/components/Navbar.vue'
import EmailSection from '@/components/EmailSection.vue'
import Features from '@/components/Features.vue'
import Video from '@/components/Video.vue'
import Pricing from '@/components/Pricing.vue'
import Footer from '@/components/Footer.vue'
import { FEATURES, PRODUCTS } from '@/constants'

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
    this.products = PRODUCTS
  },
  methods: {
    smoothScrollTo(selector) {
      document.querySelector(selector).scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>

<template>
  <div class="landing-wrapper">
    <div class="navbar">
      <navbar v-on:smooth-scroll-to="smoothScrollTo" />
    </div>

    <div class="email-section">
      <email-section />
    </div>

    <div id="features" class="features">
      <features
        v-for="feature in features"
        v-bind:key="feature.id"
        v-bind:icon="feature.icon"
        v-bind:title="feature.title"
        v-bind:description="feature.description"
      />
    </div>

    <div id="video" class="video">
      <Video />
    </div>

    <div id="pricing" class="pricing">
      <Pricing
        v-for="(product, index) in products"
        v-bind:key="index"
        v-bind:title="product.title"
        v-bind:price="product.price"
        v-bind:description="product.description"
      />
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
}

.video {
  margin: 35px 0;
  text-align: center;
}

.pricing {
  display: flex;
  flex-direction: column;
  padding: 0 8px;
}

@media only screen and (min-width: 768px) {
  .landing-wrapper {
    width: 100%;
  }
  .email-section {
    margin-top: 95px;
  }
  .features {
    flex-direction: column;
    justify-content: space-between;
    padding: 0 200px;
  }
  .pricing {
    flex-direction: row;
    padding: 0 250px;
  }
}
</style>
