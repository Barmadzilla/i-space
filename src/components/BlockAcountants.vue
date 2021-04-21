<template>
  <div class="bg-gray mobile-hide">
    <div class="container">
      <div class="info">
        <img src="../assets/images/pro_acountants.svg" alt="">
        <div class="content">
          <h2>Финансы <span class="text-gradient">под контролем</span></h2>
          <p>Наведём порядок в финансах компании. Автоматизируем учёт, оптимизируем налоги. Поможем со сделками и исключим вероятность получения штрафов.</p>
        </div>
        <review :bg="'white'" :data="reviews" class="reviews mobile-hide"/>
      </div>
      <div class="buttons">
        <router-link :to="{ name: 'Finances'}">
          <solid-button :color="'blue'">Подробнее о финансовом сопровождении</solid-button>
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
import Bubble from "@/components/bubbles/Bubble";
import Review from "@/components/review/Review";
import SolidButton from "@/components/buttons/SolidButton";
import TransparentButton from "@/components/buttons/TransparentButton";
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
        'Бухгалтерский учёт',
        'Расчёт заработных плат',
        'Налоговая отчётность',
        'Финансовая отчётность',
        'Отчётность по МСФО',
        'Due Diligence при поглощении или слиянии',
        'Восстановление учета',
        'Оптимизация налогообложения',
        'Автоматизация документооборота',
        'Открытие счетов в зарубежных банках',
        'Мониторинг законодательства',
        'Валютный контроль',
      ],
      reviews: [
        {
          review: 'Обнаружили в работе прошлого подрядчика большое количество неверных расчетов и ошибок. Оперативно восстановили весь учет. Закрыли риски по налогам на несколько миллионов рублей.',
          reviewer: {
            name: 'Кейс под NDA',
            credits: '',
            logo: 'nda.svg',
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

.bg-gray {
  background: var(--bg-gray);
  padding-bottom: 1em;
}


.buttons {
  margin: 1em 0;
}


</style>