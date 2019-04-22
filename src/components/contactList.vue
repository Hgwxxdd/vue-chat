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
        <div class="name">{{ Name }}</div>
        <div class="message">{{ Message }}</div>
      </div>
      <div class="updated">{{ Updated }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    },
    updated: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      Message: this.message,
      Name: this.name,
      Updated: this.updated,
      Avatar: this.avatar
    };
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
  width: 150px;
  height: 100px;
  line-height: 100px;
}

.information {
  width: 450px;
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
</style>