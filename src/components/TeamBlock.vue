<template>
  <div class="container">
    <div class="info">
      <h2 v-html="title"></h2>
      <p>{{ subtitle }}</p>
    </div>
    <div class="team">
      <team-mate-card v-for="(mate,i) in team" :key="i"
                      :name="mate.name"
                      :bio="mate.bio"
                      :face="mate.face"
                      :position="mate.position"
                      :face-folder="teamName"
      />
    </div>
  </div>
</template>

<script>
import TeamMateCard from "@/components/TeamMateCard";

export default {
  name: "TeamBlock",
  props: ['title', 'subtitle', 'team', 'teamName'],
  components: {TeamMateCard}
}
</script>

<style scoped>
.container {
  padding: 3em 0;
}

.team {
  display: grid;
  grid-gap: 3em;
  grid-template-columns: repeat(4, 1fr);
}

.card {
  min-width: 250px;
  width: 100%;
}

.info p {
  font-size: 25px;
}

.info {
  margin-bottom: 3em;
  text-align: center;
}

h2 {
  display: inline-block;
  margin: 0 auto 2em;
  position: relative;
  padding: 0 1.7em;
  background: url("../assets/images/arrow-left-alt.svg") no-repeat left bottom 5px, url("../assets/images/arrow-right-alt.svg") no-repeat right bottom 5px;
}
</style>