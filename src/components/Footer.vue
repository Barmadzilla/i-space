<template>
  <footer id="footer">
    <div class="container">
      <h2>Давайте обсудим <span class="text-gradient">ваши задачи</span></h2>
      <p class="subtitle">Оставьте заявку, чтобы получить консультацию и расчёт стоимости </p>
      <div class="columns">
        <form action="">
          <input type="text" placeholder="Ваше имя">
          <input type="text" placeholder="Название компании">
          <input type="text" placeholder="Электронная почта">
          <input type="tel" placeholder="+7 (999) 999-99-99">
          <gradient-bg-button>Получить консультацию и расчет стоимости</gradient-bg-button>
          <p>Нажимая на кнопку, вы даете согласие на обработку персональных данных</p>
        </form>
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

export default {
  name: "Footer",
  components: {GradientBgButton},
  data() {
    return {
      steps: [
        {title: 'Оставьте заявку', description: 'Оставьте заявку или <br/>напишите  нам в телеграм'},
        {title: 'Консультация и расчет', description: 'Обсудим ваши текущие задачи, оценим<br/> риски, соберем комплекс подходящих<br/> услуг и рассчитаем стоимость.'},
        {title: 'Начало работы', description: 'Подписываем договор, знакомим<br/> с вашим менеджером, создаём чат<br/> и начинаем работу в тот же день.'},
      ]
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

p {
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
</style>