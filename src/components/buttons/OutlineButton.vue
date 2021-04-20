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
@media (max-width: 1140px) {
  a {
    font-size: 18px;
    padding: 14px 30px 13px;
  }
}

@media (max-width: 1024px) {
  a{
    font-size: 16px;
    padding: 12px 30px 11px;
  }
}
</style>