<template>
  <div class="filter-todo">
    <input
      type="checkbox"
      name="done"
      :checked="filter.done"
      @click="handleChangeDone"
    />
    <input
      name="title"
      type="text"
      autocomplete="off"
      :value="filter.title"
      @input="handleChangeTitle"
    />
  </div>
</template>

<script>
import { Filter } from "@/models/Filter";

export default {
  name: "TodoFilter",
  props: {
    filter: Filter,
    changeTitleFilter: Function,
    changeDoneFilter: Function
  },
  methods: {
    handleChangeTitle(e) {
      this.changeTitleFilter(e.target.value);
    },
    handleChangeDone() {
      this.changeDoneFilter();
    }
  }
};
</script>

<style scoped>
.filter-todo {
  margin-bottom: 20px;
}

input[name="done"] {
  margin-right: 20px;
}

input[name="title"] {
  width: 200px;
}
</style>
