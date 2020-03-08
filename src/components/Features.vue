<script>
export default {
  name: 'Features',
  props: {
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
  <div>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>
