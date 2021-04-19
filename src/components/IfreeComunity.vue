<template>
  <div class="container">
    <div>
      <img src="@/assets/images/clients/ifree.svg" alt="">
    </div>
    <div class="content">
      <div class="info">
        <h2>Комьюнити партнеров i-Free</h2>
        <p>i-Space — часть экосистемы i-Free. i-Free 20 лет развиваем инновационные IT-проекты и инвестируем в стартапы, которые становятся лидерами рынка в сферах AI,
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
    <img class="client" v-for="(client,i) in clients" :key="i" :src="require(`@/assets/images/clients/${client.img}`)" :alt="client.alt">
  </div>
  <div class="container">
    <h2>Наши новости и ближайшие мероприятия</h2>
    <div class="events">
      <news-card
          v-for="(event,i) in events"
          :key="i"
          :title="event.title"
          :date="event.date"
          :content="event.content"
          :img="event.img"
          :btn-title="event.btnTitle"
          :type="event.type"
          :link="event.link"
      >
        <router-link v-if="event.type === 'link'" :to="event.link">
          <transparent-button class="btn">{{ event.btnTitle }}</transparent-button>
        </router-link>
      </news-card>
    </div>
  </div>
</template>

<script>
import NewsCard from "@/components/NewsCard";
import ListItemPlay from "@/components/lists/ListItemPlay";
import TransparentButton from "@/components/buttons/TransparentButton";

export default {
  name: "IfreeComunity",
  components: {ListItemPlay, NewsCard, TransparentButton},
  data() {
    return {
      list: [
        'Участвуйте в мероприятиях i-Free и делитесь опытом',
        'Сотрудничайте с другими партнёрами i-Free',
        'Развивайте продукт быстрее и эффективнее'
      ],
      board: [
        {big: '13', small: 'Компаний в группе'},
        {big: '>700', small: 'Сотрудников в группе'},
        {big: '8', small: 'Офисов в 5 городах СНГ'},
        {big: '14', small: 'Успешных M&A сделок'},
        {big: '20', small: 'Лет опыта в IT-сфере'},
        {big: '>30', small: 'IT-компаний партнеров'},
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
          img: 'events/event_1.jpg',
          type: 'modal',
          btnTitle: 'Принять участие',
          link: ''
        },
        {
          title: 'Онлайн Вебинар «Что нельзя писать в рассылках»',
          date: '26.04.2021',
          content: 'Спикеры Наталья Юркова, Татьяна Топер. Ведущие юристы i-Legal',
          img: 'events/event_2.jpg',
          type: 'modal',
          btnTitle: 'Принять участие',
          link: ''
        },
        {
          title: 'КИК: новые правила, новые штрафы',
          date: '29.04.2021',
          content: '<small>Успейте подать отчетность до 30 апреля.</small><br>Напоминаем, что с марта 2021 увеличены штрафы за',
          img: 'events/event_3.jpg',
          type: 'link',
          btnTitle: 'Подробнее...',
          link: '/news/1'
        },
        {
          title: 'Как аудитория Кошелька выросла до 10 млн активных пользователей в месяц',
          date: '01.02.2021',
          content: 'Кошелёк — приложение для хранения банковских и дисконтных карт. Мы начали год с нового...',
          img: 'events/event_4.jpg',
          type: 'link',
          btnTitle: 'Подробнее...',
          link: '/news/2'
        }
      ]
    }
  }
}
</script>

<style scoped>
.container {
  padding: 3em;
  text-align: left;
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
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 2em;
  place-items: center;
  height: 80px;
  padding: 1em 3em 0;
  margin-bottom: -2em;

}

.clients img.client {
  max-width: 100%;
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

a.btn {
  width: 100%;
  margin-right: 0;
  margin-top: 1em;
}
@media (max-width: 1280px) {
  .big{
    font-size: 2em;
  }
  .small{
    font-size: 0.8em;
  }
}
</style>