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
      <list
        v-for="(item, index) in searchList"
        @chatting="checkData(item)"
        :key="index"
        :age=item.age
        :avatar=item.avatar
        :unique=item.unique
        :gender=item.gender
        :nickname=item.nickname
      ></list>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import list from "@/components/searchList";

export default {
  components: {
    list
  },
  data() {
    return {
      active: 0,
      userAccount: "",
      groupAccount: "",
      searchList: ""
    };
  },
  watch: {
    userAccount: function(user) {
      axios({
        method: "get",
        url: "http://localhost:3000/user/search",
        params: {
          query: user
        }
      })
        .then(res => {
          console.log(res.data);
          this.searchList = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  methods: {
    onClickLeft() {
      this.$router.push("/chat");
    },
    checkData(user) {
      console.log(user._id);
      this.$store.state.findId = user.unique;
      this.$router.push("/datacard");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>