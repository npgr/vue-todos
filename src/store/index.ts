import Vue from "vue";
import Vuex from "vuex";
import { Todo } from "@/models/Todo";
import { Filter } from "@/models/Filter";
import { getters } from "@/store/getters";

Vue.use(Vuex);

export interface TodoState {
  filter: Filter;
  todos: Todo[];
}

const initialState: TodoState = {
  filter: {
    title: "",
    done: false
  },
  todos: [
    {
      id: 1,
      title: "do my first todo",
      done: false,
      editing: false
    },
    {
      id: 2,
      title: "do my second todo",
      done: false,
      editing: false
    }
  ]
};

export default new Vuex.Store<TodoState>({
  state: initialState,
  getters: getters,
  mutations: {},
  actions: {},
  modules: {}
});
