<template>
  <div class="card">
    <img v-if="logo" :src="require(`@/assets/images/clients/${logo}`)" :alt="tittle">
    <h3>{{ tittle }}</h3>
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  name: "BusinessTaskCard",
  props: ['logo', 'tittle', 'content']
}
</script>

<style scoped>
.card {
  padding: 40px;
  background: white;
  border-radius: 8px;
  text-align: left;
}

img {
  margin: 0 0 1.5em;
}

h3 {
  font-family: 'Circle', sans-serif;
  font-weight: bold;
  margin: 0 0 1em;
}
</style>