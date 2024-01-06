import { ref } from "vue";

function useMessage() {
  const message = ref("hello");

  const changeMessage = () => {
    message.value = "hhhhh";
  };

  return { message, changeMessage };
}
export { useMessage };
