import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import { Todo } from "@/models/Todo";
import { Filter } from "@/models/Filter";
import getters from "@/store/getters";
import mutations from "@/store/mutations";
import actions from "@/store/actions";

Vue.use(Vuex);

export interface TodoState {
  filter: Filter;
  todos: Todo[];
}

export const initialState: TodoState = {
  filter: {
    title: "",
    done: false
  },
  todos: []
};

const vuexLocal = new VuexPersistence<TodoState>({
  key: "vue-todos",
  storage: window.localStorage
});

const store = new Vuex.Store<TodoState>({
  state: initialState,
  getters: getters,
  mutations: mutations,
  actions: actions,
  modules: {},
  plugins: [vuexLocal.plugin]
});

export default store;
