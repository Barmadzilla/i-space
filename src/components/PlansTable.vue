<template>
  <div class="bg">
    <div class="container">
      <div class="info">
        <div class="content">
          <h2>Поддержка <span class="text-gradient">IT-инфраструктуры</span></h2>
          <p>Умеем делать практически всё, что гарантирует надёжную и бесперебойную работу вашего проекта в условиях любых нагрузок.
            Соберите свой комплекс услуг, выбирайте только нужное.</p>
        </div>
        <img src="../assets/images/support-dude.svg" alt="Support Dude">
      </div>
      <Table
          :header="table.header"
          :rows="table.rows"
          :footer="table.footer"/>
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
        header: ['', 'Пакет S', 'Пакет M', 'Пакет L'],
        rows: [
          ['Поддерживаемых серверов', 2, 6, 10],
          ['Время системного администрирования', '5 часов', '14 часов', '25 часов'],
          ['Круглосуточный мониторинг инфраструктуры проекта', true, true, true],
          ['24x7x365 доступность службы поддержки', true, true, true],
          ['Уведомление ответственных лиц об инцендентах (email, мессенджерам, СМС, звонки)', true, true, true],
          ['Реакция на проблемы в течении 15 мин', false, true, true],
          ['Настройка и контроль резервного копирования', true, true, true],
          ['Помощь с переездом в другие дата - центры', false, false, true],
          ['Экспертные консультации', false, true, true],
          ['Разработка, внедрение и поддержка CI\\CD процессов', false, false, true],
          ['Выездные встречи тех специалистов и менеджеров', false, false, true],
          ['Выделенный аккаунт менеджер', false, true, true],
          ['Привлечение системного архитектора для проектирования', false, false, true],
          ['Оперативное восстановление работоспособности', true, true, true],
          ['Взаимодействие с техподдержкой хостинга', false, true, true],
          ['Обновление и оптимизация настроек ПО и ОС', true, true, true],
          ['Регулярный отчёт о проделанной работе', true, true, true],
          ['Аудит сервера', true, true, true],
          ['Удобные каналы коммуникации: Telegram, Zoom, Slack', true, true, true],
          ['<b>ЦЕНА (без НДС)</b>', '<b>19 000 ₽</b>', '<b>49 600 ₽</b>', '<b>По договоренности</b>'],
          ['Дополнительные часы системного администрирования', '<b>1 600 ₽\\час</b>', '', ''],
        ],
        footer: []
      }
    }
  }
}
</script>

<style scoped>
.container{
  padding-top: 3em;
}
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