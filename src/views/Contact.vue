<template>
  <div>
    <navbar pageName='联系人'></navbar>
    <van-contact-card @click="add()" />

    <tabbar :active=1></tabbar>
  </div>
</template>

<script>
import contactlist from "@/components/contactList.vue";
import tabbar from "@/components/tabbar.vue";
import navbar from "@/components/navbar.vue";
export default {
  components: {
    tabbar,
    navbar,
    contactlist
  },
  data() {
    return {};
  },
  methods: {
    add() {
      this.$router.push("/addcontact");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>