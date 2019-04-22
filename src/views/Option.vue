<template>
  <div>
    <van-cell
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
    </van-cell>
    <van-cell
      icon="manager-o"
      title="账号管理"
      center
      is-link
      large
      @click="hi"
      to="/accountmanage"
    />
    <van-cell
      icon="location-o"
      center
      title="单元格"
      is-link
      value="内容"
    />
    <van-cell
      icon="location-o"
      title="单元格"
      center
      is-link
    />
    <van-cell
      icon="location-o"
      title="退出"
      center
      is-link
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
  justify-content: flex-end;
  align-items: center;
  height: 75px;

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