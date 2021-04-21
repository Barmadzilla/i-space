<template>
  <div class="card">
    <div class="face">
      <img :src="require(`../assets/images/teams/${face}`)" :alt="name">
    </div>
    <h3>{{name}}</h3>
    <p class="position">{{ position }}</p>
    <p class="bio">{{ bio }}</p>
  </div>
</template>

<script>
export default {
  name: "TeamMateCard",
  props: ['name', 'position', 'bio', 'face','faceFolder'],
}
</script>

<style scoped>
.card{
  max-width: 310px;
}
.card .face{
  width: 100%;
  /*text-align: center;*/
  margin-bottom: 1em;
}
.card .face img{
  border-radius: 50%;
  width: 80%;
  max-width: 240px;
}
.position{
  font-size: 14px;
  margin: 1em 0;
}
.bio{

}
@media (max-width: 420px) {

  .card{
    text-align: center;
  }
}
</style>