import { onBeforeMount, ref } from "vue";

function useTodo() {
  //data
  const todoItems = ref([]);

  function fetchTodos() {
    const itemArray = Object.keys(localStorage).map((k) => localStorage.getItem(k));
    return itemArray;
  }

  onBeforeMount(() => {
    console.log("2: oneBeforeMount called");
    todoItems.value = fetchTodos();
  });

  function addTodoItem(todo) {
    todoItems.value.push(todo);
    localStorage.setItem(todo, todo);
  }

  return { todoItems, addTodoItem };
}

export { useTodo };
