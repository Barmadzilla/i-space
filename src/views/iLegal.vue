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
    <team-price-block/>
    <we-do-it-right
        :info="weDoIt.info"
        :blocks="weDoIt.blocks"
        :dude="'right_dude.svg'"
    />
    <call-to-action
        style="margin-top: 0"
        :type="'mail'"
        :actionTitle="'Соберём для вас индивидуальное предложение'"
        :msg="'Проанализируем ваши задачи, подскажем оптимальную структуру и обеспечим организацию пространств для решения всех ваших задач под ключ.'"
        :btn-text="'Получить консультацию'"
    />
    <team-block :title='`Команда, которая <span class="text-gradient">умеет всё</span>`'
                :subtitle="'Вы получаете целую команду юристов - каждый с глубокой экспертизой в своей области. Все юристы имеют лучшее юридическое образование СПБГУ, МГУ. '"
                :team="team"
                :team-name="'ilegal'"
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
import TeamPriceBlock from "@/components/TeamPriceBlock";
import WeDoItRight from "@/components/WeDoItRight";

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
    BestConditions,
    TeamPriceBlock,
    WeDoItRight
  },
  data() {
    return {
      weDoIt: {
        info: {
          title: 'Все сделаем правильно',
          content: 'Наладим постоянную связь и возьмем дела в работу еще до подписания договора.',

        },
        blocks: [
          {title: 'Организуем удобный формат общения', content: 'Общаемся удобными вам способами Телеграм, Ватцап, Вайбер, звонки, мэйл. Принимаем задачи 24\\7.'},
          {
            title: 'Подбирем специалистов с глубоким пониманием отрасли',
            content: 'Каждый юрист специализируется в узких откраслях права и разбирается в тонкостях. Что не может сделать ни один юрист в штате.'
          },
        ]
      },
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
          name: 'Наталья Юркова',
          position: 'Управляющий партнер i-Legal',
          bio: 'M&A, международное частное право, корпоративное право, IP, «антиоффшорное» законодательство, налоговое законодательство России и Европы.',
          face: 'yurkova.jpg'
        },
        {
          name: 'Мария Ордовская',
          position: 'Ведущий юрист',
          bio: 'Договорное право, интеллектуальная собственность, административное право, законодательство о рекламе.',
          face: 'ordovskaya.jpg'
        },
        {
          name: 'Анастасия Кузнецова',
          position: 'Юрист ',
          bio: '«Антиоффшорное» законодательство, корпоративное право  законодательство о рекламе, законодательство о связи.',
          face: 'kuznetsova.jpg'
        },
        {
          name: 'Айлана Утнасунова',
          position: 'Ведущий юрист',
          bio: 'M&A, IP, «антиоффшорное» законодательство, корпоративное право  законодательство о рекламе,  о связи.',
          face: 'utnasunova.jpg'
        },
        {
          name: 'Анна Иванова',
          position: 'Ведущий юрист',
          bio: 'Международное частное право, IP, налоговое право, корпоративное право, законодательство о национальной платежной системе РФ,  о рекламе.',
          face: 'ivanova.jpg'
        },
        {
          name: 'Владимир Тараканов',
          position: 'Юрист',
          bio: 'Договорное право, интеллектуальная собственность, административное право, законодательство о рекламе.',
          face: 'tarakanov.jpg'
        },
        {
          name: 'Айлана Утнасунова',
          position: 'Юрист',
          bio: 'M&A, IP,  поддержка иностранных компаний, «антиоффшорное» з-во, корпоративное право,  законодательство о рекламе,  о связи.',
          face: 'utnacunova.jpg'
        },
        {
          name: 'Вячеслав Тамулевичюс',
          position: 'Младший юрист',
          bio: 'Административное право, интеллектуальная собственность, законодательство о рекламе.',
          face: 'tamulevichus.jpg'
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