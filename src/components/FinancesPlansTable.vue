<template>
  <div class="bg">
    <div class="container">
      <div class="info">
        <div class="content">
          <h2>Сколько стоит <span class="text-gradient">бухгалтерия</span></h2>
          <p>Дешевле, чем бухгалтер в штате. И надёжнее, чем приходящий бухгалтер.</p>
        </div>
        <img src="../assets/images/finance-price-dude.svg" alt="Support Dude">
      </div>
      <Table
          :header="table.header"
          :rows="table.rows"
          :footer="table.footer"/>
      <Table
          :header="table.header_2"
          :rows="table.rows_2"/>
    </div>
    <p class="all">Все услуги и цены</p>
  </div>
</template>

<script>
import Table from "@/components/PlansTable/Table";

export default {
  name: "PlansTable",
  components: {Table},
  data() {
    return {
      table: {
        header: ['Наименование тарифа', 'Минимальный', 'Базовый', 'Оптимальный'],
        rows: [
          ['Банковские операции', true, true, true],
          ['Обработка поступлений денежных средств', 30, 50, 75],
          ['Обработка платежей', 50, 80, 100],
          ['Ведение расчетных счетов', 1, 2, 2],
          ['Операции по внешнеэкономической деятельности ', 0, 2, 5],
          ['Ведение операционного учета', true, true, true],
          ['Обработка первичных документов', 80, 12080],
          ['Методология и отчетность', true, true, true],
          ['Обработка первичных документов', 0, 5, 10],
        ],
        header_2: ['Взаимодествие с сотрудниками и по договорам ГПХ', 'Минимальный', 'Базовый', 'Оптимальный'],
        rows_2: [
          ['Кадровое делопроизводство', 5, 15, 30],
          ['Расчет заработной платы+налоги+фонды', 5, 15, 30],
          ['<strong style="text-align: right">Стоимость тарифа</strong>', '<strong>34 000 ₽</strong>', '<strong>69 500 ₽</strong>', '<strong>110 000 ₽</strong>'],
          [
            'Оплата доп.услуг по операциям превышающим лимиты, установленные тарифом',
            '<small>* доп. операции тарифицируются исходя из базовых стоимостей за 1 единицу операции.</small>',
            '<small>* доп. операции тарифицируются с применением 15% скидки к базовой стоимости за 1 единицу операции.</small>',
            '<small>* доп. операции, тарифицируются с применением 25% скидки к базовой стоимости за 1 ед-цу операции</small>',
          ]
        ],
        footer: []
      }
    }
  }
}
</script>

<style scoped>
.bg {
  background: var(--bg-gray);
}

.info {
  display: flex;
  justify-content: space-between;
  margin-bottom: -1em;
  padding-top: 1em;
  overflow: hidden;

}

.info .content {
  margin-right: 5em;
}

.info p {
  font-size: 25px;
  font-weight: 300;
}
.all{
  font-size: 25px;
  text-align: center;
  padding: 2em;
}
</style>