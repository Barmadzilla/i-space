<template>
  <div class="bg">
    <div class="container">
      <div class="info">
        <h2>Соберите свой <span class="text-gradient">HelpDesk</span></h2>
        <p>Выбирайте только то, что нужно вашей компании. </p>
      </div>
      <div class="plans">
        <plan-card v-for="(plan,i) in plans" :key="i"
                   :plan-title="plan.title"
                   :subtitle="plan.subtitle"
                   :price="plan.price"
                   :services="plan.services"
        />
      </div>
    </div>
    <p class="all">Все услуги и цены</p>
  </div>
</template>

<script>
import PlanCard from "@/components/PlanCard";

export default {
  name: "HelpDeskConstructor",
  components: {PlanCard},
  data() {
    return {
      plans: [
        {
          title: 'Тариф <span class="text-gradient">Мини</span> ',
          subtitle: 'Для небольших компаний',
          price: 'от 17 000 рублей (без НДС) в месяц до 20 компьютеров + 1 МФУ',
          services: [
            'Удаленная поддержка',
            'Обслуживание ПК/оргтехника',
            'Поддержка ПО',
            'Обслуживание электронной почты',
            'Антивирусная защита'
          ]
        },
        {
          title: 'Тариф <span class="text-gradient">Бухгалтерия+</span>',
          subtitle: 'Для среднего бизнеса и крупных компаний',
          price: 'от 45 000 рублей (без НДС) в месяц до 30 компьютеров + 3 МФУ',
          services: [
            'Удаленная поддержка',
            '1 выезд специалиста в месяц',
            'Обслуживание ПК/оргтехника',
            'Поддержка ПО',
            'Обслуживание электронной почты',
            'Антивирусная защита',
            'Работа с Active Directory',
            'Закупка оборудования',
            'Ремонт оборудования',
            'Обслуживание 1С',
            'Обслуживание банк-клиентов и систем сдачи отчетности'
          ]
        },
        {
          title: 'Тариф <span class="text-gradient">Оптимальный</span>',
          subtitle: 'Для среднего бизнеса ',
          price: 'от 35  000 рублей (без НДС) в месяц  до 30 компьютеров + 2 МФУ',
          services: [
            'Удаленная поддержка',
            '1 выезд специалиста в месяц',
            'Обслуживание ПК/оргтехника',
            'Поддержка ПО',
            'Обслуживание электронной почты',
            'Антивирусная защита',
            'Работа с Active Directory',
            'Закупка оборудования',
            'Ремонт оборудования',
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.container {
  position: relative;
}

.bg {
  background: var(--bg-green);
  padding: 4em 0;
}

.info {
  position: absolute;
  left: 3em;
  width: 30%;
  top: 0;
  margin-bottom: 2em;

}
.info h2 {
  margin-top: 0;
}

.plans {
  display: grid;
  grid-gap: 2em;
  grid-template-columns: repeat(3, 1fr);
  align-items: flex-end;
}

.all {
  font-size: 25px;
  text-align: center;
  padding: 2em 0 0;
}

@media (max-width: 1140px) {
  .info {
    width: 30%;
  }
}
@media (max-width: 420px) {
  .plans{
    grid-gap: 1em;
    grid-template-columns: repeat(1, 1fr);
  }
  .info{
    position: relative;
    left: unset;
    width: 100%;
  }
  .bg{
    padding: 2em 0;
  }
}
</style>