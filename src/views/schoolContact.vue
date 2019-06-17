<template>
  <div>
    <van-nav-bar
      fixed
      title="校园通讯录"
      @click-left="back()"
    >
      <van-icon
        name="arrow-left"
        color="#333"
        slot="left"
      ></van-icon>
    </van-nav-bar>
    <div class="content">
      <van-index-bar>
        <van-index-anchor index="F" />
        <van-collapse v-model="activeNamesF">
          <van-collapse-item title="辅导员">{{tel}}</van-collapse-item>
          <van-collapse-item title="复印室">{{tel}}</van-collapse-item>
        </van-collapse>
        <van-index-anchor index="K" />
        <van-collapse v-model="activeNamesK">
          <van-collapse-item title="宽带维修">{{tel}}</van-collapse-item>
        </van-collapse>
        <van-index-anchor index="M" />
        <van-collapse v-model="activeNamesM">
          <van-collapse-item title="门卫室">{{tel}}</van-collapse-item>
        </van-collapse>
        <van-index-anchor index="S" />
        <van-collapse v-model="activeNamesS">
          <van-collapse-item title="送水师傅">{{tel}}</van-collapse-item>
          <van-collapse-item title="顺丰快递">{{tel}}</van-collapse-item>
          <van-collapse-item title="宿管阿姨">{{tel}}</van-collapse-item>
          <van-collapse-item title="水卡充值">{{tel}}</van-collapse-item>
        </van-collapse>
        <van-index-anchor index="T" />
        <van-collapse v-model="activeNamesT">
          <van-collapse-item title="图书馆">{{tel}}</van-collapse-item>
        </van-collapse>
        <van-index-anchor index="W" />
        <van-collapse v-model="activeNamesW">
          <van-collapse-item title="网络管理">{{tel}}</van-collapse-item>
        </van-collapse>
        <van-index-anchor index="X" />
        <van-collapse v-model="activeNamesX">
          <van-collapse-item title="校医">{{tel}}</van-collapse-item>
          <van-collapse-item title="校车师傅">{{tel}}</van-collapse-item>
        </van-collapse>
        <van-index-anchor index="Y" />
        <van-collapse v-model="activeNamesY">
          <van-collapse-item title="韵达快递">{{tel}}</van-collapse-item>
        </van-collapse>
        <van-index-anchor index="Z" />
        <van-collapse v-model="activeNamesZ">
          <van-collapse-item title="炸鸡饭">{{tel}}</van-collapse-item>
        </van-collapse>
      </van-index-bar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNamesF: [],
      activeNamesK: [],
      activeNamesM: [],
      activeNamesS: [],
      activeNamesT: [],
      activeNamesW: [],
      activeNamesX: [],
      activeNamesY: [],
      activeNamesZ: [],
      tel: "电话: 13424897706"
    };
  },
  methods: {
    back() {
      this.$router.push("/zonecell");
    }
  }
};
</script>

<style lang="scss" scoped>
.van-index-anchor {
  text-align: left;
  background-color: #f8f8f8;
}

.van-cell {
  text-align: left;
}

.van-collapse {
  color: #323233;
  text-align: left;
}

.van-cell__title {
  span {
    color: #323233;
  }
}

.van-collapse-item__content {
  color: #333;
}

.content {
  margin-top: 100px;
}
</style>