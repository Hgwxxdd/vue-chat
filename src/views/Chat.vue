<template>
  <div>
    <navbar
      pageName='聊天'
      @actionSheet="add"
    ></navbar>
    <contact
      v-show="contactList"
      v-for="(item, index) in contactList"
      :name=item.receiver
      :updated=item.date
      :message=item.message
      :avatar=item.avatar
      :key=index
      @chatting="toChatting"
    ></contact>
    <van-actionsheet
      v-model="show"
      :actions="actions"
      @select="onSelect"
    />
    <tabbar :active=0></tabbar>
  </div>
</template>

<script>
import axios from "axios";
import contact from "@/components/contactList.vue";
import tabbar from "@/components/tabbar.vue";
import navbar from "@/components/navbar.vue";
export default {
  components: {
    tabbar,
    navbar,
    contact
  },
  data() {
    return {
      show: false,
      user: "",
      contactList: "",
      actions: [
        {
          name: "创建群聊",
          symbol: 0
        },
        {
          name: "加好友/群",
          symbol: 1
        }
      ]
    };
  },
  mounted() {
    // this.getContact();
  },
  methods: {
    getContact() {
      var jwtAxios = axios.create({
        headers: { Authorization: this.$store.state.token }
      });
      jwtAxios
        .get("http://localhost:3000/user/recentchat")
        .then(res => {
          this.contactList = res.data;
        })
        .catch(err => {
          console.log(err);
          this.$router.push("/login");
        });
    },
    // getContact() {
    //   axios
    //     .get(
    //       "https://easy-mock.com/mock/5cb711a51a800d633780003a/contact/contact"
    //     )
    //     .then(res => {
    //       this.contactList = res.data.data;
    //       console.log(this.contactList);
    //     });
    // },
    onSelect(item) {
      // 点击选项时默认不会关闭菜单，可以手动关闭
      this.show = false;
      if (item.symbol === 1) {
        this.$router.push("/addcontact");
      }
    },
    add() {
      this.show = true;
    },
    toChatting() {
      this.$router.push("/chatting");
    }
  }
};
</script>

<style lang="scss" scoped>
.cell {
  padding: 10px 15px;
  height: 75px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  -webkit-tap-highlight-color: red;
}

.van-cell {
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
</style>