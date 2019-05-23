<template>
  <div
    class="card"
    @click="news()"
  >
    <div class="navbar">
      <div class="avatar">
        <img :src="avatar">
      </div>
      <div class="tips">
        <div class="nickname">{{nickname}}</div>
        <div class="updated">{{updated}}</div>
      </div>
    </div>
    <div class="content">
      <div class="content-left">
        <div class="title">{{title}}</div>
        <div class="tip">{{tips}}</div>
      </div>
      <div class="content-right">
        <img :src="image">
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
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
    sender: {
      type: String
    },
    id: {
      type: String
    },
    title: {
      type: String
    },
    tips: {
      type: String
    },
    image: {
      type: String
    },
    push: {
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
  mounted() {},
  methods: {
    news() {
      // console.log(this.push);
      this.$router.push(this.push);
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  background-color: #fff;
  padding-bottom: 20px;
  border-bottom: 1px solid #f2f0f8;
  .navbar {
    display: flex;
    height: 50px;
    padding: 20px 10px 0 20px;
    .avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: #fff;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }

    .tips {
      width: 86%;
      margin-left: 20px;
      background-color: #fff;
      text-align: left;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .nickname {
        font-size: 28px;
      }
    }
  }
  .content {
    text-align: left;
    font-size: 28px;
    padding: 10px 10px 20px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .content-left {
      width: 70%;
      .title {
        font-size: 34px;
        font-weight: 600;
        padding: 10px 0;
      }
      .tip {
        overflow: hidden;
        text-overflow: ellipsis;
        word-wrap: break-word;
        word-break: break-all;
      }
    }

    .content-right {
      width: 200px;
      height: 200px;
      background-color: #333;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
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