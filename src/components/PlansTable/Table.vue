<template>
<div class="plan-table">
  <table-header :data="header"/>
  <table-row v-for="(row,i) in rows" :data="row" :key="i"/>
  <p class="all">Все услуги и цены</p>
</div>
</template>

<script>
import TableHeader from "@/components/PlansTable/TableHeader";
import TableRow from "@/components/PlansTable/TableRow";
export default {
  name: "Table",
  components:{TableHeader,TableRow},
  props:['header','rows','footer']
}
</script>

<style scoped>
.plan-table{
  --grid:3fr repeat(3,1fr);
  padding-bottom: 3em;
}
.plan-table .header,
.plan-table .row{
  display: grid;
  grid-gap: 1em;
  grid-template-columns: var(--grid);
  align-items: center;
  padding: 0.75em 1em;
}
.plan-table .row:nth-child(odd){
  background: white;
}
.all{
  font-size: 25px;
  text-align: center;
  padding: 2em;
}
</style>