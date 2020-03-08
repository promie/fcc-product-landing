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
    <span>Copyright, 2020, Northstar Fashion</span>
  </footer>
</template>

<style scoped>
footer {
  margin-top: 30px;
  background-color: #ddd;
  padding: 20px;
}

footer > ul {
  display: flex;
  justify-content: flex-end;
}

footer > ul > li {
  padding: 0 10px;
}

footer > span {
  margin-top: 5px;
  display: flex;
  justify-content: flex-end;
  font-size: 0.9em;
  color: #444;
}
</style>
