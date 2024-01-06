<template>
  <TodoHeader />
  <TodoInput @add="addTodoItem" />
  <TodoList :todoItems="todoItems" @remove="removeTodoItem" @update="updateTodo"/>
</template>

<script>
import { ref } from "vue";
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";

export default {
  components: { TodoHeader, TodoInput, TodoList },
  setup() {
    //DATA
    const todoItems = ref([]);

    //METHODS
    function fetchTodos() {
      const itemArray = Object.keys(localStorage).map((k) => localStorage.getItem(k));
      return itemArray;
    }

    todoItems.value = fetchTodos();

    function addTodoItem(todo) {
      todoItems.value.push(todo);
      localStorage.setItem(todo, todo);
    }

    const removeTodoItem = (item,idx) =>{
      todoItems.value.splice(idx,1);
      localStorage.removeItem(item);
    }

    const updateTodo = (item,idx) =>{
      const myinput = prompt(`${item}의 값을 변경`)
      todoItems.value.splice(idx,1,myinput)
      localStorage.setItem(item,myinput)
    }

    return { todoItems,addTodoItem, removeTodoItem, updateTodo };
  },
};
</script>

<style scoped></style>
