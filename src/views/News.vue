<template>
  <div class="container">
    <van-nav-bar
      title="校园新闻"
      @click-left="back()"
    >
      <van-icon
        name="arrow-left"
        color="#333"
        slot="left"
      ></van-icon>
    </van-nav-bar>
    <div class="carousel">
      <van-swipe :autoplay="5000">
        <van-swipe-item
          v-for="(image, index) in images"
          :key="index"
        >
          <img :src="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="content">
      <newscard
        v-for="(item, index) in news"
        :title=item.title
        :nickname=item.author
        :updated=item.createdAt
        :tips=item.tips
        :push=item.push
        :avatar=item.avatar
        :key=index
        :image=item.image
      ></newscard>
    </div>
  </div>
</template>

<script>
import newscard from "@/components/newsCard.vue";
import { news } from "@/utils/data.js";
export default {
  components: {
    newscard
  },
  data() {
    return {
      news: news,
      images: [
        "http://www.ccswust.edu.cn/ewebeditor/uploadfile/2019/05/20/20190520103216700002.png",
        "http://www.ccswust.edu.cn/ewebeditor/uploadfile/2019/05/20/20190520103216511001.png",
        "http://www.ccswust.edu.cn/ewebeditor/uploadfile/2019/05/15/20190515201532708006.png",
        "http://www.ccswust.edu.cn/ewebeditor/uploadfile/2019/05/20/20190520170054430001.png"
      ]
    };
  },
  methods: {
    back() {
      this.$router.push("/zoneCell");
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: scroll;
}

.content {
  margin-top: 20px;
}

.carousel {
  width: 100%;
  img {
    width: 100%;
    height: 420px;
    object-fit: cover;
    object-position: 50% 50%;
  }
}
</style>