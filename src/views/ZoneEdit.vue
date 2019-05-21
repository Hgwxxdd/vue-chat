<template>
  <div class="container">
    <van-nav-bar
      title="动态列表"
      right-text="发送"
      @click-left="back()"
      @click-right="send()"
    >
      <van-icon
        name="arrow-left"
        color="#333"
        slot="left"
      ></van-icon>
    </van-nav-bar>
    <div class="input">
      <textarea
        placeholder="分享新鲜事"
        v-model="content"
      ></textarea>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      content: ""
    };
  },
  methods: {
    back() {
      this.$router.push("/zone");
    },
    send() {
      axios({
        url: "http://localhost:3000/user/dynamicadd",
        method: "post",
        params: {
          sender: localStorage.getItem("userid"),
          nickname: localStorage.getItem("nickname"),
          avatar: localStorage.getItem("avatar"),
          content: this.content,
          updated: Date.now()
        }
      });
      this.$router.push("/zone");
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f0f2f8;
}

.input {
  textarea {
    width: 100%;
    height: 500px;
    padding: 20px 30px;
    box-sizing: border-box;
    resize: none;
    white-space: pre-wrap;
    word-wrap: break-word;
    word-break: break-all;
  }
}
</style>