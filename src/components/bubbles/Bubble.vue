<template>
  <div class="bubble" :class="bg"><slot></slot></div>
</template>

<script>
export default {
  name: "Bubble",
  props:['bg']

}
</script>

<style scoped>
.bubble{
  background: var(--bg-gray);
  border-radius: 48px;
  padding: 15px 30px;
  display: inline-block;
  margin: 0.6em;
  font-size: 18px;
}
.bubble.white{
  background: white;
}
</style>