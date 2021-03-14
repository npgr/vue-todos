import { ActionContext } from "vuex";
import { TodoState } from "@/store";
import MUTATION_TYPES from "@/store/mutationTypes";

type TodoActionContext = ActionContext<TodoState, unknown>;

export default {
  addTodo: ({ commit }: TodoActionContext, title: string) => {
    commit(MUTATION_TYPES.ADD_TODO, title);
  },
  changeDoneTodo: ({ commit }: TodoActionContext, id: number) => {
    commit(MUTATION_TYPES.CHANGE_DONE_TODO, id);
  },
  changeTitleFilter: ({ commit }: TodoActionContext, title: string) => {
    commit(MUTATION_TYPES.CHANGE_TITLE_FILTER, title);
  },
  changeDoneFilter: ({ commit }: TodoActionContext) => {
    commit(MUTATION_TYPES.CHANGE_DONE_FILTER);
  },
  changeTodoTitle: (
    { commit }: TodoActionContext,
    { id, title }: { id: number; title: string }
  ) => {
    commit(MUTATION_TYPES.CHANGE_TODO_TITLE, { id, title });
  },
  deleteTodo: ({ commit }: TodoActionContext, id: number) => {
    commit(MUTATION_TYPES.DELETE_TODO, id);
  }
};
