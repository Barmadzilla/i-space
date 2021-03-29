<template>
  <div class="bg">
    <div class="container">
      <div class="navigation">
        <h2>Поможем решить любые задачи</h2>
        <div class="tabs">
          <div class="tab">Непрерывная интеграция, доставка и развертывание </div>
          <div class="tab">Перевод инфраструктуры в оркестратор на базе облачного провайдера  </div>
          <div class="tab active">Мониторинг инфраструктуры </div>
          <div class="tab">Восстановление инфраструктуры </div>
          <div class="tab">Работы по улучшению и модернизации инфраструктуры </div>
        </div>
      </div>
      <div class="content">
        <h2>Наша экспертиза </h2>
        <p>Каждый день решаем ваши задачи не зависимо от их количества, размера и особенностей вашего бизнеса </p>
        <hr>
        <h2>Непрерывная интеграция, доставка и разверстывание</h2>
        <list-item-play>Подготовка инфраструктуры для конвейеров CI/ CD</list-item-play>
        <list-item-play>Создание конвейеров для интеграции, доставки и развертывания приложений</list-item-play>
        <transparent-button class="btn">Интересно! Хочу подробностей!</transparent-button>
      </div>
    </div>
  </div>
</template>

<script>
import ListItemPlay from "@/components/lists/ListItemPlay";
import TransparentButton from "@/components/buttons/TransparentButton";

export default {
  name: "HelpSlider", components: {ListItemPlay, TransparentButton},
  data() {
    return {}
  }
}
</script>

<style scoped>
.bg {
  background: var(--bg-dark);
  overflow: hidden;
}

.navigation {
  color: white;
  width: 45%;
}
.tabs{
  display: flex;
  flex-direction: column;
  height: fit-content;
  justify-content: space-between;
  margin-top: 2em;
  font-size: 25px;
}
.tab{
  margin: 1em 0;
  padding-right: 3em;
}
.btn{
  width: 100%;
  margin-top: 1em;
}
.tab.active{
  color: black;
  background: url("../assets/images/white-arrow.svg") no-repeat right top;
  min-height: 1.68em;
}

h2:first-child {
  margin-top: 0;
}

.container {
  padding: 4em 0;
  display: flex;
}

.content {
  width: 55%;
  padding: 3em 0 3em 3em;
  position: relative;
  z-index: 1;
}

.content:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  background: white;
  border-radius: 8px;
  width: 150%;
  height: 100%;
  z-index: -1;
}
hr{
  margin: 3em 0;
  border-color: var(--bg-dark);
}
</style>