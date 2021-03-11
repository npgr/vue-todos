<template>
  <div class="todo-list">
    <div v-for="todo in filteredTodos" :key="todo.id" class="todo-item">
      <div>{{ todo.title }}</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "TodoList",
  components: {},
  computed: {
    ...mapState(["filters"]),
    ...mapGetters(["filteredTodos"])
  }
};
</script>
