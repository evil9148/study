<template>
  <div :class="className">
    {{ name }}
  </div>
  <input :type="type" :value="name" /><!-- v-bind 대신 콜론만 찍으면 된다 -->
  <button class="btn btn-primary" @:click="changeName">click</button> <!-- v-on 대신 @를 입력하면 된다. -->
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const name = ref("gijun");
    const type = ref("number");
    const className = ref("name");

    const changeName = () => {
      name.value = "coder";
      type.value = "text";
    };
    return {
      name,
      changeName,
      type,
      className,
    };
  },
};
</script>

<style>
.name {
  color: red;
}
</style>