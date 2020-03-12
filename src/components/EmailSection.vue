<script>
import Logo from './../assets/logo.jpg'

export default {
  name: 'EmailSection',
  computed: {
    logo() {
      return Logo
    }
  }
}
</script>

<template>
  <div>
    <img v-bind:src="logo" alt="Northstar Fashion Logo" class="logo" />
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
  font-size: 30px;
  margin-bottom: 10px;
  font-family: 'Dancing Script', cursive;
  color: pink;
}

input {
  margin: 0 auto;
  display: block;
  margin-bottom: 5px;
  height: 20px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px 8px;
  font-size: 14px;
}

.logo {
  width: 270px;
  margin-bottom: 20px;
}

@media only screen and (min-width: 768px) {
  .logo {
    width: 400px;
    margin-bottom: 10px;
  }
  .title-description {
    font-size: 35px;
  }
}
</style>
