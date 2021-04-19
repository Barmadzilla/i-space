<template>
  <div class="btn">
    <a :href="link">
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  name: "WhiteButton",
  props: ['link'],
}
</script>

<style scoped>
a {
  display: inline-block;
  text-align: center;
  background: var(--gradient);
  padding: 15px 30px;
  border-radius: 8px;
  font-weight: 700;
  text-decoration: none;
  margin-right: 1em;
  border: 1px solid transparent;
  position: relative;
  z-index: 1;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  box-sizing: border-box;
  font-size: 20px;
  width: 100%;
}
.btn{
  background: white;
  border-radius: 8px;
  text-align: center;
  display: inline-block;
  cursor: pointer;
}
a:hover{
  color: white;
  -webkit-background-clip: unset;
  -webkit-text-fill-color: unset;
}

@media (max-width: 1024px) {
  a{
    font-size: 16px;
    padding: 12px 30px 11px;
  }
}
</style>