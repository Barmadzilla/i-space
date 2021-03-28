<template>
  <HeaderTech/>
  <div class="it-support">
    <we-work-with/>
    <about-clients :reverse="'reverse'"/>
    <call-to-action
        :type="'tel'"
        :actionTitle="'Соберём для вас индивидуальное предложение'"
        :msg="'Проанализируем ваши задачи, подскажем оптимальную структуру и обеспечим организацию пространств для решения всех ваших задач под ключ.'"
        :btn-text="'Получить консультацию'"
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

export default {
  name: "ItSupport.vue",
  components: {HeaderTech, WeWorkWith, AboutClients, CallToAction, PlansTable,HelpSlider,Automatization,HelpDeskServices},
  data() {
    return {
      features: [
        {title: 'Укоряем', content: 'выход програмных релизов'},
        {title: 'Повышаем', content: 'стабильность приложений'},
        {title: 'Уменьшаем ', content: 'стоимость инфраструктуры'},
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