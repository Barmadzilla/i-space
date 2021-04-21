<template>
  <HeaderService
      :title="'Управление IT инфраструктурой DevOps практики, поддержка 24/7'"
      :info="header.words"
      :person="header.person"
  />
  <div class="it-support">
    <we-work-with :title="'Индустрии, с которыми мы работаем'"
                  :subtitle="'Работаем с компаниями из США, России, Европы и Китая.'"
    />
    <about-clients
        id="clients"
        :reverse="'reverse'"
        :title='`Клиенты i-Space — <span class="text-gradient">лидеры IT-индустрии</span>`'
        :clients="clients"
        :bubbles="bubbles"
    />
    <plans-table id="price"/>
    <call-to-action
        :actionTitle="'Соберём для вас индивидуальное предложение'"
        :msg="'Проанализируем ваши задачи, подскажем оптимальную структуру и обеспечим организацию пространств для решения всех ваших задач под ключ.'"
        :btn-text="'Получить консультацию'"
    />
    <div class="container">
      <div class="info">
        <h2><span class="text-gradient">DevOps</span> и облачные решения</h2>
        <p>Быстро делаем отказоустойчивую инфраструктуру для вашего проекта</p>

      </div>
      <div class="features">
        <div class="feature" v-for="(feature,i) in features" :key="i">
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.content }}</p>
          <img :src="require(`@/assets/images/tech-features/feature_${i}.svg`)" :alt="feature.title">
        </div>
      </div>
    </div>
    <help-slider :title="helpSlides.title" :data="helpSlides.slides"/>
    <automatization/>
    <help-desk-services/>
    <help-desk-constructor/>
    <call-to-action
        :actionTitle="'Соберём для вас индивидуальное предложение'"
        :msg="'Проанализируем ваши задачи, подскажем оптимальную структуру и обеспечим организацию пространств для решения всех ваших задач под ключ.'"
        :btn-text="'Получить консультацию'"
    />
    <team-block
        id="team"
        :title='`Команда, которая <span class="text-gradient">умеет всё</span>`'
        :subtitle="'Команда во многом определяет успех компании. Лучший показатель качества нашей работы — повторное обращение, рекомендация друзьям и коллегам. Почти 90% новых клиентов приходят к нам по рекомендации.'"
        :team="team"
        :team-name="'support'"
    />
    <business-tasks-block id="cases" :cases="cases"/>
    <best-conditions/>

  </div>
</template>

<script>
import WeWorkWith from "@/components/WeWorkWith";
import AboutClients from "@/components/AboutClients";
import CallToAction from "@/components/CallToAction";
import PlansTable from "@/components/PlansTable";
import HelpSlider from "@/components/HelpSlider";
import Automatization from "@/components/Automatization";
import HelpDeskServices from "@/components/HelpDeskServices";
import BusinessTasksBlock from "@/components/BusinessTasksBlock";
import HelpDeskConstructor from "@/components/HelpDeskConstructor";
import TeamBlock from "@/components/TeamBlock";
import BestConditions from "@/components/BestConditions";
import HeaderService from "@/components/HeaderService";

