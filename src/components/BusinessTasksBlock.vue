<template>
  <div class="bg">
    <div class="container">
      <h2>Решаем <span class="text-gradient">конкретные задачи</span> бизнеса</h2>
      <div class="content">
        <div class="card big">
          <div class="columns">
            <business-task-card
                :logo="current.logo"
                :tittle="current.tittle"
                :content="current.content"
            />
            <div class="vertical-line"></div>
            <div class="review">
              <div class="header">
                <div class="face">
                  <img src="../assets/images/faces/petrov.jpg" alt="">
                </div>
                <div class="name">Кирилл Петров,<br/>основатель Just AI</div>

              </div>
              <div class="review-content">
                <p> Мы полностью доверяем нашим партнерам из i-Space и благодарны им за профессионализм, индивидуальный подход и эффективное решение наших бизнес-задач!
                  Приведу лишь один из множества примеров позитивного эффекта от работы i-Space:</p>
                <p>Благодаря юридической поддержке i-Space мы провели несколько успешных M&A сделок в рекордно сжатые сроки и на выгодных для нас условиях.</p>
              </div>
            </div>
          </div>
        </div>
        <business-task-card
            v-for="(item,i) in tasks"
            :key="i"
            :logo="item.logo"
            :tittle="item.tittle"
            :content="item.content"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BusinessTaskCard from "@/components/BusinessTaskCard";

export default {
  name: "BusinessTasksBlock",
  components: {BusinessTaskCard},
  data() {
    return {
      current: {
        logo: 'just-ai.svg',
        tittle: 'Организовали комплексную финансовую, юридическую и IT-поддержку бизнеса',
        content: 'Продукт очень быстро растёт и у компании нет возможности выращивать с нуля собственную сервисную инфраструктуру и непрофильные подразделения бизнеса. Чтобы закрыть все потребности бизнеса, а вдобавок учесть выход компании на международный рынок — мы подхватили все финансовые и юридические дела компании, а вместе с этим обеспечили поддержки IT-инфраструктуры компании.'
      },
      tasks: [
        {
          logo: 'wallet.svg',
          tittle: 'Взяли на себя все сервисные процессы бизнеса и экономим 35% затрат компании',
          content: 'Мы подхватили все сервисные функции крупнейшего fintech стартапа в России. Это позволяет не только экономить, но и инвестировать в развитие главных компетенций продукта.'
        },
        {
          logo: 'trading-view.svg',
          tittle: 'Открыли офис в Петербурге под ключ: от помещения до рекрутинга команды',
          content: 'Подобрали помещение, оформили аренду, сделали ремонт, набрали и подготовили к работе команду из 35 человек для Питерского подразделения международной компании.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.bg {
  background: var(--bg-gray);
  padding-bottom: 3em;
}

.container{
  text-align: center;
}

h2 {
  --bottom:  5px;
  display: inline-block;
  margin: 2em auto 1em;
  position: relative;
  padding: 0 1.7em;
  background: url("../assets/images/arrow-left-alt.svg") no-repeat left bottom var(--bottom), url("../assets/images/arrow-right-alt.svg") no-repeat right bottom var(--bottom);
}

.content {
  display: grid;
  grid-gap: 1.5em;
  grid-template-columns: 1fr 1fr;
}

.card.big {
  background: white;
  border-radius: 8px;
  text-align: left;
  grid-column: span 2;
}

.card.big p {
  margin-bottom: 1em;
}

.columns {
  display: grid;
  grid-template-columns: 1fr 1.5em 1fr;
}

.vertical-line {
  border-left: 1px dashed var(--deep-blue);
  margin: 3em auto;
  width: 1px;
}

.review {
  padding: 40px;
  background: url("../assets/images/quotes_gray.svg") no-repeat right 40px top 40px;
}

.review .header {
  font-size: 14px;
  margin-bottom: 1.5em;
}

.review p {
  font-family: 'Raleway', sans-serif;
  font-style: italic;
  opacity: 0.7;
}

.header {
  display: flex;
  align-items: center;
  padding-right: 70px;

}
.header .face{
  overflow: hidden;
  place-content: center;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  margin-right: 1.5em;
}
.header img {
  width: 100%;
}

</style>