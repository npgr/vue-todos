<template>
  <div class="edit-todo">
    <h2>Edit Todo</h2>
    <input name="title" type="text" autocomplete="off" v-model="title" />
    <button @click="handleChangeTitle">Save</button>
    <button @click="handleCancel">Cancel</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "EditTodo",
  data() {
    return {
      title: ""
    };
  },
  computed: {
    ...mapGetters(["getTodoById"])
  },
  methods: {
    ...mapActions(["changeTodoTitle"]),
    handleChangeTitle() {
      const payload = {
        id: parseInt(this.$route.params.id),
        title: this.title
      };
      this.changeTodoTitle(payload);
      this.$router.push("/todos");
    },
    handleCancel() {
      this.$router.push("/todos");
    }
  },
  mounted() {
    const id = parseInt(this.$route.params.id);
    this.title = this.getTodoById(id).title;
  }
};
</script>
