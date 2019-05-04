<template>
  <div>
    <div class="navbar">
      <van-nav-bar
        @click-left="onClickLeft"
        fixed
      >
        <van-icon
          name="arrow-left"
          slot="left"
          size="20px"
          color="#fff"
        />
      </van-nav-bar>
    </div>
    <header>
      <div class="avatar">
        <img :src=userData.avatar>
      </div>
      <div class="name">{{userData.nickname}}</div>
    </header>
    <div class="content">
      <van-cell
        :title=userData.nickname
        icon="user-o"
      />
      <van-cell
        :title="userData.unique"
        icon="label-o"
      />
      <van-cell
        :title="userData.gender === 0 ? '女' : '男'"
        icon="flower-o"
      />
      <van-cell
        :title=userData.age
        icon="contact"
      />
    </div>
    <footer>
      <van-button
        type="primary"
        size="info"
        @click="addContact"
      >加好友</van-button>
    </footer>
  </div>
</template>

<script>
import axios from "axios";
export default {
  mounted() {
    this.getData();
  },
  data() {
    return {
      userData: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("/addcontact");
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
    },
    addContact() {
      this.$router.push("/addcontactvalidate");
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  position: relative;
  height: 500px;
  background-color: #999;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  .avatar {
    width: 150px;
    height: 150px;
    border-radius: 75px;
    background-color: #eee;
    margin: 50px 0px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .name {
    height: 50px;
    font-weight: 600;
    font-size: 30px;
  }
  .tips {
    height: 50px;
    font-weight: 600;
    font-size: 28px;
  }
}

.van-nav-bar {
  background-color: transparent;
}

.van-nav-bar::after {
  border: none;
}

.content {
  // margin-top: 120px;
}

.van-cell__title {
  text-align: left;
  margin-left: 20px;
}

footer {
  position: fixed;
  bottom: 20px;

  width: 100%;
  margin: 0 auto;
  .van-button {
    width: 300px;
  }
}
</style>