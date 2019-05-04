<template>
  <div>
    <navbar
      pageName='聊天'
      @actionSheet="add"
    ></navbar>
    <contact
      v-show="contactList"
      v-for="(item, index) in contactList"
      :name="item.from == user ? item.to_nickname : item.from_nickname"
      :updated="item.send_time"
      :message="item.msg"
      :avatar="item.from_avatar"
      :unread="item.from == user ? item.from_unread : item.to_unread"
      :key="index"
      @chatting="toChatting(item)"
    ></contact>
    <van-actionsheet
      v-model="show"
      :actions="actions"
      @select="onSelect"
    />
    <tabbar
      :active=0
      :unread="unread"
    ></tabbar>
  </div>
</template>

<script>
import axios from "axios";
import contact from "@/components/contactList.vue";
import tabbar from "@/components/tabbar.vue";
import navbar from "@/components/navbar.vue";
import io from "socket.io-client";
export default {
  components: {
    tabbar,
    navbar,
    contact
  },
  data() {
    return {
      show: false,
      contactList: [],
      unread: 0,
      user: "",
      actions: [
        {
          name: "创建群聊",
          symbol: 0
        },
        {
          name: "加好友/群",
          symbol: 1
        }
      ]
    };
  },
  mounted() {
    this.getContact();
    this.socket();
  },
  methods: {
    socket() {
      const socket = io.connect("http://localhost:3000");
      socket.on("message", data => {
        // this.getContact();
        var [...list] = this.contactList;
        console.log(list);
        console.log(this.contactList);
        for (let i = 0; i < this.contactList.length; i++) {
          if (
            (this.contactList[i].from == data.from &&
              this.contactList[i].to == data.to) ||
            (this.contactList[i].from == data.to &&
              this.contactList[i].to == data.from)
          ) {
            // 确定通信双方
            // console.log(this.contactList[i]);
            // 如果自己是from
            // if (this.contactList[i].from == this.$store.state.userid) {
            //   console.log("here");
            //   this.contactList[i].msg = data.msg;
            //   console.log(this.contactList[i].msg);
            //   this.contactList[i].send_time = data.send_time.toString();
            //   this.contactList[i].from_unread += 1;
            //   // this.contactList = list;
            // }
            // // 如果自己是to
            // if (this.contactList[i].to == this.$store.state.userid) {
            //   // console.log("hi");
            //   list[i].msg = data.msg;
            //   list[i].send_time = data.send_time.toString();
            //   list[i].to_unread += 1;
            //   this.contactList = list;
            //   console.log(this.contactList);
            // }
          }
        }
      });
    },
    getContact() {
      var id = this.$store.state.userid;
      this.user = this.$store.state.userid;
      var jwtAxios = axios.create({
        headers: { Authorization: this.$store.state.token }
      });
      jwtAxios({
        url: "http://localhost:3000/user/notification",
        method: "get",
        params: {
          userid: id
        }
      })
        .then(res => {
          // console.log(res.data);
          for (let i = 0; i < res.data.length; i++) {
            if (res.data[i].from == id) {
              this.unread += res.data[i].from_unread;
            } else {
              this.unread += res.data[i].to_unread;
            }
          }
          this.contactList = res.data;
          // console.log(this.contactList);
        })
        .catch(err => {
          console.log(err);
          // this.$router.push("/login");
        });
    },
    onSelect(item) {
      // 点击选项时默认不会关闭菜单，可以手动关闭
      this.show = false;
      if (item.symbol === 1) {
        this.$router.push("/addcontact");
      }
    },
    add() {
      this.show = true;
    },
    toChatting(user) {
      console.log();
      if (this.$store.state.userid == user.from) {
        this.$store.state.contact = user.to;
      } else {
        this.$store.state.contact = user.from;
      }
      var id = this.$store.state.userid;
      var jwtAxios = axios.create({
        headers: { Authorization: this.$store.state.token }
      });
      jwtAxios({
        url: "http://localhost:3000/user/unread",
        method: "post",
        params: {
          userid: id,
          contact: this.$store.state.contact
        }
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
      this.$router.push("/chatting");
    }
  }
};
</script>

<style lang="scss" scoped>
.cell {
  padding: 10px 15px;
  height: 75px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  -webkit-tap-highlight-color: red;
}

.van-cell {
  justify-content: flex-end;
  align-items: center;
  height: 75px;

  .img {
    width: 50px;
    height: 50px;
    margin-left: 5px;
    border-radius: 25px;
    object-fit: cover;
    background-color: #333;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
}
</style>