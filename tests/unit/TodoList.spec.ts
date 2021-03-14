import { shallowMount, createLocalVue, mount } from "@vue/test-utils";
import Vuex, { Store } from "vuex";
import TodoList from "@/views/TodoList.vue";
import mockFilteredTodos from "@/models/fixtures/todos";
import router from "@/router";
import { initialState } from "@/store";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Given TodoList page and filtered todos list data", () => {
  let store: Store<unknown>;
  const deleteAction = jest.fn();

  beforeEach(() => {
    const getters = {
      filteredTodos: () => mockFilteredTodos
    };

    const actions = {
      deleteTodo: deleteAction
    };

    store = new Vuex.Store({
      state: initialState,
      getters,
      actions
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
  });

  describe("When list todos on page", () => {
    test("Then renders each todo title corresponding with data and no more", () => {
      const wrapper = shallowMount(TodoList, { store, localVue });
      const renderedTodos = wrapper.findAll(".todo-title");
      mockFilteredTodos.forEach((todo, index) => {
        expect(renderedTodos.at(index).text()).toBe(todo.title);
      });
      expect(renderedTodos.length).toBe(mockFilteredTodos.length);
    });
  });

  describe("When click on each todo delete option", () => {
    test("Then should call a delete action with corresponding todo id", () => {
      const wrapper = shallowMount(TodoList, { store, localVue });
      const deleteTodoOptions = wrapper.findAll(".delete-todo");
      mockFilteredTodos.forEach(async (todo, index) => {
        await deleteTodoOptions.at(index).trigger("click");
        // the first argument on call is the vuex action commit
        expect(deleteAction).toBeCalledWith(expect.anything(), todo.id);
      });
    });
  });

  describe("When click on each todo edit option", () => {
    test("Then should go to /todos/:id url corresponding", () => {
      const wrapper = mount(TodoList, { store, router });
      const mockPush = jest.fn();
      wrapper.vm.$router.push = mockPush;
      const editTodoOptions = wrapper.findAll(".edit-todo");
      mockFilteredTodos.forEach(async (todo, index) => {
        await editTodoOptions.at(index).trigger("click");
        expect(mockPush).toHaveBeenCalledWith(`todos/${todo.id}`);
      });
    });
  });
});
