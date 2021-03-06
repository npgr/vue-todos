<template>
  <div class="edit-todo">
    <div class="page-title">{{ mode }} Todo</div>
    <input name="title" type="text" autocomplete="off" v-model="todo.title" />
    <div v-if="requiredValue" class="title-error">* Required Value</div>
    <div class="btn-group">
      <button @click="handleSave" :disabled="requiredValue">Save</button>
      <button @click="handleCancel">Cancel</button>
    </div>
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
    ...mapGetters(["getTodoById"]),
    requiredValue() {
      return !this.todo.title.trim();
    }
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
        const todo = this.getTodoById(id);
        !todo && this.$router.push("/todos");
        this.todo = { ...todo };
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "../style/variables";

.page-title {
  margin-bottom: 40px;
}
.btn-group {
  margin-top: 30px;
  align-content: center;
  & button {
    min-width: 150px;
    background-color: $primary-color;
    padding: 7px;
    color: white;
    border: none;
    cursor: pointer;
    &:first-child {
      margin-right: 30px;
    }
    &:disabled {
      background-color: lightgrey;
      cursor: default;
    }
  }
}
input[name="title"] {
  width: 700px;
}

.title-error {
  margin-top: 3px;
  color: $error-color;
  font-size: 14px;
}

@media (max-width: $breakpoint-tablet) {
  input[name="title"] {
    width: 400px;
  }

  .btn-group button {
    min-width: 120px;
  }
}

@media (max-width: $breakpoint-mobile) {
  input[name="title"] {
    width: 250px;
  }

  .btn-group button {
    min-width: 90px;
    &:first-child {
      margin-right: 15px;
    }
  }
}
</style>
