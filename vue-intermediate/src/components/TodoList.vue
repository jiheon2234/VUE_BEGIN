<template>
  <ul>
    <li v-for="(item, idx) in todoItems" :key="idx">
      <span>{{ item }}</span>
      <button @click="removeTodo(item,idx)">삭제</button>
      <button @click="updateTodo(item,idx)">수정</button>
    </li>
  </ul>
</template>

<script>
import { watch } from 'vue';

export default {
  props: ["todoItems"],
  setup(props, context){
    function removeTodo(item,idx){
      context.emit('remove',item,idx)
    }

    watch(props.todoItems, (newval) => {
      console.log(newval)
    })

    function updateTodo(item,idx){
      context.emit('update',item,idx)
    }
    return {removeTodo,updateTodo}
  }
};
</script>

<style scoped></style>
