<script>
export default {
  name: 'EmailSection'
}
</script>

<template>
  <div>
    <div class="title-description">A place where fashionistas come to life</div>
    <form>
      <input type="text" placeholder="Enter your email address" />
      <button>Get Started</button>
    </form>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Dancing+Script&display=swap');

.title-description {
  font-weight: bold;
  font-size: 35px;
  margin-bottom: 5px;
  font-family: 'Dancing Script', cursive;
  color: pink;
}

input {
  margin: 0 auto;
  display: block;
  margin-bottom: 5px;
  height: 20px;
  width: 300px;
}
</style>
