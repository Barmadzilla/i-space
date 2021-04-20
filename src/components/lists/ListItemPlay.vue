<template>
  <div class="list-item">
    <img src="@/assets/images/icons/list_arrow.svg" alt="">
    <p>
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  name: "ListItemPlay",
}
</script>

<style scoped>

.list-item {
  text-align: left;
}

.list-item  img {
  width: 18px;
  margin-right: 1em;
  margin-left: 0;
  margin-top: 0.2em;
  flex-shrink: 0;
}

.list-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5em;

}
@media (max-width: 1140px) {
  .list-item{
    margin-bottom: 0.6em;
  }
  p{
    font-size: 14px;
  }
  .list-item  img {
    width: 16px;
    margin-right: 0.8em;
    margin-left: 0;
    margin-top: 0.1em;
    flex-shrink: 0;
  }
}
@media (max-width: 1280px) {
  .list-item{
    margin-bottom: 0.8em;
  }
}
</style>