import { TodoState } from "@/store";

export default {
  changeTitleFilter: (state: TodoState, title: string) => {
    state.filter.title = title;
  },
  changeDoneFilter: (state: TodoState) => {
    state.filter.done = !state.filter.done;
  },
  changeTodoTitle: (
    state: TodoState,
    { id, title }: { id: number; title: string }
  ) => {
    const index = state.todos.findIndex(todo => todo.id === id);
    state.todos[index].title = title;
  },
  deleteTodo: (state: TodoState, id: number) => {
    const index = state.todos.findIndex(todo => todo.id === id);
    state.todos.splice(index, 1);
  }
};
