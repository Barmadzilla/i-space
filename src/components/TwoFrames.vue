<template>
  <div class="content">
    <div class="frame">
      <div>
        <img src="@/assets/images/hr-managment.svg" alt="">
        <h2>Возьмём на себя <span class="text-gradient">управление кадрами</span></h2>
        <p>Организуем кадровое делопроизводство в компании:</p>
        <list-item-play v-for="(item, i) in list" :key="i">{{ item }}</list-item-play>
      </div>
      <router-link :to="'/finances'">
        <transparent-button>Подробнее</transparent-button>
      </router-link>
    </div>
    <div class="frame">
      <div>
        <img src="@/assets/images/office-managment.svg" alt="">
        <h2>Поможем с <span class="text-gradient">офисом</span> <br>в Санкт-Петербурге</h2>
        <p>Подберём подходящий офис, проведём переговоры, оформим договор аренды, закупим мебель и даже сделаем ремонт, если это необходимо.</p>
        <p>Наймём офис-менеджера, возьмём на себя обеспечение офиса и обеспечим консьерж-сервис для сотрудников.</p>
      </div>
      <router-link :to="'/offices'">
        <transparent-button :color="'blue'">Подробнее</transparent-button>
      </router-link>
    </div>
  </div>

</template>

<script>
import ListItemPlay from "@/components/lists/ListItemPlay";
import TransparentButton from "@/components/buttons/TransparentButton";



export default {
  name: "TwoFrames",
  components: {TransparentButton, ListItemPlay},
  data() {
    return {
      modal:false,
      list: [
        'приём, увольнение, отпуска, переводы',
        'трудовые договоры и книжки, личные дела и карточки',
        'штатное расписание и должностные инструкции',
        'выдача справок и консультации по трудовому кодексу'
      ]
    }

  }
}
</script>

<style scoped>
.content {
  display: grid;
  justify-content: center;
  grid-template-columns: auto auto;
  grid-gap: 3em;
  margin: 4em 0;
}

.frame:first-child {
  margin-right: 1em;
  background: var(--bg-green);
}

.frame:last-child {
  background: var(--bg-blue);
}

.frame img {
  width: 100%;
}

.frame {
  padding: 3.5em;
  border-radius: 8px;
  max-width: 565px;
  text-align: left;
  flex-shrink: 0;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.frame p {
  margin-bottom: 1em;
}

.frame .btn a {
  margin-right: 0;
  justify-content: center;

}

.frame a,
.frame .btn {
  width: 100%;
}

a {
  width: 100%;
}
</style>