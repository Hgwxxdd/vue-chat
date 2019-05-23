<template>
  <div>
    <div
      class="cell"
      @click="click"
    >
      <div class="card-left">
        <div class="avatar">
          <img :src="Avatar">
        </div>
        <div class="information">
          <div class="name">{{ Name }}</div>
          <div class="a">{{ Message }}</div>
        </div>
      </div>
      <div class="tip">
        <div class="updated">{{ Updated }}</div>
        <div
          v-show="Unread != 0"
          class="unread"
        >{{ Unread }}</div>
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
    unread: {
      type: Number
    }
  },
  data() {
    return {
      Message: this.message,
      Name: this.name,
      Updated: this.updated,
      Avatar: this.avatar,
      Unread: this.unread
    };
  },
  watch: {
    unread: {
      deep: true,
      handler(nv) {
        this.Unread = nv;
      }
    },
    message: {
      deep: true,
      handler(nv) {
        this.Message = nv;
      }
    }
  },
  methods: {
    click() {
      this.$emit("chatting");
    }
  }
};
</script>

<style lang="scss" scoped>
.avatar {
  width: 90px;
  height: 90px;
  margin-left: 10px;
  margin-right: 20px;
  border-radius: 45px;
  background-color: #333;
  object-fit: cover;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}

.updated {
  width: 170px;
  // padding-right: 10px;
  margin-bottom: 20px;
  // margin-right: 30px;
  text-align: left;
}

.unread {
  width: 40px;
  height: 30px;
  border-radius: 15px;
  background-color: #f44;
  color: #fff;

  font-weight: 600;
  line-height: 30px;
}

.information {
  width: 420px;
  height: 100px;
  text-align: left;

  .name {
    height: 60px;
    font-size: 32px;
    overflow: hidden;
    font-weight: 800;
    line-height: 60px;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .message {
    height: 50px;
    font-size: 26px;
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
  justify-content: space-between;
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

.card-left {
  display: flex;
}

.tip {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
}
</style>