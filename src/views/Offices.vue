<template>
  <Header
      :title="'Офисы под ключ и Консьерж–Сервис для сотрудников '"
      :info="header.words"
      :person="header.person"
  />
  <div class="container desktop-hide">
    <div class="words">
      <div class="word" v-for="(word,i) in header.words" :key="i">
        <h3>{{ word.title }}</h3>
        <p>{{ word.content }}</p>
      </div>
    </div>
  </div>
  <div class="finances">
    <conserje-office
        :title='`<span class="text-gradient">Консьерж</span>–сервис для сотрудников`'
        :subtitle='`<p>Консьерж-сервис - это эксклюзивная часть соцпакета, которая повышает привлекательность компании и увеличивает ее конкурентоспособность на рынке труда.</p>
                    <p>По статистике до 40% рабочего времени сотрудники тратят не на работу, а на решение личных вопросов. Мы возьмем на себя решение личных дел ваших сотрудников!</p> `'
    />
    <conserje-plans id="price"/>
    <call-to-action
        :actionTitle="'Поможем решить любые задачи'"
        :msg="'Оставьте заявку — обсудим задачи, сформируем комплекс услуг по поддержке, а срочные дела отправим в работу уже сегодня.'"
        :btn-text="'Обсудить задачи'"
    />
    <div class="container key">
      <Info :title='`Офис "под <span class="text-gradient">ключ"</span>`'>
        <p>Вы открываете филиал в Санкт-Петербурге? Мы с удовольствием все организуем для вас! Подберем подходящий офис в нужном районе в соответствии с вашими пожеланиями</p>
      </Info>
      <img src="../assets/images/key-dude.svg">
    </div>
    <help-slider :title="helpSlides.title" :data="helpSlides.slides"/>
    <about-clients
        id="clients"
        :reverse="'reverse'"
        :title='`Наши клиенты — <span class="text-gradient">лидеры IT-индустрии</span>`'
        :clients="clients"
        :bubbles="bubbles"
    />
    <business-tasks-block id="cases" :cases="cases"/>
    <we-do-it-right
        :info="weDoIt.info"
        :blocks="weDoIt.blocks"
        :dude="'calm_dude.svg'"
        :bg="'blue'"
    />

    <team-block
        id="team"
        :title='`Команда, которая <span class="text-gradient">умеет всё</span>`'
        :subtitle="'Наша команда будет рада вам помочь!'"
        :team="team"
        :team-name="'offices'"
    />
    <call-to-action
        :actionTitle="'Соберём для вас индивидуальное предложение'"
        :msg="'Проанализируем ваши задачи, подскажем оптимальную структуру и обеспечим организацию пространств для решения всех ваших задач под ключ.'"
        :btn-text="'Получить консультацию'"
    />
    <best-conditions/>
  </div>
</template>

<script>
import Header from "@/components/HeaderService";
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
          name: 'Юлия Горлина<br>Администратор i-Space',
          img: 'gorlina.png'
        },
        words: [
          {
            title: 'Консьерж–сервис',
            content: 'Практичная программа лояльности для сотрудников'
          },
          {
            title: 'Офисы “под ключ”',
            content: 'Организуем любой офис “под ключ” в Петербурге'
          },
          {
            title: 'Внедрим инновации',
            content: 'Организуем гибридный формат работы в офисе'
          },
          {
            title: 'Экономия',
            content: 'Выбьем для вас лучшие условия'
          }
        ]
      },
      weDoIt: {
        info: {
          title: 'Все сделаем правильно',
          content: 'Наладим постоянную связь и возьмем дела в работу еще до подписания договора.  ',
        },
        blocks: [
          {title: 'Организуем удобный формат общения', content: 'Общаемся удобными вам способами Телеграм, Ватцап, Вайбер, звонки, мэйл.  Принимаем задачи 24/7.'},
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
                'Каждый день решаем ваши задачи вне зависимости от их количества, размера и особенностей вашего бизнеса',
                'Будем вашим представителем на переговорах с арендодателем и добьемся приемлемой ставки аренды или ставки даже ниже рыночной',
                'Внесем правки в договор аренды, которые будут защищать ваши интересы',
                'сделаем ремнот любой сложности',
              ],
            }
          },
          {
            title: 'Гибридный формат работы в офисе ',
            content: {
              list: [
                'Поможем перейти на гибридный формат работы, при котором часть сотрудников работает в офисе постоянно или имеет фиксированные рабочие места, в то время как другая часть приходит в офис периодически, и тем самым снизим расходы на аренду',
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
      ],

      cases: {
        current: {
          case: {
            logo: 'wallet.svg',
            tittle: 'Экономия 10 млн за год рублей на аренде,  внедрив гибридный формат работы в офисе',
            content:
                'Организация перехода офиса компании Кошелёк на гибридный формат работы: рабочие места перестали быть закрепленными за сотрудниками и теперь бронируются для пользования заранее (по типу hot-desk).<br> <br>' +
                'Это позволило компании отказаться от ненужной площади в 550 кв.м и сэкономить 10 млн.руб. в год'
          },
          review: {
            face: '',
            name: 'Филипп Шубин',
            status: 'гендиректор Кошелек',
            content: [
              'Работаем с i-Space Spaces больше 10 лет. Все вопросы решаются оперативно и качественно,  каждая задача контролируется ребятами от начала и до победного результата. ',
              'Глобальный переезд ста наших сотрудников в новый офис, который, как известно, равен двум пожарам, прошел совершенно незаметно для нас: в пятницу мы ушли домой из одного офиса, а в понедельник пришли в другой, с уже расставленными рабочими местами и разложенными вещами! Желаю успехов в дальнейшем развитии!'
            ]
          }
        },
        tasks: [
          {
            logo: 'just-ai.svg',
            tittle: 'Set-up нового офиса площадью 900 кв.м  за 3 месяца с нуля. ',
            content:
                'Процесс включал поиск новой площадки, заключение договоров аренды, создание дизайн-проекта и отделку согласно дизайну в стиле “лофт”, закупку всей необходимой рабочей мебели для 120 сотрудников, мебели и бытовой техники для столовой и переговорных комнат в условиях предельно сжатых сроков - 3 месяца.'
          },
          {
            logo: 'i-free.svg',
            tittle: 'За год построили офис на 300 сотрудников. ',
            content:
                'Открытие нового офиса для компании i-Free.\n' +
                'Set-up полного цикла, от строительства самого здания до въезда в офис. 3000 кв.м, более 300 сотрудников, сложный дизайн-проект.\n' +
                'Проект занял 1 год.\n'
          }
        ]
      }
    }
  }


}
</script>

<style scoped>
.container.key {
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 3em;
}

.container.key img {
  flex-shrink: 0;
  margin-bottom: -4em;
}

@media (max-width: 420px) {
  .container.key {
    flex-direction: column;
  }

  .container.key img {
    flex-shrink: 0;
    margin-bottom: -7em;
  }
}
</style>