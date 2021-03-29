<template>
  <navigation/>
  <div class="slide">
    <div class="container">
      <h1>Аутисорсинг бизнес-процессов с глубокой экспертизой в сфере IT</h1>
      <div class="buttons">
        <Btn :bt-style="'gradient'">Получить консультацию</Btn>
        <transparent-icon-button :icon="'telegram'" :color="'blue'">Написать в Телеграм</transparent-icon-button>
      </div>
      <img class="people" src="../assets/images/header_people.png" alt="">
      <div class="bubbles">
        <Bubble>Юридическое<br>сопровождение</Bubble>
        <router-link to="/i-legal" class="link">
          <Bubble>Бухгалтерия,<br> финансы и кадры</Bubble>
        </router-link>
        <router-link to="/it-support" class="link">
          <Bubble>Поддержка DevOps<br> и IT-инфраструктуры</Bubble>
        </router-link>
      </div>
    </div>
  </div>
  <div class="features">
    <div class="container">
      <Feature :number="1">Снизим операционные расходы на 35% за счет аутсорсинга сервисных процессов.</Feature>
      <Feature :number="2">Индивидуальные тарифы, фиксированные цены, никаких скрытых платежей</Feature>
      <Feature :number="3">Сами подсказываем фаундерам, что требует внимания и доработки</Feature>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import Btn from "@/components/buttons/GradientButton";
import TransparentIconButton from "@/components/buttons/TransparentIconButton";
import Bubble from "@/components/bubbles/BubbleHeader";
import Feature from "@/components/Feature";

export default {
  name: "Header",
  components: {Navigation, Feature, Btn, Bubble, TransparentIconButton}
}
</script>

<style scoped>

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
  background: linear-gradient(to top, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0));
}

h1 {
  font-size: 39px;
  width: 81vw;
  max-width: 690px;
  margin: 2.5em auto 0;
}

.buttons {
  margin-top: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bubbles {
  display: flex;
  justify-content: space-around;
  position: absolute;
  bottom: 3em;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 0 10% 3.5em;
  margin: 0;
}

a.link {
  color: var(--text-gray);
  text-decoration: none;
}

.people {
  position: relative;
  bottom: -7em;
  margin-top: -4em;
  width: 90%;
}

.features .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.features {
  padding: 4em 0;
  margin-top: -4em;
  background: rgba(255, 255, 255, 0.70);
  backdrop-filter: blur(10px);
}
</style>