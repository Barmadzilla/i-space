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
            :link="data.link"
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
          price: '15 000 ₽/мес',
          list: [
            'M&A сопровождение – от&nbsp;<strong>99 000 ₽</strong>',
            'Структурирование бизнеса зарубежом – от&nbsp;<strong>40 000 ₽</strong>',
            'GDPR, персональные данные – от&nbsp;<strong>50 000 ₽</strong>',
            'Юридическая упаковка стартапов – от&nbsp;<strong>20 000 ₽</strong>',
            'Аудит вашего актива на предмет рисков – от&nbsp;<strong>20 000 ₽</strong>',
            'Оформление торгового знака – от&nbsp;<strong>15 000 ₽</strong>',
            'Оформление интеллектуальной собственности – от&nbsp;<strong>50 000 ₽</strong>',
            '1 час работы юриста – от&nbsp;<strong>2 500 ₽</strong>',
            'Регистрация ПО в реестрах РФ и за рубежом – от&nbsp;<strong>15 000 ₽</strong>',
          ],
          topNote: '',
          bottomNote: '',
          link: {
            name: 'i-Legal',
            params: {
              section: 'price'
            }
          }

        },
        {
          title: 'DevOps и облачные решения',
          price: '150 000 ₽/мес',
          topNote: 'Автоматизация инфраструктуры по подписке (от 6 месяцев)',
          list: [
            'Создание инфраструктуры',
            'Настройка и автоматизация CI/CD на базе Kubernetes',
            'Штатное расписание и должностные инструкции',
            'Автоматизация мониторинга и сбора логов',
            'Обслуживание и поддержка систем мониторинга ',
            'Хранение данных мониторинга, логов и бэкапов'
          ],
          bottomNote: 'В подписку включено: 1 кластер K8s (2 окружения), пайплайн  на 3-5 сервисов, 1 кластер СУБД и настройка Gitlab.',
          link: {
            name: 'It Support',
            params: {section: 'price'}
          }
        },
        {
          title: 'Поддержка IT инфрастуктуры',
          price: '7 000 ₽/мес',
          list: [
            'HelpDesk обслуживание 1 компьютера – от&nbsp;<strong>800 ₽/место</strong>',
            'Сопровождение 1 сервера – от&nbsp;<strong>2000 ₽/мес</strong>',
            'Базовый мониторинг 1 сервера – от&nbsp;<strong>1000 ₽/мес.</strong>',
            'Пакет (5 часов СА,  2 сервера) – от&nbsp;<strong> 19 000 ₽/мес.</strong>',
            'Услуги системного администратора – от&nbsp;<strong> 1600 ₽/час</strong>',
          ],
          topNote: '',
          bottomNote: '',
          link: {
            name: 'It Support',
            params: {section: 'price'}
          }
        },
        {
          title: 'Бухгалтерия, Финансы и Кадры',
          price: '5 000 ₽/мес',
          list: [
            'Расчет ЗП на 1 сотрудника – от&nbsp;<strong>700 ₽/час</strong>',
            'Казначейство и валютный контроль – от&nbsp;<strong>100 ₽ за платеж</strong>',
            'Бухгалтерский учет и отчетность – от&nbsp;<strong> 5000 ₽/мес.</strong>',
            'Управленческий учет – от&nbsp;<strong> 3000 ₽/мес.</strong>',
            'Финансовый консалтинг – от&nbsp;<strong> 1600 ₽/час</strong>',
          ],
          topNote: '',
          bottomNote: '',
          link: {
            name: 'Finances',
            params: {section: 'price'}
          }
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
  padding: 3em;
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

.content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2em;
}

img {
  margin-bottom: -3.8em;
  height: calc(350px + 2em);
}

h2 {
  margin-top: 1em;
}

@media (max-width: 1280px) {
  .reviews {
    width: 40%;
  }

  .info {
    width: 60%;
  }
}
</style>