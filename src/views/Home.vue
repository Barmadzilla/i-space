<template>
  <Header/>
  <div class="home">
    <h2>Как вы решаете <span class="text-gradient">сложные и скучные</span> задачи бизнеса?</h2>
    <div class="container">
      <div class="bubbles">
        <bubble v-for="(bubble,i) in bubbles" :key="i">{{ bubble }}</bubble>
      </div>
    </div>
    <about-space id="about"/>
    <call-to-action
        :actionTitle="'Подхватим важные дела и начнем сегодня'"
        :msg="'Оставьте заявку — обсудим задачи, сформируем комплекс услуг, а срочные дела отправим в работу уже сегодня.'"
        :btn-text="'Как мы работаем'"
    />
    <about-clients
        id="clients"
        :title='`Клиенты i-Space — <span class="text-gradient">лидеры IT-индустрии</span>`'
        :clients="clients"
        :bubbles="clients_bubbles"
    />
    <block-legals/>
    <block-support/>
    <block-acountants/>
    <block-dev-ops/>
    <two-frames id="test"/>
    <call-to-action
        :actionTitle="'Получите полный список услуг с ценами'"
        :msg="'Оставьте свой email, пришлём PDF с полным прайс-листом и описанием комплексных пакетов ежемесячного обслуживания.'"
        :btn-text="'Получить PDF'"
    />
    <complex-plan/>
    <call-to-action
        v-if="hide"
        :actionTitle="'Фиксированные цены и простые пакеты услуг'"
        :msg="'Оставьте свой email, пришлём PDF с полным прайс-листом и описанием комплексных пакетов ежемесячного обслуживания.'"
        :btn-text="'Получить PDF'"
    />
    <services-price id="price"/>
    <call-to-action
        :actionTitle="'Поможем решить любые задачи'"
        :msg="'Оставьте заявку — обсудим задачи, сформируем комплекс услуг по поддержке, а срочные дела отправим в работу уже сегодня.'"
        :btn-text="'обсудить задачи'"
    />
    <ifree-comunity/>
    <call-to-action
        :actionTitle="'Получайте приглашения на мероприятия'"
        :msg="'Оставьте свой email, мы будем присылать только приглашения на предстоящие мероприятия.'"
        :btn-text="'Получать приглашения'"
    />
    <business-tasks-block :cases="cases"/>
    <communicate-easier/>
    <news-block v-show="hide"/>
    <call-to-action
        :actionTitle="'Полезные статьи<br/> i-Space у вас на почте'"
        :msg="'Оставьте email, мы будем делиться полезным контентом, лайфхаками и новостями. Без рекламы и партнерских писем.'"
        :btn-text="'Подписаться на новости'"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Bubble from "@/components/bubbles/Bubble";
import AboutSpace from "@/components/AboutSpace";
import CallToAction from "@/components/CallToAction";
import AboutClients from "@/components/AboutClients";
import BlockLegals from "@/components/BlockLegals";
import BlockSupport from "@/components/BlockSupport";
import BlockAcountants from "@/components/BlockAcountants"
import BlockDevOps from "@/components/BlockDevOps";
import TwoFrames from "@/components/TwoFrames";
import ComplexPlan from "@/components/ComplexPlan";
import ServicesPrice from "@/components/ServicesPrice";
import IfreeComunity from "@/components/IfreeComunity";
import BusinessTasksBlock from "@/components/BusinessTasksBlock";
import CommunicateEasier from "@/components/CommunicateEasier";
import NewsBlock from "@/components/NewsBlock";


export default {
  name: 'Home',
  components: {
    Header, Bubble, AboutSpace, CallToAction, AboutClients, BlockLegals, BlockSupport, BlockAcountants, BlockDevOps, TwoFrames, ComplexPlan,
    ServicesPrice, IfreeComunity, BusinessTasksBlock, CommunicateEasier, NewsBlock
  },

  data() {
    return {
      hide: false,
      bubbles: [
        'Где найти время на развитие продукта?',
        'Как наладить IT-поддержку в компании?',
        'Как защитить бизнес от штрафов?',
        'Как защитить интеллектуальную собственность?',
        'Как управлять серверной инфраструктурой компании?',
        'Как настроить CI/CD-процесс на основе Kybernetes?',
        'Как минимизировать риски бизнеса?',
        'Как построить серверную архитектуру?',
        'Как успешно провести M&A-сделку',
        'Как навести порядок в бухгалтерии?',
        'Как оформить инвестиции в проект?',
        // 'Как получить налоговые льготы для IT компании?',
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
      clients_bubbles: [
        'AI', 'FinTech', 'Разработка игр', 'Облачные решения', 'Трейдинг', 'Телеком', 'FoodTech'
      ],
      cases:{
        current:{
          case:{
            logo: 'just-ai.svg',
            tittle: 'Организовали комплексную финансовую, юридическую и IT-поддержку бизнеса',
            content: 'Продукт очень быстро растёт и у компании нет возможности выращивать с нуля собственную сервисную инфраструктуру и непрофильные подразделения бизнеса. Чтобы закрыть все потребности бизнеса, а вдобавок учесть выход компании на международный рынок — мы подхватили все финансовые и юридические дела компании, а вместе с этим обеспечили поддержки IT-инфраструктуры компании.'
          },
          review:{
            face:'petrov.jpg',
            name:'Кирилл Петров',
            status:'основатель Just AI',
            content:[
              'Сотрудничество с командой i-Space позволяет нам оперативно и качественно решать юридические задачи любой сложности.',
              'Начиная от поддержки текущей операционной деятельности бизнеса, заключения новых и нестандартных договоров, и заканчивая сложными M&A сделками, определением оптимальных моделей ведения международных операций, структурирования компаний в глобальном масштабе. Мы понимаем, что подобный уровень сопровождения командой инхауз стоил бы нам существенно дороже, так как не все задачи возникают постоянно и в одинаковом объеме.',
              'Мы благодарны команде за поддержку, готовность идти навстречу, когда возникают срочные задачи, за профессионализм  и индивидуальный подход.',
            ]
          }
        },
        tasks: [
          {
            logo: 'wallet.svg',
            tittle: 'Взяли на себя все сервисные процессы бизнеса и экономим 35% затрат компании',
            content: 'Мы подхватили все сервисные функции крупнейшего fintech стартапа в России. Это позволяет не только экономить, но и инвестировать в развитие главных компетенций продукта.'
          },
          {
            logo: 'trading-view.svg',
            tittle: 'Открыли офис в Петербурге под ключ: от помещения до рекрутинга команды',
            content: 'Подобрали помещение, оформили аренду, сделали ремонт, набрали и подготовили к работе команду из 35 человек для Питерского подразделения международной компании.'
          }
        ]
      }
    }
  }
}
</script>
<style scoped>

</style>
