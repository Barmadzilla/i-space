<template>
  <navigation/>
  <div class="slide">
    <div class="container">
      <h1>Аутисорсинг бизнес-процессов с глубокой экспертизой в сфере IT</h1>
      <div class="buttons">
        <GradientBgButton @click="modal = true">Получить консультацию</GradientBgButton>
        <transparent-icon-button :icon="'telegram'" :link="'tg://resolve?domain=@barmadzilla'">Написать в Телеграм</transparent-icon-button>
      </div>
      <div class="people-container">
        <img class="people" src="../assets/images/header_people.png" alt="">
      </div>
      <div class="bubbles">
        <router-link to="/finances" class="link">
          <Bubble>Бухгалтерия,<br> финансы и кадры</Bubble>
        </router-link>
        <router-link to="/i-legal" class="link">
          <Bubble>Юридическое<br>сопровождение</Bubble>
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
  <teleport to="#overlay">
    <Overlay v-if="modal">
      <modal-telegram
          :title="'Узнайте условия партнёрской системы i-Space'"
          :subtitle="'Оставьте заявку, чтобы обсудить партнёрские условия и стать партнёром i-Space'">
        <modal-close @click="modal = false"/>
      </modal-telegram>
    </Overlay>
  </teleport>
</template>

<script>
import Navigation from "@/components/Navigation";
import GradientBgButton from "@/components/buttons/GradientBgButton";
import TransparentIconButton from "@/components/buttons/TransparentIconButton";
import Bubble from "@/components/bubbles/BubbleHeader";
import Feature from "@/components/Feature";
import Overlay from "@/components/Overlay";
import ModalClose from "@/components/ModalClose";
import ModalTelegram from "@/components/ModalTelegram";


export default {
  name: "Header",
  components: {
    Navigation, Feature, Bubble, TransparentIconButton, GradientBgButton,
    Overlay, ModalClose, ModalTelegram
  },
  data() {
    return {
      modal: false
    }
  },
  watch: {
    modal() {
      if (this.modal) {
        document.documentElement.style.overflow = 'hidden'
      } else {
        document.documentElement.removeAttribute('style')
      }
    }
  }
}
</script>

<style scoped>

h1 {
  font-size: 39px;
  width: 81vw;
  max-width: 690px;
  margin: 2em auto 0;
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

.people-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  object-fit: contain;
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
  align-items: flex-start;
}

.features {
  padding: 2.5em 0 1em;
  margin-top: -4em;
  background: rgba(255, 255, 255, 0.70);
  backdrop-filter: blur(10px);
}
</style>