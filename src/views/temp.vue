<template>
  <div class="container">
    <!-- <navbar pageName='asdad'></navbar>
    <chatcard
      name="asd"
      avatar="../assets/logo.png"
      message="asdasdas"
    ></chatcard> -->
    <button @click="getData">getdata</button>
    <button @click="insertData">insertData</button>
  </div>
</template>

<script>
import axios from "axios";
// import navbar from "@/components/navbar.vue";
// import chatcard from "@/components/chatCard.vue";
export default {
  components: {
    // navbar,
    // chatcard
  },
  data() {
    return {
      record: ""
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios
        .get("https://easy-mock.com/mock/5cb711a51a800d633780003a/contact/both")
        .then(res => {
          this.record = res.data.data;
          console.log(this.record);
        });
    },
    insertData() {
      axios({
        method: "post",
        url: "http://localhost:3000/user/insert",
        params: {
          message: this.record
        }
      }).then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #f0f2f8;
}

.avatar {
  width: 90px;
  height: 90px;
  border-radius: 45px;
  background-color: #333;
  margin-left: 10px;
  margin-right: 20px;
}

.updated {
  width: 100px;
  height: 100px;
  line-height: 100px;
}

.information {
  width: 500px;
  height: 100px;
  text-align: left;
  background-color: #fff;

  .name {
    height: 60px;
    line-height: 60px;
    font-weight: 800;
    font-size: 32px;
  }
  .message {
    height: 50px;
    font-size: 26px;
  }
}

.cell {
  position: relative;
  display: flex;
  overflow: hidden;
  height: 120px;
  padding: 10px 15px;
  align-items: center;
}
</style>