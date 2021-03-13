export default {
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
