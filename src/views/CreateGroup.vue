<template>
  <div>
    <van-nav-bar
      title="选择好友"
      left-text="返回"
      fixed
      @click-left="back"
    >
      <van-icon
        name="arrow-left"
        slot="left"
        color="#333"
      />
    </van-nav-bar>
    <div class="checkbox">
      <checkbox
        v-for="(item, index) in list"
        :key="index"
        @choose="checklist"
        :avatar="item.avatar"
        :name="item.user"
      >
      </checkbox>
    </div>
    <footer>
      <van-button
        size="large"
        type="info"
      >立即创建</van-button>
    </footer>
  </div>
</template>

<script>
import axios from "axios";
import checkbox from "@/components/checkbox";
export default {
  components: {
    checkbox
  },
  mounted() {
    this.getContact();
  },
  data() {
    return {
      list: []
    };
  },
  methods: {
    getContact() {
      axios
        .get(
          "https://easy-mock.com/mock/5cb711a51a800d633780003a/contact/getchoose"
        )
        .then(res => {
          this.list = res.data.data;
        });
    },
    // checklist(user) {
    //   console.log("here");
    // },
    back() {
      this.$router.push("/chat");
    }
  }
};
</script>

<style lang="scss" scoped>
.van-checkbox-group {
  margin-top: 100px;
}

footer {
  position: fixed;
  width: 100%;
  bottom: 20px;
}
.van-button {
  width: 300px;
}

.checkbox {
  height: 1180px;
  overflow-y: scroll;
}
</style>