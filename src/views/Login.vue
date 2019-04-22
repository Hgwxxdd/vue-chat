<template>
  <div>
    <h1>login</h1>
    <div class="input">
      <van-cell-group>
        <van-field
          v-model="username"
          placeholder="用户名"
        />
        <van-field
          type=password
          v-model="password"
          placeholder="密码"
        />
      </van-cell-group>
    </div>
    <div class="button">
      <van-button
        size="large"
        type="info"
        @click="login"
      >登录</van-button>
    </div>
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
    login() {
      axios({
        url: "http://localhost:3000/login",
        method: "post",
        params: {
          username: this.username,
          password: this.password
        }
      })
        .then(res => {
          if (res.status === 200) {
            this.$store.state.token = res.headers.authorization;
            this.$router.push("/chat");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  padding: 40px;
}
</style>