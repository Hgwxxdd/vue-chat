<template>
  <div>
    <div class="cell">
      <div class="information">
        <div class="triangle"></div>
        <div
          v-if="Message"
          class="text"
        >{{Message}}</div>
        <div
          v-else
          class="text"
        ><img
            :src=Image
            alt=""
          ></div>
      </div>
      <div class="avatar">
        <img :src="Avatar">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String
    },
    avatar: {
      type: String,
      required: true
    },
    image: {
      type: String
    }
  },
  data() {
    return {
      Name: this.name,
      Avatar: this.avatar,
      Message: this.message,
      Image: this.image
    };
  }
};
</script>

<style lang="scss" scoped>
.avatar {
  width: 90px;
  height: 90px;
  margin-left: 20px;
  margin-right: 10px;
  border-radius: 45px;
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
  height: 80px;
  display: flex;
  margin-left: 4px;
  text-align: left;
  position: relative;
  padding-right: 30px;
  align-items: center;
  border-radius: 24px;
  background-color: #f0f2f8;

  .triangle {
    position: absolute;
    width: 0;
    height: 0;
    border-left: 18px solid transparent;
    border-right: 18px solid transparent;
    border-bottom: 30px solid #f0f2f8;
    transform: rotate(90deg);
    right: -15px;
    top: 10px;
  }
}

.cell {
  position: relative;
  display: flex;
  overflow: hidden;
  height: 120px;
  padding: 10px 15px;
  align-items: center;
  justify-content: flex-end;
}

.text {
  font-size: 28px;
  margin-left: 24px;
}
</style>