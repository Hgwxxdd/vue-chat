<template>
  <div>
    <van-cell-group>
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
      <div class="group">
        <van-switch-cell
          border
          v-model="disturb"
          title="消息免打扰"
        />
        <van-switch-cell
          border
          v-model="enter"
          title="回车键发送消息"
        />
      </div>
      <van-cell
        center
        is-link
        title="关于校友圈"
      />
      <van-cell
        center
        is-link
        title="切换账号"
        @click="account()"
      />
      <van-cell
        center
        is-link
        title="退出程序"
        @click="exit()"
      />
    </van-cell-group>
    <van-dialog
      v-model="accountVisible"
      title="提示"
      message="确认切换账号？"
      show-cancel-button
      @confirm="back()"
    >
    </van-dialog>
    <van-dialog
      v-model="exitVisible"
      title="提示"
      message="确认退出程序？"
      show-cancel-button
      @confirm="back()"
    >
    </van-dialog>
    <tabbar :active=3></tabbar>
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
      enter: true,
      disturb: false,
      exitVisible: false,
      accountVisible: false
    };
  },
  methods: {
    back() {
      this.$router.push("/login");
    },
    account() {
      this.accountVisible = true;
    },
    exit() {
      this.exitVisible = true;
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

.group {
  margin: 20px 0;
}
</style>