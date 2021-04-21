<template>
  <div class="bg-green">
    <div class="container">
      <div class="header">
        <h2>Комплексная поддержка <br><span class="text-gradient">по цене одного</span> офис менеджера</h2>
        <div class="price">77000<small>₽/мес</small></div>
      </div>
      <div class="content">
        <div class="list">
          <h3>Что входит в комплекс:</h3>
          <div class="columns">
            <div class="col">
              <ListItemPlay v-for="(item,i) in first" :key="i">{{ item }}</ListItemPlay>
            </div>
            <div class="col">
              <ListItemPlay v-for="(item,i) in second" :key="i">{{ item }}</ListItemPlay>
            </div>
          </div>
        </div>
        <img src="@/assets/images/complex-plan.svg" alt="">
      </div>
      <div class="buttons">
        <solid-button :color="'blue'">Получить консультацию</solid-button>
        <transparent-icon-button :icon="'telegram'" :link="'tg://resolve?domain=@i_Space_team'">Написать в Телеграм</transparent-icon-button>
      </div>
      <div class="quotes mobile-hide">
        <quote v-for="(quote,i) in quotes" :key="i"
               :title="quote.title"
               :quote="quote.quote"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ListItemPlay from "@/components/lists/ListItemPlay";
import SolidButton from "@/components/buttons/SolidButton";
import TransparentIconButton from "@/components/buttons/TransparentIconButton";
import Quote from "@/components/Quote";

export default {
  name: "ComplexPlan",
  components: {ListItemPlay, SolidButton, TransparentIconButton, Quote},
  data() {
    return {
      first: ['10 часов консультаций юриста', 'Ведение кадров (до 30 сотрудников)', 'Отчётность по НДФЛ + фонды', 'Учёт зарплат (до 30 сотрудников)'],
      second: ['8 часов системного администрирования', 'Поддержка и мониторинг серверов (до 2 шт.)', 'Доступ к шаблонам юр. документов'],
      quotes: [
        {
          title: 'Недорогой пакет закрывает наши самые скучные, но важные задачи',
          quote: '«Уже со стартовым пакетом услуг мы полностью закрыли все юридические и финансовые вопросы. Наконец мы перевели фокус с сервисных процессов на важные продуктовые задачи.»'
        },
        {
          title: 'Мы экономим  пару сотен тысяч рублей в месяц на аутсорсе благодаря <br/>комплексу i-Space',
          quote: '«До i-Space у нас было 5 подрядчиков и отдельный менеджер в штате. Задачи, затрагивающие несколько сфер затягивались до бесконечности. i-Space закрыл все потребности в аутсорсе, а затраты снизились на 40%.»'
        }
      ]
    }
  }
}
</script>

<style scoped>
.container {
  text-align: left;
}

.quotes {
  display: flex;
  justify-content: space-between;
  padding-bottom: 4em;
}

.quotes .quote {
  width: 50%;
}

.buttons {
  padding-bottom: 4em;
  margin-bottom: 4em;
  border-bottom: 1px solid #A5BDD0;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price {
  font-family: 'Manrope', sans-serif;
  font-size: 100px;
  font-weight: bold;
}

.price small {
  font-family: 'Manrope', sans-serif;
  font-size: 38px;
  font-weight: lighter;
}

.columns {
  display: flex;
  margin: auto;
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.col {
  margin-right: 2em;
}

h3 {
  margin-bottom: 2em;
}

@media (max-width: 1280px) {
  .price {
    font-size: 70px;
  }
}

@media (max-width: 420px) {
  .header {
    display: block;
  }
  .content{
    flex-wrap: wrap;
    flex-direction: column-reverse;
  }
  .content img{
    width: 100%;
    box-sizing: border-box;
  }
  .columns{
    display: block;
  }
  .col {
    margin-right: 0;
  }
  .buttons {
    padding-bottom: 2em;
    border-bottom: unset;
    margin-bottom: unset;
    margin-top: 2em;
  }
  .buttons a:before{
    border: unset;
  }
  .buttons {
    text-align: center;
  }
}
</style>