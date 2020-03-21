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
      <input type="text" placeholder="Enter your email address" required />
      <button class="button">Get Started</button>
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
  padding: 5px;
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

.button {
  background-color: white;
  border: none;
  color: pink;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 10px 0px;
  cursor: pointer;
  border: 2px solid pink;
  border-radius: 6px;
}

.button:hover {
  background-color: pink;
  color: white;
  border: 2px solid white;
}

@media only screen and (min-width: 768px) {
  .logo {
    width: 400px;
    margin-bottom: 10px;
  }
  .title-description {
    font-size: 35px;
  }
  input {
    width: 500px;
  }
}
</style>
