import { TodoState } from "@/store";

export default {
  addTodo: (state: TodoState, title: string) => {
    const lastId = state.todos.reduce((acc, cur) => {
      return acc < cur.id ? cur.id : acc;
    }, 0);
    state.todos.push({ id: lastId + 1, title, done: false });
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
