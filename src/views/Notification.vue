<template>
  <div>
    <van-nav-bar
      title="消息通知"
      @click-left="back()"
    >
      <van-icon
        name="arrow-left"
        color="#333"
        slot="left"
      ></van-icon>
    </van-nav-bar>
    <notificationlist
      v-for="(item, index) in list"
      :name=item.from_nickname
      :message=item.msg
      :avatar=item.avatar
      :key="index"
      :message_type=item.message_type
      @agree="agree(item)"
      @disagree="disagree(item)"
    ></notificationlist>
  </div>
</template>

<script>
import axios from "axios";
import io from "socket.io-client";
import notificationlist from "@/components/NotificationList.vue";
export default {
  components: {
    notificationlist
  },
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.getNotification();
  },
  methods: {
    getNotification() {
      var id = this.$store.state.userid;
      var jwtAxios = axios.create({
        headers: { Authorization: this.$store.state.token }
      });
      jwtAxios({
        url: "http://localhost:3000/user/notificationlist",
        method: "post",
        params: {
          userid: id
        }
      })
        .then(res => {
          this.list = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    back() {
      this.$router.push("/chat");
    },
    agree(user) {
      user.message_type = "2";
      console.log(user);
      var message_type = user.message_type;
      var contact = user.from;
      var id = this.$store.state.userid;
      var jwtAxios = axios.create({
        headers: { Authorization: this.$store.state.token }
      });
      jwtAxios({
        url: "http://localhost:3000/user/notificationrequest",
        method: "post",
        params: {
          userid: id,
          contact: contact,
          message_type: message_type
        }
      });
      // socket 通知服务器
      const socket = io.connect("http://localhost:3000");
      socket.emit("notice", {
        from: user.from,
        from_nickname: user.from_nickname,
        to: id,
        send_time: Date.now()
      });
      // 添加好友关系
    },
    disagree(user) {
      user.message_type = "3";
      var message_type = user.message_type;
      var id = this.$store.state.userid;
      var contact = user.from;
      var jwtAxios = axios.create({
        headers: { Authorization: this.$store.state.token }
      });
      jwtAxios({
        url: "http://localhost:3000/user/notificationrequest",
        method: "post",
        params: {
          userid: id,
          contact: contact,
          message_type: message_type
        }
      });
      // 通知服务器
      const socket = io.connect("http://localhost:3000");
      socket.emit("notice", {
        from: user.from,
        from_nickname: contact,
        to: id,
        send_time: Date.now()
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>