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
    <van-cell
      center
      is-link
      title="切换账号"
      @click="actionSheetVisible()"
    />
    <van-cell
      center
      is-link
      title="退出程序"
      @click="actionSheetVisible()"
    />
    <van-actionsheet
      v-model="show"
      :actions="actions"
      @select="onSelect"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      actions: [
        {
          name: "选项"
        },
        {
          name: "选项",
          subname: "描述信息"
        },
        {
          loading: true
        },
        {
          name: "禁用选项",
          disabled: true
        }
      ]
    };
  },
  methods: {
    onSelect(item) {
      this.show = false;
      console.log(item);
    },
    actionSheetVisible() {
      this.show = true;
    },
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
</style>