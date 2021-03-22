<template>
  <div class="home">
    <h2>Как вы решаете <span class="text-gradient">сложные и скучные</span> задачи бизнеса?</h2>
    <div class="wrap">
      <div class="bubbles">
        <bubble v-for="(bubble,i) in bubbles" :key="i">{{ bubble }}</bubble>
      </div>
    </div>
    <about-space/>
    <call-to-action
        :type="'tel'"
        :actionTitle="'Подхватим важные дела и начнем сегодня'"
        :msg="'Подхватим важные дела и начнем сегодня Оставьте заявку — обсудим задачи\, сформируем комплекс услуг\, а срочные дела отправим в работу уже сегодня.'"
        :btn-text="'Как мы работаем'"
    />
    <about-clients/>
    <block-legals/>
    <block-support/>
    <block-acountants/>
    <block-dev-ops/>
    <two-frames/>
    <call-to-action
        :type="'mail'"
        :actionTitle="'Получите полный список услуг с ценами'"
        :msg="'Оставьте свой email, пришлём PDF с полным прайс-листом и описанием комплексных пакетов ежемесячного обслуживания.'"
        :btn-text="'Получить PDF'"
    />
    <complex-plan/>
    <call-to-action
        style="margin: 0"
        :type="'mail'"
        :actionTitle="'Фиксированные цены и простые пакеты услуг'"
        :msg="'Оставьте свой email, пришлём PDF с полным прайс-листом и описанием комплексных пакетов ежемесячного обслуживания.'"
        :btn-text="'Получить PDF'"
    />
    <services-price/>
    <call-to-action
        style="margin: 0"
        :type="'tel'"
        :actionTitle="'Поможем решить любые задачи'"
        :msg="'Оставьте заявку — обсудим задачи, сформируем комплекс услуг по поддержке, а срочные дела отправим в работу уже сегодня.'"
        :btn-text="'Как мы работаем'"
    />
    <ifree-comunity/>
    <call-to-action-white
        style="margin: 0"
        :type="'mail'"
        :actionTitle="'Получайте приглашения на мероприятия'"
        :msg="'Оставьте свой email, мы будем присылать только приглашения на предстоящие мероприятия.'"
        :btn-text="'Получать приглашения'"
    />
    <business-tasks-block/>
    <communicate-easier/>
    <news-block/>
    <call-to-action
        style="margin: 0"
        :type="'mail'"
        :actionTitle="'Полезные статьи<br/> i-Space у вас на почте'"
        :msg="'Оставьте email, мы будем делиться полезным контентом, лайфхаками и новостями. Без рекламы и партнерских писем.'"
        :btn-text="'Подписаться на новости'"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Bubble from "@/components/bubbles/Bubble";
import AboutSpace from "@/components/AboutSpace";
import CallToAction from "@/components/CallToAction";
import CallToActionWhite from "@/components/CallToActionWhite";
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
    Bubble, AboutSpace, CallToAction, CallToActionWhite, AboutClients, BlockLegals, BlockSupport, BlockAcountants, BlockDevOps, TwoFrames, ComplexPlan,
    ServicesPrice, IfreeComunity, BusinessTasksBlock, CommunicateEasier, NewsBlock
  },
  data() {
    return {
      bubbles: [
        'Где найти время на развитие продукта?',
        'Как наладить IT-поддержку в компании?',
        'Как защитить интеллектуальную собственность?',
        'Как управлять серверной инфраструктурой компании?',
        'Как настроить CI/CD-процесс на основе Kybernetes?',
        'Как минимизировать риски бизнеса?',
        'Как построить серверную архитектуру?',
        'Как успешно провести M&A-сделку',
        'Как навести порядок в бухгалтерии?',
        'Как оформить инвестиции в проект?',
        'Как получить налоговые льготы для IT компании?',
        'Как защитить бизнес от штрафов?'
      ]
    }
  }
}
</script>
<style scoped>

</style>
