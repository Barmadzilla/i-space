<template>
  <div class="bg">
    <div class="container">
      <div class="header">
        <div class="info">
          <div>
            <h2><span class="text-gradient">Инвестируйте в результат,</span> а не потраченное время юристов</h2>
            <p>Подберите наиболее подходящий для вас тарифный план: тематические пакетные предложения, удобная подписочная модель или проектная оплата.  </p>
          </div>
          <img src="../assets/images/ilegal-dude.svg" alt="">
        </div>
      </div>
      <div class="content">
        <price-card
            v-for="(data,i) in priceList"
            :key="i"
            :title="data.title"
            :list="data.list"
            :price="data.price"
            :bottom-note="data.bottomNote"
            :top-note="data.topNote"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PriceCard from "@/components/PriceCard";

export default {
  name: "TeamPriceBlock",
  components: { PriceCard},
  data() {
    return {
      priceList: [
        {
          title: 'Новые пакетные предложения',
          price: '15 000 ₽',
          list: [
            'Аудит вашего актива на  предмет рисков - от&nbsp;<strong>20 000 ₽</strong>',
            'Оформление интеллектуальной собственности – от&nbsp;<strong>50 000 ₽</strong>',
            'M&A сопровождение – от&nbsp;<strong>99 000 ₽</strong>',
            'Оформление интеллектуальной собственности – от&nbsp;<strong>50 000 ₽</strong>',
            'Оформление товарного знака  – от&nbsp;<strong>15 000 ₽</strong>',
          ],
          topNote: 'Вы всегда понимаете за что вы платите!',
          bottomNote: '',

        },
        {
          title: 'Проектная работа',
          price: '15 000 ₽',
          topNote: '',
          list: [
            'Структурирование бизнеса зарубежом - от&nbsp;<strong>40 000 ₽</strong>',
            'Юридическая упаковка стартапов - от&nbsp;<strong>20 000 ₽</strong>',
            'Регистрация ПО в  реестрах РФ и за рубежом  - от&nbsp;<strong>15 000 ₽</strong>',
            'GDPR, персональные данные - от&nbsp;<strong>50 000 ₽</strong>',
            'Структурирование сделки с IP - от&nbsp;<strong>80 000 ₽</strong>',
            'Due Diligence вашего проекта   - от&nbsp;<strong>50 000 ₽</strong>',

          ],
          bottomNote: ''
        }
      ]
    }
  }
}
</script>

<style scoped>
.bg {
  background: var(--bg-blue);
}

.container {
  text-align: left;
  padding: 3em 0;
}

.info {
  display: flex;
}

.reviews {
  margin: auto;
  width: 48%;
  max-width: unset;
}

.header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1em;
}

.info p {
  font-size: 25px;
  font-weight: 300;
}
.content{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2em;
}
img {
  margin-bottom: -1.8em;
  height: calc(350px + 2em);
  flex-shrink: 0;
}
</style>