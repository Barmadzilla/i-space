<template>
  <header-finances/>
  <div class="finances">
    <we-work-with
        :title="'Индустрии, с которыми мы работаем'"
        :subtitle="'Знаем специфику бухгалтерии и финансов в разных сферах.'"
    />
    <about-clients
        :reverse="'reverse'"
        :title='`Наши клиенты — <span class="text-gradient">лидеры IT-индустрий</span>`'
        :clients="clients"
        :bubbles="bubbles"
    />
    <help-slider/>
    <finances-plans-table/>
    <call-to-action
        style="margin-top: 0"
        :type="'mail'"
        :actionTitle="'Соберём для вас индивидуальное предложение'"
        :msg="'Проанализируем ваши задачи, подскажем оптимальную структуру и обеспечим организацию пространств для решения всех ваших задач под ключ.'"
        :btn-text="'Получить консультацию'"
    />
    <we-do-it-right
        :info="weDoIt.info"
        :blocks="weDoIt.blocks"
        :dude="'calm_dude.svg'"
        :bg="'green'"
    />
    <call-to-action
        style="margin-top: 0"
        :type="'mail'"
        :actionTitle="'Соберём для вас индивидуальное предложение'"
        :msg="'Проанализируем ваши задачи, подскажем оптимальную структуру и обеспечим организацию пространств для решения всех ваших задач под ключ.'"
        :btn-text="'Получить консультацию'"
    />
    <team-block
        :title='`Команда, которая <span class="text-gradient">умеет всё</span>`'
        :subtitle="'Всю работу за вас выполнит команда разнопрофильных специалистов. Ни один специалист не будет эффективнее целой команды.'"
        :team="team"
        :team-name="'finances'"
    />
    <business-tasks-block/>
    <best-conditions/>
  </div>
</template>

<script>
import HeaderFinances from "@/components/HeaderFinances";
import WeWorkWith from "@/components/WeWorkWith";
import AboutClients from "@/components/AboutClients";
import CallToAction from "@/components/CallToAction";
import HelpSlider from "@/components/HelpSlider";
import BusinessTasksBlock from "@/components/BusinessTasksBlock";
import TeamBlock from "@/components/TeamBlock";
import BestConditions from "@/components/BestConditions";
import WeDoItRight from "@/components/WeDoItRight";
import FinancesPlansTable from "@/components/FinancesPlansTable";

export default {
  name: "Finances",
  components: {
    HeaderFinances,
    WeWorkWith,
    AboutClients,
    CallToAction,
    HelpSlider,
    BusinessTasksBlock,
    TeamBlock,
    BestConditions,
    WeDoItRight,
    FinancesPlansTable
  },
  data() {
    return {
      weDoIt: {
        info: {
          title: 'За ваше спокойствие отвечаем мы ',
          content: 'Наладим постоянную связь и возьмем дела в работу еще до подписания договора.',
        },
        blocks: [
          {title: 'Экспертное мнение и дистационная поддержка 24х7', content: 'Общаемся удобными вам способами Телеграм, Ватцап, Вайбер, звонки, мэйл.  '},
          {
            title: 'Подбирем специалистов с глубоким пониманием отрасли',
            content: 'Знание отраслевых особенностей каждой компании - клиента. Достоверность данных всегда подтверждается в ходе аудиторских проверок.  '
          },
        ]
      },
      clients: [
        {name: 'Just AI', logo: 'just-ai.svg', url: '#'},
        {name: 'Zillion Whales', logo: 'zillion-whales.svg', url: '#'},
        {name: 'LastBackend', logo: 'last-backend.svg', url: '#'},
        {name: 'i-Free', logo: 'ifree.svg', url: '#'},
        {name: 'Coin Keeper', logo: 'coin-keeper.svg', url: '#'},
        {name: 'Кошелёк', logo: 'wallet.svg', url: '#'},
        {name: 'Creative-Mobile', logo: 'cm.svg', url: '#'},
        {name: 'Ott Media', logo: 'ottmedia.png', url: '#'},
      ],
      bubbles: [
        'AI', 'FinTech', 'Разработка игр', 'Облачные решения', 'Трейдинг', 'Телеком', 'FoodTech'
      ],
      team: [
        {
          name: 'Елена Юманова',
          position: 'Руководитель i-Space.Finance',
          bio: 'Финансовый учет, управленческий учет и отчетность, управление бизнес процессами, автоматизация бизнес процессов, организация бизнеса с «0».',
          face: 'umanova.jpg'
        },
        {
          name: 'Лариса Дементьевна',
          position: 'Главный бухгалтер',
          bio: 'Опыт работы более 15 лет на должности главного бухгалтера в различных российских и западных компаниях.  Является действительным членом Международной Федерации Бухгалтеров IFA. ',
          face: 'dementieva.jpg'
        },
        {
          name: 'Светлана Долонская',
          position: 'Главный бухгалтер',
          bio: 'Эксперт в области бухгалтерского и налогового учета.  Имеет успешный опыт прохождения аудиторских и налоговых проверок.',
          face: 'dolonskaya.jpg'
        },
        {
          name: 'Анна Петрова',
          position: 'Главный бухгалтер',
          bio: 'Более 18 лет успешного опыта работы  в сфере бухгалтерии, управления финансами и консалтинга  в российских и иностранных компаниях. ',
          face: 'petrova.jpg'
        }
      ]
    }
  }

}
</script>

<style scoped>

</style>