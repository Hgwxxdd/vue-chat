<template>
  <div>
    <div
      class="cell"
      @click="click"
    >
      <div class="avatar">
        <img :src="Avatar">
      </div>
      <div class="information">
        <div class="name">{{ name }}请求加宁为好友</div>
        <div class="message">附加消息:{{ Message }}</div>
      </div>
      <div
        class="agree"
        v-if="Message_type == 1"
      >
        <!-- <div class="updated">2008-10-13</div> -->
        <div class="tip">
          <van-button
            size="mini"
            type="info"
            @click="agree"
          >同意</van-button>
          <van-button
            size="mini"
            @click="disagree"
          >拒绝</van-button>
        </div>
      </div>
      <div
        class="agree"
        v-else-if="Message_type == 2"
      >
        <div class="tip">
          <van-button
            size="small"
            disabled
          >已同意</van-button>
        </div>
      </div>
      <div
        class="agree"
        v-else-if="Message_type == 3"
      >
        <div class="tip">
          <van-button
            size="small"
            disabled
          >已拒绝</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String
      // required: true
    },
    message: {
      type: String
      // required: true
    },
    updated: {
      type: String
      // required: true
    },
    avatar: {
      type: String
      // required: true
    },
    message_type: {
      type: String
    }
  },
  data() {
    return {
      Message: this.message,
      Name: this.name,
      Updated: this.updated,
      Avatar: this.avatar,
      Message_type: this.message_type
    };
  },
  watch: {
    message_type: {
      deep: true,
      handler(nv) {
        this.Message_type = nv;
      }
    }
  },
  methods: {
    click() {
      this.$emit("chatting");
    },
    agree() {
      this.$emit("agree");
    },
    disagree() {
      this.$emit("disagree");
    }
  }
};
</script>

<style lang="scss" scoped>
.avatar {
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background-color: #333;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
}

.updated {
  // width: 170px;
  margin-bottom: 20px;
  text-align: center;
}

.unread {
  width: 40px;
  height: 30px;
  border-radius: 15px;
  background-color: #f44;
  color: #fff;
  margin-left: 120px;
}

.information {
  width: 450px;
  height: 100px;
  text-align: left;

  .name {
    margin-left: 20px;
    height: 60px;
    font-size: 24px;
    overflow: hidden;
    line-height: 60px;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .message {
    margin-left: 20px;
    height: 50px;
    font-size: 20px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
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
.cell::after {
  content: "";
  position: absolute;
  pointer-events: none;
  box-sizing: border-box;
  left: 15px;
  right: 0;
  bottom: 0;
  transform: scaleY(0.5);
  border-bottom: 1px solid #ebedf0;
}

.tip {
  display: flex;
}
</style>