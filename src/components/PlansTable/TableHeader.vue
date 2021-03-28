<template>
  <div class="header">
    <div class="col" v-for="(col,i) in data" v-html="col" :key="i"></div>
  </div>
</template>

<script>
export default {
  name: "TableHeader",
  props: ['data']
}
</script>

<style scoped>
.header {
  background: black;
  color: white;
}
.col:nth-child(n+2){
  text-align: center;
}

</style>