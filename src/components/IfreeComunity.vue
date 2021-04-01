<template>
  <div class="container">
    <div>
      <img src="@/assets/images/clients/ifree.svg" alt="">
    </div>
    <div class="content">
      <div class="info">
        <h2>Комьюнити партнеров i-Free</h2>
        <p>i-Space — часть группы компаний i-Free. Уже 20 лет мы развиваем инновационные IT-проекты и инвестируем в стартапы, которые становятся лидерами рынка в сферах AI,
          Fintech, FoodTech и других.</p>
        <p>Клиенты i-Space становятся частью сообщества. <br>Мы постоянно ищем возможности партнёрства участников:</p>
        <br>
        <list-item-play v-for="(item,i) in list" :key="i">{{ item }}</list-item-play>
      </div>
      <div class="board">
        <div v-for="(item,i) in board" :key="i" class="numbers">
          <div class="big">{{ item.big }}</div>
          <div class="small" v-html="item.small"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="clients">
    <img v-for="(client,i) in clients" :key="i" :src="require(`@/assets/images/clients/${client.img}`)" :alt="client.alt">
  </div>
  <div class="container">
    <h2>Приходите на наши мероприятия</h2>
    <div class="events">
      <news-card
          v-for="(event,i) in events"
          :key="i"
          :title="event.title"
          :date="event.date"
          :content="event.content"
          :img="event.img"
      />
    </div>
  </div>
</template>

<script>
import NewsCard from "@/components/NewsCard";
import ListItemPlay from "@/components/lists/ListItemPlay";

export default {
  name: "IfreeComunity",
  components: {ListItemPlay, NewsCard},
  data() {
    return {
      list: [
        'Участвуйте в мероприятиях i-Free и делитесь опытом',
        'Сотрудничайте с другими партнёрами i-Free',
        'штатное расписание и должностные инструкции',
        'Развивайте продукт быстрее и эффективнее'
      ],
      board: [
        {big: '13', small: 'Компаний в группе'},
        {big: '>700', small: 'Сотрудников в группе'},
        {big: '8', small: 'Офисов в 5 городах СНГ'},
        {big: '14', small: 'Успешных M&A сделок'},
        {big: '20', small: 'Лет опыта в IT-сфере'},
        {big: '>30', small: 'IT-компаний среди клиентов'},
      ],
      clients: [
        {alt: 'My Games', img: 'my-games.svg'},
        {alt: 'Yandex', img: 'ya.svg'},
        {alt: 'Сбер Корус', img: 'sber-chorus.svg'},
        {alt: 'space307', img: 'space307.svg'},
        {alt: 'CM Games', img: 'cm.svg'},
      ],
      events: [
        {
          title: 'Онлайн Вебинар «Персональные данные и GDPR»',
          date: '07.04.2021',
          content: 'Спикеры Наталья Юркова, Татьяна Топер. Ведущие юристы i-Legal',
          img: 'news/event_1.jpg'
        },
        {
          title: 'Онлайн Вебинар «Что нельзя писать в рассылках»',
          date: '26.04.2021',
          content: 'Спикеры Наталья Юркова, Татьяна Топер. Ведущие юристы i-Legal',
          img: 'news/event_2.jpg'
        },
        {
          title: 'Онлайн Вебинар «Как автоматизировать CI\\CD, лучшие практики”',
          date: '29.04.2021',
          content: 'Спикеры Калошин Александр, Максим Игнатьев.  DevOps инженеры ЛастБакенд.',
          img: 'news/event_3.jpg'
        },
        {
          title: 'Онлайн Вебинар «Как автоматизировать CI\\CD своими руками» ',
          date: '10.01.2021',
          content: 'Спикеры Наталья Юркова, Татьяна Топер. Ведущие юристы i-Legal',
          img: 'news/event_2.jpg'
        },
        {
          title: 'Онлайн Вебинар «Как автоматизировать CI\\CD своими руками» ',
          date: '10.01.2021',
          content: 'Спикеры Наталья Юркова, Татьяна Топер. Ведущие юристы i-Legal',
          img: 'news/event_2.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped>
.container {
  padding: 3em 0;
  text-align: left;
}

.info p {
  font-size: 25px;
  margin-bottom: 1em;
}

.list-item {
  margin-bottom: 0.7em;
}

.board {
  padding: 30px 30px 260px 30px;
  border-radius: 8px;
  background: var(--bg-blue) url("../assets/images/bg/board.svg") no-repeat bottom center;
  display: grid;
  grid-gap: 2em;
  grid-template-columns: 1fr 1fr 1fr;

}

.content {
  display: grid;
  grid-gap: 2em;
  grid-template-columns: 1fr 1fr;
}

.big {
  font-family: 'Raleway', sans-serif;
  font-size: 2.6em;
  font-weight: bold;
}

.numbers {
  max-width: 150px;
  margin: auto;
}

.clients {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 1em 3em 0;
  margin-bottom: -2em;
}

.clients img {
  margin: 0 1em;
}

.container {
  position: relative;
}

.events {
  display: flex;
  overflow: scroll;
  width: 100%;
  padding-bottom: 2em;
}

hr {
  border-color: #A5BDD0;
  margin-top: 2em;
}
</style>