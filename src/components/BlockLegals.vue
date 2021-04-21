<template>
  <div class="bg-gray mobile-hide">
    <div class="container">
      <div class="info">
        <img src="../assets/images/pro_legals.svg" alt="">
        <div class="content">
          <h2>Юристы для <span class="text-gradient">IT-проектов</span></h2>
          <p>Возьмём на себя ежедневные юридические задачи, предотвратим любые риски для бизнеса и защитим ваши интересы и собственность</p>
        </div>
        <review :bg="'white'" :data="reviews" class="reviews mobile-hide"/>
      </div>
      <div class="buttons">
        <router-link :to="{ name: 'i-Legal'}">
          <solid-button :color="'blue'">Подробнее о юридическом сопровождении</solid-button>
        </router-link>
        <transparent-button class="mobile-hide" :color="'blue'" @click="modal = true">Получить консультацию</transparent-button>
      </div>
    </div>
    <div class="container mobile-hide">
      <div class="bubbles">
        <bubble :bg="'white'" v-for="(bubble,i) in bubbles" :key="i">{{ bubble }}</bubble>
      </div>
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
import TransparentButton from "@/components/buttons/TransparentButton";
import Bubble from "@/components/bubbles/Bubble";
import Review from "@/components/review/Review";
import SolidButton from "@/components/buttons/SolidButton";
import Overlay from "@/components/Overlay";
import ModalClose from "@/components/ModalClose";
import ModalTelegram from "@/components/ModalTelegram";


export default {
  name: "BlockLegals",
  components: {
    Bubble, Review, SolidButton, TransparentButton,
    Overlay, ModalClose, ModalTelegram
  },
  data() {
    return {
      modal: false,
      bubbles: [
        'Корпоративное право',
        'Шаблоны документов и договоров',
        'ФинТех проекты',
        'Электронная коммерция',
        'Защита данных и коммерческой тайны',
        'Инвестиционные проекты',
        'Антиоффшорное регулирование',
        'Международные сделки',
        'Трудовые вопросы',
        'Открытие бизнеса за рубежом',
        'Сопровождение M&A',
        'Реструктуризация бизнеса',
        'Налоговые вопросы',
        'Поддержка операционной деятельности',
        'Экспертный консалтинг',
      ],
      reviews: [
        {
          review: 'За годы работы поняли, что мало иметь хороших юристов — нужны юристы, разбирающихся в специфике нашего бизнеса. Команде i-Space мы говорим огромное «спасибо» за скрупулезную работу',
          reviewer: {
            name: 'Андрей Коротков',
            credits: 'Гендиректор Zillion Whales',
            logo: 'zillion-whales.svg',
          }
        }
      ]
    }
  },

}
</script>

<style scoped>
.info {
  display: flex;
  text-align: left;
  align-items: flex-start;
}


.reviews {
}

img {
  flex-shrink: 9;
  width: 100%;
}

.buttons {
  margin: 3em 0;
}

.bg-gray {
  background: var(--bg-gray);
  padding: 3em 0 0;
}

.content {
  flex-shrink: 8;
  margin: 0 1em;
}

h2 {
  margin-top: 0;
}

@media (max-width: 420px) {
  h2 {
    margin-top: 1em;
  }
  .bg-gray {
    background: var(--bg-gray);
    padding-bottom: 1em;
  }

  .info {
    display: block;
  }

  .buttons {
    margin: 1em 0;
  }
}
</style>