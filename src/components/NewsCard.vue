<template>
  <div class="card">
    <img :src="require(`@/assets/images/${img}`)" :alt="title">
    <div class="date">{{ date }}</div>
    <h3>{{ title }}</h3>
    <div class="content" v-html="content"></div>
  </div>
</template>

<script>
export default {
  name: "NewsCard",
  props: ['title', 'img', 'date', 'content']
}
</script>

<style scoped>
.card{
  width: 360px;
  margin-right: 2em;
  text-align: left;
}
h3 {
  font-size: 24px;
  font-family: 'Circe',sans-serif;
  margin-bottom: 15px;
  font-weight: bold;
}
.date{
  font-size: 14px;
  font-family: 'Raleway', sans-serif;
  margin: 1.5em 0;
}
</style>