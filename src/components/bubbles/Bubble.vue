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
  padding: .7em 1em;
  display: inline-block;
  margin: 0.6em;
  font-size: 15px;
  white-space: nowrap;
}
.bubble.white{
  background: white;
}

@media (max-width: 1024px) {
  .bubble{
    font-size: 13px;
  }
}
</style>