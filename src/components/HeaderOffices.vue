<template>
  <navigation/>
  <div class="slide">
    <div class="container">
      <div>
        <h1>Офисы под ключ<br/>
          Консьерж Сервис для сотрудников </h1>
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
        <div class="bubbles">
          <Bubble>Юлия Горлина<br>Администратор i-Space</Bubble>
        </div>
      </div>
    </div>
    <div class="features">
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
import TransparentIconButton from "@/components/buttons/TransparentIconButton";
import Bubble from "@/components/bubbles/BubbleHeader";
import Overlay from "@/components/Overlay";
import ModalClose from "@/components/ModalClose";
import ModalTelegram from "@/components/ModalTelegram";
import GradientBgButton from "@/components/buttons/GradientBgButton";


export default {
  name: "HeaderOffices",
  components: {
    Navigation, GradientBgButton, Bubble, TransparentIconButton,
    Overlay, ModalClose, ModalTelegram
  },
  data() {
    return {
      modal:false,
      words: [
        {
          title: 'Консьерж сервис',
          content: 'Практичная программа лояльности для сотрудников'
        },
        {
          title: 'Офисы под ключ',
          content: 'Организуем офис под ключ в СПб'
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

.bubble {
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