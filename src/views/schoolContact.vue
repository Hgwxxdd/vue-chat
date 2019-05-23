<template>
  <div>
    <van-nav-bar
      title="校园通讯录"
      @click-left="back()"
    >
      <van-icon
        name="arrow-left"
        color="#333"
        slot="left"
      ></van-icon>
    </van-nav-bar>
    <van-index-bar>
      <van-index-anchor index="A" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />

      <van-index-anchor index="B" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
    </van-index-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    back() {
      this.$router.push("/zonecell");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>