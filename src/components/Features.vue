<script>
export default {
  name: 'Features',
  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <div class="inner-feature">
    <div class="icon-section">
      <font-awesome-icon v-bind:icon="icon" size="4x" class="fa-icon" />
    </div>

    <div class="description-section">
      <div class="feature-title">{{ title }}</div>
      <div class="feature-description">{{ description }}</div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Dancing+Script&display=swap');
@import url('https://fonts.googleapis.com/css?family=Dosis&display=swap');

.fa-icon {
  color: pink;
}

.feature-title {
  font-weight: bold;
  font-family: 'Dancing Script', cursive;
  font-size: 30px;
}

.inner-feature {
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.icon-section {
  margin: auto;
}

.feature-title {
  text-align: center;
}

.feature-description {
  text-align: justify;
  font-family: 'Dosis', sans-serif;
}

@media only screen and (min-width: 768px) {
  .inner-feature {
    flex-direction: row;
    margin: auto;
    text-align: justify;
    margin-bottom: 40px;
    padding: 0px;
  }
  .icon-section {
    flex: 1;
    margin-top: auto;
  }
  .description-section {
    flex: 5;
  }
  .feature-title {
    text-align: justify;
  }
}
</style>
