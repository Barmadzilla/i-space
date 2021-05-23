<template>
  <div class="bg">
    <div class="container">
      <price-card
          v-for="(data,i) in priceList"
          :key="i"
          :title="data.title"
          :list="data.list"
          :price="data.price"
          :bottom-note="data.bottomNote"
          :top-note="data.topNote"
          :no-background="true"
      />
      <div class="cloud-container">
        <div class="cloud">
          <strong>Используем технологии: </strong>Yandex cloud, Asure MS, Digital Ocean, AWS, Google Platform, Kubernetes, Openshift, Postgresql, Clickhouse, ArangoDB, MySQL,
          MongoDB, MsSQL, Redis, Memcached, RabbitMq, Apache kafka, Azure Storage, Zookeeper, Consul, Prometheus, Grafana, Alertmanager. Unix, Ubuntu, Win, KVM, Ceph, MongoDB,
          PostgreSQL, Puppet, Elasticsearch, Logstash, Kibana, ZABBIX, MySQL, Azure, CentOS, Redis, Ansible, Docker/Kubernetes, Last Backend
        </div>
        <img src="../assets/images/automatization-dude.svg" alt="Automations Dude">
      </div>
    </div>
  </div>
</template>

<script>
import PriceCard from "@/components/PriceCard";

export default {
  name: "Automatization",
  components: {PriceCard},
  data() {
    return {
      priceList: [
        {
          title: 'Автоматизация инфраструктуры по подписке (от 6 месяцев)',
          price: '150 000 ₽/мес',
          list: [
            'Создание/настройка/перевод инфраструктуры в облака ',
            'Настройка и автоматизация CI/CD на базе Kubernetes/Openshift',
            'Штатное расписание и должностные инструкции',
            'Настройка/автоматизация/поддержка мониторинга инфраструктуры  и приложений',
            'Настройка систем сбора логов',
            'Хранение данных мониторинга,  логов и бэкапов ',
            'Работы по улучшению инфраструктуры, восстановление систем после возможных сбоев',
          ],
          topNote: '',
          bottomNote:
              'В подписку включено: 1 кластер K8s (2 окружения), пайплайн на 3-5 сервисов, 1 кластер СУБД и настройка Gitlab. Сервис оказывается в партнерстве с компанией LastBackend',

        }]
    }
  }
}
</script>

<style scoped>
.bg {
  background: var(--bg-blue);
}

.card {
  width: 50%;
  margin-bottom: 3em;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 3em;
}

.cloud-container {
  width: 40%;
}

img {
  position: relative;
  bottom: -6em;
  right: -5em;
}

.cloud {
  padding: 2em;
  background: white;
  border-radius: 8px 8px 8px 0;
  /*width: 40%;*/
  margin-left: 4em;
  position: relative;
}

.cloud:after {
  content: '';
  width: 61px;
  height: 38px;
  position: absolute;
  left: 0;
  bottom: -38px;
  background: url("../assets/images/cloud-after.svg") no-repeat;
}

@media (max-width: 1140px) {
  .cloud {
    margin-left: 3em;
    font-size: 17px;
  }

  img {
    max-width: 25em;
  }
}

@media (max-width: 1024px) {
  .cloud {
    margin-left: 2em;
    font-size: 15px;
  }
  img {
    max-width: 23em;
  }
}
@media (max-width: 420px) {
  .container{
    flex-direction: column-reverse;
    padding: 1em;
  }
  .cloud-container{
    width: calc(100% + 2em);
    background: white;
    margin: -1em -1em 0 -1em;
    overflow: hidden;
  }
  .cloud:after{
    display: none;
  }
  .cloud {
    font-size: 15px;
    margin-left: unset;
    margin-bottom: -1.5em;
    /*padding: 0;*/

  }
  img {
    max-width: 23em;
    bottom: -1.9em;
    right: unset;
  }
}
</style>