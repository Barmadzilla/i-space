<template>
  <HeaderLegal/>
  <div class="i-legal">
    <we-work-with
        :title="'Индустрии, с которыми мы работаем'"
        :subtitle="'Закрываем все юридические и смежные вопросы. Работаем <br> с компаниями в разных точках мира: в США, России, Европе, Китае, Кипре.'"
    />
    <about-clients :reverse="'reverse'"
                   :title='`Наши клиенты — <span class="text-gradient">лидеры IT-индустрий</span>`'
                   :clients="clients"
                   :bubbles="bubbles"
    />
    <help-slider/>
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
import HeaderLegal from "@/components/HeaderLegal";
import WeWorkWith from "@/components/WeWorkWith";
import AboutClients from "@/components/AboutClients";
import CallToAction from "@/components/CallToAction";
import HelpSlider from "@/components/HelpSlider";
import BusinessTasksBlock from "@/components/BusinessTasksBlock";
import TeamBlock from "@/components/TeamBlock";
import BestConditions from "@/components/BestConditions";

export default {
  name: "iLegal.vue",
  components: {
    HeaderLegal,
    WeWorkWith,
    AboutClients,
    CallToAction,
    HelpSlider,
    BusinessTasksBlock,
    TeamBlock,
    BestConditions
  },
  data() {
    return {
      clients: [

        {name: 'Just AI', logo: 'just-ai.svg', url: '#'},
        {name: 'Data Solution', logo: 'data-solution.svg', url: '#'},
        {name: 'Embria', logo: 'embria.svg', url: '#'},
        {name: 'Trading View', logo: 'trading-view.svg', url: '#'},
        {name: 'i-Free', logo: 'i-free.svg', url: '#'},
        {name: 'На Ланч', logo: 'nalunch.svg', url: '#'},
        {name: 'Coin Keeper', logo: 'coin-keeper.svg', url: '#'},
        {name: 'Кошелёк', logo: 'wallet.svg', url: '#'},
        {name: 'Herocraft', logo: 'herocraft.svg', url: '#'},
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