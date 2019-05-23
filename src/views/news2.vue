<template>
  <div>
    <van-nav-bar
      title="校园新闻"
      fixed
      @click-left="back()"
    >
      <van-icon
        name="arrow-left"
        color="#333"
        slot="left"
      ></van-icon>
    </van-nav-bar>
    <div class="sender">
      <div class="avatar">
        <img :src="avatar">
      </div>
      <div class="nickname">{{article.author}}</div>
    </div>
    <h2>{{article.title}}</h2>
    <h3>{{article.createdAt}}</h3>
    <div
      class="content"
      v-html="article.content"
    ></div>
    <div class="icon">
      <div class="count">共获得{{count}}个赞</div>
      <div class="option">
        <van-icon
          name="thumb-circle-o"
          size="26px"
          :color="color"
          @click="add()"
        ></van-icon>
      </div>
    </div>
  </div>
</template>

<script>
import { new2 } from "@/utils/data.js";
export default {
  data() {
    return {
      article: new2,
      avatar: new2.avatar,
      color: "#323033",
      count: 0
    };
  },
  methods: {
    back() {
      this.$router.push("/news");
    },
    add() {
      if (this.color == "#323033") {
        this.color = "#1989fa";
        this.count++;
      } else {
        this.color = "#323033";
        this.count--;
      }
    }
  }
};
</script>

<style lang="css" scoped>
h2 {
  padding: 0 30px;
  text-align: center;
}

.sender {
  margin-top: 160px;
  padding: 0 30px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /* background-color: #333; */
}
.sender .avatar {
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background-color: #fff;
}
.sender .avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.sender .nickname {
  height: 80px;
  line-height: 80px;
  margin-left: 20px;
  font-size: 30px;
  font-weight: 600;
}

.content >>> p {
  padding: 0 40px;
  overflow: hidden;
  font-size: 32px;
}

.content >>> p span font {
  font-size: 32px;
  line-height: 100%;
}
.content >>> p font {
  font-size: 32px;
  line-height: 100%;
}

.content >>> p span {
  font-size: 32px;
}

.content >>> p img {
  margin: -20px;
  width: 100%;
  height: auto;
  transform: scale(1.1);
}

.icon {
  margin: 20px 0;
}

.option {
  margin-top: 15px;
}
</style>