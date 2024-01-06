<template>
  <h1>{{ title  }}</h1>
  <h4>{{ newTitle }}</h4>
</template>

<script>
import { computed } from 'vue';

export default {
  props : {
    title : String
  }
  ,
  setup(props){
    const newTitle = computed(
      () =>{
        return props.title + '!!!';
      }
    )
    return {newTitle}
  }
};
</script>

<style scoped></style>
