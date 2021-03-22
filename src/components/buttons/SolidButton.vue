<template>
  <a :href="link" :class="color">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "SolidButton",
  props: ['link','color'],
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
  border: 1px solid transparent;
  box-sizing: border-box;
  font-size: 20px;
}
a.blue{
  background: var(--deep-blue);
}
a.green{
  background: var(--green);
}a.dark{
  background: var(--bg-dark);
}
</style>