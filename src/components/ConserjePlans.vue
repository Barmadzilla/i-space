<template>
  <div class="bg">
    <div class="container">
      <div class="info">
        <h2>Соберите свой <span class="text-gradient">консьерж–сервис!</span></h2>
        <p>Подберите для себя максимально подходящий тариф</p>
      </div>
      <div class="plans">
        <conserje-plan-card
            v-for="(plan,i) in plans" :key="i"
            :title="plan.title"
            :price="plan.price"
            :list="plan.list"
        />
      </div>
      <small>Все цены без НДС.</small>
    </div>
  </div>
</template>

<script>
import ConserjePlanCard from "@/components/ConserjePlanCard";

export default {
  name: "ConserjePlans",
  components: {ConserjePlanCard},
  data() {
    return {
      plans: [
        {
          title: 'Пакет <span class="text-gradient">S</span>',
          price: '4 320 ₽  (540 руб./час)',
          list: [
              '8 часов на выполнение задач',
              'по будням с 9:00 до 19:00',
              'Бесконечное количество любых задач'
          ]
        },
        {
          title: 'Пакет <span class="text-gradient">M</span>',
          price: '14 400 ₽  (480 руб./час)',
          list: [
              '30 часов на выполнение задач',
              'по будням с 9:00 до 19:00',
              'Бесконечное количество любых задач'
          ]
        },
        {
          title: 'Пакет <span class="text-gradient">L</span>',
          price: '25 200 ₽  (420 руб./час)',
          list: [
              '60 часов на выполнение задач',
              'по будням с 9:00 до 19:00',
              'Бесконечное количество любых задач'
          ]
        },
        {
          title: 'Пакет <span class="text-gradient">XL</span>',
          price: '32 400 ₽  (360 руб./час)',
          list: [
              '90 часов на выполнение задач',
              'по будням с 9:00 до 19:00',
              'Бесконечное количество любых задач'
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.bg {
  background: var(--bg-green);
  padding: 4em 0;
}
.info h2 {
  margin-top: 0;
}
.plans{
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(4,1fr);
  margin: 2em 0;
}
@media (max-width: 1140px) {
  .plans{
    grid-template-columns: repeat(2,1fr);
  }
}
</style>