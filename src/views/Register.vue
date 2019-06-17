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
        v-model="nickname"
        required
        clearable
        label="昵称"
        placeholder="请输入昵称"
      />
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
        v-model="passwordConfirm"
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
    <van-dialog
      v-model="show"
      :message="msg"
      title="错误"
    >
    </van-dialog>
  </div>
</template>

<script>
import axios from "axios";
import { setTimeout } from "timers";
export default {
  data() {
    return {
      show: false,
      msg: "",
      age: "",
      gender: "",
      username: "",
      nickname: "",
      password: "",
      passwordConfirm: ""
    };
  },
  methods: {
    register() {
      if (this.nickname == "" || this.nickname.length > 16) {
        this.show = true;
        this.msg = "昵称填写错误！(非空，16位以下)";
      } else if (this.username == "") {
        this.show = true;
        this.msg = "用户名填写错误！(非空，16位以下)";
      } else if (this.password == "") {
        this.show = true;
        this.msg = "密码填写错误(非空，16位以下)";
      } else if (this.passwordConfirm == "") {
        this.show = true;
        this.msg = "确认密码与密码不符";
      } else if (
        this.age <= 0 ||
        this.age > 300 ||
        typeof parseInt(this.age) != "number"
      ) {
        console.log(typeof this.age);
        this.show = true;
        this.msg = "年龄填写错误(需为大于0小于300的数字)";
      } else if (
        this.gender == "" ||
        (this.gender != "男" && this.gender != "女")
      ) {
        console.log(this.gender);
        this.show = true;
        this.msg = "性别填写错误(需为男或女)";
      } else {
        var avatar = "avatar" + Math.floor(Math.random() * 8) + ".jpg";
        axios({
          method: "post",
          url: "http://localhost:3000/register",
          params: {
            nickname: this.nickname,
            username: this.username,
            password: this.password,
            avatar: avatar,
            age: this.age,
            gender: this.gender,
            unique: Date.now()
          }
        }).then(() => {
          this.show = true;
          this.msg = "注册成功,3秒后跳转登录页面";
          setTimeout(() => this.$router.push("/login"), 3000);
        });
      }
    },
    back() {
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="scss" scoped>
.logo {
  margin-top: 30px;
  img {
    width: 50%;
    height: 50%;
    object-fit: contain;
    margin-bottom: 30px;
  }
}

.button {
  padding: 40px;
}
</style>