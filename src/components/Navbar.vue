<script>
export default {
  name: 'Navbar'
}
</script>

<template>
  <header class="header">
    <h1 class="logo"><a href="#">Northstar Fashsion</a></h1>
    <ul class="main-nav">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Products</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </header>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
body {
  font-family: 'Montserrat', sans-serif;
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
  background-color: #f4f4f4;
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
  }
}

@media only screen and (min-width: 1025px) {
  .header {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 70px;
    position: fixed;
  }
}
</style>
