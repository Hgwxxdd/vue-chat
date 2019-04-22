<template>
  <div>
    <div class="cell">
      <div class="avatar">
        <img :src="Avatar">
      </div>
      <div class="information">
        <div class="triangle"></div>
        <div class="text">{{Message}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
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
      Name: this.name,
      Avatar: this.avatar,
      Message: this.message
    };
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
  // background-color: #333;
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
  background-color: #fff;

  .triangle {
    position: absolute;
    width: 0;
    height: 0;
    border-left: 18px solid transparent;
    border-right: 18px solid transparent;
    border-bottom: 30px solid #fff;
    transform: rotate(-90deg);
    left: -15px;
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
}

.text {
  font-size: 28px;
  margin-left: 24px;
}
</style>