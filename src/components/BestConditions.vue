<template>
  <div class="container">
    <div class="content">
      <div class="info">
        <h2>Лучшие условия для партнёров i-Space</h2>
        <p>Партнёрская система i-Space позволяет зарабатывать вместе с нами. Приводите клиентов, получайте комиссию и эксклюзивные условия на услуги i-Space.</p>
      </div>
      <list-item-play v-for="(item,i) in list" :key="i">{{ item }}</list-item-play>
      <solid-button :color="'green'">Подробнее о партнёрской системе</solid-button>
    </div>
    <img class="art" src="@/assets/images/best-conditions-dudes.svg">
  </div>
</template>
<script>
import ListItemPlay from "@/components/lists/ListItemPlay";
import SolidButton from "@/components/buttons/SolidButton";

export default {
  name: "BestConditions",
  components: {ListItemPlay, SolidButton},
  data() {
    return {
      list: [
        'Инвесторам',
        'Акселераторам',
        'Консалтинговым компаниям',
        'Стартапам, фаундерам'
      ]
    }
  }
}
</script>

<style scoped>
.container{
  padding: 0 0 3em;
  display: grid;
  grid-gap: 2em;
  grid-template-columns: repeat(2,1fr);
  position: relative;
  justify-content: space-between;
}
.art{
  position: absolute;
  bottom: 0;
  right: 0;
}
.info{
  margin-bottom: 2em;
}
.info p{
  font-size: 25px;
}
.content a{
  margin-top: 1em;
}

</style>