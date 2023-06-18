<template>
  <div class="container">
    <h1>To-Do List</h1>
    <form @submit.prevent="onSubmit" class="d-flex"><!-- e.preventDefault 대신 submit이벤트 뒤에 .prevent라고 붙이면 같은 기능을 사용한다. -->
      <div class="flex-grow-1">
        <input
          class="form-control"
          type="text"
          v-model="todo"
          placeholder="일정명을 입력해주세요."
        />
      </div>
      <div>
        <button class="btn btn-primary" type="submit">Add</button>
      </div>
    </form>
    {{ todos }}
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const todo = ref("");
    const todos = ref([]);

    const onSubmit = () => {
      console.log(todo.value);
      todos.value.push({ 
        id: Date.now(),
        subject: todo.value,
      });
    };

    return {
      todo,
      onSubmit,
      todos,
    };
  },
};
</script>

<style>
.todo {
  color: red;
}
.flex-grow-1 {
  margin-right: 5px;
}
</style>