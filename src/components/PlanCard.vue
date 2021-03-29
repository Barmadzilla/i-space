<template>
  <div class="card">
    <h2 v-html="planTitle"></h2>
    <p class="subtitle">{{ subtitle }}</p>
    <p class="price">{{ price }}</p>
    <list-item-play v-for="(item, i) in services" :key="i">{{ item }}</list-item-play>
    <solid-button :color="'green'">Консультация по тарифу</solid-button>
  </div>
</template>

<script>
import ListItemPlay from "@/components/lists/ListItemPlay";
import SolidButton from "@/components/buttons/SolidButton";

export default {
  name: "PlanCard",
  props: ['planTitle', 'subtitle', 'price', 'services'],
  components: {ListItemPlay, SolidButton}
}
</script>

<style scoped>
.card {
  background: white;
  padding: 2.5em;
  border-radius: 8px;
}
.price{
  font-weight: bold;
  margin-bottom: 1em;
}
.subtitle{
  margin-bottom: 0.7em;
}
.card a{
  width: 100%;
  margin-top: 0.5em;
}
.card .list-item{
  margin-bottom: 1em;
}
.card h2{
  margin-top: 0;
}
</style>