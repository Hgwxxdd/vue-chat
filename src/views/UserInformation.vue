<template>
  <div>
    <van-nav-bar
      class="arrow"
      @click-left="onClickLeft"
      title="个人信息"
    >
      <van-icon
        name="arrow-left"
        slot="left"
        size="16px"
        color="#333"
      />
    </van-nav-bar>
    <van-cell
      title="头像"
      is-link
      center
    >
      <!-- <div
        class="img"
        slot="right-icon"
      >
        <img src="../assets/1.jpg">
      </div> -->
    </van-cell>
    <van-field
      label="昵称"
      v-model="value"
      center
    />
    <van-field
      label="性别"
      value="男"
      center
    />
    <!-- <van-field
      label="地址"
      value="宜宾"
      center
    /> -->
    <!-- <van-cell
      title="个性签名"
      is-link
      value="gogogo"
      center
    /> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "尘缘"
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("/option");
    }
  }
};
</script>

<style lang="scss" scoped>
.van-cell {
  text-align: left;
  height: 50px;
}
.van-nav-bar__text {
  color: #333;
}
.arrow {
  color: #333;
}
.img {
  width: 60px;
  height: 60px;
  margin-right: 25px;
  border-radius: 25px;
  object-fit: cover;
  background-color: #333;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}
</style>