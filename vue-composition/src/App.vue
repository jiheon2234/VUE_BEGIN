<template>
  <div>{{ message }}</div>
  <button @click="changeMessage">BTN</button>
</template>

<script>
import { useMessage } from "./hooks/useMessage";
export default {
  setup() {
    const { changeMessage, message } = useMessage();
    //   const msessage = ref("hello");

    //   const changeMessage = () => {
    //     msessage.value = "hhhhh";
    return { message, changeMessage };
  },

  //   return { msessage, changeMessage };
  // },
  //////////////////
  // data() {
  //   return {
  //     msessage: "hello",
  //   };
  // },
  // methods: {
  //   changeMessage() {
  //     this.msessage = "hi";
  //   },
  // },
};
</script>

<style scoped></style>
