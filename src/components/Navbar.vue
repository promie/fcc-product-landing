<script>
export default {
  name: 'Navbar',
  methods: {
    smoothScrollTo(selector) {
      this.$emit('smooth-scroll-to', selector)
    }
  }
}
</script>

<template>
  <header class="header">
    <h1 class="logo"><a href="#">Northstar Fashion</a></h1>
    <ul class="main-nav">
      <li>
        <a href="#features" v-on:click.prevent="smoothScrollTo('#features')"
          >Features</a
        >
      </li>
      <li>
        <a href="#video" v-on:click.prevent="smoothScrollTo('#video')"
          >How It Works</a
        >
      </li>
      <li>
        <a href="#pricing" v-on:click.prevent="smoothScrollTo('#pricing')"
          >Pricing</a
        >
      </li>
    </ul>
  </header>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Dosis&display=swap');

* {
  box-sizing: border-box;
}
body {
  line-height: 1.6;
  margin: 0;
  min-height: 100vh;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

h2,
h3,
a {
  color: #34495e;
}

a {
  text-decoration: none;
}

.logo {
  margin: 0;
  font-size: 1.45em;
}

.logo a,
.main-nav a {
  padding: 10px 15px;
  text-transform: uppercase;
  font-family: 'Dosis', sans-serif;
  text-align: center;
  display: block;
}

.main-nav a {
  color: #34495e;
  font-size: 0.99em;
}

.main-nav a:hover {
  color: #718daa;
}

.header {
  margin: 0px;
  background-color: pink;
  position: fixed;
  top: 0;
  width: 100%;
}

/* ================================= 
  Media Queries
==================================== */

@media only screen and (min-width: 769px) {
  .header,
  .main-nav {
    display: flex;
  }
  .header {
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    position: fixed;
    top: 0;
    width: 100%;
  }
}

@media only screen and (min-width: 1025px) {
  .header {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0;
    width: 100%;
  }
}
</style>
