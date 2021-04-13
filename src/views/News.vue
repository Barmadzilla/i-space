<template>
  <navigation/>
  <div class="news single">
    <div class="container" v-once id="top">
      <div class="image" v-if="current.image"><img alt="" :src="require(`@/assets/images/news/large/${current.image}`)"></div>
      <h2>{{ current.title }}</h2>
      <div class="date">{{ current.date }}</div>
      <div class="content" v-html="current.content"></div>
    </div>
  </div>
</template>

<script>
// import Header from "@/components/Header";

import Navigation from "@/components/Navigation";

export default {
  name: "News",
  components: {Navigation},
  computed: {
    current() {
      return this.news.find(cur => cur.id === parseInt(this.$route.params.id, 10))
      // return this.$route.params.id
    }
  },
  data() {
    return {
      news: [
        {
          id: 1,
          title: 'КИК: новые правила, новые штрафы',
          date: '01.02.2021',
          image:'',
          content: `<p>“Напоминаем, что с марта 2021 увеличены штрафы за непредоставление уведомления о КИК и документов, подтверждающих суммы прибыли/убытка КИК. Сумма штрафа составляет 500 000 руб.</p>
<p>Также налоговые органы вправе оштрафовать налогоплательщика на 1 000 000 руб. в случае непредоставления недостающих документов, подтверждающих применение освобождений КИК или размер прибыли/убытка КИК.</p>
<p>Кроме того, появилась обязанность подавать финансовую отчетность даже по убыточным КИК.</p>
<p>Срок подачи уведомлений о КИК для физических лиц – 30 апреля.” </p>
<p>Чуть ниже красиво заверстать кнопку “получить консультацию”</p>`
        }, {
          id: 2,
          date: '01.02.2021',
          image:'first.jpg',
          title: 'Как аудитория Кошелька выросла до 10 млн активных пользователей в месяц',
          content: `
          <p>Кошелёк — приложение для хранения банковских и дисконтных карт. Мы начали год с нового достижения: показатель MAU превысил 10 млн пользователей. За последние пару лет наша команда выросла вдвое, и я обещал ребятам написать статью об истории Кошелька: как он создавался и менялся и какие события привели нас в ту точку, в которой мы находимся сейчас.</p>
<p>Сегодня в Кошельке зарегистрированы 18 млн покупателей. В Кошелёк встроен первый российский мобильный сервис бесконтактной оплаты Кошелёк Pay, который поддерживает карты Visa и Mastercard. А партнёры сервиса — крупнейшие розничные банки, в том числе Тинькофф, Банк ВТБ, Райффайзенбанк, МТС Банк, Альфа-Банк, и торговые сети: «Перекрёсток», «ВкусВилл», «Пятёрочка», «ЛЕНТА», «М.Видео», Adidas Group, Lamoda, United Colors of Benetton.</p>
<p>История Кошелька — это история о том, как вот уже 8 лет мы балансируем между насущными потребностями наших пользователей и желанием привносить что-то кардинально новое в их пользовательский опыт. Мы до сих пор обсуждаем внутри команды, можно ли было дойти до той точки, в которой мы находимся сейчас, более простым путем. Но, кажется, что как и у любой большой и сложной истории, причинно-следственные связи не были линейными и каждый этап развития был по-своему важен.</p>
<p>Читать полную версию <a href="https://vc.ru/u/22916-filipp-shubin/199332-kak-auditoriya-koshelka-vyrosla-do-10-mln-aktivnyh-polzovateley-v-mesyac-i-kak-prilozhenie-budet-razvivatsya-dalshe?fbclid=IwAR2-F5IqFuMN0ATuZtwt43UN4dk__X-9VnkVLPl58QDMbyZMj-mF7lNNjM4">по ссылке.</a></p>
`
        }
      ]
    }
  }
}
</script>

<style scoped>

.container {
  padding: 5em 3em 3em;
  max-width: 800px;
  min-width: unset;
}
.image img{
  width: 100%;
}
.date {
  font-size: 16px;
  font-family: 'Raleway', sans-serif;
  margin: 1.5em 0;
}
</style>