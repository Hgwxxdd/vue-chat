<template>
  <div class="container">
    <van-button
      type="primary"
      plain
      hairline
      @click="insertNotification"
    >添加通知</van-button>
    <van-button
      plain
      hairline
      type="primary"
      @click="insertUser"
    >添加用户</van-button>
    <van-button
      plain
      hairline
      type="primary"
      @click="insertChatRecord"
    >添加聊天记录</van-button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      notification: "",
      userRecord: "",
      chatRecord: ""
    };
  },
  mounted() {
    this.getData();
    this.getUser();
    this.getChatRecord();
  },
  methods: {
    getData() {
      axios
        .get(
          "https://easy-mock.com/mock/5cb711a51a800d633780003a/contact/getNotification"
        )
        .then(res => {
          this.notification = res.data.data;
          console.log(this.notification);
        });
    },
    getChatRecord() {
      axios
        .get(
          "https://easy-mock.com/mock/5cb711a51a800d633780003a/contact/getChatRecord"
        )
        .then(res => {
          this.chatRecord = res.data.data;
          console.log(this.chatRecord);
        });
    },
    getUser() {
      axios
        .get(
          "https://easy-mock.com/mock/5cb711a51a800d633780003a/contact/getUser"
        )
        .then(res => {
          this.userRecord = res.data.data;
          console.log(this.userRecord);
        });
    },
    // 插入通知
    insertNotification() {
      axios({
        method: "post",
        url: "http://localhost:3000/mock/mocknotification",
        params: {
          message: this.notification
        }
      }).then(res => {
        console.log(res);
      });
    },
    insertUser() {
      axios({
        method: "post",
        url: "http://localhost:3000/mock/mockuser",
        params: {
          message: this.userRecord
        }
      }).then(res => {
        console.log(res);
      });
    },
    insertChatRecord() {
      axios({
        method: "post",
        url: "http://localhost:3000/mock/mockchatrecord",
        params: {
          message: this.chatRecord
        }
      }).then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.avatar {
  width: 90px;
  height: 90px;
  border-radius: 45px;
  background-color: #333;
  margin-left: 10px;
  margin-right: 20px;
}

.updated {
  width: 100px;
  height: 100px;
  line-height: 100px;
}

.information {
  width: 500px;
  height: 100px;
  text-align: left;
  background-color: #fff;

  .name {
    height: 60px;
    line-height: 60px;
    font-weight: 800;
    font-size: 32px;
  }
  .message {
    height: 50px;
    font-size: 26px;
  }
}

.cell {
  position: relative;
  display: flex;
  overflow: hidden;
  height: 120px;
  padding: 10px 15px;
  align-items: center;
}
</style>