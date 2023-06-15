<template>
  <div class="name">
    {{ name }}
  </div>
  <button class="btn btn-primary" v-on:click="changeName">
    click
    </button>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const name = ref("gijun coder1");

    //   const greeting = (name) => {
    //     return "Hello, " + name;
    //   };

    // const greet = greeting(name)
    const changeName = ()=>{
      name.value = "gijun coder"
    }
    return {
      name,
      changeName,
    };
  },
};
</script>

<style>
.name {
  color: red;
}
</style>