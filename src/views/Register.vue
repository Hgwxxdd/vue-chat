<template>
  <div>
    <van-nav-bar
      class="arrow"
      @click-left="back()"
    >
      <van-icon
        name="arrow-left"
        slot="left"
        size="16px"
        color="#333"
      />
    </van-nav-bar>
    <div class="logo">
      <img src="../assets/xlogo.png">
    </div>

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
      <van-field
        v-model="age"
        clearable
        label="年龄"
        placeholder="请输入年龄"
      />
      <van-field
        v-model="gender"
        clearable
        label="性别"
        placeholder="请输入性别"
      />
      <div class="button">
        <van-button
          size="large"
          type="info"
          @click="register"
        >注册</van-button>
      </div>
    </van-cell-group>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      age: "",
      gender: "",
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
          password: this.password,
          age: this.age,
          gender: this.gender
        }
      });
    },
    back() {
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="scss" scoped>
.logo {
  margin-top: 100px;
  img {
    width: 50%;
    height: 50%;
    object-fit: contain;
    margin-bottom: 100px;
  }
}

.button {
  padding: 40px;
}
</style>