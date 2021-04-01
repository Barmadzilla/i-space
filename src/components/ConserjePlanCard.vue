<template>
  <div class="card">
    <h2 v-html="title"></h2>
    <div class="price">{{ price }}</div>
    <list-item-play v-for="(item,i) in list" :key="i">{{ item }}</list-item-play>
  </div>
</template>

<script>
import ListItemPlay from "@/components/lists/ListItemPlay";

export default {
  name: "ConserjePlanCard",
  props: ['title', 'price', 'list'],
  components: {ListItemPlay}
}
</script>

<style scoped>
.card{
  background: white;
  padding: 2em;
  border-radius: 8px;
}
.price{
  font-weight: bold;
  margin: 1.5em 0;
}
h2 {
  margin: 0;
}
.list-item:last-child{
  margin-bottom: 0;
}
</style>