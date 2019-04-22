<template>
  <div>
    <van-nav-bar
      :left-text="pageName"
      class="navbar"
    >
      <van-icon
        size="20px"
        color="#333"
        name="search"
        slot="right"
        class="icon"
      />
      <van-icon
        size="20px"
        color="#333"
        name="add-o"
        slot="right"
        @click="emitEvent"
      />
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  props: {
    pageName: {
      type: String
    }
  },
  data() {
    return {
      whichPage: this.pageName
    };
  },
  methods: {
    emitEvent() {
      this.$emit("actionSheet");
    }
  }
};
</script>

<style lang="scss" scoped>
.icon {
  margin-right: 25px;
}
.van-nav-bar__text {
  color: #333;
}
</style>