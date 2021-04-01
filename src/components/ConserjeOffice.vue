<template>
  <div class="container">
    <div class="info">
      <h2 v-html="title"></h2>
      <p v-html="subtitle"></p>
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
export default {
  name: "ConserjeOffice",
  props: ['title', 'subtitle'],
  data() {
    return {
      industry: [
        {
          content: 'Оформим визу, поможем получить паспортом или загран паспортом',
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
.industry-grid {
  margin: 4em 0 0;
  padding-bottom: 4em;
  display: grid;
  grid-gap: 2.5em;
  grid-template-columns: repeat(2, 1fr);
}

.industry {
  display: flex;
  padding: 0 2em;
}

.industry img {
  margin-right: 1.5em;
}

.industry h3 {
  margin-top: .1em;
}

.info h2 {
  margin-top: 0;
}

.info p {
  font-size: 25px;
  font-weight: 300;
}
</style>