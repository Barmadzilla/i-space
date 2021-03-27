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
  </div>
</template>

<script>
import HeaderTech from "@/components/HeaderTech";
import WeWorkWith from "@/components/WeWorkWith";
import AboutClients from "@/components/AboutClients";
import CallToAction from "@/components/CallToAction";

export default {
  name: "ItSupport.vue",
  components: {HeaderTech, WeWorkWith, AboutClients, CallToAction}
}
</script>

<style scoped>

</style>