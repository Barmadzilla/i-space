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
    <small>Отправляя заявку, вы принимаете
      условия<br><router-link :to="{name:'Privacy',params:{section:'top'}}">соглашения и обработки персональных данных</router-link></small>

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
  },
  mounted() {
    document.documentElement.style.overflow = 'hidden'
  },
  unmounted(){
    document.documentElement.removeAttribute('style')
  }
}
</script>

<style scoped>

</style>