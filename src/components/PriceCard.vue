<template>
  <div class="card">
    <div>
      <h3>{{ title }}</h3>
      <div class="price">от {{ price }} ₽/мес</div>
      <p class="top-note"  v-if="topNote">{{ topNote }}</p>
      <div class="list" v-if="list">
        <check-list-item
            v-for="(item,i) in list"
            :key="i"
        ><span v-html="item"></span>
        </check-list-item>
      </div>
      <p class="bottom-note" v-if="bottomNote">{{ bottomNote }}</p>
    </div>
    <solid-button color="dark">Посмотреть все услуги и цены</solid-button>
  </div>
</template>

<script>
import CheckListItem from "@/components/lists/CheckListItem";
import SolidButton from "@/components/buttons/SolidButton";

export default {
  name: "PriceCard",
  components: {CheckListItem, SolidButton},
  props: ['list', 'title', 'price', 'topNote', 'bottomNote']
}
</script>

<style scoped>
.price {
  color: var(--deep-blue);
  font-weight: bold;
  font-size: 24px;
  margin: .3em 0;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 40px;
  background: white;
  border-radius: 8px;
}

.card a {
  width: 100%;
}

.list {
  margin: 1em 0 1.5em 0;
}
.top-note{
  font-size: 25px;
}
.bottom-note{
  font-family: 'Raleway',sans-serif;
  margin: 3em 0 1em;
  font-style: italic;
  font-weight: 400;
  font-size: 18px;
}
</style>