export default {
  name: "ItSupport.vue",
  components: {
    HeaderService,
    WeWorkWith,
    AboutClients,
    CallToAction,
    PlansTable,
    HelpSlider,
    Automatization,
    HelpDeskServices,
    BusinessTasksBlock,
    HelpDeskConstructor,
    TeamBlock,
    BestConditions
  },
  methods: {
    toSection(section) {
      if (section) {
        let target = document.getElementById(section).getBoundingClientRect().top
        target && window.scrollTo(target - 80, 0)
      } else {
        window.scrollTo(0, 0)
      }
    }
  },
  mounted() {
    this.toSection(this.section)
  },
  data() {
    return {
      header: {
        person: {
          name:'Алексей Шонин<br>Технический директор',
          img: 'Shonin.png'
        },
        words: [
          {
            title: 'Автоматизизация',
            content: 'DevOps-сопровождение проектов. Строим системы Continuous Integration.'
          },
          {
            title: 'Надежность',
            content: 'Проектируем отказоустойчивые инфраструктуры любой сложности.'
          },
          {
            title: 'Самостоятельность',
            content: 'Замечаем неполадки до того, как они вырастают в проблемы.'
          },
          {
            title: 'Всегда на связи',
            content: 'Поддержка и администрирование  24/7/365.'
          }
        ]
      },
      features: [
        {title: 'Укоряем', content: 'выход програмных релизов'},
        {title: 'Повышаем', content: 'стабильность приложений'},
        {title: 'Уменьшаем ', content: 'стоимость инфраструктуры'},
      ],
      clients: [

        {name: 'Just AI', logo: 'just-ai.svg', url: '#'},
        {name: 'Data Solution', logo: 'data-solution.svg', url: '#'},
        {name: 'Первый Канал', logo: 'first-tv.svg', url: '#'},
        {name: 'Крокус Консалтинг', logo: 'crocus.svg', url: '#'},
        {name: 'i-Free', logo: 'i-free.svg', url: '#'},
        {name: 'На Ланч', logo: 'nalunch.svg', url: '#'},
        {name: 'Coin Keeper', logo: 'coin-keeper.svg', url: '#'},
        {name: 'Кошелёк', logo: 'wallet.svg', url: '#'},
        {name: 'HeroCraft', logo: 'herocraft.svg', url: '#'},
      ],
      bubbles: [
        'AI', 'FinTech', 'Разработка игр', 'Облачные решения', 'Трейдинг', 'Телеком', 'FoodTech'
      ],
      helpSlides: {
        title: 'Поможем решить любые задачи',
        slides: [
          {
            title: 'Непрерывная интеграция, доставка и  развертывание ',
            content: {
              list: [
                'Создание конвейеров для интеграции, доставки и развертывания приложений ',
                'Подготовка инфраструктуры для конвейеров CI/ CD ',
              ],
            }
          },
          {
            title: 'Перевод инфраструктуры в оркестратор на базе облачного провайдера ',
            content: {
              list: [
                'Выбор облачного провайдера ',
                'Создание архитектурного решения на базе оркестратора K8s/Openshift ',
                'Поддержка кластера K8s/Openshift на базе облачного провайдера',
              ],
            }
          },
          {
            title: 'Мониторинг инфраструктуры ',
            content: {
              list: [
                'Настроить систему мониторинга компонентов продукта и инфраструктуры ',
                'Настроить систему уведомлений на базе метрик инфраструктуры ',
                'Добавить уведомления на базе специфичных метрик продукта ',
                'Настройка, поддержка системы сбора логов продукта, а также хранение логов ',
              ],
            }
          },
          {
            title: 'Восстановление инфраструктуры ',
            content: {
              list: [
                'Подготовить систему сбора бекапов баз данных и хранилища используемых продуктом файлов ',
                'Подготовить сценарии восстановления инфраструктуры после падений и инцидентов ',
              ],
            }
          },
          {
            title: 'Работы по улучшению и модернизации  инфраструктуры',
            content: {
              list: [
                'Добавление новых сервисов продукта и/или частей инфраструктуры ',
                'Оптимизация и улучшение работы элементов инфраструктуры, систем развёртывания и системных сервисов',
              ],
            }
          },
        ]
      },
      team: [
        {
          name: 'Алексей Шонин',
          position: 'Технический директор',
          bio: 'В IT индустрии работает 15 лет. Под его руководством были запущены сотни проектов разной направленности и сложности.',
          face: 'shonin.jpg'
        },
        {
          name: 'Григорий Синеокий',
          position: 'Руководитель HelpDesk департамента',
          bio: 'Опыт работы в IT-сфере более 20 лет.  Имеет экспертные знания по клиентским операционным системам. ',
          face: 'sineoki.jpg'
        },
        {
          name: 'Полина Белокобыльская',
          position: 'Руководитель группы мониторинга и тех поддержки',
          bio: 'Организует  и обеспечивает бесперебойную работу службы мониторинга и тех. поддержки.',
          face: 'belokobylskaya.jpg'
        },
        {
          name: 'Юра Седов',
          position: 'Руководитель службы системного администрирования',
          bio: 'Microsoft Certified Professional. Экспертные знания в Powershell. Большой внедрения методологии ITIL. ',
          face: 'sedov.jpg'
        },
        {
          name: 'Александр Калошин',
          position: 'Co-founder компании Last.Backend',
          bio: '12 лет занимается проектированием высоконагруженных облачных платформ и инфраструктур',
          face: 'kaloshin.jpg'
        },
        {
          name: 'Макс Игнатьев',
          position: 'Ведущий DevOps специалист',
          bio: 'Больше 10 лет опыта в Devops.  Работает над сложными проектами в области комерческой разработки. ',
          face: 'ignatev.jpg'
        },
        {
          name: 'Константин Пастор',
          position: 'Co-founder компании Last.Backend',
          bio: 'Программист, архитектор, Devops инженер. ',
          face: 'pastor.jpg'
        },
        {
          name: 'Бельская Наталья ',
          position: 'linux - администратор',
          bio: 'Отвечает за работу второй линии поддержки.',
          face: 'belskaya.jpg'
        },
      ],
      cases: {
        current: {
          case: {
            logo: 'i-digital.svg',
            tittle: 'Миграция Production инфраструктуры в облако сэкономила 40% затрат',
            content: 'Мигрировали Production инфраструктуру  из дата-центра в облако с минимальными даунтаймами. Выгода: Отсутствие даунтаймов у облачного провайдера, уменьшение ежемесячных расходов на 40%'
          },
          review: {
            face: '',
            name: 'Сергей Коротких',
            status: 'Технический директор i-Digital',
            content: [
              'Долгие годы мы взаимовыгодно сотрудничаем с командой i-Space.Tech и очень довольны качеством их работы. ',
            ]
          }
        },
        tasks: [
          {
            logo: 'nalunch.svg',
            tittle: 'Построение Failover кластера приложений (IIS) и  кластера баз данных AlwaysON на MSSQL 2019',
            content:
                'Из за высокой нагрузки постоянно падал основной сервис. Осуществили переезд на bare-metal сервера. Построили отказоустойчивый кластер AlwaysON для бэкенд БД и FailoverIIS кластер для фронтэнда.<br>Результат: Отсутствие падений из - за недостатка производительности. Отказоустойчивость.'
          },
          {
            logo: 'nda',
            tittle: 'Внедрение отказоустойчивого Hyper-V кластера c SAN инфраструктурой',
            content:
                'Отсутствовала виртуальная инфраструктура. Внедрили  Private Cloud на базе Hyper-V Core под управлением Microsoft System Center Virtual Machine Manager.<br>Результат: отказоустойчивость '
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
.info {
  margin-bottom: 3em;
}

.info p {
  font-size: 25px;
}

.features {
  display: flex;
  justify-content: space-around;
  margin-bottom: 4.5em;
}

.feature {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.feature img {
  margin-top: 1.5em;
}
</style>