<template>
  <div class="msg">
    <h2>{{ name }}</h2>
    <p>Мы уже получили Ваш запрос. <br> В ближайшие время наш менеджер свяжется с вами.</p>
    <p>Спасибо!</p>
  </div>
</template>

<script>
export default {
  name: "AfterSendMsg",
  props:['name']
}
</script>

<style scoped>

</style>