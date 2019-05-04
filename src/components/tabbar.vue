<template>
  <div>
    <van-tabbar v-model="whichActive">
      <van-tabbar-item
        icon="chat"
        to="/Chat"
        :info.sync="unread == 0 ? '': unread"
      >聊天</van-tabbar-item>
      <van-tabbar-item
        icon="friends"
        to="/Contact"
      >联系人</van-tabbar-item>
      <van-tabbar-item
        icon="setting"
        to="/Option"
      >设置</van-tabbar-item>
      <van-tabbar-item icon="star">空间</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: Number,
      required: true
    },
    unread: {
      type: Number
    }
  },
  data() {
    return {
      whichActive: this.active,
      chatinfo: this.unread
    };
  }
};
</script>

<style lang="scss" scoped>
</style>