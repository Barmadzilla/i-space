<template>
  <div class="list-item">
    <img :src="require(`@/assets/images/icons/list_check.svg`)" alt="">
    <p>
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
name: "CheckListItem"
}
</script>

<style scoped>
.list-item {
  text-align: left;
}

.list-item  img {
  width: 20px;
  margin-right: 1em;
  margin-left: 0;
  margin-top: 0.2em;
}

.list-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: .7em;

}
</style>