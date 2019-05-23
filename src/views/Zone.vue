<template>
  <div class="container">
    <div class="navbar">
      <van-nav-bar
        fixed
        title="动态列表"
        right-text="发送动态"
        @click-left="back()"
        @click-right="edit()"
      >
        <van-icon
          name="arrow-left"
          color="#333"
          slot="left"
        ></van-icon>
      </van-nav-bar>
    </div>
    <div
      class="card"
      v-for="(item, index) in zoneList"
      :key=index
    >
      <zonecard
        :avatar=item.avatar
        :nickname=item.nickname
        :updated=item.updated
        :like=item.like
        :content=item.content
        :comments=item.comments
        :sender=item.sender
        :id=item._id
      ></zonecard>
    </div>
  </div>
</template>

<script>
import zonecard from "@/components/zoneCard";
import axios from "axios";
export default {
  components: {
    zonecard
  },
  data() {
    return {
      zoneList: []
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios
        .get("http://localhost:3000/user/zone")
        .then(res => {
          this.zoneList = res.data;
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    back() {
      this.$router.push("/zonecell");
    },
    edit() {
      this.$router.push("/zoneedit");
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
  background-color: #f0f2f8;
  overflow: scroll;

  .card {
    margin: 30px 0px;
  }
  .card:nth-child(2) {
    margin-top: 120px;
  }
  .van-nav-bar__text {
    color: #333;
  }
}
</style>