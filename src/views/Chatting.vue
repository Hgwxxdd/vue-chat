<template>
  <div class="container">
    <div class="img">
      <img
        src=""
        id="gogogo"
      >
    </div>
    <van-nav-bar
      fixed
      title="标题"
      @click-left="back()"
    >
      <van-icon
        size="18px"
        color="#999"
        name="user-o"
        slot="right"
      />
      <van-icon
        size="18px"
        color="#999"
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
            :image=item.image
          ></chatcardright>
        </div>
        <div
          class="card-left"
          v-if="item.from != userid"
        >
          <chatcard
            :avatar=item.from_avatar
            :message=item.msg
            :image=item.image
          ></chatcard>
        </div>
      </div>
    </div>
    <div class="input-box">
      <div class="input">
        <input
          type="text"
          v-model="value"
        >
        <input
          type="file"
          accept="image/*"
          id="image"
          @change="postImage"
        >
      </div>

      <div class="send">
        <button @click="sendMessage">发送</button>
      </div>
    </div>
    <div class="option">
      <div
        class="emoji-list"
        v-if="emojiVisible"
      >
        <span
          v-for="item in emoji.people"
          :key="item"
          @click="addEmoji(item)"
        >{{item}}</span>
        <span
          v-for="item in emoji.nature"
          :key="item"
          @click="addEmoji(item)"
        >{{item}}</span>
        <span
          v-for="item in emoji.items"
          :key="item"
          @click="addEmoji(item)"
        >{{item}}</span>
        <span
          v-for="item in emoji.place"
          :key="item"
          @click="addEmoji(item)"
        >{{item}}</span>
      </div>
      <div class="icon">
        <van-icon
          name="smile-o"
          size="24px"
          @click="here"
        ></van-icon>
        <label for="image">
          <van-icon
            name="photo-o"
            size="24px"
          ></van-icon>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import io from "socket.io-client";
import chatcard from "@/components/chatCard";
import emoji from "@/utils/emoji";
import chatcardright from "@/components/chatCardRight";

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
      chatRecord: [],
      currentUSer: "",
      changeMsg: "",
      emoji: emoji,
      emojiVisible: false,
      image: {},
      fuck: {}
    };
  },
  mounted() {
    this.getRecord();
    this.socket();
    this.scroll();
  },
  watch: {
    chatRecord: function(val) {
      this.$nextTick(() => {
        window.scrollTo(0, 80 * val.length);
      });
    }
  },
  methods: {
    postImage() {
      var reader = new FileReader();
      var that = this;
      var image = document.querySelector("input[type=file]").files[0];
      reader.addEventListener("load", () => {
        that.image = reader.result;
        this.sendMessage();
      });
      reader.readAsDataURL(image);
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
          image: this.image,
          msg: this.value,
          send_time: Date.now()
        }
      );
      this.value = "";
    },
    addEmoji(item) {
      this.value += item;
      this.emojiVisible = false;
    },
    here() {
      this.emojiVisible = !this.emojiVisible;
    },
    back() {
      this.$router.push("/chat");
    },
    scroll() {
      if (this.chatRecord) {
        window.scrollTo(0, 80 * this.chatRecord.length);
      }
    },
    socket() {
      const socket = io.connect("http://localhost:3000");
      socket.on("message", msg => {
        console.log(msg);
        this.chatRecord.push(msg);
      });
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
  background-color: #fff;
  overflow-y: scroll;
}

.option {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #ccc;
  .icon {
    display: flex;
    align-items: center;
    background-color: #f0f2f8;
    height: 60px;

    label {
      display: flex;
      align-items: center;
    }

    .van-icon {
      margin-left: 10px;
    }
  }
}

.input-box {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 59px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 60px;
  padding: 22px 0 10px 0;
  background-color: #f0f2f8;

  .input {
    width: 76%;
    border-radius: 40px;
    background-color: #fff;
    height: 68px;
    margin-right: 20px;
    margin-left: 20px;
    outline: none;
    input {
      width: 85%;
      margin-top: 5px;
      margin-left: 15px;
      margin-right: 50px;
      font-size: 28px;
      color: #323233;
    }
  }

  .send {
    width: 140px;
    button {
      padding: 16px 38px;
      height: 68px;
      background-color: #1989fa;
      border-radius: 40px;
      color: #fff;
      font-size: 25px;
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
  min-width: 45px;
}

.rolling {
  margin-top: 100px;
  margin-bottom: 150px;
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

.emoji-list {
  display: flex;
  width: 100%;
  height: 300px;
  bottom: 150px;
  position: fixed;
  flex-wrap: wrap;
  overflow-x: scroll;
  background-color: #f0f2f8;
  span {
    width: 82px;
    height: 82px;
    font-size: 45px;
    line-height: 82px;
  }
}
</style>