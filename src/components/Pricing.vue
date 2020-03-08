<script>
export default {
  name: 'Pricing'
}
</script>

<template>
  <div class="product">
    <div class="level">Tenor Trombone</div>
    <h2>$600</h2>
    <ol>
      <li>Lorem ipsum.</li>
      <li>Lorem ipsum.</li>
      <li>Lorem ipsum.</li>
      <li>Lorem ipsum.</li>
    </ol>
    <button class="btn">Select</button>
  </div>
</template>

<style scoped>
.product {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 95%;
  margin: 10px;
  border: 1px solid #000;
  border-radius: 3px;
}

.product > .level {
  background-color: #ddd;
  color: black;
  padding: 15px 0;
  width: 100%;
  text-transform: uppercase;
  font-weight: 700;
}

.product > h2 {
  margin-top: 15px;
}

.product > ol {
  margin: 15px 0;
}

.product > ol > li {
  padding: 5px 0;
}

.product > button {
  border: 0;
  margin: 15px 0;
  background-color: lightblue;
}

.btn {
  padding: 0 20px;
  height: 40px;
  font-size: 1em;
  font-weight: 900;
  text-transform: uppercase;
  border: 3px black solid;
  border-radius: 2px;
  background: transparent;
  cursor: pointer;
}
</style>
