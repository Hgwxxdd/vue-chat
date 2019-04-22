<template>
  <div>
    <van-cell-group>
      <van-field
        v-model="username"
        required
        clearable
        label="用户名"
        placeholder="请输入用户名"
      />
      <van-field
        v-model="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
      />
      <van-field
        v-model="password"
        type="password"
        label="确认密码"
        placeholder="请输入密码"
        required
      />
      <van-button
        size="large"
        type="info"
        round
        @click="register"
      >注册</van-button>
    </van-cell-group>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    register() {
      axios({
        method: "post",
        url: "http://localhost:3000/user/register",
        params: {
          username: this.username,
          password: this.password
        }
      });
      // .post("http://localhost:3000/user/register", {
      //   username: this.username,
      //   password: this.password
      // })
      // .then(function(res) {
      //   console.log(res);
      // });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>