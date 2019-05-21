<template>
  <div class="container">
    <div class="cell">
      <div
        v-if="Image"
        class="image"
      >
        <div class="triangle">
        </div>
        <div class="text"><img :src=Image></div>
      </div>
      <div
        v-if="Message"
        class="information"
      >
        <div class="triangle">
        </div>
        <div class="text">{{Message}}</div>
      </div>
      <div
        v-if="Audio"
        class="information"
      >
        <div class="triangle">
        </div>
        <audio
          :src="Audio"
          controls
        ></audio>
      </div>
      <div
        v-if="File"
        class="file"
      >
        <div class="triangle">
        </div>
        <van-icon
          name="card"
          size="60px"
        ></van-icon>
        <a
          :href="File"
          :download="filename"
        >{{Filename}}</a>
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
      type: String
    },
    image: {
      type: String
    },
    audio: {
      type: String
    },
    file: {
      type: String
    },
    filename: {
      type: String
    }
  },
  data() {
    return {
      Name: this.name,
      Avatar: this.avatar,
      Message: this.message,
      Image: this.image,
      Audio: this.audio,
      File: this.file,
      Filename: this.filename
    };
  }
};
</script>

<style lang="scss" scoped>
.file {
  width: 320px;
  display: flex;
  align-items: center;
  justify-content: flex;
  padding: 6px;
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
    right: 120px;
    top: 20px;
    z-index: -1;
  }

  a {
    width: 100%;
    font-size: 26px;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

audio {
  width: 530px;
  height: 80px;
}

.image {
  .triangle {
    position: absolute;
    width: 0;
    height: 0;
    border-left: 18px solid transparent;
    border-right: 18px solid transparent;
    border-bottom: 30px solid #f0f2f8;
    transform: rotate(90deg);
    right: 120px;
    top: 20px;
    z-index: -1;
  }

  img {
    max-width: 360px;
    max-height: 360px;
    object-fit: fill;
    padding: 20px;
    border-radius: 24px;
    background-color: #f0f2f8;
  }
}

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
  height: 90px;
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
    z-index: -1;
  }
}

.cell {
  position: relative;
  display: flex;
  overflow: hidden;
  align-items: flex-start;
  justify-content: flex-end;
}

.text {
  font-size: 28px;
  margin-left: 24px;
}

.container {
  padding: 15px 0;
}
</style>