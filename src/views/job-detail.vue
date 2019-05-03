<template>
  <div>
    <div class="mb-3">
      <router-link :to="{name: 'joblist'}">Geri Dön</router-link>
    </div>
    <b-card
      :title="job.positionName"
      :sub-title="job.companyName"
      :img-src="`https://picsum.photos/id/${id}/300/200`"
      img-alt="Image"
      img-top
    >
      <b-card-text>{{job.description}}</b-card-text>
      <a href="#" class="btn btn-primary">Başvur</a>
      <a target="_blank" :href="`http://www.google.com/maps/place/${job.latitude},${job.longitude}`" class="ml-3 btn btn-success">Haritada Göster</a>
      <hr>
      <div>
        <b-badge class="mr-1">{{job.phone}}</b-badge>
        <b-badge class="mr-1">{{job.distance}} km</b-badge>
        <b-badge class="mr-1">{{job.city}}</b-badge>
        <b-badge class="mr-1">{{job.tag}}</b-badge>
      </div>
       <b-card-text>{{job.address}}</b-card-text>
    </b-card>
  </div>
</template>

<script>
import Job from "@/store/entities/job";
import jobsData from "@/store/json/jobs.json";

export default {
  name: "jobdetail",

  props: {
    id: [String, Number]
  },

  data: () => ({
    job: Job
  }),

  created() {
    this.fetchItem();
  },
  methods: {
    fetchItem() {
      let result = jobsData.filter(j => j.id == this.id);
      if (result && result.length) this.job = result[0];
    }
  }
};
</script>

<style>
</style>
