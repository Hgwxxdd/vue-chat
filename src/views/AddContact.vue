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

  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      userAccount: "",
      groupAccount: ""
    };
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