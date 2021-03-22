<template>
  <div class="bg">
    <div class="container">
      <div class="header">
        <div class="info">
          <div>
            <h2>Соберите <span class="text-gradient">свой</span><span class="text-gradient"> комплекс</span> услуг</h2>
            <p>Выбирайте только нужное из более чем 100 услуг i-Space.</p>
          </div>
          <img src="../assets/images/services-man.svg" alt="">
        </div>
        <review :bg="'dark'" :data="reviews" class="reviews"/>
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
import Review from "@/components/review/Review";
import PriceCard from "@/components/PriceCard";

export default {
  name: "ServicesPrice",
  components: {Review, PriceCard},
  data() {
    return {
      reviews: [
        {
          review:
              'i-Space поддерживает там, где мы не готовы тратить своё время<br/><span style="color: white;padding-top: 1em;">Для нас комплексная поддержка от i-Space — это идеальное соотношение цены и качества. Мы довольны и качеством, и сроком и стоимостью решений i-Space, а это редкость!</span>',
          reviewer: {
            name: 'Денис Белоусов',
            credits: 'Гендиректор ОТТ Медиа',
            logo: '',
          }
        }
      ],
      priceList: [
        {
          title: 'Юридическое сопровождение',
          price: '15000',
          list: [
            'М&A сделки – от&nbsp;<strong>50 000 ₽</strong>',
            'Структурирование бизнеса – от&nbsp;<strong>40 000 ₽</strong>',
            'Штатное расписание и должностные инструкции',
            'IP, очистка и оформление прав – от&nbsp;<strong>10 000 ₽</strong>',
            'GDPR, персональные данные – от&nbsp;<strong>50 000 ₽</strong>',
            'Юридическая упаковка стартапов – от&nbsp;<strong>20 000 ₽</strong>',
            '1 час работы юриста – от&nbsp;<strong>2500 ₽</strong>',
            'выдача справок и консультации по трудовому кодексу',
            'Выгодные пакеты часов со скидкой',
          ],
          topNote:'',
          bottomNote:'',

        },
        {
          title: 'DevOps и облачные решения',
          price: '150 000',
          topNote: 'Автоматизация инфраструктуры по подписке (от 6 месяцев)',
          list: [
            'Создание инфраструктуры',
            'Настройка и автоматизация CI/CD на базе Kubernetes',
            'Штатное расписание и должностные инструкции',
            'Автоматизация мониторинга и сбора логов',
            'Обслуживание и поддержка систем мониторинга ',
            'Хранение данных мониторинга, логов и бэкапов'
          ],
          bottomNote:'В подписку включено: 1 кластер K8s (2 окружения), пайплайн  на 3-5 сервисов, 1 кластер СУБД и настройка Gitlab.'
        },
        {
          title: 'Поддержка IT инфрастуктуры',
          price: '7000',
          list: [
            'HelpDesk обслуживание 1 компьютера – от&nbsp;<strong>800 ₽/место</strong>',
            'Сопровождение 1 сервера – от&nbsp;<strong>2000 ₽/мес</strong>',
            'Базовый мониторинг 1 сервера – от&nbsp;<strong>1000 ₽/мес.</strong>',
            'GDPR, персональные данные – от&nbsp;<strong> 50 000 ₽</strong>',
            'Услуги системного администратора – от&nbsp;<strong> 1600 ₽/час</strong>',
          ],
          topNote:'',
          bottomNote:'',
        },
        {
          title: 'Бухгалтерия, Финансы и Кадры',
          price: '5000',
          list: [
            'Расчет ЗП на 1 сотрудника – от&nbsp;<strong>700 ₽/час</strong>',
            'Казначейство и валютный контроль – от&nbsp;<strong>100 ₽ за платеж</strong>',
            'Бухгалтерский учет и отчетность – от&nbsp;<strong> 5000 ₽/мес.</strong>',
            'Управленческий учет – от&nbsp;<strong> 3000 ₽/мес.</strong>',
            'Финансовый консалтинг – от&nbsp;<strong> 1600 ₽/час</strong>',
          ],
          topNote:'',
          bottomNote:'',
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
  width: 50%;
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
  margin-bottom: -3.8em;
  height: calc(350px + 2em);
}
</style>