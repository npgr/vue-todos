<template>
  <div class="edit-todo">
    <h2>{{ mode }} Todo</h2>
    <input name="title" type="text" autocomplete="off" v-model="todo.title" />
    <button @click="handleSave">Save</button>
    <button @click="handleCancel">Cancel</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

const MODE = {
  New: "New",
  Edit: "Edit"
};

export default {
  name: "EditTodo",
  data() {
    return {
      mode: MODE.Edit,
      todo: {
        id: 0,
        title: ""
      }
    };
  },
  computed: {
    ...mapGetters(["getTodoById"])
  },
  methods: {
    ...mapActions(["changeTodoTitle", "addTodo"]),
    handleSave() {
      this.mode === MODE.Edit
        ? this.changeTodoTitle(this.todo)
        : this.addTodo(this.todo.title);
      this.$router.push("/todos");
    },
    handleCancel() {
      this.$router.push("/todos");
    }
  },
  mounted() {
    if (!this.$route.params.id) {
      this.mode = MODE.New;
    } else {
      this.mode = MODE.Edit;
      const id = parseInt(this.$route.params.id);
      if (isNaN(id)) {
        this.$router.push("/todos");
      } else {
        this.todo = this.getTodoById(id);
        !this.todo && this.$router.push("/todos");
      }
    }
  }
};
</script>
