<template>
  <div class="reviewer">
    <img v-if="logo" :src="require(`@/assets/images/reviews/${logo}`)" alt="">
    <div>
      <div class="name">{{ name }}</div>
      <div class="credits">{{ credits }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Reviewer",
  props: ['logo', 'credits', 'name']
}
</script>

<style scoped>
.reviewer{
  display: flex;
  margin-top: 1em;

}
img {
  margin-right: 1em;
}
</style>