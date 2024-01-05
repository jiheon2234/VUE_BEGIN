<template>
  <app-header v-bind:appTitle="message" v-on:change="changeMethod" />
</template>

<script>
import AppHeader from "./components/AppHeader.vue";

export default {
  components: {
    AppHeader: AppHeader,
  },
  data() {
    return {
      message: "엡 헤더 컴포넌트",
    };
  },
  methods: {
    changeMethod() {
      this.message = "변경됨";
    },
  },
};
</script>

<style scoped></style>
