<template>
  <HeaderTech/>
  <div class="it-support">
    <we-work-with :title="'Индустрии, с которыми мы работаем'"
                  :subtitle="'Работаем с компаниями из США, России, Европы и Китая.'"
    />
    <about-clients :reverse="'reverse'"
                   :title='`Клиенты i-Space — <span class="text-gradient">лидеры IT-индустрий</span>`'
                   :clients="clients"
                   :bubbles="bubbles"
    />
    <plans-table/>
    <call-to-action
        style="margin-top: 0"
        :type="'mail'"
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
    <help-slider/>
    <automatization/>
    <help-desk-services/>
    <help-desk-constructor/>
    <call-to-action
        style="margin-top: 0"
        :type="'mail'"
        :actionTitle="'Соберём для вас индивидуальное предложение'"
        :msg="'Проанализируем ваши задачи, подскажем оптимальную структуру и обеспечим организацию пространств для решения всех ваших задач под ключ.'"
        :btn-text="'Получить консультацию'"
    />
    <team-block :title='`Команда, которая <span class="text-gradient">умеет всё</span>`'
                :subtitle="'Команда во многом определяет успех компании. Лучший показатель качества нашей работы — повторное обращение, рекомендация друзьям и коллегам. Почти 90% новых клиентов приходят к нам по рекомендации.'"
                :team="team"
                :team-name="'support'"
    />
    <business-tasks-block/>
    <best-conditions/>

  </div>
</template>

<script>
import HeaderTech from "@/components/HeaderTech";
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

export default {
  name: "ItSupport.vue",
  components: {
    HeaderTech,
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
  data() {
    return {
      features: [
        {title: 'Укоряем', content: 'выход програмных релизов'},
        {title: 'Повышаем', content: 'стабильность приложений'},
        {title: 'Уменьшаем ', content: 'стоимость инфраструктуры'},
      ],
      clients: [

        {name: 'Кошелёк', logo: 'wallet.svg', url: '#'},
        {name: 'Первый Канал', logo: 'first-tv.svg', url: '#'},
        {name: 'Just AI', logo: 'just-ai.svg', url: '#'},
        {name: 'Trading View', logo: 'trading-view.svg', url: '#'},
        {name: 'Glispa', logo: 'glispa.svg', url: '#'},
        {name: 'Embria', logo: 'embria.svg', url: '#'},
        {name: 'i-DIGITAL', logo: 'i-digital.svg', url: '#'},
        {name: 'Coin Keeper', logo: 'coin-keeper.svg', url: '#'},
        {name: 'i-Free', logo: 'i-free.svg', url: '#'},
      ],
      bubbles: [
        'AI', 'FinTech', 'Разработка игр', 'Облачные решения', 'Трейдинг', 'Телеком', 'FoodTech'
      ],
      team: [
        {
          name: 'Алексей Шонин',
          position: 'Технический директор',
          bio: 'В IT индустрии работает 15 лет. Под его руководством были запущены сотни проектов разной направленности и сложности.',
          face:'shonin.jpg'
        },
        {
          name: 'Григорий Синеокий',
          position: 'Руководитель HelpDesk департамента',
          bio: 'Опыт работы в IT-сфере более 20 лет.  Имеет экспертные знания по клиентским операционным системам. ',
          face:'sineoki.jpg'
        },
        {
          name: 'Полина Белокобыльская',
          position: 'Руководитель группы мониторинга и тех поддержки',
          bio: 'Организует  и обеспечивает бесперебойную работу службы мониторинга и тех. поддержки.',
          face:'belokobylskaya.jpg'
        },
        {
          name: 'Юра Седов',
          position: 'Руководитель службы системного администрирования',
          bio: 'Microsoft Certified Professional. Экспертные знания в Powershell. Большой внедрения методологии ITIL. ',
          face:'sedov.jpg'
        },
        {
          name: 'Александр Калошин',
          position: 'Co-founder компании Last.Backend',
          bio: '12 лет занимается проектированием высоконагруженных облачных платформ и инфраструктур',
          face:'kaloshin.jpg'
        },
        {
          name: 'Макс Игнатьев',
          position: 'Ведущий DevOps специалист',
          bio: 'Больше 10 лет опыта в Devops.  Работает над сложными проектами в области комерческой разработки. ',
          face:'ignatev.jpg'
        },
        {
          name: 'Константин Пастор',
          position: 'Co-founder компании Last.Backend',
          bio: 'Программист, архитектор, Devops инженер. ',
          face:'pastor.jpg'
        },
        {
          name: 'Бельская Наталья ',
          position: 'linux - администратор',
          bio: 'Отвечает за работу второй линии поддержки.',
          face:'belskaya.jpg'
        },
      ]
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