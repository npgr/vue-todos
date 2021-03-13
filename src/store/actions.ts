export default {
  changeTitleFilter: ({ commit }: any, title: string) => {
    commit("changeTitleFilter", title);
  },
  changeDoneFilter: ({ commit }: any) => {
    commit("changeDoneFilter");
  },
  changeDoneTodo: ({ commit }: any, id: number) => {
    commit("changeDoneTodo", id);
  }
};
