<template>
  <navigation/>
  <div class="slide">
    <div class="container">
      <div class="header">
        <h1>Аутсорсинг <span class="retype"></span> <br>с глубокой экспертизой в сфере IT</h1>
        <div class="buttons">
          <GradientBgButton @click="modal = true">Получить консультацию</GradientBgButton>
          <transparent-icon-button :icon="'telegram'" :link="'tg://resolve?domain=@i_Space_team'">Написать в Телеграм</transparent-icon-button>
        </div>
      </div>
      <div class="people-container">
        <img class="people" src="../assets/images/header_people.png" alt="">
      </div>
      <div class="bubbles">
        <router-link :to="{ name: 'Finances'}" class="link">
          <Bubble :img="true">Бухгалтерия,<br> финансы и кадры</Bubble>
        </router-link>
        <router-link :to="{ name: 'i-Legal'}" class="link">
          <Bubble :img="true">Юридическое<br>сопровождение</Bubble>
        </router-link>
        <router-link :to="{ name: 'It Support'}" class="link">
          <Bubble :img="true">Поддержка DevOps<br> и IT-инфраструктуры</Bubble>
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
      <modal-telegram>
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
    Overlay, ModalClose, ModalTelegram,
  },
  data() {
    return {
      modal: false,
      // pageTitle: "i-Legal"
    }
  },
  methods: {
    setTitle() {
      let docTitle = document.querySelector('head title')
      let text = document.querySelector('head title').innerText
      if (this.pageTitle) {
        return docTitle.innerText = `${text} - ${this.pageTitle}`
      }
    },
    tw(el, char) {
      el.innerText += char
    },
    test(el, char) {
      setTimeout(function tick() {
        el.innerText += char
        setTimeout(tick, 50); // (*)
      }, 50);
    },
    loop(el, text, i) {
      let that = this;
      if (i < text.length) {
        el.innerText += text[i]
        i++
        setTimeout(() => that.loop(), 1000)
      }
    }
  },
  mounted() {
    this.setTitle()
    let el = document.querySelector('.retype')
    // let text = 'бизнес-процессов'
    el.innerText = 'бизнес-процессов'
    // let i = 0
    // this.loop(el, text, i)
  }
}
</script>

<style scoped>
.container{
  padding: 6em 3em 0;
}

h1 {
  font-size: 39px;
  width: 81vw;
  max-width: 690px;
  margin: 0 auto;
  text-align: center;
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
  bottom: 6em;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 0 10% 0;
  margin: 0 auto;
  z-index: 3;
  min-width: 1024px;
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
  bottom: -3em;
  margin-top: -2em;
  width: 80%;
  transition: width 150ms;
}


.features .container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 0 ;
}

.features {
  padding: 2.5em 0 1em;
  margin-top: -4em;
  background: linear-gradient(rgba(255, 255, 255, 0.30) , rgba(255, 255, 255, 1)50%);
  position: relative;
  z-index: 1;
  /*backdrop-filter: blur(10px);*/
}

@supports (backdrop-filter: none) {
  .features {
    background: linear-gradient(rgba(255, 255, 255, 0.30) , rgba(255, 255, 255, 1));
    backdrop-filter: blur(10px);
  }
}

@media (max-width: 1280px) {
  .people {
    width: 90%;
  }
  h1 {
    font-size: 35px;
  }

}
@media (max-width: 1140px) {
  h1 {
    font-size: 30px;
  }
}
@media (max-width: 1024px) {
  h1 {
    font-size: 30px;
  }
}
</style>