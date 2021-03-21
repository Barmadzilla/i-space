<template>
  <div class="quote">
    <h3 v-html="title"></h3>
    <p>{{ quote }}</p>
  </div>
</template>

<script>
export default {
  name: "Quote",
  props: ['title', 'quote']
}
</script>

<style scoped>
h3{
  font-size: 24px;
  margin-bottom: 1em;
  width: 75%;
  position: relative;
}
h3:after{
  content: '';
  background: url("../assets/images/quotes.svg") no-repeat center;
  width: 52px;
  height: 37px;
  position: absolute;
  top: 8px;
  right: -52px;
}
p{
  font-family: 'Raleway',sans-serif;
  opacity: 0.6;
  font-style: italic;
}
.quote{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>