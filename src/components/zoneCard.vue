<template>
  <div class="card">
    <div class="navbar">
      <div class="avatar">
        <img :src="avatar">
      </div>
      <div class="tips">
        <div class="nickname">{{nickname}}</div>
        <div class="updated">{{updated}}</div>
      </div>
    </div>
    <div class="content">{{content}}</div>
    <div class="icon">
      <div class="count">共获得{{count}}个赞</div>
      <div class="option">
        <van-icon
          name="thumb-circle-o"
          size="26px"
          :color="color"
          @click="add()"
        ></van-icon>
        <van-icon
          name="more-o"
          size="26px"
          @click="focus()"
        ></van-icon>
      </div>
    </div>
    <div class="comments">
      <div
        class="text"
        v-show="comments"
        v-for="(item, index) in comments"
        :key=index
      >
        <div class="name">{{item.nickname}}：</div>
        <div class="msg">{{item.comment}}</div>
      </div>
    </div>
    <div class="comment">
      <input
        type="text"
        ref="content"
        v-model="comment"
        placeholder="评论"
      >
    </div>
    <div
      class="send"
      v-show="comment"
    >
      <van-button
        type="info"
        size="mini"
        @click="send()"
      >发送</van-button>
      <van-button
        size="mini"
        @click="cancel()"
      >取消</van-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    avatar: {
      type: String
    },
    nickname: {
      type: String
    },
    updated: {
      type: String
    },
    content: {
      type: String
    },
    like: {
      type: Array
    },
    comments: {
      type: Array
    },
    sender: {
      type: String
    },
    id: {
      type: String
    }
  },
  data() {
    return {
      color: "#323033",
      comment: "",
      count: ""
    };
  },
  mounted() {
    if (this.like.indexOf(localStorage.getItem("userid")) == -1) {
      this.color = "#323033";
    } else {
      this.color = "#1989fa";
    }
    this.count = this.like.length;
  },
  computed: {
    // count: {
    //   get: function() {
    //     return this.like.length;
    //   },
    //   set: function() {
    //     this.count++;
    //   }
    // }
  },
  methods: {
    add() {
      if (this.color == "#323033") {
        this.color = "#1989fa";
        this.count++;
      } else {
        this.color = "#323033";
        this.count--;
      }
      axios({
        url: "http://localhost:3000/user/likeadd",
        method: "post",
        params: {
          user: localStorage.getItem("userid"),
          id: this.id
        }
      })
        .then()
        .catch(err => {
          console.log(err);
        });
    },
    focus() {
      this.$refs.content.focus();
    },
    cancel() {
      this.comment = "";
    },
    send() {
      this.comments.push({
        unique: localStorage.getItem("userid"),
        nickname: localStorage.getItem("nickname"),
        comment: this.comment
      });
      axios({
        method: "post",
        url: "http://localhost:3000/user/zone",
        params: {
          id: this.id,
          sender: this.sender,
          comment: this.comment,
          unique: localStorage.getItem("userid"),
          nickname: localStorage.getItem("nickname")
        }
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
      this.comment = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  background-color: #fff;
  padding-bottom: 20px;
  .navbar {
    display: flex;
    height: 90px;
    padding: 20px 10px 0 20px;
    .avatar {
      width: 90px;
      height: 90px;
      border-radius: 50px;
      background-color: #aaa;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }

    .tips {
      margin-left: 20px;
      background-color: #fff;
      text-align: left;

      .nickname {
        font-size: 28px;
        margin-bottom: 10px;
      }
    }
  }
  .content {
    text-align: left;
    font-size: 28px;
    padding: 20px 10px 20px 20px;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: space-between;

    text-align: right;
    border-bottom: 1px solid #eee;

    .count {
      text-align: left;
      padding-left: 10px;
    }

    .van-icon {
      padding-right: 20px;
    }
  }
  .comment {
    background-color: #fff;
    margin-top: 20px;
    input {
      box-sizing: border-box;
      padding: 0 20px;
      height: 65px;
      width: 97%;
      outline: none;
      border: none;
      background-color: #f0f2f8;
    }
  }
  .send {
    text-align: right;
    padding: 10px 0px;
    .van-button {
      margin-right: 5px;
    }
  }
}

.text {
  display: flex;
  padding-top: 4px;
  height: 40px;
  line-height: 40px;
  font-size: 26px;

  .name {
    color: #1989fa;
  }
}

.comments {
  padding-left: 10px;
}
</style>