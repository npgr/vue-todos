import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex, { Store, GetterTree } from "vuex";
import TodoList from "@/views/TodoList.vue";
import mockFilteredTodos from "@/models/fixtures/todos";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("TodoList.vue", () => {
  let getters: GetterTree<unknown, unknown>;
  let store: Store<unknown>;

  beforeEach(() => {
    getters = {
      filteredTodos: () => mockFilteredTodos
    };

    store = new Vuex.Store({
      getters
    });
  });

  it("Renders each todo title corresponding with data", () => {
    const wrapper = shallowMount(TodoList, { store, localVue });
    const renderedTodos = wrapper.findAll(".todo-item");
    mockFilteredTodos.forEach((todo, index) => {
      expect(renderedTodos.at(index).text()).toBe(todo.title);
    });
  });
});
