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
  deleteTodo: ({ commit }: any, id: number) => {
    commit("deleteTodo", id);
  }
};
