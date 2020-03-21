<script>
export default {
  name: 'Pricing',
  props: {
    title: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    description: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
  <div class="product">
    <div class="level">{{ title }}</div>
    <h2 class="applied-font">From ${{ price }}</h2>
    <ul class="applied-font">
      <li v-for="des in description" v-bind:key="des">{{ des }}</li>
    </ul>
    <button class="btn applied-font">Select</button>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Dancing+Script&display=swap');
@import url('https://fonts.googleapis.com/css?family=Dosis&display=swap');

.product {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  margin: 10px;
  border: 1px solid grey;
  border-radius: 3px;
}

.product > .level {
  background-color: pink;
  color: black;
  padding: 15px 0;
  width: 100%;
  font-weight: 900;
  font-family: 'Dancing Script', cursive;
  font-size: 24px;
  text-align: center;
}

.product > h2 {
  margin-top: 15px;
}

.product > ul {
  margin: 15px 0;
}

.product > ul > li {
  padding: 5px 0;
}

.product > button {
  border: 0;
  margin: 15px 0;
  background-color: pink;
}

.btn {
  padding: 0 20px;
  height: 40px;
  font-size: 1em;
  font-weight: bold;
  text-transform: uppercase;
  color: black;
  border-radius: 2px;
  cursor: pointer;
}

.applied-font {
  font-family: 'Dosis', sans-serif;
}
</style>
