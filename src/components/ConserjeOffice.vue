<template>
  <div class="container">
    <div class="info">
      <h2 v-html="title"></h2>
      <div class="sub" v-html="subtitle"></div>
    </div>
    <div class="industry-grid">
      <div class="industry" v-for="(ind,i) in industry" :key="i">
        <img :src="require(`@/assets/images/icons/${ind.icon}`)">
        <p>{{ ind.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import('../assets/css/components/industry.css')

export default {
  name: "ConserjeOffice",
  props: ['title', 'subtitle'],
  data() {
    return {
      industry: [
        {
          content: 'Оформим визу, поможем получить паспорт или загранпаспорт',
          icon: 'fin-tech.svg',
        },
        {
          content: 'Получим разнообразные справки в госорганах',
          icon: 'game-devs.svg',
        },
        {
          content: 'Выполним мелкие поручения по городу (отвезем/привезем/оплатим)',
          icon: 'e-commerce.svg',
        },
        {
          content: 'Вернем налоговые вычеты ',
          icon: 'fmcg.svg',
        },
        {
          content: 'Позаботимся о пожилых родственниках',
          icon: 'mob-apps.svg',
        },
        {
          content: 'Выполним ваши особо важные поручения ',
          icon: 'startups.svg',
        },
      ]
    }
  }
}
</script>

<style scoped>


</style>