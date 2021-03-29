<template>
  <a :href="link" :class="color">
    <slot></slot>
  </a>
</template>


<script>
export default {
  name: "TransparentButton",
  props: ['link', 'color'],
}
</script>

<style scoped>
a {
  display: inline-block;
  text-align: center;
  background: transparent;
  padding: 16px 30px 14px;
  border-radius: 8px;
  font-weight: bold;
  text-decoration: none;
  margin-right: 1em;
  box-sizing: border-box;
  font-size: 20px;
  position: relative;
  z-index: 1;
  border: 2px solid var(--green);
  color: var(--green);
}
a.blue{
  border-color: var(--deep-blue);
  color: var(--deep-blue);
}

</style>