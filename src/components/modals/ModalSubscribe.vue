<template>
  <div class="card">
    <slot></slot>
    <pre v-show="false">Pth: {{ $router.currentRoute['_rawValue'].path }}</pre>
    <pre v-show="false">{{ results }}</pre>
    <form action="" v-if="!submitted">
      <h2>{{ title }}</h2>
      <p>{{ subtitle }}</p>
      <input type="text" v-model="name" :placeholder="placeholder.name" required pattern="{,2}$">
      <input type="email" v-model="email" :placeholder="placeholder.email" required @keypress.enter="sendData" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$">
      <gradient-bg-button :class="{'disabled' : !valid}" @click="sendData">Подписаться!</gradient-bg-button>
      <small>Отправляя заявку, вы принимаете условия<br>
        <router-link :to="{name:'Privacy',params:{section:'top'}}">соглашения и обработки персональных данных</router-link>
      </small>
    </form>
    <after-send-msg :name="senderName" v-if="submitted"/>
  </div>
</template>

<script>
import GradientBgButton from "@/components/buttons/GradientBgButton"
import AfterSendMsg from "@/components/modals/AfterSendMsg";

const axios = require('axios')
export default {
  name: "ModalSubscribe",
  props: ['title', 'subtitle', 'type'],
  components: {AfterSendMsg, GradientBgButton},
  computed: {
    valid() {
      return !!this.name && !!this.email
    },
  },
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      placeholder: {
        name: 'Ваше имя',
        email: 'Электронная почта ',
        phone: '+7 999 999 9999'
      },
      errored: Boolean,
      loading: Boolean,
      results: '',
      senderName: String,
      submitted: false
    }
  },
  methods: {
    sendData() {
      return this.valid && this.submitForm()
    },
    submitForm() {
      const formData = new FormData();
      let httpHeaders = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      };
      this.message = `\nХочу подписатся на ${this.type}\n` +
          "😀 " + this.name + "\n" +
          "📧 " + this.email + "\n"
      formData.append('msg', this.message);
      formData.append('type', 'subscribe');
      axios.post('send.php', formData, httpHeaders)
          .then(response => {
            this.results = response.data
          })
          .finally(() => {
            this.loading = false
          });
      this.senderName = this.name;
      this.loading = true;
      this.submitted = true
    }
  }

}
</script>

<style scoped>

</style>