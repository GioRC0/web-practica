<script>
export default {
  name: "nav-toolbar.component"
}
</script>

<template typeof="undefined">
  <pv-toolbar class="toolbar" aria-label="Toolbar of the page">
    <template #start>
      <pv-button label="About" icon="pi pi-bars" class="mr-2" />
    </template>
  </pv-toolbar>
</template>

<style scoped>
.toolbar{
  background-color: #3f51b5;
}
</style>