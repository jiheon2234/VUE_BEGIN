<template>
  <TodoHeader :title="test_title"/>
  <TodoInput @add="addTodoItem" />
  <TodoList :todoItems="todoItems" @remove="removeTodoItem" @update="updateTodo"/>
</template>

<script>
import { onBeforeMount, onMounted, onUnmounted,  } from "vue";
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import {useTodo} from './hooks/useTodo'
export default {
  components: { TodoHeader, TodoInput, TodoList },
  setup() {
    //DATA

    const {addTodoItem, todoItems,fetchTodos } = useTodo()

    const test_title = "할일 앱"

    //METHODS


 

   // 라이프 사이클 API

   // 라이프사이클API(beforeCreate, created) 와 같은 동작
   console.log('1: setup called')


onBeforeMount(() => {
  console.log("2: oneBeforeMount called");
  todoItems.value = fetchTodos();
});
    onMounted(
      () => console.log('3 : onMounted')
    )

    onUnmounted(
      () => console.log( '4: onUnmounted')
    )


    const removeTodoItem = (item,idx) =>{
      todoItems.value.splice(idx,1);
      localStorage.removeItem(item);
    }


    const updateTodo = (item,idx) =>{
      const myinput = prompt(`${item}의 값을 변경`)
      todoItems.value.splice(idx,1,myinput)
      localStorage.setItem(item,myinput)
    }

    return { todoItems,addTodoItem, removeTodoItem, updateTodo, test_title };
  },
};
</script>

<style scoped></style>
