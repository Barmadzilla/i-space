<template>
  <div class="about">
    <div class="container">
      <div class="wrap">
        <div class="intro">
          <h2 v-html="title"></h2>
          <p>{{ description }}</p>
        </div>
        <div class="cloud">
          <img src="../assets/images/cloud.svg" alt="">
        </div>
      </div>
      <div class="pros">
        <div v-for="(pro, i) in pros" :key="i" class="pro">
          <img :src="require(`@/assets/images/${pro.img}`)" alt="">
          <h3>{{ pro.title }}</h3>
          <p>{{ pro.description }}</p>
        </div>
      </div>
      <div class="process">
        <img src="../assets/images/process_team.svg" alt="">
        <div class="info">
          <h2 v-html="processes.title"></h2>
          <div>
            <list-item-play v-for="(process ,i) in processes.processes" :key="i" >{{ process }}</list-item-play>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListItemPlay from "@/components/lists/ListItemPlay";
export default {
  name: "AboutSpace",
  components: {ListItemPlay},
  data() {
    return {
      title: 'Сотни компетенций <br/>в <span class="text-gradient">одной команде</span>',
      description:
          'i-Space — это удалённая команда специалистов разного профиля. Мы решаем задачи, от которых у вас опускаются руки. Работаем без выходных, больничных и отпусков.',
      pros: [
        {
          title: 'Юристы',
          img: 'pro_legals.svg',
          description: 'Обеспечат безопасную и законную работу бизнеса.  Помогут со сложными сделками и реструктуризацией'
        },
        {
          title: 'Бухгалтеры',
          img: 'pro_acountants.svg',
          description: 'Организуют финансовый учёт в компании, оптимизируют налоговую нагрузку бизнеса и предотвратят пени и штрафы'
        },
        {
          title: 'IT-специалисты',
          img: 'pro_it.svg',
          description: 'Наладят IT-инфраструктуру бизнеса — помогут с офисным оборудованием и серверным окружением компании'
        },
        {
          title: 'DevOps - специалисты',
          img: 'pro_devops.svg',
          description: 'Возьмут под контроль процессы разработки, тестирования и запуска программного обеспечения'
        },
      ],
      processes: {
        title: '<span class="text-gradient">Упрощаем</span> рабочие процессы',
        processes: [
          'Все коммуникации в едином информационном пространстве. Здесь вы, менеджер и специалисты по направлениям.',
          'При необходимости - прямой доступ к конкретному специалисту без "испорченного телефона".',
          'Реакция на входящие запросы - не более двух часов в рабочее время.'
        ]
      }
    }
  }
}
</script>

<style scoped>
.about .container {
  background: url("../assets/images/bg/dotted_arrow.svg") no-repeat left 0.6em top 12em / 90%;
}

.pros {
  display: flex;
  justify-content: space-between;
}

.pro {
  max-width: 276px;
  text-align: left;
  padding: 0 .5em;
  box-sizing: border-box;
}

h2 {
  font-size: 32px;
  margin-top: 0;
}

h3 {
  font-size: 22px;
  margin: 0.7em 0;
}

.wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8em;
}

.intro {
  text-align: left;
  margin-right: 3em;
  font-size: 25px;
}

.process {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 7em;
}

.process img {
  margin-left: 2em;
  width: 60%;
  margin-right: 4em;
}

.process .info {
  text-align: left;

}

.process .info img {
  width: 18px;
  margin-right: 2em;
  margin-left: 0;
  margin-top: 0.3em;
}
.process-info{
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5em;

}
</style>