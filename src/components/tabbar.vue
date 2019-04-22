<template>
  <div>
    <van-tabbar v-model="whichActive">
      <van-tabbar-item
        icon="chat"
        to="/Chat"
      >聊天</van-tabbar-item>
      <van-tabbar-item
        icon="friends"
        to="/Contact"
      >联系人</van-tabbar-item>
      <van-tabbar-item
        icon="setting"
        to="/Option"
      >设置</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      whichActive: this.active
    };
  }
};
</script>

<style lang="scss" scoped>
</style>