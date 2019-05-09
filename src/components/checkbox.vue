<template>
  <div
    class="container"
    @click="choose"
  >
    <div class="circle">
      <van-icon
        name="checked"
        color="#1989fa"
        size="24px"
        v-if="visible"
      ></van-icon>
    </div>
    <div class="avatar">
      <img :src="avatar">
    </div>
    <div class="name">{{name}}</div>
  </div>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String
    },
    name: {
      type: String
    }
  },
  data() {
    return {
      visible: true
    };
  },
  methods: {
    choose() {
      this.$emit("choose");
      this.visible = !this.visible;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;

  width: 100%;
  height: 100px;
}

.circle {
  width: 44px;
  height: 44px;
  margin-left: 20px;
  border-radius: 50%;
  border: 1px solid #bbb;

  .van-icon {
    margin-right: 1px;
    margin-bottom: 10px;
  }
}

.avatar {
  width: 75px;
  height: 75px;
  margin-left: 30px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 48%;
  }
}

.name {
  font-size: 28px;
  margin-left: 30px;
}
</style>