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
  transition: all 150ms;
  cursor: pointer;
}
a.blue{
  border-color: var(--deep-blue);
  color: var(--deep-blue);
}
a.blue:hover{
  background: var(--deep-blue);
}
a:hover{
  color: white;
  background: var(--green);
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
@media (max-width: 420px) {
  a{
    font-size: 15px;
    width: 100%;
    margin: 0 0 1em 0;
  }

}

</style>