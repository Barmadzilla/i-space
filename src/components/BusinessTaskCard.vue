<template>
  <div class="card">
    <img v-if="logo" :src="require(`@/assets/images/clients/${logo}`)" :alt="tittle">
    <h4 v-else>Кейс под NDA</h4>
    <h3>{{ tittle }}</h3>
    <p v-html="content"></p>
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
h4{
  margin-bottom: 1em;
  color: var(--bg-dark);
}

h3 {
  font-family: 'Circle', sans-serif;
  font-weight: bold;
  margin: 0 0 1em;
}
</style>