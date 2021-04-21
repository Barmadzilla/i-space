<template>
  <div class="bubble">
    <slot></slot>
    <img v-if="img" :src="require(`@/assets/images/tiny_arrow.svg`)" alt="">
  </div>
</template>

<script>
export default {
  name: "BubbleHeader",
  props:['img']
}
</script>

<style scoped>
.bubble {
  background: rgba(255, 255, 255, 1);
  /*backdrop-filter: blur(10px);*/
  border-radius: 61px;
  padding: 15px 35px;
  display: inline-flex;
  align-items: center;
  max-width: 270px;
  text-align: left;
  user-select: none;
}
@supports (backdrop-filter: none) {
  .bubble {
    background: rgba(255, 255, 255, 0.70);
    backdrop-filter: blur(10px);
  }
}

.bubble img {
  margin-left: 1.5em;
}

@media (max-width: 1280px) {
  .bubble{
    padding: 13px 32px;
    font-size: 16px;
    line-height: 1.2;
    max-width: 290px;
  }
  .bubble img{
    margin-left: 1.3em;
  }
}
@media (max-width: 1140px) {
  .bubble{
    padding: 10px 25px;
    font-size: 15px;
    line-height: 1.2;
    max-width: 290px;
  }
  .bubble img{
    margin-left: 1.1em;
  }
}
</style>