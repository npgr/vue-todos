<template>
  <div class="filter-todo">
    <label for="title">Todo: </label>
    <input name="title" type="text" autocomplete="off" v-model="filter.title" />
    <label for="done">Done: </label>
    <input type="checkbox" name="done" v-model="filter.done" />
  </div>
</template>

<script>
import { Filter } from "@/models/Filter";

export default {
  name: "TodoFilter",
  props: {
    filter: Filter
  }
};
</script>

<style scoped>
.filter-todo {
  margin-bottom: 20px;
}

label[for="done"] {
  margin-left: 10px;
}
</style>
