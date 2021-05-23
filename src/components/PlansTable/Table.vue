<template>
<div class="plan-table">
  <table-header :data="header"/>
  <table-row v-for="(row,i) in rows" :data="row" :key="i"/>

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
  padding-bottom: 0;
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
@media (max-width: 420px) {
  .plan-table{
    font-size: .8em;
    margin: 0 -1em;
  }
  .plan-table:last-child .row:last-child{
    --grid:repeat(1,1fr);

  }
  .plan-table:last-child  .row:last-child .col{
    text-align: left;
  }
  .plan-table{
    hyphens: auto;
  }
  .plan-table .header .col{
    hyphens: auto;
  }
}
</style>