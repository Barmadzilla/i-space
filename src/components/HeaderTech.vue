<template>
  <navigation :logo="'it'"/>
  <div class="slide">
    <div class="container">
      <div>
        <h1>Управление IT инфраструктурой DevOps практики, поддержка 24/7</h1>
        <div class="words">
          <div class="word" v-for="(word,i) in words" :key="i">
            <h3>{{ word.title }}</h3>
            <p>{{ word.content }}</p>
          </div>
        </div>
        <div class="buttons">
          <Btn :bt-style="'gradient'">Получить консультацию</Btn>
          <transparent-icon-button :icon="'telegram'">Написать в Телеграм</transparent-icon-button>
        </div>
      </div>
      <div class="person">
        <img src="../assets/images/Shonin.png" alt="Алексей Шонин">
        <div class="bubbles">
          <Bubble>Алексей Шонин<br>Технический директор</Bubble>
        </div>
      </div>
    </div>
    <div class="features">
    </div>
  </div>

</template>

<script>
import Navigation from "@/components/Navigation";
import Btn from "@/components/buttons/GradientButton";
import TransparentIconButton from "@/components/buttons/TransparentIconButton";
import Bubble from "@/components/bubbles/BubbleHeader";

export default {
  name: "HeaderTech",
  components: {Navigation, Btn, Bubble, TransparentIconButton},
  data() {
    return {
      words: [
        {
          title: 'Автоматизизация',
          content: 'DevOps-сопровождение проектов. Строим системы Continuous Integration.'
        },
        {
          title: 'Надежность',
          content: 'Проектируем отказоустойчивые инфраструктуры любой сложности.'
        },
        {
          title: 'Самостоятельность',
          content: 'Замечаем неполадки до того, как они вырастают в проблемы.'
        },
        {
          title: 'Всегда на связи',
          content: 'Поддержка и администрирование  24/7/365.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.container {
  text-align: left;
  display: grid;
  grid-template-columns: auto 38%;
}

.person {
  text-align: right;
  position: relative;
  padding-top: 3em;
}

.person img {
  height: 78vh;
}

.slide {
  background: url("../assets/images/bg/slider.svg") center / cover no-repeat, linear-gradient(to top, #E0EAE7, #F6F6F6);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 500px;
  position: relative;
  overflow: hidden;
}

.slide:after {
  content: '';
  width: 100%;
  height: 8em;
  position: absolute;
  bottom: 0;
  left: 0;
  background: linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
}

h1 {
  font-size: 39px;
  margin: 2.5em 0 1em;
}

.buttons {
  margin-top: 2em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.bubbles {
  display: flex;
  justify-content: space-around;
  position: absolute;
  bottom: 5em;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 0 10% 3.5em;
  margin: 0;
}

.features {
  height: 6em;
  background: rgba(255, 255, 255, 0.70);
  backdrop-filter: blur(10px);
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}

.words {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2em;
}
</style>