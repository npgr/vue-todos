export default {
  addTodo: ({ commit }: any, title: string) => {
    commit("addTodo", title);
  },
  changeTodoTitle: (
    { commit }: any,
    { id, title }: { id: number; title: string }
  ) => {
    commit("changeTodoTitle", { id, title });
  },
  deleteTodo: ({ commit }: any, id: number) => {
    commit("deleteTodo", id);
  }
};
