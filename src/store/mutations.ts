import { TodoState } from "@/store";
import MUTATION_TYPES from "@/store/mutationTypes";

export default {
  [MUTATION_TYPES.CHANGE_TITLE_FILTER]: (state: TodoState, title: string) => {
    state.filter.title = title;
  },
  [MUTATION_TYPES.CHANGE_DONE_FILTER]: (state: TodoState) => {
    state.filter.done = !state.filter.done;
  },
  [MUTATION_TYPES.ADD_TODO]: (state: TodoState, title: string) => {
    const lastId = state.todos.reduce((acc, cur) => {
      return acc < cur.id ? cur.id : acc;
    }, 0);
    state.todos.push({ id: lastId + 1, title, done: false });
  },
  [MUTATION_TYPES.CHANGE_DONE_TODO]: (state: TodoState, id: number) => {
    const index = state.todos.findIndex(todo => todo.id === id);
    state.todos[index].done = !state.todos[index].done;
  },
  [MUTATION_TYPES.CHANGE_TODO_TITLE]: (
    state: TodoState,
    { id, title }: { id: number; title: string }
  ) => {
    const index = state.todos.findIndex(todo => todo.id === id);
    state.todos[index].title = title;
  },
  [MUTATION_TYPES.DELETE_TODO]: (state: TodoState, id: number) => {
    const index = state.todos.findIndex(todo => todo.id === id);
    state.todos.splice(index, 1);
  }
};
