<template>
  <div class="container">
    <van-nav-bar
      title="标题"
      @click-left="back()"
    >
      <van-icon
        size="18px"
        color="#333"
        name="user-o"
        slot="right"
      />
      <van-icon
        size="18px"
        color="#333"
        name="arrow-left"
        slot="left"
      />
    </van-nav-bar>
    <chatcard
      message="asdasda"
      avatar="../assets/1.jpg"
    ></chatcard>
    <div class="input-box">
      <van-field v-model="value" />
      <div
        class="icon-right"
        v-if="value"
      >
        <van-icon
          name="smile-o"
          size="24px"
        ></van-icon>
        <van-button
          type="info"
          size="small"
          @click="qwe"
        >发送</van-button>
      </div>
      <div
        class="icon-right"
        v-else
      >
        <van-icon
          name="smile-o"
          size="24px"
        ></van-icon>
        <van-icon
          name="add-o"
          size="24px"
        ></van-icon>
      </div>
    </div>
  </div>
</template>

<script>
import chatcard from "@/components/chatCard";

export default {
  components: {
    chatcard
  },
  data() {
    return {
      value: ""
    };
  },
  methods: {
    back() {
      this.$router.push("/chat");
    },
    qwe() {
      console.log("hi");
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f0f2f8;
}

.input-box {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  height: 60px;
  padding: 16px 0;
  background-color: #f0f2f8;

  .icon-right {
    display: flex;
    align-items: center;
    .van-icon {
      width: 50px;
    }

    .van-button {
      width: 50px;
    }
  }
}

.input-box::before {
  content: "";
  position: absolute;
  pointer-events: none;
  box-sizing: border-box;
  left: 1px;
  right: 0;
  z-index: 1;
  top: 0;
  transform: scaleY(0.5);
  border-top: 1px solid #ddd;
}

.van-button--small {
  min-width: 40px;
  padding: 0;
}
</style>