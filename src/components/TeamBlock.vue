<template>
  <div class="container">
    <div class="info">
      <h2 v-html="title"></h2>
      <p>{{ subtitle }}</p>
    </div>
    <div class="team" :class="items">
      <team-mate-card
          v-for="(mate,i) in team" :key="i"
          :name="mate.name"
          :bio="mate.bio"
          :face="`${teamName}/${mate.face}`"
          :position="mate.position"
      />
    </div>
  </div>
</template>

<script>
import TeamMateCard from "@/components/TeamMateCard";

export default {
  name: "TeamBlock",
  props: ['title', 'subtitle', 'team', 'teamName'],
  components: {TeamMateCard},
  data() {
    return {
      items: {
        one: this.team.length === 1,
        two: this.team.length === 2,
        tree: this.team.length === 3
      }
    }
  }
}
</script>

<style scoped>
.container {
  padding: 3em;
}

.team {
  display: grid;
  grid-gap: 3em;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
}

.team.one {
  grid-template-columns: repeat(1, 1fr);
}

.team.two {
  grid-template-columns: repeat(2, 1fr);
}

.team.tree {
  grid-template-columns: repeat(3, 1fr);
}

.card {
  width: 100%;
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
  /*background: url("../assets/images/arrow-left-alt.svg") no-repeat left bottom 5px, url("../assets/images/arrow-right-alt.svg") no-repeat right bottom 5px;*/
}

@media (max-width: 1140px) {
  .team {
    grid-template-columns: repeat(3, 1fr);
  }

  .card {
    min-width: unset;
    width: 85%;
  }
}

@media (max-width: 1024px) {
  .team {
    grid-gap: 2em;
    grid-template-columns: repeat(3, 1fr);
  }

  .card {

  }
}

@media (max-width: 420px) {
  .container{
    padding: 2em;
  }
  .team, .team.one, .team.two, .team.tree {
    grid-gap: 2em;
    grid-template-columns: repeat(1, 1fr);
  }

}
</style>