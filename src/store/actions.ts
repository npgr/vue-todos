export default {
  changeTitleFilter: ({ commit }: any, title: string) => {
    commit("changeTitleFilter", title);
  },
  changeDoneFilter: ({ commit }: any) => {
    commit("changeDoneFilter");
  },
  changeDoneTodo: ({ commit }: any, id: number) => {
    commit("changeDoneTodo", id);
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
