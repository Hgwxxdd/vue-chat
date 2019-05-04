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
          console.log(res.data);
          if (res.status === 200) {
            console.log(res.headers);
            this.$store.state.userid = res.headers.userid;
            this.$store.state.avatar = res.headers.avatar;
            this.$store.state.nickname = res.headers.nickname;
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