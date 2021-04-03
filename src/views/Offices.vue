<template>
  <Header/>
  <div class="finances">
    <conserje-office
        :title='`<span class="text-gradient">Консьерж</span> - сервис для сотрудников`'
        :subtitle='`<p>Консьерж-сервис - это эксклюзивная часть соцпакета, которая повышает привлекательность компании и увеличивает ее конкурентоспособность на рынке труда.</p>
                    <p>По статистике до 40% рабочего времени сотрудники тратят не на работу, а на решение личных вопросов. Мы возьмем на себя решение личных дел ваших сотрудников!</p> `'
    />
    <conserje-plans/>
    <div class="container key">
      <Info :title='`Офис под <span class="text-gradient">ключ</span>`'>
        <p>Вы открываете филиал в Санкт-Петербурге? Мы с удовольствием все организуем для вас! Подберем подходящий офис в нужном районе в соответствии с вашими
          пожеланиями.</p>
      </Info>
      <img src="../assets/images/key-dude.svg">
    </div>
    <help-slider :title="helpSlides.title" :data="helpSlides.slides"/>
    <call-to-action
        style="margin-top: 0"
        :type="'tel'"
        :actionTitle="'Поможем решить любые задачи'"
        :msg="'Оставьте заявку — обсудим задачи, сформируем комплекс услуг по поддержке, а срочные дела отправим в работу уже сегодня.'"
        :btn-text="'Обсудить задачи'"
    />
    <about-clients
        :reverse="'reverse'"
        :title='`Наши клиенты — <span class="text-gradient">лидеры IT-индустрий</span>`'
        :clients="clients"
        :bubbles="bubbles"
    />
    <business-tasks-block/>
    <we-do-it-right
        :info="weDoIt.info"
        :blocks="weDoIt.blocks"
        :dude="'calm_dude.svg'"
        :bg="'blue'"
    />

    <team-block
        :title='`Команда, которая <span class="text-gradient">умеет всё</span>`'
        :subtitle="'Наша команда будет рада вам помочь!'"
        :team="team"
        :team-name="'offices'"
    />
    <call-to-action
        style="margin-top: 0"
        :type="'mail'"
        :actionTitle="'Соберём для вас индивидуальное предложение'"
        :msg="'Проанализируем ваши задачи, подскажем оптимальную структуру и обеспечим организацию пространств для решения всех ваших задач под ключ.'"
        :btn-text="'Получить консультацию'"
    />
    <best-conditions/>
  </div>
</template>

<script>
import Header from "@/components/HeaderOffices";
import ConserjeOffice from "@/components/ConserjeOffice";
import ConserjePlans from "@/components/ConserjePlans";
import AboutClients from "@/components/AboutClients";
import CallToAction from "@/components/CallToAction";
import HelpSlider from "@/components/HelpSlider";
import BusinessTasksBlock from "@/components/BusinessTasksBlock";
import TeamBlock from "@/components/TeamBlock";
import BestConditions from "@/components/BestConditions";
import WeDoItRight from "@/components/WeDoItRight";
import Info from "@/components/misc/Info";

export default {
  name: "Offices",
  components: {
    Header,
    ConserjeOffice,
    ConserjePlans,
    AboutClients,
    CallToAction,
    HelpSlider,
    BusinessTasksBlock,
    TeamBlock,
    BestConditions,
    WeDoItRight,
    Info
  },
  data() {
    return {
      weDoIt: {
        info: {
          title: 'Все сделаем правильно',
          content: 'Наладим постоянную связь и возьмем дела в работу еще до подписания договора.  ',
        },
        blocks: [
          {title: 'Организуем удобный формат общения', content: 'Общаемся удобными вам способами Телеграм, Ватцап, Вайбер, звонки, мэйл.  Принимаем задачи 24\\7.'},
          {
            title: 'Индивидуально подходим к решению каждой задачи',
            content: 'Постоянно контролируем процесс выполнения, ничего не пускаем на самотек.  Доводим до минимума все риски.'
          },
        ]
      },
      clients: [
        {name: 'Just AI', logo: 'just-ai.svg', url: '#'},
        {name: 'Zillion Whales', logo: 'zillion-whales.svg', url: '#'},
        {name: 'Creative-Mobile', logo: 'cm.svg', url: '#'},
        {name: 'i-Digital', logo: 'i-digital.svg', url: '#'},
        {name: 'i-Free', logo: 'ifree.svg', url: '#'},
        {name: 'На Ланч', logo: 'nalunch.svg', url: '#'},
        {name: 'Coin Keeper', logo: 'coin-keeper.svg', url: '#'},
        {name: 'Кошелёк', logo: 'wallet.svg', url: '#'},
        {name: 'LastBackend', logo: 'last-backend.svg', url: '#'},
      ],
      bubbles: [
        'AI', 'FinTech', 'Разработка игр', 'Облачные решения', 'Трейдинг', 'Телеком', 'FoodTech'
      ],
      helpSlides: {
        title: 'Сделаем в лучшем виде',
        slides: [
          {
            title: 'Подберем офис под вас ',
            content: {
              list: [
                'Создание конвейеров для интеграции, доставки и развертывания приложений ',
                'Подготовка инфраструктуры для конвейеров CI/ CD ',
              ],
            }
          },
          {
            title: 'Гибридный формат работы в офисе ',
            content: {
              list: [
                'поможем перейти на гибридный формат работы, при котором часть сотрудников работает в офисе постоянно или имеет фиксированные рабочие места, в то время как другая часть приходит в офис периодически, и тем самым снизим расходы на аренду. ',
                'Откажемся от лишней площади или превратим ее в неформальное место для командной работы',
                'Софт для удаленного бронирования рабочих мест',
                'Составим план-график работ по уборке и дезинфекции для клининговой службы с учетом интенсивности использования рабочих мест и общих зон  ',
              ],
            }
          },
          {
            title: 'Офис менеджмент',
            content: {
              list: [
                'Мы возьмем на себя полное жизнеобеспечение офиса',
                'закупим продукты/кофе/воду/канцелярию/мебель и т.д.',
                'организуем постоянный клининг/дезинфекцию и даже раздельный сбор мусора',
                'выполним мелкие хозяйственные работы',
                'купим билеты и забронируем отель',
                'заключим договоры со всеми поставщиками и будем вашими полноценными представителями, защищающими ваши интересы',
                'поддержка от help-desk решит любые вопросы, относящиеся к офис-менеджменту или к IT-инфраструктуре',
              ],
            }
          },

        ]
      },
      team: [
        {
          name: 'Горлина Юля',
          position: 'Администратор i-Space',
          bio: 'Руководит командой, которая заботится об офисах, поездках и комфорте сотрудников. ',
          face: 'gorlina.jpg'
        },
        {
          name: 'Алексей Михалыч',
          position: 'Завхоз',
          bio: 'Содержит в порядке офисные пространства, чинит, ремонтирует,  помогает.',
          face: 'mihalich.jpg'
        }
      ]
    }
  }


}
</script>

<style scoped>
.container.key {
  display: flex;
  align-items: center;
  padding: 3em 0;
  overflow: hidden;
}

.container.key img {
  flex-shrink: 0;
  margin-bottom: -4em;
}
</style>