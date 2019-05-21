<template>
  <div
    class="cell"
    @click="click"
  >
    <div class="avatar">
      <img :src="avatar">
    </div>
    <div class="message">
      <div class="name">{{nickname}}({{unique}})</div>
      <div class="basic">
        <div class="gender">{{gender == 0 ? "女":"男"}}</div>
        <div class="age">{{age}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    age: {
      type: String
    },
    avatar: {
      type: String
    },
    unique: {
      type: String
    },
    gender: {
      type: String
    },
    nickname: {
      type: String
    }
  },
  data() {
    return {
      Gender: this.gender
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

.cell {
  display: flex;
  align-items: center;
  height: 120px;
  padding: 10px 15px;
  // background-color: #ccc;

  .message {
    .name {
      margin-bottom: 14px;
    }
  }
  .basic {
    display: flex;
    align-items: center;

    .age {
      margin-left: 20px;
      height: 30px;
      line-height: 30px;
    }
    .gender {
      height: 30px;
      line-height: 30px;
    }
  }
}
</style>