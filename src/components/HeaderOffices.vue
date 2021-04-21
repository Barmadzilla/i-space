<template>
  <navigation/>
  <div class="slide">
    <div class="container">
      <div>
        <h1>Офисы под ключ<br/>
          Консьерж–Сервис для сотрудников </h1>
        <div class="words">
          <div class="word" v-for="(word,i) in words" :key="i">
            <h3>{{ word.title }}</h3>
            <p>{{ word.content }}</p>
          </div>
        </div>
        <div class="buttons">
          <gradient-bg-button @click="modal = true">Получить консультацию</gradient-bg-button>
          <transparent-icon-button :icon="'telegram'" :link="'tg://resolve?domain=@i_Space_team'">Написать в Телеграм</transparent-icon-button>
        </div>
      </div>
      <div class="person">
        <img src="../assets/images/faces/gorlina.png" alt="Елена Юманова">
      </div>
      <div class="bubbles">
        <Bubble>Юлия Горлина<br>Администратор i-Space</Bubble>
      </div>
    </div>
    <div class="features">
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
import TransparentIconButton from "@/components/buttons/TransparentIconButton";
import Bubble from "@/components/bubbles/BubbleHeader";
import Overlay from "@/components/Overlay";
import ModalClose from "@/components/ModalClose";
import ModalTelegram from "@/components/ModalTelegram";
import GradientBgButton from "@/components/buttons/GradientBgButton";


export default {
  name: "HeaderOffices",
  props:['info','title'],
  components: {
    Navigation, GradientBgButton, Bubble, TransparentIconButton,
    Overlay, ModalClose, ModalTelegram
  },
  data() {
    return {
      modal:false,
      words: [
        {
          title: 'Консьерж–сервис',
          content: 'Практичная программа лояльности для сотрудников'
        },
        {
          title: 'Офисы “под ключ”',
          content: 'Организуем любой офис “под ключ” в Петербурге'
        },
        {
          title: 'Внедрим инновации',
          content: 'Организуем гибридный формат работы в офисе'
        },
        {
          title: 'Экономия',
          content: 'Выбьем для вас лучшие условия'
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
  position: relative;
  padding: 7em 3em 8em;
}

.person {
  position: relative;

}

.person img {
  height: 80vh;
  min-height: 640px;
  max-height: 690px;
  position: absolute;
  right: -6em;
  top: 0;
}


h1 {
  font-size: 39px;
  margin: 1em 0;
}

.buttons {
  margin-top: 2em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.bubbles {
  display: flex;
  justify-content: flex-end;
  position: absolute;
  bottom: 4.5em;
  right: 3em;
  width: 100%;
  box-sizing: border-box;
}
.bubble {
  max-width: 282px;
}

.features {
  height: 6em;
  background: linear-gradient(rgba(255, 255, 255, 0.10), rgba(255, 255, 255, 1));
  /*backdrop-filter: blur(10px);*/
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
}

.words {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2em;
}

@supports (backdrop-filter: none) {
  .features {
    background: linear-gradient(rgba(255, 255, 255, 0.10) , rgba(255, 255, 255, 1));
    backdrop-filter: blur(10px);
  }
}

@media (max-width: 1140px) {
  h1 {
    font-size: 30px;
  }
}
</style>