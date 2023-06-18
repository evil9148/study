<template>
  <h1>To-Do List</h1>
  <form>
    <input type="text" v-model="name" />

    <!-- input 이벤트를 통하여 name의 값이 변경이 가능하여 name을 변수로 
  선언한ref의 값을 변경해도 값이 변경이 되어 양방향 바인딩이라고 한다. 
  v-model로 이 기능을 단축하여 사용이 가능하다. 바인딩 이벤트를 대신해주면서
  입력된 값으로 변경시켜주는 역할을 한다. 
  -->
    <button class="btn btn-primary" @:click="onSubmit">click</button>
  </form>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const name = ref("gijun");

    const onSubmit = () => {
      console.log(name.value);
    };

    return {
      name,
      onSubmit,
    };
  },
};
</script>

<style>
.name {
  color: red;
}
</style>