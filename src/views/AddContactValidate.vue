<template>
  <div class="container">
    <van-nav-bar
      right-text="发送"
      title="添加好友"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <van-icon
        name="arrow-left"
        slot="left"
        size="16px"
        color="#333"
      />
    </van-nav-bar>

    <div class="cell">
      <div class="avatar">
        <img :src="userData.avatar">
      </div>
      <div class="data">
        <div class="name">{{userData.nickname}}</div>
        <div class="sex">
          <div class="gender">{{userData.gender == 0 ? '女':'男'}}</div>
          <div class="age">{{userData.age}}</div>
        </div>
      </div>
    </div>
    <div class="validate">
      <div class="text">请填写验证信息</div>
      <van-field v-model="msg" />
    </div>
    <!-- <div class="note">
      <div class="text">设置备注和分组</div>
      <div class="note-field">
        <div class="remark">备注</div>
        <input
          type="text"
          v-model="note"
        >
      </div>
    </div> -->
  </div>
</template>

<script>
import axios from "axios";
import io from "socket.io-client";
export default {
  data() {
    return {
      msg: "",
      userData: ""
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    onClickLeft() {
      this.$router.push("/addcontact");
    },
    onClickRight() {
      var id = localStorage.getItem("userid");
      var jwtAxios = axios.create({
        headers: { Authorization: this.$store.state.token }
      });
      jwtAxios({
        url: "http://localhost:3000/user/addcontact",
        method: "post",
        params: {
          userid: id,
          contact: this.userData.unique,
          msg: this.msg,
          send_time: Date.now()
        }
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
      const socket = io.connect("http://localhost:3000");
      socket.emit("notice", {
        userid: id,
        contact: this.userData.unique,
        from_nickname: this.$store.state.nickname,
        msg: id + "请求加您为好友",
        send_time: Date.now()
      });
      this.$router.push("/chat");
    },
    getData() {
      var id = this.$store.state.findId;
      var jwtAxios = axios.create({
        headers: { Authorization: this.$store.state.token }
      });
      jwtAxios({
        url: "http://localhost:3000/user/search",
        method: "get",
        params: {
          query: id
        }
      })
        .then(res => {
          res.data[0].age += "岁";
          console.log(res.data);
          this.userData = res.data[0];
        })
        .catch(err => {
          console.log(err);
        });
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

.validate {
  .van-field {
    height: 120px;
  }
}

.van-cell {
  text-align: left;
}

.cell {
  margin-top: 50px;
  height: 140px;
  display: flex;
  align-items: center;
}

.name {
  font-size: 30px;
  margin-left: 20px;
  font-weight: 600;
}
.text {
  text-align: left;
  padding-left: 30px;
  margin-top: 50px;
  margin-bottom: 20px;
}
.avatar {
  width: 100px;
  height: 100px;
  margin-left: 5px;
  border-radius: 50px;
  object-fit: cover;
  background-color: #333;
  margin-left: 30px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}

.note-field {
  display: flex;

  .remark {
    width: 150px;
    line-height: 80px;
    font-size: 28px;
    background-color: #fff;
  }

  input {
    width: 100%;
    height: 55px;
    padding: 10px 15px;
    font-size: 28px;
  }
}

.data {
  // display: flex;

  .sex {
    display: flex;

    .age {
      text-align: left;
      margin-left: 20px;
      margin-top: 3px;
    }
    .gender {
      text-align: left;
      margin-left: 26px;
      margin-top: 3px;
    }
  }
}
</style>