<template>
  <footer id="footer" name="footer">
    <div class="container">
      <h2>Давайте обсудим <span class="text-gradient">ваши задачи</span></h2>
      <p class="subtitle">Оставьте заявку, чтобы получить консультацию и расчёт стоимости </p>
      <div class="columns">
        <form action="" v-if="!submitted">
          <input type="text" v-model="name" :placeholder="placeholder.name" required pattern="{,2}$">
          <input type="text" v-model="company" :placeholder="placeholder.company">
          <input type="email" v-model="email" :placeholder="placeholder.email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$">
          <input type="tel" v-model="phone" :placeholder="placeholder.phone" required @keypress.enter="sendData">
          <gradient-bg-button :class="{'disabled' : !valid}" @click="sendData">Получить консультацию и расчет стоимости</gradient-bg-button>
          <small>Отправляя заявку, вы принимаете
            условия<br>
            <router-link :to="{name:'Privacy',params:{section:'top'}}">соглашения и обработки персональных данных</router-link>
          </small>
        </form>
        <AfterSendMsg :name="senderName"  v-if="submitted"/>
<!--        <div class="msg" v-if="submitted">-->
<!--          <h2>{{ senderName }}.</h2>-->
<!--          <p>Мы уже получили Ваш запрос. <br> В ближайшие время наш менеджер свяжется с вами.</p>-->
<!--          <p>Спасибо!</p>-->
<!--        </div>-->
        <div class="steps">
          <div class="step" v-for="(step,i) in steps" :key="i">
            <h3>{{ step.title }}</h3>
            <p v-html="step.description"></p>
          </div>
        </div>
      </div>

    </div>
  </footer>
</template>

<script>
import GradientBgButton from "@/components/buttons/GradientBgButton";
import AfterSendMsg from "@/components/modals/AfterSendMsg";
const axios = require('axios')
export default {
  name: "Footer",
  components: {AfterSendMsg, GradientBgButton},
  computed: {
    valid() {
      return !!this.name && !!this.phone && !!this.email
    }
  },
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      company: '',
      placeholder: {
        name: 'Ваше имя',
        email: 'Ваш емейл',
        company:'Ваша Компания',
        phone: '+7(999) 999 99 99'
      },
      errored: Boolean,
      loading: Boolean,
      results: '',
      senderName: String,
      submitted: false,
      steps: [
        {title: 'Оставьте заявку', description: 'Оставьте заявку или <br/>напишите  нам в телеграм'},
        {title: 'Консультация и расчет', description: 'Обсудим ваши текущие задачи, оценим<br/> риски, соберем комплекс подходящих<br/> услуг и рассчитаем стоимость.'},
        {title: 'Начало работы', description: 'Подписываем договор, знакомим<br/> с вашим менеджером, создаём чат<br/> и начинаем работу в тот же день.'},
      ]
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
      this.message = "\nСвяжитесь со мной\n" +
          "😀 " + this.name + " из "+ this.company + "\n" +
          "📧 " + this.email + "\n" +
          "📱 " + this.phone + "\n\n" +
          "C нетерпением жду вашего ответа.";
      formData.append('msg', this.message);
      formData.append('type', this.$router.currentRoute['_rawValue'].path);
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
.btn{
  width: 93%;
  margin: 1.5em 0 0.5em;
  box-sizing: border-box;
}
footer {
  background: #000;
  padding: 3em 0;
  color: white;
}

h3 {
  margin-bottom: 0.5em;
  font-family: 'Circle', sans-serif;
}

p ,a{
  color: white;
}


.subtitle {
  font-size: 25px;
  margin-bottom: 2em;
}

.step {
  margin-bottom: 2em;
}

.steps {
  padding-left: 5em;
  background: url('../assets/images/steps.svg') no-repeat top left;
}


.columns {
  display: grid;
  grid-gap: 4em;
  grid-template-columns: repeat(2, 1fr);
}

input {
  appearance: none;
  outline: none;
  background: none;
  border: none;
  border-bottom: 1px solid #A5BDD0;
  width: 93%;
  color: white;
  box-sizing: border-box;
  padding: 20px 40px;
  margin-bottom: 1em;
  font-size: 14px;
  font-family: 'Raleway', sans-serif;
}

input::placeholder {
  color: #A5BDD0;
}

input[type="tel"] {
  font-size: 25px;
}

input[type="submit"] {
  border-radius: 8px;
  background: var(--gradient);
  color: white;
  border: none;
  font-weight: bold;
  font-size: 20px;
  margin-top: 1.5em;
}

form p {
  color: #A5BDD0;
  font-size: 14px;
}
@media (max-width: 420px) {
  .columns {
    grid-gap: 3em;
    grid-template-columns: 1fr;
  }
  .container{
    padding: 0 2em;
  }
  h2 {
    margin-top: 0;
  }
}
</style>