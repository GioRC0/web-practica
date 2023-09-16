<template>
  <pv-card v-for="job in jobs" class = "card" aria-label="card for apply a job in Contra as software developer">
    <template #header>
      <img alt="logo of Contra" v-bind:src="job.company_logo_url" aria-label="logo of Contra" />
    </template>
    <template #title aria-label="Senior Site Reliability Engineer job"> {{job.title }}<br>Company: {{job.company_name }} </template>
    <template #subtitle> Category: {{job.category }}<br> Salary: {{job.salary }} </template>
    <template #content > Publication date: {{job.publication_date }}.
      <p>
        <br><span v-html="job.description" aria-label="Description about the job"></span>
      </p>
    </template>
    <template #footer>
      <pv-button icon="pi pi-check" label="Apply" aria-label="Button to apply the job"/>
    </template>
  </pv-card>

</template>

<script >
import Company_API from "@/services/company-api.service";

export default {
  name: "job-card.component",
  data(){
    return {
      jobs: []
    };
  },
  async mounted(){
    new Company_API().get_all().then((response) => {
      this.jobs = response.data['jobs'];
      console.log(this.jobs);

    })
  }
}
</script>

<style scoped>
  .card{
    width:100%
  }
</style>