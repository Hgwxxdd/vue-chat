<template>
  <div>
    <div class="logo">
      <img src="../assets/xlogo.png">
    </div>
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
    <div
      class="register"
      @click="register()"
    >用户注册</div>
    <div class="tips">登录即代表同意服务条款</div>
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
            localStorage.setItem("userid", res.headers.userid);
            localStorage.setItem("avatar", res.headers.avatar);
            localStorage.setItem("nickname", res.headers.nickname);
            localStorage.setItem("token", res.headers.authorization);
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
    },
    register() {
      this.$router.push("/register");
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  padding: 40px;
}

.logo {
  margin-top: 100px;
  img {
    width: 50%;
    height: 50%;
    object-fit: contain;
    margin-bottom: 100px;
  }
}

.register {
  // margin-top: 50px;
  margin-bottom: 30px;
}
</style>