<template>
  <div class="container">
    <van-nav-bar
      fixed
      title="标题"
      @click-left="back()"
    >
      <van-icon
        size="18px"
        color="#333"
        name="user-o"
        slot="right"
      />
      <van-icon
        size="18px"
        color="#333"
        name="arrow-left"
        slot="left"
      />
    </van-nav-bar>
    <div class="rolling">
      <div
        class="chatcard"
        v-for="(item, index) in chatRecord"
        :key="index"
      >
        <div
          class="card-right"
          v-if="item.from == userid"
        >
          <chatcardright
            :avatar=item.from_avatar
            :message=item.msg
          ></chatcardright>
        </div>
        <div
          class="card-left"
          v-if="item.from != userid"
        >
          <chatcard
            :avatar=item.from_avatar
            :message=item.msg
          ></chatcard>
        </div>
      </div>
    </div>
    <div class="input-box">
      <van-field v-model="value" />
      <div
        class="icon-right"
        v-if="value"
      >
        <van-icon
          name="smile-o"
          size="24px"
        ></van-icon>
        <van-button
          type="info"
          size="small"
          @click="sendMessage"
        >发送</van-button>
      </div>
      <div
        class="icon-right"
        v-else
      >
        <van-icon
          name="smile-o"
          size="24px"
        ></van-icon>
        <van-icon
          name="add-o"
          size="24px"
        ></van-icon>
      </div>
    </div>
    <div class="dot"></div>
  </div>
</template>

<script>
import chatcard from "@/components/chatCard";
import chatcardright from "@/components/chatCardRight";
import io from "socket.io-client";
import axios from "axios";

export default {
  components: {
    chatcard,
    chatcardright
  },
  data() {
    return {
      value: "",
      userid: "",
      message: "",
      chatRecord: "",
      currentUSer: "",
      changeMsg: ""
    };
  },
  mounted() {
    this.getRecord();
    this.socket();
    // console.log(this.$store.state.chattingOne);
    // console.log(this.$store.state.userid);
  },
  methods: {
    back() {
      this.$router.push("/chat");
    },
    socket() {
      const socket = io.connect("http://localhost:3000");
      socket.on("message", msg => {
        this.chatRecord.push(msg);
      });
    },
    sendMessage() {
      const socket = io.connect("http://localhost:3000");
      socket.emit(
        "message",
        this.$store.state.userid,
        this.$store.state.contact,
        {
          from: this.$store.state.userid,
          to: this.$store.state.contact,
          from_avatar: this.$store.state.avatar,
          from_nickname: this.$store.state.nickname,
          msg: this.value,
          send_time: Date.now()
        }
      );
      this.value = "";
    },
    getRecord() {
      var jwtAxios = axios.create({
        headers: { Authorization: this.$store.state.token }
      });
      jwtAxios
        .get("http://localhost:3000/user/chatting", {
          params: {
            userid: this.$store.state.userid,
            contact: this.$store.state.contact
          }
        })
        .then(res => {
          this.chatRecord = res.data;
          console.log(res.data);
          this.userid = this.$store.state.userid;
          console.log(this.userid);
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

.input-box {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  height: 60px;
  padding: 16px 0;
  background-color: #f0f2f8;

  .icon-right {
    display: flex;
    align-items: center;
    .van-icon {
      width: 50px;
    }

    .van-button {
      width: 50px;
    }
  }
}

.input-box::before {
  content: "";
  position: absolute;
  pointer-events: none;
  box-sizing: border-box;
  left: 1px;
  right: 0;
  z-index: 1;
  top: 0;
  transform: scaleY(0.5);
  border-top: 1px solid #ddd;
}

.van-button--small {
  min-width: 40px;
  padding: 0;
}

.rolling {
  margin-top: 100px;
  margin-bottom: 100px;
}

.card-right {
  .van-cell {
    text-align: right;
  }
}

.van-nav-bar {
  margin-bottom: 10px;
}

.dot {
  height: 1px;
}
</style>