<template>
  <div class="btn">
    <a :href="link">
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  name: "GradientBgButton",
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

  border: 1px solid transparent;
  position: relative;
  z-index: 1;
  color: white;
  box-sizing: border-box;
  font-size: 20px;
  width: 100%;
  transition: all 150ms;
}
.btn{
  background: white;
  border-radius: 8px;
  text-align: center;
  display: inline-block;
  cursor: pointer;
  margin-right: 1em;
}
a:hover{

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  box-shadow: 1px 3px 3px rgba(0,0,0,0.20);
}

</style>