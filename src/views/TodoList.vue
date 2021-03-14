<template>
  <div class="todo-list">
    <div class="page-title">Todo List</div>
    <div class="new-todo-btn" @click="handleAddTodo">+</div>
    <TodoFilter
      :filter="filter"
      :changeTitleFilter="changeTitleFilter"
      :changeDoneFilter="changeDoneFilter"
    />

    <div v-for="todo in filteredTodos" :key="todo.id" class="todo-item">
      <div class="todo-title">
        <input
          type="checkbox"
          name="done"
          :id="todo.id"
          :checked="todo.done"
          @click="handleTodoDone($event.target.id)"
        />
        {{ todo.title }}
      </div>
      <div class="opc-group">
        <div
          :id="todo.id"
          class="delete-todo"
          @click="handleDeleteTodo($event.target.id)"
        >
          x
        </div>
        <div
          :id="todo.id"
          class="edit-todo"
          @click="handleEditTodo($event.target.id)"
        >
          edit
        </div>
      </div>
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
    ...mapActions([
      "changeTitleFilter",
      "changeDoneFilter",
      "changeDoneTodo",
      "deleteTodo"
    ]),
    handleTodoDone(id) {
      this.changeDoneTodo(parseInt(id));
    },
    handleDeleteTodo(id) {
      this.deleteTodo(parseInt(id));
    },
    handleEditTodo(id) {
      this.$router.push(`todos/${id}`);
    },
    handleAddTodo() {
      this.$router.push("todos/new");
    }
  }
};
</script>

<style scoped lang="scss">
@import "../style/variables";

.todo-item {
  margin: 0 100px;
  display: flex;
  justify-content: space-between;
  line-height: 28px;
  border-bottom: 1px solid lightgrey;
  padding-right: 5px;
  & .todo-title {
    margin-left: 5px;
    text-align: left;
  }
  & .opc-group {
    display: flex;
  }
}

@media (max-width: $breakpoint-tablet) {
  .todo-item {
    margin: 0 50px;
  }
}

@media (max-width: $breakpoint-mobile) {
  .todo-item {
    margin: 0 20px;
  }
}

.delete-todo,
.edit-todo {
  font-weight: bold;
  color: $primary-color;
  margin-left: 7px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
}
.new-todo {
  cursor: pointer;
  color: blueviolet;
  &:hover {
    text-decoration: underline;
  }
}
.new-todo-btn {
  display: inline-block;
  height: 30px;
  line-height: 30px;
  width: 30px;
  font-size: 1.6em;
  font-weight: bold;
  border-radius: 50%;
  background-color: $primary-color;
  color: white;
  text-align: center;
  cursor: pointer;
  margin-left: 25px;
}
.page-title {
  display: inline-block;
}
</style>
