<template>
  <form action="" @submit.prevent="submitForm">
    <div>
      <label for="userId">ID:</label>
      <input id="userid" type="text" v-model="username" />
    </div>
    <div>
      <label for="password">PW:</label>
      <input id="password" type="text" v-model="password" />
    </div>
    <button type="submit">로그인</button>
  </form>
</template>

<script>
import axios from "axios";
import { ref } from "vue";

export default {
  setup() {
    let username = ref("");
    let password = ref("");

    const submitForm = () => {
      axios.post("https://jsonplaceholder.typicode.com/users", { username: username.value, password: password.value }).then(console.log);
    };

    return { username, password, submitForm };
  },

  methods: {
    logText() {
      this.pa;
    },
  },
  //   data() {
  //     return {
  //       username: "",
  //       password: "",
  //     };
  //   },
  //   methods: {
  //     submitForm() {
  //       const data = {
  //         username: this.username,
  //         password: this.password,
  //       };
  //       axios.post("https://jsonplaceholder.typicode.com/users", data).then(console.log);
  //       console.log("submitted");
  //     },
  //   },
};
</script>

<style scoped></style>
