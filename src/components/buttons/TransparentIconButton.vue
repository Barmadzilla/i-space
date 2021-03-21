<template>
  <a :href="link" >
    <img src="@/assets/images/icons/telegram.svg" alt=""><slot></slot>
  </a>
</template>


<script>
export default {
  name: "TransparentIconButton",
  props: ['link','icon'],
}
</script>

<style scoped>
a {
  display: inline-block;
  text-align: center;
  background: var(--gradient);
  padding: 16px 30px  14px calc(30px + 18px  * 2);
  border-radius: 8px;
  font-weight: bold;
  text-decoration: none;
  margin-right: 1em;
  box-sizing: border-box;
  font-size: 20px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  z-index: 1;
}
a img{
  position: absolute;
  top: calc(50% - 13px);
  left: 30px;
}
a:before{
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  display: inline-block;
  border-radius: inherit;
  /*border-image: var(--gradient);*/
  border: 2px solid var(--green);
  /*border-image-slice: 1;*/
}
</style>