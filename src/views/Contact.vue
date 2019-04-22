<template>
  <div>
    <navbar pageName='联系人'></navbar>
    <h1>contact</h1>
    <tabbar :active=1></tabbar>
  </div>
</template>

<script>
import tabbar from "@/components/tabbar.vue";
import navbar from "@/components/navbar.vue";
export default {
  components: {
    tabbar,
    navbar
  }
};
</script>

<style lang="scss" scoped>
</style>