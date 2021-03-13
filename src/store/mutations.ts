import { TodoState } from "@/store";

export default {
  changeTitleFilter: (state: TodoState, title: string) => {
    state.filter.title = title;
  },
  changeDoneFilter: (state: TodoState) => {
    state.filter.done = !state.filter.done;
  },
  changeDoneTodo: (state: TodoState, id: number) => {
    const index = state.todos.findIndex(todo => todo.id === id);
    state.todos[index].done = !state.todos[index].done;
  }
};
