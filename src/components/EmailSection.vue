<script>
export default {
  name: 'EmailSection'
}
</script>

<template>
  <div>
    <div class="title-description">A place where Fashionistas come to life</div>
    <form>
      <input type="text" placeholder="Enter your email address" />
      <button>Get Started</button>
    </form>
  </div>
</template>

<style scoped>
.title-description {
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 5px;
}

input {
  margin: 0 auto;
  display: block;
  margin-bottom: 5px;
  height: 20px;
  width: 300px;
}
</style>
