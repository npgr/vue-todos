<template>
  <div class="todo-list">
    <TodoFilter
      :filter="filter"
      :changeTitleFilter="changeTitleFilter"
      :changeDoneFilter="changeDoneFilter"
    />
    <div v-for="todo in filteredTodos" :key="todo.id" class="todo-item">
      <input
        type="checkbox"
        name="done"
        :id="todo.id"
        :checked="todo.done"
        @click="handleTodoDone"
      />
      <div>{{ todo.title }}</div>
      <div class="delete-todo">delete</div>
      <div class="edit-todo">edit</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import TodoFilter from "@/components/TodoFilter.vue";

export default {
  name: "TodoList",
  components: { TodoFilter },
  computed: {
    ...mapState(["filter"]),
    ...mapGetters(["filteredTodos"])
  },
  methods: {
    ...mapActions(["changeTitleFilter", "changeDoneFilter", "changeDoneTodo"]),
    handleTodoDone(e) {
      const id = parseInt(e.target.id);
      this.changeDoneTodo(id);
    }
  }
};
</script>

<style scoped lang="scss">
.todo-list {
  margin-top: 20px;
}
.todo-item {
  display: flex;
  justify-content: center;
}
.delete-todo,
.edit-todo {
  color: lightblue;
  margin-left: 5px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
}
</style>
