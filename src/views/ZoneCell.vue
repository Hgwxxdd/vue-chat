<template>
  <div>
    <!-- <van-cell
      is-link
      center
      to="/userinformation"
    >
      <div class="img">
        <img
          src="../assets/1.jpg"
          slot="icon"
        >
      </div>
    </van-cell> -->
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
      to="/zone"
    />
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
    hi() {
      console.log("hi");
    }
  }
};
</script>

<style lang="scss" scoped>
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
</style>