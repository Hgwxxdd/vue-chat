<template>
  <div>
    <van-nav-bar
      class="arrow"
      @click-left="onClickLeft()"
      title="个人信息"
    >
      <van-icon
        name="arrow-left"
        slot="left"
        size="16px"
        color="#333"
      />
    </van-nav-bar>
    <label for="image">
      <div class="cell">
        <div class="title">头像</div>
        <div class="avatar">
          <img
            :src="avatar"
            alt=""
          >
        </div>
        <div class="upload">
          <input
            type="file"
            id="image"
            accept="image/*"
            hidden
            @change="imageReader()"
          >
        </div>
      </div>
    </label>
    <van-field
      label="昵称"
      v-model="nickname"
      center
    />
    <van-field
      label="性别"
      v-model="gender"
      center
    />
    <van-field
      label="年龄"
      v-model="age"
      center
    />
    <div class="button">
      <van-button
        type="info"
        size="large"
        @click="updateData()"
      >修改</van-button>
    </div>
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
export default {
  data() {
    return {
      show: false,
      age: localStorage.getItem("age"),
      avatar: localStorage.getItem("avatar"),
      gender: "",
      nickname: localStorage.getItem("nickname"),
      image: "",
      msg: ""
    };
  },
  mounted() {
    if (localStorage.getItem("gender") == 0) {
      this.gender = "女";
    } else {
      this.gender = "男";
    }
  },
  methods: {
    onClickLeft() {
      this.$router.push("/option");
    },
    imageReader() {
      var image = document.querySelector("#image").files[0];
      var reader = new FileReader();
      reader.addEventListener("load", () => {
        this.avatar = reader.result;
      });
      reader.readAsDataURL(image);
    },
    updateData() {
      if (this.nickname.length > 16) {
        this.show = true;
        this.msg = "请重新修改昵称";
      } else if (this.gender != "男" && this.gender != "女") {
        this.show = true;
        this.msg = "请重新修改性别(男或女)";
      } else if (parseInt(this.age) < 0 || parseInt(this.age) > 300) {
        this.show = true;
        this.msg = "请重新修改年龄";
      } else {
        var sex;
        if (this.gender == "男") {
          sex = "1";
        } else {
          sex = "0";
        }
        // var obj = {
        //   unique: localStorage.getItem("userid"),
        //   age: this.age,
        //   gender: sex,
        //   avatar: this.avatar,
        //   nickname: this.nickname
        // };
        axios({
          method: "post",
          url: "http://localhost:3000/user/update",
          params: {
            unique: localStorage.getItem("userid"),
            age: this.age,
            gender: sex,
            nickname: this.nickname,
            avatar: this.avatar
          }
        })
          .then(res => {
            console.log(res);
            localStorage.setItem("age", res.data.age);
            localStorage.setItem("nickname", res.data.nickname);
            localStorage.setItem("avatar", res.data.avatar);
            localStorage.setItem("gender", res.data.gender);
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.cell {
  box-sizing: border-box;
  padding: 20px 30px;
  height: 110px;
  display: flex;
  align-items: center;
  font-size: 29px;
  border-bottom: 1px solid #f2f0f8;

  .title {
    width: 180px;
    text-align: left;
  }

  .avatar {
    width: 80px;
    height: 80px;
    border-radius: 50px;
    background-color: #fff;
    border: 1px solid #f2f0f8;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
}

.van-cell {
  text-align: left;
  height: 50px;
}
.van-nav-bar__text {
  color: #333;
}
.arrow {
  color: #333;
}
.img {
  width: 60px;
  height: 60px;
  margin-right: 25px;
  border-radius: 30px;
  object-fit: cover;
  background-color: #333;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}

.button {
  margin-top: 40px;
  padding: 0 30px;
}
</style>