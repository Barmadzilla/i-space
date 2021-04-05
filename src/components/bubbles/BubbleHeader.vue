<template>
  <div class="bubble">
    <slot></slot>
    <img :src="require(`@/assets/images/tiny_arrow.svg`)" alt="">
  </div>
</template>

<script>
export default {
  name: "BubbleHeader"
}
</script>

<style scoped>
.bubble {
  background: rgba(255, 255, 255, 0.70);
  backdrop-filter: blur(10px);
  border-radius: 61px;
  padding: 15px 35px;
  display: inline-flex;
  align-items: center;
  max-width: 270px;
  text-align: left;
  user-select: none;
}

.bubble img {
  margin-left: 1.5em;
}
</style>