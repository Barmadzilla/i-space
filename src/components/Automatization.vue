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
          price: '150 000',
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
  padding-top: 3em;
}

.card {
  width: 50%;
  margin-bottom: 3em;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.cloud-container{
  width: 40%;
}
img {
  position: relative;
  bottom: -4em;
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
</style>