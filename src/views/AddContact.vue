<template>
  <div>
    <van-nav-bar
      class="arrow"
      @click-left="onClickLeft"
    >
      <van-icon
        name="arrow-left"
        slot="left"
        size="16px"
        color="#333"
      />
    </van-nav-bar>
    <van-tabs
      v-model="active"
      color="#1989fa"
    >
      <van-tab title="找人">
        <van-search
          placeholder="昵称/账号"
          v-model="userAccount"
        />
      </van-tab>
      <van-tab title="找群">
        <van-search
          placeholder="群号"
          v-model="groupAccount"
        />
      </van-tab>
    </van-tabs>
    <div class="search-box">
      <!-- <list
        v-for="(item, index) in searchList"
        :name=item.username
        :key="index"
      ></list> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import list from "@/components/contactList";

export default {
  component: {
    list
  },
  data() {
    return {
      active: 0,
      userAccount: "",
      groupAccount: "",
      asd: "123"
    };
  },
  watch: {
    userAccount: val => {
      axios({
        method: "get",
        url: "http://localhost:3000/user/search",
        params: {
          query: val
        }
      })
        .then(res => {
          console.log(res.data);
          console.log(this.asd);
          // this.searchList = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  methods: {
    onClickLeft() {
      this.$router.push("/chat");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>