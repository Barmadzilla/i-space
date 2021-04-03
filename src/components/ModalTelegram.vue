<template>
  <div class="card">
    <slot></slot>
    <h2>{{ title }}</h2>
    <p>{{ subtitle }}</p>
    <form action="">
      <input type="text" v-model="name" :placeholder="placeholder.name">
      <input type="email" v-model="email" :placeholder="placeholder.email">
      <input type="tel" v-model="phone" :placeholder="placeholder.phone">
    </form>
    <gradient-bg-button>Узнать подробности!</gradient-bg-button>
    <small>Отправляя заявку, вы принимаете условия<br><a href="#">соглашения и обработки персональных данных</a></small>

  </div>
</template>

<script>
import GradientBgButton from "@/components/buttons/GradientBgButton";

export default {
  name: "ModalTelegram",
  props: ['title', 'subtitle'],
  components: {GradientBgButton},
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      placeholder: {
        name: 'Ваше имя',
        email: 'Ваш емейл',
        phone: '+7(999) 999 99 99'
      }
    }
  }
}
</script>

<style scoped>

</style>