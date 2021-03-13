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
          @click="handleTodoDone"
        />
        {{ todo.title }}
      </div>
      <div class="opc-group">
        <div :id="todo.id" class="delete-todo" @click="handleDeleteTodo">
          x
        </div>
        <div :id="todo.id" class="edit-todo" @click="handleEditTodo">
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
    handleTodoDone(e) {
      const id = parseInt(e.target.id);
      this.changeDoneTodo(id);
    },
    handleDeleteTodo(e) {
      const id = parseInt(e.target.id);
      this.deleteTodo(id);
    },
    handleEditTodo(e) {
      this.$router.push(`todos/${e.target.id}`);
    },
    handleAddTodo() {
      this.$router.push("todos/new");
    }
  }
};
</script>

<style scoped lang="scss">
.todo-list {
  margin-top: 20px;
}

.todo-item {
  margin-left: 100px;
  margin-right: 100px;
  display: flex;
  justify-content: space-between;
  line-height: 28px;
  border-bottom: 1px solid lightgrey;
  & .todo-title {
    margin-left: 5px;
    width: 200px;
    text-align: left;
  }
  & .opc-group {
    display: flex;
  }
}

.delete-todo,
.edit-todo {
  font-size: 1.2em;
  font-weight: bold;
  color: #2196f3;
  margin-left: 5px;
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
  height: 35px;
  line-height: 35px;
  width: 35px;
  font-size: 1.8em;
  font-weight: bold;
  border-radius: 50%;
  background-color: #2196f3;
  color: white;
  text-align: center;
  cursor: pointer;
  margin-left: 25px;
}
.page-title {
  display: inline-block;
}
</style>
