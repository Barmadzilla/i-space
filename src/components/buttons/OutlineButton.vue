<template>
  <a :href="link" :class="color">
    <slot></slot>
  </a>
</template>

<script>
export default {
name: "OutlineButton",
  props:['link','color']
}
</script>

<style scoped>
a {
  display: inline-block;
  text-align: center;
  color: white;
  padding: 16px 30px 14px;
  border-radius: 8px;
  font-weight: bold;
  text-decoration: none;
  margin-right: 1em;

  box-sizing: border-box;
  font-size: 20px;
}
a.green{
  border: 1px solid var(--green);
  color: var(--green);
}
a.blue{
  border: 1px solid var(--deep-blue);
  color: var(--deep-blue);
}
</style>