<template>
  <div class="info">
    <h2 v-html="title"></h2>
    <div class="content">
    <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Info",
  props: ['title']
}
</script>

<style scoped>
h2 {
  margin-top: 0;
}

.info .content {
  font-size: 25px;
}
</style>