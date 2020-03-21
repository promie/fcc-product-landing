<script>
export default {
  name: 'Footer'
}
</script>

<template>
  <footer>
    <ul>
      <li><a href="">Privacy</a></li>
      <li><a href="">Terms</a></li>
      <li><a href="">Contact</a></li>
    </ul>
    <span>Developed By P Yutasane</span>
  </footer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Dosis&display=swap');

footer {
  margin-top: 30px;
  background-color: pink;
  font-family: 'Dosis', sans-serif;
  padding: 20px;
}

footer > ul {
  display: flex;
  justify-content: center;
  list-style: none;
}

footer > ul > li {
  padding: 0 10px;
}

a {
  text-decoration: none;
  color: #34495e;
}

footer > span {
  margin-top: 5px;
  display: flex;
  justify-content: center;
  font-size: 0.9em;
  color: #34495e;
}

@media only screen and (min-width: 768px) {
  footer > ul {
    justify-content: flex-end;
  }
  footer > span {
    justify-content: flex-end;
  }
}
</style>
