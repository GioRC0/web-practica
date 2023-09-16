<script setup>
import JobCard from "@/components/job-card.component.vue";
import NavToolbar from "@/components/nav-toolbar.component.vue";
import JobFooter from "@/components/job-footer.component.vue";
</script>

<template>
  <div class="wrapper">
  <header >
  <nav-toolbar></nav-toolbar>
  </header>
  <main>
  <div class="center">
    <job-card></job-card>
  </div>
  </main>
  <footer>
  <job-footer></job-footer>
  </footer>
  </div>
</template>

<style >
.wrapper {

  height: 100vh;
  width:199vh;
  display: flex;

  /* Direction of the items, can be row or column */
  flex-direction: column;
}

header{
  padding:1% 0;
}
footer {
  padding:1% 0;
  height: 30px;
}

main {
  padding:1% 0;
  flex: 1;
}
.center {
  display: block;
  text-align: center;
  justify-content: center;
}

#app{
  max-width:1920px;
  width:100%;
  margin: 0 auto;
  padding: 0;
}
</style>
