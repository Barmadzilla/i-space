<template>
  <div class="bg-gray">
    <div class="container">
      <div class="info">
        <img src="../assets/images/pro_legals.svg" alt="">
        <div class="content">
          <h2>Юристы для <span class="text-gradient">IT-проектов</span></h2>
          <p>Возьмём на себя ежедневные юридические задачи, предотвратим любые риски для бизнеса и защитим ваши интересы и собственность</p>
        </div>
        <review :bg="'white'" :data="reviews" class="reviews"/>
      </div>
      <div class="buttons">
        <solid-button :color="'blue'">Получить консультацию</solid-button>
        <Btn :bg="'gray'">Подробнее о юридическом сопровождении</Btn>
      </div>

    </div>
    <div class="wrap">
      <div class="bubbles">
        <bubble :bg="'white'"  v-for="(bubble,i) in bubbles" :key="i">{{ bubble }}</bubble>
      </div>
    </div>
  </div>
</template>

<script>
import Btn from "@/components/buttons/GradientButton";
import Bubble from "@/components/bubbles/Bubble";
import Review from "@/components/review/Review";
import SolidButton from "@/components/buttons/SolidButton";

export default {
  name: "BlockLegals",
  components: {Btn, Bubble, Review,SolidButton},
  data() {
    return {
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
          review: 'За годы работы поняли, что мало иметь хороших юристов — нужны юристы, разбирающихся в специфике нашего бизнеса. Команде i-Space мы говорим огромное «спасибо» за скурпулезную работу',
          reviewer: {
            name: 'Андрей Коротков',
            credits: 'Гендиректор Zillion Whales',
            logo: 'zillion-whales.svg',
          }
        }
      ]
    }
  }

}
</script>

<style scoped>
.info {
  display: flex;
  text-align: left;
  align-items: flex-start;
}

.info p {
  font-size: 25px;
  font-weight: 300;
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
  margin:0 1em;
}

h2 {
  margin-top: 0;
}
</style>