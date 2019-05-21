<template>
  <div class="container">
    <!-- 录音提醒 -->
    <div
      class="audio-remind"
      v-if="audioVisible"
    >
      <div class="icon">
        <van-icon
          name="volume-o"
          size="60px"
        ></van-icon>
        <div class="audio-text">
          正在录音中
        </div>
        <div class="audio-choose">
          <van-button
            size="small"
            type="info"
            round
            @click="sendAudio()"
          >发送</van-button>
          <van-button
            size="small"
            round
            @click="undoSend()"
          >取消</van-button>
        </div>
      </div>

    </div>
    <van-nav-bar
      fixed
      title="5jk8bg"
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
            :audio=item.audio
            :file=item.file
            :filename=item.filename
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
            :audio=item.audio
            :file=item.file
            :filename=item.filename
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
        <input
          type="file"
          id="doc"
          @change="postDoc"
        >
      </div>

      <div class="send">
        <button @click="sendMessage()">发送</button>
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
          name="bullhorn-o"
          size="22px"
          @click="addAudio()"
        >
        </van-icon>
        <label for="image">
          <van-icon
            name="photo-o"
            size="22px"
          ></van-icon>
        </label>
        <label for="doc">
          <van-icon
            name="peer-pay"
            size="22px"
          ></van-icon>
        </label>
        <van-icon
          name="smile-o"
          size="22px"
          @click="emojiChoose()"
        ></van-icon>
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
import Recorder, { ENCODE_TYPE } from "recorderx";
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
      image: "",
      audio: "",
      audioFile: "",
      recorder: "",
      audioVisible: false,
      file: "",
      filename: ""
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
    sendAudio() {
      this.audioVisible = false;
      this.recorder.pause();
      var audio = this.recorder.getRecord({
        encodeTo: ENCODE_TYPE.WAV,
        compressible: true
      });
      var reader = new FileReader();
      // var that = this;
      reader.addEventListener("load", () => {
        this.audioFile = reader.result;
        this.sendMessage();
        this.recorder.clear();
      });
      reader.readAsDataURL(audio);

      // this.audioFile = URL.createObjectURL(
      //   this.recorder.getRecord({
      //     encodeTo: ENCODE_TYPE.WAV,
      //     compressible: true
      //   })
      // );
      // this.sendMessage();
      // this.recorder.clear();
    },
    undoSend() {
      this.audioVisible = false;
      this.recorder.clear();
    },
    addAudio() {
      this.audioVisible = true;
      this.$nextTick(() => {
        this.recorder = new Recorder();
        this.recorder.start();
      });
    },
    postImage() {
      var reader = new FileReader();
      var that = this;
      var image = document.querySelector("#image").files[0];
      reader.addEventListener("load", () => {
        that.image = reader.result;
        this.sendMessage();
      });
      reader.readAsDataURL(image);
    },
    postDoc() {
      var reader = new FileReader();
      var that = this;
      var doc = document.querySelector("#doc").files[0];
      this.filename = doc.name;
      reader.addEventListener("load", () => {
        that.file = reader.result;
        this.sendMessage();
      });
      reader.readAsDataURL(doc);
    },
    sendMessage() {
      const socket = io.connect("http://localhost:3000");
      if (
        this.value == "" &&
        this.audioFile == "" &&
        this.image == "" &&
        this.file == ""
      ) {
        console.log("");
      } else {
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
            audio: this.audioFile,
            file: this.file,
            msg: this.value,
            filename: this.filename,
            send_time: Date.now()
          }
        );
      }
      this.value = "";
      this.audioFile = "";
      this.image = "";
      this.file = "";
    },
    addEmoji(item) {
      this.value += item;
      this.emojiVisible = false;
    },
    emojiChoose() {
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

.audio-remind {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 340px;
  background-color: #f0f2f8;

  .icon {
    width: 100%;
  }
  .audio-text {
    margin: 20px 0px;
  }
  .audio-choose {
    display: flex;
    justify-content: space-around;
    width: 80%;
    margin: 0 auto;
  }
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
      margin-left: 15px;
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


