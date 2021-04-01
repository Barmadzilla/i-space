<template>
  <navigation :logo="'finances'"/>
  <div class="slide">
    <div class="container">
      <div>
        <h1>Аутсорсинг бухгалтерии</h1>
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
        <img src="../assets/images/faces/umanova.png" alt="Елена Юманова">
        <div class="bubbles">
          <Bubble>Елена Юманова<br>Руководитель i-Space. Finance</Bubble>
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
name: "HeaderFinances",
  components: {Navigation, Btn, Bubble, TransparentIconButton},
  data() {
    return {
      words: [
        {
          title: 'Все включено',
          content: 'Бухгалтерия, налоги, кадры, льготы'
        },
        {
          title: 'Индивидуальный подход',
          content: 'Беремся за нестандартные кейсы'
        },
        {
          title: 'Экспертиза в IT',
          content: 'Глубоко понимаем специфику IT, говорим на одном языке'
        },
        {
          title: 'Всегда на связи',
          content: 'Круглосуточная забота о вашем бизнесе. Без отпусков и больничных'
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
.bubble{
  max-width: 282px;
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