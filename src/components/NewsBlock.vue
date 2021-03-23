<template>
  <div class="bg">
    <div class="container">
      <h2><span class="text-gradient">Новости и лайфхаки</span> i-Space</h2>
      <div class="news">
        <news-card
            v-for="(item,i) in news"
            :key="i"
            :title="item.title"
            :date="item.date"
            :content="item.content"
            :img="item.img"
        />
      </div>
    </div>
  </div>
</template>

<script>
import NewsCard from "@/components/NewsCard";

export default {
  name: "NewsBlock",
  components: {NewsCard},
  data(){
    return{
      news: [
        {
          title: 'Visa стала доступна пользователям приложения «Кошелёк»',
          date: '23 октября 2020',
          content: 'Сервис бесконтактной оплаты Кошелёк Pay, встроенный в приложение «Кошелёк», теперь поддерживает платежи по картам Visa. Можно быстро и удобно перенести карту платежной системы в смартфон',
          img: 'news/event_1.jpg'
        },
        {
          title: 'Как аудитория Кошелька выросла до 10 млн активных пользователей в месяц',
          date: '20 октября 2020',
          content: 'Кошелёк — приложение для хранения банковских и дисконтных карт. Мы начали год с нового достижения: показатель MAU превысил 10 млн пользователей.',
          img: 'news/event_2.jpg'
        },
        {
          title: 'Нас ждет новая революция интерфейсов',
          date: '15 октября 2020',
          content: 'Кирилл Петров, управляющий директор и сооснователь Just AI – о том, как поймать новую технологическую волну. Кирилл Петров, управляющий директор и сооснователь Just AI – о том, как поймать новую технологическую волну.',
          img: 'news/event_3.jpg'
        },
        {
          title: 'Visa стала доступна пользователям приложения «Кошелёк»',
          date: '12 октября 2020',
          content: 'Сервис бесконтактной оплаты Кошелёк Pay, встроенный в приложение «Кошелёк», теперь поддерживает платежи по картам Visa. Можно быстро и удобно перенести карту платежной системы в смартфон',
          img: 'news/event_2.jpg'
        },
        {
          title: 'Онлайн Вебинар «Как автоматизировать CI\\CD своими руками» ',
          date: '10 октября 2020',
          content: 'Спикеры Наталья Юркова, Татьяна Топер. Ведущие юристы i-Legal',
          img: 'news/event_2.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped>
.container{
  text-align: center;
}
.news {
  display: flex;
  overflow: scroll;
  width: 100%;
  padding-bottom: 2em;
}
.bg {
  padding: 0 0 2em;
  background: var(--bg-blue);
}

h2 {
  --bottom:  5px;
  display: inline-block;
  margin: 2em auto 2em;
  position: relative;
  padding: 0 1.7em;
  background: url("../assets/images/arrow-left-alt.svg") no-repeat left bottom var(--bottom), url("../assets/images/arrow-right-alt.svg") no-repeat right bottom var(--bottom);
}
</style>