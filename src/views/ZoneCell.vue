<template>
  <div class="container">
    <van-nav-bar left-text="空间" />
    <div class="group">
      <van-cell-group>
        <van-cell
          icon="fire-o"
          title="校友动态"
          center
          is-link
          to="/zone"
        />
        <van-cell
          icon="new-o"
          title="校园新闻"
          center
          is-link
          to="/news"
        />
        <van-cell
          icon="contact"
          title="校园通讯录"
          center
          is-link
          to="/schoolcontact"
        />
      </van-cell-group>
    </div>
    <div class="group">
      <van-cell-group>
        <van-cell
          icon="search"
          title="搜一搜"
          center
          is-link
          to="/addcontact"
        />
        <van-cell
          icon="eye-o"
          title="热门看点"
          center
          is-link
        />
        <van-cell
          icon="comment-circle-o"
          title="闲聊"
          center
          is-link
        />
      </van-cell-group>
    </div>
    <tabbar :active=2></tabbar>
  </div>
</template>

<script>
import tabbar from "@/components/tabbar.vue";

export default {
  components: {
    tabbar
  },
  data() {
    return {
      show: false,
      checked: true
    };
  },
  methods: {
    hi() {}
  }
};
</script>

<style lang="scss" scoped>
.group:nth-child(3) {
  margin-top: 50px;
}

.van-cell:first-child {
  // justify-content: flex-end;
  // align-items: center;
  // height: 75px;

  .img {
    width: 50px;
    height: 50px;
    margin-left: 5px;
    border-radius: 25px;
    object-fit: cover;
    background-color: #333;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
}
.van-cell {
  text-align: left;
  height: 50px;
}

.van-nav-bar__text {
  color: #333;
}
</style>