<template>
  <div>
    <b-card title="Aktif İlanlar İçinde Arama Yap">
      <b-card-text>
        <b-row>
          <b-col col lg="6" md="8">
            <b-form-group>
              <b-form-input v-model="jobSearch" placeholder="Aradığın İş"></b-form-input>
            </b-form-group>
            <b-form-group>
              <b-form-input v-model="locationSearch" placeholder="Aradığın Yer"></b-form-input>
            </b-form-group>
            <b-button @click="clickSearch" block variant="primary">İş Bul</b-button>
          </b-col>
        </b-row>
      </b-card-text>
    </b-card>
    <h2 class="mt-3 mb-3">Sonuçlar</h2>
    <b-card
      v-for="item in jobResult2"
      :key="item.id"
      :img-src="item.imageUrl"
      img-alt="Card image"
      img-left
      class="mb-3"
      :title="item.positionName"
      :sub-title="item.companyName"
    >
      <b-row align-h="between">
        <b-col cols="8">
          <b-badge class="mr-1">{{item.distance}} km</b-badge>
          <b-badge class="mr-1">{{item.city}}</b-badge>
          <b-badge class="mr-1">{{item.tag}}</b-badge>
        </b-col>
        <b-col cols="4" align="right">
          <router-link :to="{name:'jobdetail', params: {id:item.id}}" class="btn btn-primary">Detay</router-link>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import Job from "@/store/entities/job";
import jobsData from "@/store/json/jobs.json";

export default {
  name: "joblist",

  data: () => ({
    jobSearch: "",
    locationSearch: "",
    jobs: [],
    jobResult2: []
  }),

  computed: {
    // jobResult1() {
    //   return this.searchJob()
    // }
  },
  created() {
    this.fetchItems();
  },
  methods: {
    clickSearch() {
      this.jobResult2 = this.searchJob();
    },
    searchJob() {
      return this.jobs.filter(
        j =>
          j.positionName.includes(this.jobSearch) &&
          j.address.includes(this.locationSearch)
      );
    },
    fetchItems() {
      this.jobResult2 = this.jobs = jobsData;
    }
  }
};
</script>

<style>
</style>
