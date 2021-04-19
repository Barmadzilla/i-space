<template>
  <div class="feature">
    <img v-if="number" :src="require(`@/assets/images/icons/feature_${number}.svg`)" alt="">
    <p>
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  name: "Feature",
  props: ['number']
}
</script>

<style scoped>
.feature {
  display: flex;
  align-items: flex-start;
  margin-left: 4em;
}

.feature:first-child {
  margin-left: 0;
}

img {
  margin-top: -0.25em;
}

p {
  text-align: left;
  margin-left: 1em;
}
@media (max-width: 1024px) {
  p{
    font-size: 15px;
  }
  .feature {
    margin-left: 2em;
  }
}
</style>